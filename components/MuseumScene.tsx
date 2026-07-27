import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Section } from '../types';

interface MuseumSceneProps {
  activeSection: Section;
}

interface RoomDefinition {
  section: Section;
  label: string;
  accent: number;
  images: string[];
}

const ROOM_WIDTH = 18;

const ROOMS: RoomDefinition[] = [
  {
    section: Section.ABOUT,
    label: 'About',
    accent: 0x58a6ff,
    images: [
      'imgs/profilephoto260616.avif',
      'imgs/museum/kaist-visit.jpg',
      'imgs/museum/mm-2025.jpg'
    ]
  },
  {
    section: Section.PUBLICATIONS,
    label: 'Publications',
    accent: 0xf4c86b,
    images: [
      'imgs/paper_imgs/MM25_img.png',
      'imgs/paper_imgs/UIST25_img.png',
      'imgs/paper_imgs/MM24_1_img.png'
    ]
  },
  {
    section: Section.CV,
    label: 'Curriculum Vitae',
    accent: 0x76d7b2,
    images: [
      'imgs/profilephoto260616.avif',
      'imgs/paper_imgs/AAAI_img.png',
      'imgs/museum/chi-2025.jpg'
    ]
  },
  {
    section: Section.HARDWARE,
    label: 'Hardware',
    accent: 0xff8f70,
    images: [
      'imgs/hardware/hololens.webp',
      'imgs/hardware/Shimmer3-GSR.jpg',
      'imgs/hardware/oxyzen.png'
    ]
  },
  {
    section: Section.GALLERY,
    label: 'Gallery',
    accent: 0xc49cff,
    images: [
      'imgs/museum/mm-2025.jpg',
      'imgs/museum/mm-2024.jpg',
      'imgs/museum/icvrv-2019.jpg'
    ]
  },
  {
    section: Section.RECOMMENDATIONS,
    label: 'Recommendations',
    accent: 0x8dd36f,
    images: [
      'imgs/icon/language_learn/chatgpt_live_voice.webp',
      'imgs/icon/language_learn/hellotalk_chatroom.avif',
      'imgs/icon/language_learn/hilokal_chatroom.svg'
    ]
  }
];

const makeLabelTexture = (room: RoomDefinition, index: number) => {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  if (!context) return null;

  context.fillStyle = '#11151b';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = `#${room.accent.toString(16).padStart(6, '0')}`;
  context.fillRect(0, 0, 18, canvas.height);
  context.fillStyle = '#aeb7c4';
  context.font = '500 30px Inter, Arial, sans-serif';
  context.fillText(`ROOM ${String(index + 1).padStart(2, '0')}`, 62, 72);
  context.fillStyle = '#f6f3eb';
  context.font = '700 74px Inter, Arial, sans-serif';
  context.fillText(room.label, 62, 168);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
};

