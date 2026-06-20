import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Images, MapPin, Maximize2, X } from 'lucide-react';

interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  orientation?: 'wide' | 'portrait';
}

interface GalleryAlbum {
  id: string;
  date: string;
  title: string;
  location: string;
  description: string;
  photos: GalleryPhoto[];
}

const VISIT_BASE = 'imgs/visit';

const albums: GalleryAlbum[] = [
  {
    id: 'kaist-2026-leave',
    date: '2026.03',
    title: 'KAIST Visiting Research Wrap-up',
    location: 'Daejeon, South Korea',
    description: 'Closing snapshots from the KAIST WIT Lab visiting research period.',
    photos: [
      { src: `${VISIT_BASE}/2026_03_Daejeon_KAIST_leave/20260224_115134.jpg`, alt: 'KAIST visiting research wrap-up photo 1', caption: 'KAIST visit wrap-up, Daejeon.' },
      { src: `${VISIT_BASE}/2026_03_Daejeon_KAIST_leave/20260224_115314.jpg`, alt: 'KAIST visiting research wrap-up photo 2', caption: 'Campus memory during the closing period.' },
      { src: `${VISIT_BASE}/2026_03_Daejeon_KAIST_leave/20260224_115202.jpg`, alt: 'KAIST visiting research wrap-up photo 3', caption: 'Final record from the KAIST visit.' }
    ]
  },
  {
    id: 'mm-2025-dublin',
    date: '2025.10',
    title: 'ACM Multimedia 2025',
    location: 'Dublin, Ireland',
    description: 'Conference travel records around ACM Multimedia 2025.',
    photos: [
      { src: `${VISIT_BASE}/2025_10_Dublin_MM2025/20251029_170546.jpg`, alt: 'ACM Multimedia 2025 Dublin photo 1', caption: 'ACM Multimedia 2025, Dublin.' },
      { src: `${VISIT_BASE}/2025_10_Dublin_MM2025/20251029_112306.jpg`, alt: 'ACM Multimedia 2025 Dublin photo 2', caption: 'Conference day record in Dublin.' },
      { src: `${VISIT_BASE}/2025_10_Dublin_MM2025/20251031_170924.jpg`, alt: 'ACM Multimedia 2025 Dublin photo 3', caption: 'Dublin visit during MM 2025.', orientation: 'portrait' },
      { src: `${VISIT_BASE}/2025_10_Dublin_MM2025/20251029_145722.jpg`, alt: 'ACM Multimedia 2025 Dublin photo 4', caption: 'Conference and city snapshot.', orientation: 'portrait' },
      { src: `${VISIT_BASE}/2025_10_Dublin_MM2025/20251028_175312.jpg`, alt: 'ACM Multimedia 2025 Dublin photo 5', caption: 'Arrival and venue memory.' }
    ]
  },
  {
    id: 'ismar-2025-daejeon',
    date: '2025.10',
    title: 'ISMAR 2025',
    location: 'Daejeon, South Korea',
    description: 'Records from the ISMAR 2025 student volunteer and conference trip.',
    photos: [
      { src: `${VISIT_BASE}/2025_10_Daejeon_ISMAR2025/20251007_164407.jpg`, alt: 'ISMAR 2025 Daejeon photo 1', caption: 'ISMAR 2025, Daejeon.' },
      { src: `${VISIT_BASE}/2025_10_Daejeon_ISMAR2025/20251008_164759.jpg`, alt: 'ISMAR 2025 Daejeon photo 2', caption: 'Conference trip record in Daejeon.' }
    ]
  },
  {
    id: 'uist-2025-busan',
    date: '2025.09',
    title: 'UIST 2025',
    location: 'Busan, South Korea',
    description: 'Visit records around the UIST 2025 conference trip.',
    photos: [
      { src: `${VISIT_BASE}/2025_09_Pusan_UIST2025/20250929_084629.jpg`, alt: 'UIST 2025 Busan photo 1', caption: 'UIST 2025 visit, Busan.', orientation: 'portrait' },
      { src: `${VISIT_BASE}/2025_09_Pusan_UIST2025/20250929_085016.jpg`, alt: 'UIST 2025 Busan photo 2', caption: 'Conference travel record in Busan.' }
    ]
  },
  {
    id: 'chi-2025-yokohama',
    date: '2025.04',
    title: 'ACM CHI 2025',
    location: 'Yokohama, Japan',
    description: 'Student volunteer and conference visit records from CHI 2025.',
    photos: [
      { src: `${VISIT_BASE}/2025_04_Yokohama_CHI2025/20250428_090554.jpg`, alt: 'ACM CHI 2025 Yokohama photo 1', caption: 'CHI 2025, Yokohama.' },
      { src: `${VISIT_BASE}/2025_04_Yokohama_CHI2025/20250429_175811.jpg`, alt: 'ACM CHI 2025 Yokohama photo 2', caption: 'Conference visit record in Yokohama.' }
    ]
  },
  {
    id: 'kaist-2025-start',
    date: '2025.03',
    title: 'KAIST Visiting Research Start',
    location: 'Daejeon, South Korea',
    description: 'First records from the KAIST WIT Lab visiting research period.',
    photos: [
      { src: `${VISIT_BASE}/2025_03_Daejeon_KAIST_start/20250316_163830.jpg`, alt: 'KAIST visiting research start photo 1', caption: 'Start of the KAIST visiting research period.' },
      { src: `${VISIT_BASE}/2025_03_Daejeon_KAIST_start/20250317_110758.jpg`, alt: 'KAIST visiting research start photo 2', caption: 'Early visit record in Daejeon.', orientation: 'portrait' }
    ]
  },
  {
    id: 'mm-2024-melbourne',
    date: '2024.10',
    title: 'ACM Multimedia 2024',
    location: 'Melbourne, Australia',
    description: 'Conference records from ACM Multimedia 2024.',
    photos: [
      { src: `${VISIT_BASE}/2024_10_Melbourne_MM24/mmexport1732343859363.jpg`, alt: 'ACM Multimedia 2024 Melbourne photo 1', caption: 'ACM Multimedia 2024, Melbourne.' },
      { src: `${VISIT_BASE}/2024_10_Melbourne_MM24/IMG_20241029_124330.jpg`, alt: 'ACM Multimedia 2024 Melbourne photo 2', caption: 'Conference day record in Melbourne.' },
      { src: `${VISIT_BASE}/2024_10_Melbourne_MM24/mmexport1732343867042.jpg`, alt: 'ACM Multimedia 2024 Melbourne photo 3', caption: 'Conference memory from MM 2024.' },
      { src: `${VISIT_BASE}/2024_10_Melbourne_MM24/IMG_20241030_103641.jpg`, alt: 'ACM Multimedia 2024 Melbourne photo 4', caption: 'Visit record during MM 2024.' }
    ]
  },
  {
    id: 'icvrv-2019-shenzhen',
    date: '2019.11',
    title: 'ICVRV 2019',
    location: 'Shenzhen, China',
    description: 'Early conference record from ICVRV 2019.',
    photos: [
      { src: `${VISIT_BASE}/2019_11_Shenzhen_ICVRV2019/IMG_20191123_090349.jpg`, alt: 'ICVRV 2019 Shenzhen photo', caption: 'ICVRV 2019, Shenzhen.', orientation: 'wide' }
    ]
  }
];

