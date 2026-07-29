import React, { useEffect, useMemo, useState } from 'react';
import { Activity, BookOpen, Calendar, Cpu, DollarSign, ExternalLink, Eye, Link2 } from 'lucide-react';
import PageHeader from '../PageHeader';

type HardwareCategory = 'HMD & Glass' | 'PPG & GSR' | 'EEG & IMU';

interface HardwareLink {
  label: string;
  url: string;
}

interface HardwareDevice {
  id: string;
  name: string;
  category: HardwareCategory;
  image: string;
  imageAlt: string;
  price: string;
  release: string;
  sensors: string[];
  notes: string[];
  officialTutorials: HardwareLink[];
  communityTutorials: HardwareLink[];
  sources: HardwareLink[];
}

const VISITOR_BADGE =
  'https://visitor-badge.laobi.icu/badge?page_id=simon-pei.academic-homepage.hardware&left_text=Hardware%20views';

const HARDWARE_DEVICES: HardwareDevice[] = [
  {
    id: 'hololens-2',
    name: 'Microsoft HoloLens 2',
    category: 'HMD & Glass',
    image: 'imgs/optimized/hardware/hololens.webp',
    imageAlt: 'Microsoft HoloLens 2 exploded view',
    price: 'Historical launch price USD 3,500; production has ended and support continues in maintenance mode.',
    release: 'Announced Feb 24, 2019; shipping began Nov 7, 2019.',
    sensors: [
      '4 visible-light tracking cameras',
      '2 IR eye-tracking cameras',
      'ToF depth sensor',
      'IMU, 8MP PV camera, microphone array'
    ],
    notes: ['Hand tracking, eye tracking, voice input, 6DoF, spatial mapping, and mixed reality capture.'],
    officialTutorials: [
      { label: 'HoloLens 2 hardware', url: 'https://learn.microsoft.com/en-us/hololens/hololens2-hardware' },
      { label: 'MRTK3 overview', url: 'https://learn.microsoft.com/en-us/windows/mixed-reality/mrtk-unity/mrtk3-overview/' },
      { label: 'MixedRealityToolkit-Unity', url: 'https://github.com/MixedRealityToolkit/MixedRealityToolkit-Unity' },
      { label: 'HoloLens2ForCV samples', url: 'https://github.com/microsoft/HoloLens2ForCV' }
    ],
    communityTutorials: [
      { label: 'psiUnity multimodal streaming', url: 'https://github.com/sailgt/psiUnity' },
      { label: 'HoloLens subreddit', url: 'https://www.reddit.com/r/HoloLens/' },
      { label: 'OpenXR + MRTK search', url: 'https://www.youtube.com/results?search_query=HoloLens+2+MRTK3+Unity+OpenXR+tutorial' }
    ],
    sources: [
      { label: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/hololens/hololens2-hardware' },
      { label: 'The Verge support news', url: 'https://www.theverge.com/2024/10/1/24259866/microsoft-hololens-2-discontinuation-support' }
    ]
  },
  {
    id: 'xreal-air-2-ultra',
    name: 'XREAL Air 2 Ultra',
    category: 'HMD & Glass',
    image: 'imgs/optimized/hardware/xreal-air-2-ultra.webp',
    imageAlt: 'XREAL Air 2 Ultra product render',
    price: 'Launch price USD 699; Japan official store JPY 99,800.',
    release: 'Announced at CES on Jan 7, 2024; supply began around Mar 2024.',
    sensors: [
      'Dual 3D environment sensors',
      'IMU and 6DoF tracking',
      'Hand and head tracking',
      'Plane, image, depth mesh, and spatial anchor support'
    ],
    notes: ['1920 x 1080 per eye, up to 120Hz, 52 degree FOV, about 83g, built-in speakers and microphone.'],
    officialTutorials: [
      { label: 'Getting Started with XREAL SDK', url: 'https://docs.xreal.com/Getting%20Started%20with%20XREAL%20SDK' },
      { label: 'Sample Code', url: 'https://docs.xreal.com/Sample%20Code' },
      { label: 'Camera', url: 'https://docs.xreal.com/Camera/Camera' },
      { label: 'Plane Detection', url: 'https://docs.xreal.com/Plane%20Detection' },
      { label: 'Image Tracking', url: 'https://docs.xreal.com/Image%20Tracking/intro' },
      { label: 'Depth Mesh', url: 'https://docs.xreal.com/Depth%20Mesh/NormalMesh' },
      { label: 'Spatial Anchor', url: 'https://docs.xreal.com/Spatial%20Anchor/intro' },
      { label: 'MRTK3 Integration', url: 'https://docs.xreal.com/MRTK3_Integration' }
    ],
    communityTutorials: [
      { label: 'XREAL Dev GitHub', url: 'https://github.com/XREAL-Dev' },
      { label: 'XREAL Discord', url: 'https://discord.gg/xreal' },
      { label: 'r/Xreal', url: 'https://www.reddit.com/r/Xreal/' }
    ],
    sources: [
      { label: 'XREAL Developer', url: 'https://developer.xreal.com/' },
      { label: 'XREAL Japan store', url: 'https://jp.shop.xreal.com/products/xreal-air-2-ultra' }
    ]
  },
  {
    id: 'xreal-1s',
    name: 'XREAL 1S',
    category: 'HMD & Glass',
    image: 'imgs/optimized/hardware/xreal-1s.webp',
    imageAlt: 'XREAL 1S product render',
    price: 'US official store USD 449; Japan reference JPY 67,980.',
    release: 'First shown at XR Kaigi on Dec 1, 2025; Japan shipment Jan 2026; CES 2026 global showcase.',
    sensors: [
      'XREAL X1 spatial computing chip',
      '3DoF spatial display',
      '2D-to-3D conversion',
      'Microphone array; pairs with XREAL Eye for 6DoF'
    ],
    notes: ['Sony Micro-OLED, 1200P, 120Hz, up to 700 nits, 52 degree FOV, Bose-tuned audio.'],
    officialTutorials: [
      { label: 'XREAL 1S product page', url: 'https://www.xreal.com/1s/' },
      { label: 'XREAL SDK start', url: 'https://docs.xreal.com/Getting%20Started%20with%20XREAL%20SDK' },
      { label: 'SDK release notes', url: 'https://docs.xreal.com/Release%20Note/Release%20Note' },
      { label: 'Camera docs', url: 'https://docs.xreal.com/Camera/Camera' }
    ],
    communityTutorials: [
      { label: 'XREAL Dev GitHub', url: 'https://github.com/XREAL-Dev' },
      { label: 'r/Xreal', url: 'https://www.reddit.com/r/Xreal/' }
    ],
    sources: [
      { label: 'XREAL 1S', url: 'https://www.xreal.com/1s/' },
      { label: 'XREAL shop', url: 'https://www.xreal.com/shop/xreal-1s' }
    ]
  },
  {
    id: 'xreal-beam-pro',
    name: 'XREAL Beam Pro',
    category: 'HMD & Glass',
    image: 'imgs/optimized/hardware/xreal-beam-pro.webp',
    imageAlt: 'XREAL Beam Pro product render',
    price: 'USD 199 / 128GB Wi-Fi; USD 249 / 256GB Wi-Fi; USD 299 / 256GB 5G.',
    release: 'Public retail launch around Jun 2024.',
    sensors: [
      'Dual 50MP 3D cameras',
      'Wi-Fi 6 and Bluetooth 5.2',
      'Optional 5G/LTE',
      'Dual USB-C and microSD expansion'
    ],
    notes: ['Acts as the spatial computing host for XREAL glasses and supports 3DoF or 6DoF experiences depending on glasses.'],
    officialTutorials: [
      { label: 'Beam Pro product page', url: 'https://www.xreal.com/beampro/' },
      { label: 'XREAL SDK start', url: 'https://docs.xreal.com/Getting%20Started%20with%20XREAL%20SDK' },
      { label: 'SDK release notes', url: 'https://docs.xreal.com/Release%20Note/Release%20Note' }
    ],
    communityTutorials: [
      { label: 'r/Xreal', url: 'https://www.reddit.com/r/Xreal/' },
      { label: 'Developer mode search', url: 'https://www.youtube.com/results?search_query=XREAL+Beam+Pro+developer+mode+SDK+tutorial' }
    ],
    sources: [
      { label: 'XREAL Beam Pro', url: 'https://www.xreal.com/beampro/' },
      { label: 'XREAL docs', url: 'https://docs.xreal.com/' }
    ]
  },
  {
    id: 'xreal-eye',
    name: 'XREAL Eye',
    category: 'HMD & Glass',
    image: 'imgs/optimized/hardware/xreal-eye.webp',
    imageAlt: 'XREAL Eye product render',
    price: 'US official store USD 99, marked as coming soon in some regions; Japan official store JPY 13,980.',
    release: 'Introduced around the XREAL One / 1S ecosystem; regional availability varies.',
    sensors: [
      '12MP RGB camera',
      'About 1.35g',
      '6DoF and spatial anchor extension',
      'First-person photo and video capture'
    ],
    notes: ['XREAL SDK 3.1.0 and later reference support for One series plus Eye 6DoF tracking and RGB camera access.'],
    officialTutorials: [
      { label: 'XREAL Eye product page', url: 'https://www.xreal.com/eye/' },
      { label: 'SDK release notes', url: 'https://docs.xreal.com/Release%20Note/Release%20Note' },
      { label: 'Camera docs', url: 'https://docs.xreal.com/Camera/Camera' },
      { label: 'Spatial Anchor', url: 'https://docs.xreal.com/Spatial%20Anchor/intro' }
    ],
    communityTutorials: [
      { label: 'XREAL Dev GitHub', url: 'https://github.com/XREAL-Dev' },
      { label: 'r/Xreal', url: 'https://www.reddit.com/r/Xreal/' }
    ],
    sources: [
      { label: 'XREAL Eye', url: 'https://www.xreal.com/eye/' },
      { label: 'XREAL shop', url: 'https://www.xreal.com/shop/' },
      { label: 'XREAL Japan store', url: 'https://jp.shop.xreal.com/' }
    ]
  },
  {
    id: 'shimmer3r-gsr-plus',
    name: 'Shimmer3R GSR+',
    category: 'PPG & GSR',
    image: 'imgs/optimized/hardware/Shimmer3-GSR.webp',
    imageAlt: 'Shimmer3R GSR+ product photo',
    price: 'Official price EUR 650.',
    release: 'Shimmer3R platform announced and purchasable Aug 26, 2025; GSR+ is among the first supported modules.',
    sensors: [
      '1-channel GSR / EDA',
      'PPG / optical pulse',
      'Heart-rate estimation',
      '10DoF IMU and auxiliary ADC input'
    ],
    notes: ['STM32U5A5 MCU, Bluetooth Vela IF820, 8GB microSD, 400mAh battery, USB-C.'],
    officialTutorials: [
      { label: 'Shimmer3R GSR+ product page', url: 'https://www.shimmersensing.com/product/shimmer3r-gsr-unit/' },
      { label: 'GSR+ User Guide PDF', url: 'https://shimmersensing.com/wp-content/docs/support/documentation/GSR_User_Guide_rev1.13.pdf' },
      { label: 'GSR+ Spec Sheet PDF', url: 'https://www.shimmersensing.com/wp-content/uploads/2025/11/GSR-specs-sheet-S3R.pdf' },
      { label: 'ConsensysPRO', url: 'https://www.shimmersensing.com/product/consensyspro-software/' }
    ],
    communityTutorials: [
      { label: 'pyshimmer GitHub', url: 'https://github.com/seemoo-lab/pyshimmer' },
      { label: 'pyshimmer PyPI', url: 'https://pypi.org/project/pyshimmer/' }
    ],
    sources: [
      { label: 'Shimmer3R GSR+', url: 'https://www.shimmersensing.com/product/shimmer3r-gsr-unit/' },
      { label: 'Shimmer3R release news', url: 'https://www.shimmersensing.com/shimmer3r-release/' }
    ]
  },
  {
    id: 'brainco-oxyzen',
    name: 'BrainCo OxyZen',
    category: 'EEG & IMU',
    image: 'imgs/optimized/hardware/oxyzen.webp',
    imageAlt: 'BrainCo OxyZen product image',
    price: 'BrainCo MSRP was not publicly available in the collected sources; Japan retail listing JPY 77,000.',
    release: 'Japan retail page lists sales from Jan 26, 2024; public material mentions a new OxyZen release in Oct 2024.',
    sensors: [
      'EEG / brainwave sensing',
      'Heart rate',
      'Blood oxygen / SpO2',
      'Public IMU and raw SDK details were not found'
    ],
    notes: ['Use packaging, app export, BLE service scan, or official manuals to verify raw IMU and SDK availability before citing it as an IMU device.'],
    officialTutorials: [
      { label: 'BrainCo OxyZen product entry', url: 'https://www.brainco.tech/product/detail/7' }
    ],
    communityTutorials: [
      { label: 'MNE-Python tutorials', url: 'https://mne.tools/stable/auto_tutorials/index.html' },
      { label: 'NeuroKit2', url: 'https://neuropsychology.github.io/NeuroKit/' }
    ],
    sources: [
      { label: 'BrainCo product page', url: 'https://www.brainco.tech/product/detail/7' },
      { label: 'Hacosco retail page', url: 'https://store.shopping.yahoo.co.jp/hacoscoshop/8545161.html' }
    ]
  },
  {
    id: 'openbci-ganglion',
    name: 'OpenBCI Ganglion',
    category: 'EEG & IMU',
    image: 'imgs/optimized/hardware/ganglion_3.webp',
    imageAlt: 'OpenBCI Ganglion transparent product image',
    price: 'Current official store price USD 624.99.',
    release: 'Publicly introduced through Kickstarter around 2015; current official store continues to sell it.',
    sensors: [
      '4-channel high-impedance ExG for EEG / EMG / ECG',
      'MCP3912 analog front end',
      'LIS2DH 3-axis accelerometer',
      'BLE with 200Hz real-time stream'
    ],
    notes: ['Ganglion packets are 20 bytes and support compressed 18/19-bit data transport; accelerometer streaming can be controlled by commands.'],
    officialTutorials: [
      { label: 'Getting Started with Ganglion', url: 'https://docs.openbci.com/GettingStarted/Boards/GanglionGS/' },
      { label: 'Ganglion Specs', url: 'https://docs.openbci.com/Ganglion/GanglionSpecs/' },
      { label: 'Ganglion Data Format', url: 'https://docs.openbci.com/Ganglion/GanglionDataFormat/' },
      { label: 'Ganglion SDK', url: 'https://docs.openbci.com/Ganglion/GanglionSDK/' },
      { label: 'Programming Tutorial', url: 'https://docs.openbci.com/Ganglion/GanglionProgramming/' },
      { label: 'OpenBCI GUI docs', url: 'https://docs.openbci.com/Software/OpenBCISoftware/GUIDocs/' }
    ],
    communityTutorials: [
      { label: 'BrainFlow examples', url: 'https://brainflow.readthedocs.io/en/stable/Examples.html' },
      { label: 'BrainFlow GitHub', url: 'https://github.com/brainflow-dev/brainflow' },
      { label: 'OpenBCI Forum', url: 'https://openbci.com/forum/' },
      { label: 'Ganglion EGG tutorial paper', url: 'https://arxiv.org/abs/2509.17260' }
    ],
    sources: [
      { label: 'OpenBCI shop', url: 'https://shop.openbci.com/products/ganglion-board' },
      { label: 'OpenBCI specs', url: 'https://docs.openbci.com/Ganglion/GanglionSpecs/' },
      { label: 'OpenBCI SDK', url: 'https://docs.openbci.com/Ganglion/GanglionSDK/' }
    ]
  }
];

const categories: Array<'All' | HardwareCategory> = ['All', 'HMD & Glass', 'PPG & GSR', 'EEG & IMU'];

interface HardwareProps {
  focusDeviceId?: string | null;
}

const Hardware: React.FC<HardwareProps> = ({ focusDeviceId }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | HardwareCategory>('All');
  const [spotlightDeviceId, setSpotlightDeviceId] = useState<string | null>(null);

  useEffect(() => {
    if (!focusDeviceId) return;

    setActiveCategory('All');
    setSpotlightDeviceId(focusDeviceId);

    const scrollTimer = window.setTimeout(() => {
      document.getElementById(`hardware-${focusDeviceId}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 350);

    const clearTimer = window.setTimeout(() => {
      setSpotlightDeviceId(null);
    }, 3200);

    return () => {
      window.clearTimeout(scrollTimer);
      window.clearTimeout(clearTimer);
    };
  }, [focusDeviceId]);

  const filteredDevices = useMemo(() => {
    if (activeCategory === 'All') return HARDWARE_DEVICES;
    return HARDWARE_DEVICES.filter((device) => device.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    return HARDWARE_DEVICES.reduce<Record<string, number>>((acc, device) => {
      acc[device.category] = (acc[device.category] ?? 0) + 1;
      return acc;
    }, { All: HARDWARE_DEVICES.length });
  }, []);

  return (
    <div className="space-y-9">
      <PageHeader
        icon={Cpu}
        eyebrow="Research toolkit"
        title="Research Hardware"
        description="Devices I have worked with across AR displays, physiological sensing, EEG, and spatial computing."
        aside={
          <div className="flex items-center gap-2 border-l border-line pl-4">
            <Eye className="h-4 w-4 text-[#7a8887]" aria-hidden="true" />
            <img
              src={VISITOR_BADGE}
              alt="Hardware page visits"
              className="h-5"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        }
      />

      <dl className="grid grid-cols-2 border-y border-line bg-white md:grid-cols-4">
        {[
          { label: 'Devices', value: HARDWARE_DEVICES.length },
          { label: 'Official tutorials', value: HARDWARE_DEVICES.reduce((sum, item) => sum + item.officialTutorials.length, 0) },
          { label: 'Community links', value: HARDWARE_DEVICES.reduce((sum, item) => sum + item.communityTutorials.length, 0) },
          { label: 'Categories', value: 3 },
        ].map((stat, index) => (
          <div
            key={stat.label}
            className={`px-4 py-4 ${index % 2 === 1 ? 'border-l border-line' : ''} ${
              index >= 2 ? 'border-t border-line md:border-t-0' : ''
            } ${index === 2 ? 'md:border-l' : ''}`}
          >
            <dd className="text-2xl font-bold text-ink">{stat.value}</dd>
            <dt className="mt-1 text-xs font-bold uppercase text-[#7a8887]">{stat.label}</dt>
          </div>
        ))}
      </dl>

      <div
        className="flex w-fit max-w-full overflow-x-auto rounded-md border border-[#cfdad7] bg-white p-1"
        role="group"
        aria-label="Filter hardware by category"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`shrink-0 rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeCategory === category
                ? 'bg-brand-700 text-white'
                : 'text-[#647374] hover:bg-[#f0f4f3] hover:text-ink'
            }`}
          >
            {category}
            <span className="ml-1 opacity-60">({categoryCounts[category] ?? 0})</span>
          </button>
        ))}
      </div>

      <div className="grid gap-5">
        <>
          {filteredDevices.map((device) => {
            const isSpotlighted = spotlightDeviceId === device.id;

            return (
            <article
              id={`hardware-${device.id}`}
              key={device.id}
              className={`page-enter group scroll-mt-24 overflow-hidden rounded-lg border bg-white transition-all duration-300 ${
                isSpotlighted
                  ? 'border-brand-400 shadow-soft ring-2 ring-brand-200'
                  : 'border-line hover:border-[#b9cac6]'
              }`}
            >
              <div className="grid gap-0 lg:grid-cols-[270px_minmax(0,1fr)]">
                <div className="relative flex min-h-[220px] items-center justify-center border-b border-line bg-[#eef2f1] p-6 lg:border-b-0 lg:border-r">
                  <div className="absolute left-4 top-4 rounded-md border border-white bg-white px-2.5 py-1 text-[11px] font-bold text-[#667576]">
                    {device.category}
                  </div>
                  <img
                    src={device.image}
                    alt={device.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="max-h-44 w-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-ink">{device.name}</h2>
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{device.notes[0]}</p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-[#7a8887]">
                      <Activity className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
                      {device.sensors.length} sensor notes
                    </span>
                  </div>

                  <div className="mt-5 grid border-y border-[#e5ebe9] md:grid-cols-2 md:divide-x md:divide-[#e5ebe9]">
                    <InfoBlock icon={DollarSign} label="Official / Public Price" value={device.price} />
                    <InfoBlock icon={Calendar} label="Release / Public Timeline" value={device.release} />
                  </div>

                  <div className="mt-5">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-ink">
                      <Cpu className="h-4 w-4 text-brand-600" aria-hidden="true" />
                      Sensors & Input
                    </h3>
                    <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                      {device.sensors.map((sensor) => (
                        <li key={sensor} className="flex items-start gap-2 text-xs leading-5 text-[#5c6b6c]">
                          <span className="mt-2 h-1 w-1 shrink-0 bg-brand-400" aria-hidden="true" />
                          <span>{sensor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 grid gap-6 border-t border-[#e5ebe9] pt-5 lg:grid-cols-2">
                    <LinkGroup title="Official Tutorials" icon={BookOpen} links={device.officialTutorials} />
                    <LinkGroup title="Community / Non-official" icon={Link2} links={device.communityTutorials} />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 border-t border-[#e5ebe9] pt-4">
                    <span className="text-xs font-bold uppercase text-[#879492]">Sources</span>
                    {device.sources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:text-brand-900"
                      >
                        {source.label}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
            );
          })}
        </>
      </div>

      <p className="text-xs leading-5 text-[#7a8887]">
        Last reviewed on Jun 17, 2026. Prices, regional availability, SDK pages, and tutorials may change over time.
      </p>
    </div>
  );
};

const InfoBlock: React.FC<{ icon: React.ElementType; label: string; value: string }> = ({ icon: Icon, label, value }) => (
  <div className="py-4 first:pr-0 last:border-t last:border-[#e5ebe9] md:first:pr-5 md:last:border-t-0 md:last:pl-5">
    <div className="mb-1.5 flex items-center gap-2 text-xs font-bold uppercase text-[#879492]">
      <Icon className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
      {label}
    </div>
    <p className="text-sm leading-6 text-[#465657]">{value}</p>
  </div>
);

const LinkGroup: React.FC<{ title: string; icon: React.ElementType; links: HardwareLink[] }> = ({ title, icon: Icon, links }) => (
  <div>
    <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-ink">
      <Icon className="h-4 w-4 text-brand-600" aria-hidden="true" />
      {title}
    </h3>
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-start gap-1.5 text-xs font-semibold leading-5 text-[#5c6b6c] transition-colors hover:text-brand-800"
        >
          <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9aa6a4] transition-colors group-hover:text-brand-600" aria-hidden="true" />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  </div>
);

export default Hardware;
