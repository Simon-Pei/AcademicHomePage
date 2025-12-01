import React, { useState, useMemo } from 'react';
import { PUBLICATIONS } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, FileText, Download } from 'lucide-react';

const Publications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'conference' | 'journal' | 'highlight'>('all');

  const filteredPubs = useMemo(() => {
    if (filter === 'all') return PUBLICATIONS;
    if (filter === 'highlight') return PUBLICATIONS.filter(p => p.highlight);
    return PUBLICATIONS.filter(p => p.type === filter);
  }, [filter]);

  // Count metrics
  const counts = {
    all: PUBLICATIONS.length,
    highlight: PUBLICATIONS.filter(p => p.highlight).length,
    conference: PUBLICATIONS.filter(p => p.type === 'conference').length,
    journal: PUBLICATIONS.filter(p => p.type === 'journal').length
  };

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
            { id: 'highlight', label: 'Selected', icon: Award, count: counts.highlight },
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
              {f.icon && <f.icon className="w-3 h-3" />}
              {f.label} <span className="opacity-60 ml-0.5">({f.count})</span>
            </button>
          ))}
        </div>
      </header>

      <div className="grid gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPubs.length === 0 ? (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 text-slate-400 italic">
               No publications found in this category.
             </motion.div>
          ) : (
            filteredPubs.map((pub, index) => (
              <motion.div
                key={pub.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`group relative p-6 bg-white rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                  pub.highlight 
                    ? 'border-blue-200 ring-1 ring-blue-50 shadow-sm' 
                    : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                {/* Decorative AR Corner Markers on Hover */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-lg"></div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                      {pub.title}
                    </h3>
                    <div className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {pub.authors.split(', ').map((author, i) => (
                        <span key={i} className={author.includes('Yunqiang Pei') ? 'font-bold text-slate-900 underline decoration-blue-300 decoration-2 underline-offset-2' : ''}>
                          {author}{i < pub.authors.split(', ').length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                       <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold ${pub.highlight ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'}`}>
                         <Award className="w-3 h-3" /> {pub.venue}
                       </span>
                       <span className="text-xs text-slate-400 font-mono">[{pub.year}]</span>
                       {pub.tags?.map((tag, i) => (
                         <span key={i} className="text-xs text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full">
                            {tag}
                         </span>
                       ))}
                    </div>
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
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Publications;