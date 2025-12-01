import React from 'react';
import { VOLUNTEERING } from '../../constants';
import { motion } from 'framer-motion';
import { Globe, Languages, Code, MessageCircle } from 'lucide-react';

const Service: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Volunteering */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Globe className="w-6 h-6 text-blue-600" />
          Volunteering
        </h2>
        
        <div className="space-y-4">
          {VOLUNTEERING.map((vol, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur p-4 rounded-lg border border-slate-200/60 shadow-sm hover:border-blue-300 transition-colors">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-slate-800">{vol.event}</h3>
                <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{vol.date}</span>
              </div>
              <p className="text-blue-600 text-sm font-medium mb-1">{vol.role}</p>
              <p className="text-slate-500 text-sm flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-slate-300"></span>
                {vol.location}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Languages & Skills */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Languages className="w-6 h-6 text-blue-600" />
          Languages & Skills
        </h2>

        <div className="bg-white/80 backdrop-blur p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-4">Languages</h3>
          <div className="space-y-3">
             <div className="flex items-center justify-between">
                <span className="text-slate-700 font-medium">Chinese</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Native / Proficient</span>
             </div>
             <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-full"></div>
             </div>

             <div className="flex items-center justify-between mt-4">
                <span className="text-slate-700 font-medium">English</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Advanced</span>
             </div>
             <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[85%]"></div>
             </div>

             <div className="flex items-center justify-between mt-4">
                <span className="text-slate-700 font-medium">Korean</span>
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Intermediate</span>
             </div>
             <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full w-[40%]"></div>
             </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Code className="w-24 h-24" />
            </div>
            <h3 className="text-lg font-bold mb-4">Winter School</h3>
            <div className="space-y-2 relative z-10">
                <p className="text-sm font-semibold text-blue-300">Girton College, Cambridge</p>
                <p className="text-xs text-slate-400">Jan 2023 - Feb 2023</p>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    Completed Machine Learning Winter Programme. Assessed module: Machine Learning.
                </p>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;