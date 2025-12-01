import React from 'react';
import { EDUCATION, EXPERIENCE } from '../../constants';
import { motion } from 'framer-motion';
import { Briefcase, Award, Cpu, Download } from 'lucide-react';

const CV: React.FC = () => {
  return (
    <div className="space-y-10">
      <header className="border-b border-slate-200 pb-6 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-900">Curriculum Vitae</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200/50">
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </header>

      {/* Education */}
      <motion.section 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h3 className="text-lg font-bold text-slate-900 mb-8 uppercase tracking-wider text-sm border-l-4 border-blue-500 pl-3">Education</h3>
        
        <div className="relative border-l border-slate-200 ml-3 space-y-10 pb-4">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="ml-8 relative group">
              <div className="absolute -left-[41px] top-1.5 w-3 h-3 bg-white border-2 border-blue-500 rounded-full shadow-[0_0_0_4px_rgba(241,245,249,1)] group-hover:scale-125 transition-transform duration-300"></div>
              <div className="text-xs font-mono text-blue-600 font-semibold mb-1">{edu.period}</div>
              <h4 className="text-slate-900 font-bold text-lg group-hover:text-blue-700 transition-colors">{edu.institution}</h4>
              <div className="text-slate-700 font-medium mb-2">{edu.degree}</div>
              <ul className="space-y-1">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="text-slate-500 text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience & Awards Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm border-l-4 border-blue-500 pl-3">Highlights</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-lg">
              <Award className="text-blue-500 w-5 h-5" /> Awards & Honors
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                 National Scholarship (2015-2017)
              </li>
              <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                 Sichuan Province Outstanding Graduate
              </li>
              <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                 Best Paper Nomination (MM 2024)
              </li>
              <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                 Best Paper Honorable Mention (ICVRV 2019)
              </li>
              <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                 UESTC Academic Rising Star
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-lg">
              <Cpu className="text-blue-500 w-5 h-5" /> Industry Experience
            </h4>
            {EXPERIENCE.map((exp) => (
              <div key={exp.id}>
                <div className="font-semibold text-slate-900">{exp.role}</div>
                <div className="text-slate-600">{exp.company}</div>
                <div className="text-xs text-slate-400 mt-1 mb-3">{exp.period} • {exp.location}</div>
                <div className="inline-block px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded">Previous Role</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CV;