const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<(GalleryPhoto & { albumTitle: string; albumDate: string }) | null>(null);

  const totalPhotos = useMemo(() => albums.reduce((sum, album) => sum + album.photos.length, 0), []);

  return (
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              <Images className="h-3.5 w-3.5" />
              Timeline Album
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Gallery</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Selected photos from conferences, academic visits, and research travel.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:min-w-[260px]">
            <StatCard label="Albums" value={albums.length} />
            <StatCard label="Photos" value={totalPhotos} />
          </div>
        </div>
      </header>

      <div className="relative space-y-8">
        <div className="absolute bottom-0 left-3 top-1 hidden w-px bg-slate-200 md:block" />

        {albums.map((album) => (
          <motion.section
            key={album.id}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative md:pl-10"
          >
            <div className="absolute left-0 top-2 hidden h-6 w-6 rounded-full border-4 border-white bg-blue-500 shadow-sm md:block" />

            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {album.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {album.location}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{album.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{album.description}</p>
                </div>

                <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-500">
                  <Images className="h-3.5 w-3.5" />
                  {album.photos.length} photos
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {album.photos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setSelectedPhoto({ ...photo, albumTitle: album.title, albumDate: album.date })}
                    className={`group relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 text-left shadow-sm transition-all hover:border-blue-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                      photo.orientation === 'wide' ? 'sm:col-span-2 lg:col-span-3' : ''
                    }`}
                  >
                    <div className={photo.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}>
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-3 text-white opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="flex items-center justify-between gap-3">
                        <p className="line-clamp-2 text-xs font-medium leading-5">{photo.caption}</p>
                        <Maximize2 className="h-4 w-4 shrink-0" />
                      </div>
                    </div>
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-slate-600 shadow-sm">
                      {index + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-2xl"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-white">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">{selectedPhoto.albumDate}</p>
                  <h3 className="text-sm font-bold">{selectedPhoto.albumTitle}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="rounded-full p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label="Close gallery image"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex max-h-[74vh] items-center justify-center bg-black">
                <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="max-h-[74vh] w-full object-contain" />
              </div>

              <div className="px-4 py-3 text-sm text-slate-200">
                {selectedPhoto.caption}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
    <div className="text-2xl font-bold text-slate-900">{value}</div>
    <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">{label}</div>
  </div>
);

export default Gallery;
