import React, { useState } from 'react';
import { RESEARCH_INTERESTS, NEWS } from '../../constants';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, ScanEye, Briefcase, Mail } from 'lucide-react';

const CONGRATS_ICON = 'imgs/icon/congrats.png';

const shouldShowCongratsIcon = (title: string) => (
  title.includes('Defense Completed') ||
  title.includes('Featured') ||
  title.includes('Honor') ||
  title.includes('Paper Accepted') ||
  title.includes('Best Paper')
);

const About: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="group relative overflow-hidden rounded-lg bg-white border border-blue-100 shadow-sm transition-all hover:shadow-md hover:border-blue-300">
        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-blue-100/50 to-transparent rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>

        <div className="p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center relative z-10">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-md shrink-0">
            <Briefcase className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">
                On the Job Market
              </h3>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Actively seeking <strong className="text-blue-700 font-semibold">Postdoc</strong>, <strong className="text-blue-700 font-semibold">Industry (AR-related)</strong>, or <strong className="text-blue-700 font-semibold">Faculty</strong> positions.
              <span className="block text-slate-500 text-xs mt-0.5">Open to opportunities globally (No geographical restrictions).</span>
            </p>
          </div>
          <div className="w-full sm:w-auto sm:min-w-[220px] sm:flex sm:justify-end">
            {!showContact ? (
              <button 
                onClick={() => setShowContact(true)}
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-md hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap flex items-center justify-center gap-2"
              >
                <Mail className="w-3 h-3" />
                Contact Me
              </button>
            ) : (
              <div className="flex w-full flex-col gap-2 sm:items-end">
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-blue-200 rounded-md text-xs font-medium text-slate-700 hover:text-blue-700 hover:border-blue-400 transition-all shadow-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  yqsimonpei3940 [at] hotmail.com
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>

      <header className="max-w-4xl pb-8 border-b border-slate-100">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4 flex flex-wrap items-center gap-3">
            Research Focus
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs bg-slate-900 text-white font-mono tracking-wide shadow-lg shadow-slate-200">
              <ScanEye className="w-3 h-3" /> AR x AI
            </span>
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            I am a Ph.D. candidate at <strong className="text-slate-900">UESTC</strong> and was also a visiting Ph.D. student at <strong className="text-slate-900">KAIST's WIT Lab</strong>. My research lies at the intersection of <strong className="text-blue-700">Augmented Reality (AR)</strong> and <strong className="text-blue-700">AI</strong>, with a core focus on <strong className="text-slate-900">Human-Agent Alignment</strong>.
          </p>
          <div className="mt-5 p-4 bg-blue-50/70 rounded-lg border border-blue-100">
             <p className="text-slate-800 font-medium text-sm sm:text-base">
                <Sparkles className="inline-block w-4 h-4 mr-1.5 text-blue-600" />
                Developing a <span className="text-blue-700 font-bold">Proactive AR Assistant</span> by integrating LLMs with real-time physiological data to build context-aware systems that anticipate user needs.
             </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            {RESEARCH_INTERESTS.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white text-slate-600 text-xs font-medium rounded-md border border-slate-200 shadow-sm hover:border-blue-300 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section>
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
          News & Updates
        </h3>
        <div className="space-y-3">
          {NEWS.map((item, index) => (
             <div
               key={index}
               className={`grid gap-2 rounded-lg border p-4 transition-colors sm:grid-cols-[96px_minmax(0,1fr)] group ${
                 item.highlight
                   ? 'bg-blue-50/60 border-blue-100'
                   : 'border-transparent hover:border-slate-100 hover:bg-slate-50/70'
               }`}
             >
               <div className="font-mono text-xs text-slate-400 pt-1 group-hover:text-blue-500 transition-colors">
                  {item.date}
               </div>
               <div className="flex items-start gap-2">
                 <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
                    {shouldShowCongratsIcon(item.title) && (
                      <img
                        src={CONGRATS_ICON}
                        alt=""
                        aria-hidden="true"
                        className="w-4 h-4 object-contain shrink-0"
                      />
                    )}
                 </span>
                 <div className="min-w-0">
                   {item.link ? (
                     <a
                       href={item.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className={`inline-flex items-center gap-1.5 text-sm font-bold transition-colors hover:text-blue-800 hover:underline underline-offset-2 ${item.highlight ? 'text-blue-700' : 'text-slate-800'}`}
                     >
                       {item.title}
                       <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                     </a>
                   ) : (
                     <h4 className={`text-sm font-bold ${item.highlight ? 'text-blue-700' : 'text-slate-800'}`}>
                       {item.title}
                     </h4>
                   )}
                   <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.description}</p>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