const MuseumScene: React.FC<MuseumSceneProps> = ({ activeSection }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeIndexRef = useRef(Math.max(0, ROOMS.findIndex((room) => room.section === activeSection)));

  useEffect(() => {
    activeIndexRef.current = Math.max(0, ROOMS.findIndex((room) => room.section === activeSection));
  }, [activeSection]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x07090d);
    scene.fog = new THREE.FogExp2(0x07090d, 0.028);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance'
      });
    } catch {
      canvas.dataset.webgl = 'unavailable';
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 180);
    camera.position.set(0, 3.15, 9.3);

    const world = new THREE.Group();
    scene.add(world);

    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x10141a,
      metalness: 0.58,
      roughness: 0.28
    });
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(ROOM_WIDTH * ROOMS.length + 12, 26),
      floorMaterial
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.set((ROOM_WIDTH * (ROOMS.length - 1)) / 2, 0, 1.8);
    floor.receiveShadow = true;
    world.add(floor);

    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(ROOM_WIDTH * ROOMS.length + 12, 26),
      new THREE.MeshStandardMaterial({ color: 0x161a20, roughness: 0.94 })
    );
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.set((ROOM_WIDTH * (ROOMS.length - 1)) / 2, 8.8, 1.8);
    world.add(ceiling);

    const grid = new THREE.GridHelper(ROOM_WIDTH * ROOMS.length + 12, 54, 0x5e6a78, 0x28303a);
    grid.position.set((ROOM_WIDTH * (ROOMS.length - 1)) / 2, 0.012, 1.8);
    grid.material.transparent = true;
    grid.material.opacity = 0.2;
    world.add(grid);

    scene.add(new THREE.HemisphereLight(0xd9e7ff, 0x15110e, 1.35));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
    keyLight.position.set(-5, 12, 9);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    scene.add(keyLight);

    const textureLoader = new THREE.TextureLoader();
    const textures: THREE.Texture[] = [];
    const rotatingObjects: THREE.Object3D[] = [];
    const labelTextures: THREE.Texture[] = [];
    const baseUrl = new URL('.', window.location.href);

    const loadTexture = (path: string) => {
      const texture = textureLoader.load(new URL(path, baseUrl).toString());
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      textures.push(texture);
      return texture;
    };

    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0xd8d4ca,
      roughness: 0.88,
      metalness: 0.02
    });
    const darkMaterial = new THREE.MeshStandardMaterial({
      color: 0x11151a,
      roughness: 0.55,
      metalness: 0.42
    });

    ROOMS.forEach((room, roomIndex) => {
      const roomX = roomIndex * ROOM_WIDTH;
      const roomGroup = new THREE.Group();
      roomGroup.position.x = roomX;
      world.add(roomGroup);

      const backWall = new THREE.Mesh(new THREE.BoxGeometry(16.8, 8.2, 0.35), wallMaterial);
      backWall.position.set(0, 4.1, -5.25);
      backWall.receiveShadow = true;
      roomGroup.add(backWall);

      [-8.45, 8.45].forEach((x) => {
        const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.55, 8.7, 1.1), darkMaterial);
        pillar.position.set(x, 4.35, -4.8);
        pillar.castShadow = true;
        roomGroup.add(pillar);
      });

      const bench = new THREE.Mesh(
        new THREE.BoxGeometry(4.2, 0.32, 1.1),
        new THREE.MeshStandardMaterial({ color: 0x31261f, roughness: 0.52, metalness: 0.08 })
      );
      bench.position.set(0, 0.75, 2.35);
      bench.castShadow = true;
      bench.receiveShadow = true;
      roomGroup.add(bench);

      [-1.7, 1.7].forEach((x) => {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.72, 0.78), darkMaterial);
        leg.position.set(x, 0.36, 2.35);
        leg.castShadow = true;
        roomGroup.add(leg);
      });

      const labelTexture = makeLabelTexture(room, roomIndex);
      if (labelTexture) {
        labelTextures.push(labelTexture);
        const label = new THREE.Mesh(
          new THREE.PlaneGeometry(5.25, 1.3),
          new THREE.MeshBasicMaterial({ map: labelTexture, toneMapped: false })
        );
        label.position.set(-4.95, 7.05, -5.03);
        roomGroup.add(label);
      }

      room.images.forEach((imagePath, imageIndex) => {
        const frameX = (imageIndex - 1) * 4.65;
        const portrait = imagePath.includes('profilephoto') || imagePath.includes('hellotalk') || imagePath.includes('hilokal');
        const frameWidth = portrait ? 2.45 : 3.65;
        const frameHeight = portrait ? 3.45 : 2.45;

        const frame = new THREE.Mesh(
          new THREE.BoxGeometry(frameWidth + 0.28, frameHeight + 0.28, 0.18),
          new THREE.MeshStandardMaterial({
            color: room.accent,
            roughness: 0.34,
            metalness: 0.64
          })
        );
        frame.position.set(frameX, portrait ? 3.65 : 3.55, -4.92);
        frame.castShadow = true;
        roomGroup.add(frame);

        const image = new THREE.Mesh(
          new THREE.PlaneGeometry(frameWidth, frameHeight),
          new THREE.MeshBasicMaterial({
            map: loadTexture(imagePath),
            color: 0xffffff,
            toneMapped: false
          })
        );
        image.position.set(frameX, portrait ? 3.65 : 3.55, -4.81);
        roomGroup.add(image);

        const spotlight = new THREE.SpotLight(0xfff4dc, 11, 12, 0.42, 0.55, 1.35);
        spotlight.position.set(frameX, 7.5, -1.2);
        spotlight.target.position.set(frameX, 3.45, -4.75);
        spotlight.castShadow = false;
        roomGroup.add(spotlight, spotlight.target);
      });

      const accentMaterial = new THREE.MeshPhysicalMaterial({
        color: room.accent,
        roughness: 0.2,
        metalness: 0.62,
        transmission: 0.08,
        clearcoat: 0.9,
        clearcoatRoughness: 0.12,
        emissive: new THREE.Color(room.accent).multiplyScalar(0.08)
      });
      const sculpture = new THREE.Mesh(
        new THREE.TorusKnotGeometry(0.7, 0.18, 96, 14, 2, 3),
        accentMaterial
      );
      sculpture.position.set(0, 1.95, 0.1);
      sculpture.castShadow = true;
      rotatingObjects.push(sculpture);
      roomGroup.add(sculpture);

      const pedestal = new THREE.Mesh(
        new THREE.CylinderGeometry(0.78, 0.92, 1.25, 32),
        new THREE.MeshStandardMaterial({ color: 0xbcb7ad, roughness: 0.72 })
      );
      pedestal.position.set(0, 0.64, 0.1);
      pedestal.castShadow = true;
      pedestal.receiveShadow = true;
      roomGroup.add(pedestal);
    });

    const dustGeometry = new THREE.BufferGeometry();
    const dustCount = 460;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let index = 0; index < dustCount; index += 1) {
      dustPositions[index * 3] = Math.random() * ROOM_WIDTH * ROOMS.length - 5;
      dustPositions[index * 3 + 1] = Math.random() * 8.5 + 0.25;
      dustPositions[index * 3 + 2] = Math.random() * 18 - 7;
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dust = new THREE.Points(
      dustGeometry,
      new THREE.PointsMaterial({
        color: 0xcfd8e7,
        size: 0.028,
        transparent: true,
        opacity: 0.42,
        depthWrite: false
      })
    );
    scene.add(dust);

    const pointer = new THREE.Vector2();
    const cameraTarget = new THREE.Vector3();
    const lookTarget = new THREE.Vector3();
    const clock = new THREE.Clock();
    let animationFrame = 0;
    let isVisible = !document.hidden;

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(width, height, false);
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };

    const render = () => {
      const elapsed = clock.getElapsedTime();
      const roomX = activeIndexRef.current * ROOM_WIDTH;
      cameraTarget.set(
        roomX + (reducedMotion ? 0 : pointer.x * 0.42),
        3.25 + (reducedMotion ? 0 : pointer.y * -0.12),
        9.2
      );
      lookTarget.set(roomX + (reducedMotion ? 0 : pointer.x * 0.16), 3.05, -2.15);

      if (reducedMotion) {
        camera.position.copy(cameraTarget);
      } else {
        camera.position.lerp(cameraTarget, 0.045);
      }
      camera.lookAt(lookTarget);

      if (!reducedMotion) {
        rotatingObjects.forEach((object, index) => {
          object.rotation.y = elapsed * 0.28 + index * 0.36;
          object.rotation.x = Math.sin(elapsed * 0.35 + index) * 0.12;
          object.position.y = 1.95 + Math.sin(elapsed * 0.65 + index) * 0.06;
        });
        dust.rotation.y = elapsed * 0.004;
      }

      if (isVisible) renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(render);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);
    render();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      textures.forEach((texture) => texture.dispose());
      labelTextures.forEach((texture) => texture.dispose());
      dustGeometry.dispose();
      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;
        object.geometry.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => material.dispose());
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 bg-[#07090d]" aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" data-museum-canvas="true" />
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.68)]" />
    </div>
  );
};

export default MuseumScene;
