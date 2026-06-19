import React, { useState, useMemo } from 'react';
import { PUBLICATIONS } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, FileText } from 'lucide-react';

const MEDAL_ICON = 'imgs/icon/medal.png';

interface PublicationsProps {
  onHardwareSelect?: (hardwareId: string) => void;
}

const Publications: React.FC<PublicationsProps> = ({ onHardwareSelect }) => {
  const [filter, setFilter] = useState<'all' | 'conference' | 'journal' | 'highlight'>('all');

  const filteredPubs = useMemo(() => {
    if (filter === 'all') return PUBLICATIONS;
    if (filter === 'highlight') return PUBLICATIONS.filter(p => p.highlight);
    return PUBLICATIONS.filter(p => p.type === filter);
  }, [filter]);

  const sortedPubs = useMemo(() => {
    const originalOrder = new Map(PUBLICATIONS.map((pub, index) => [pub.id, index]));
    return [...filteredPubs].sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return (originalOrder.get(a.id) ?? 0) - (originalOrder.get(b.id) ?? 0);
    });
  }, [filteredPubs]);

  const pubsByYear = useMemo(() => {
    const groups = new Map<number, typeof PUBLICATIONS>();
    sortedPubs.forEach((pub) => {
      const group = groups.get(pub.year) ?? [];
      group.push(pub);
      groups.set(pub.year, group);
    });
    return Array.from(groups.entries());
  }, [sortedPubs]);

  // Count metrics
  const counts = {
    all: PUBLICATIONS.length,
    highlight: PUBLICATIONS.filter(p => p.highlight).length,
    conference: PUBLICATIONS.filter(p => p.type === 'conference').length,
    journal: PUBLICATIONS.filter(p => p.type === 'journal').length
  };
  const awardTags = new Set(['Best Paper Nomination', 'Best Paper Honorable Mention']);

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Publications</h2>
          <p className="text-slate-500 text-sm">
            Selected research works and academic contributions.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All', count: counts.all },
            { id: 'highlight', label: 'Selected', count: counts.highlight },
            { id: 'conference', label: 'Conference', count: counts.conference },
            { id: 'journal', label: 'Journal', count: counts.journal }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as any)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all flex items-center gap-1.5 ${
                filter === f.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md transform scale-105'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
              }`}
            >
              {f.label} <span className="opacity-60 ml-0.5">({f.count})</span>
            </button>
          ))}
        </div>
      </header>

      <div className="space-y-9">
        <AnimatePresence mode="popLayout">
          {sortedPubs.length === 0 ? (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 text-slate-400 italic">
               No publications found in this category.
             </motion.div>
          ) : (
            pubsByYear.map(([year, pubs]) => (
              <motion.section
                key={year}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">{year}</h3>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="grid gap-6">
                  {pubs.map((pub) => (
                    <motion.div
                      key={pub.id}
                      layout
                      className={`group relative p-6 bg-white rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                        pub.highlight 
                          ? 'border-blue-200 ring-1 ring-blue-50 shadow-sm' 
                          : 'border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      {/* Decorative corner markers on hover */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-lg"></div>

                      <div className={`grid gap-5 ${pub.image ? 'md:grid-cols-[220px_minmax(0,1fr)]' : ''}`}>
                        {pub.image && (
                          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                            <img
                              src={pub.image}
                              alt={`${pub.title} figure`}
                              loading="lazy"
                              className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                          </div>
                        )}

                        <div className="flex items-start justify-between gap-4 min-w-0">
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                              {pub.title}
                            </h4>
                            <div className="mt-2 text-sm text-slate-600 leading-relaxed">
                              {pub.authors.split(', ').map((author, i) => (
                                <span key={i} className={author.includes('Yunqiang Pei') ? 'font-bold text-slate-900 underline decoration-blue-300 decoration-2 underline-offset-2' : ''}>
                                  {author}{i < pub.authors.split(', ').length - 1 ? ', ' : ''}
                                </span>
                              ))}
                            </div>
                            
                            <div className="mt-4 flex flex-wrap items-center gap-3">
                               <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold ${pub.highlight ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'}`}>
                                 {pub.venue}
                               </span>
                               <span className="text-xs text-slate-400 font-mono">[{pub.year}]</span>
                               {pub.tags?.map((tag, i) => {
                                 const isAward = awardTags.has(tag);
                                 return (
                                 <span key={i} className={`inline-flex items-center gap-1.5 text-xs border px-2 py-0.5 rounded-full ${isAward ? 'border-amber-200 bg-amber-50 text-amber-800 font-medium' : 'text-slate-500 border-slate-200'}`}>
                                    {isAward && (
                                      <img
                                        src={MEDAL_ICON}
                                        alt=""
                                        className="w-3.5 h-3.5 object-contain shrink-0"
                                        aria-hidden="true"
                                      />
                                    )}
                                    {tag}
                                 </span>
                                 );
                               })}
                            </div>

                            {pub.hardware && pub.hardware.length > 0 && (
                              <div className="mt-3 flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                                  <Cpu className="h-3.5 w-3.5" />
                                  Hardware
                                </span>
                                {pub.hardware.map((device) => (
                                  <button
                                    key={`${pub.id}-${device.id}`}
                                    type="button"
                                    onClick={() => onHardwareSelect?.(device.id)}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 transition-colors hover:border-blue-200 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    title={`Open ${device.name} in Hardware`}
                                  >
                                    <Cpu className="h-3.5 w-3.5" />
                                    {device.name}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          {/* PDF Link Button */}
                          {pub.pdf && (
                            <a 
                              href={pub.pdf} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="shrink-0 flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 text-slate-400 hover:text-red-500 hover:bg-red-50 hover:border-red-200 transition-all duration-200 group/pdf"
                              title="Download PDF"
                            >
                              <FileText className="w-5 h-5 mb-0.5" />
                              <span className="text-[9px] font-bold">PDF</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Publications;
