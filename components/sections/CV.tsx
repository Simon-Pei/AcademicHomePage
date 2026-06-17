import React from 'react';
import { EDUCATION, EXPERIENCE, VOLUNTEERING } from '../../constants';
import { motion } from 'framer-motion';
import { Award, Code, Cpu, Download, Globe2, Languages, MapPin } from 'lucide-react';

const CV: React.FC = () => {
  return (
    <div className="space-y-10">
      <header className="border-b border-slate-200 pb-6 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-900">Curriculum Vitae</h2>
        {/* <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200/50">
          <Download className="w-4 h-4" />
          Download PDF
        </button> */}
        {/* 
            TODO: Replace the href below with the path to your actual PDF file.
            Example: href="/Yunqiang_Pei_CV.pdf"
        */}
        <a 
          href="pdfs/cv20260617.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200/50"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
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

      {/* Professional experience and awards */}
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
              <Cpu className="text-blue-500 w-5 h-5" /> Professional Experience
            </h4>
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="mb-5 last:mb-0">
                <div className="font-semibold text-slate-900">{exp.role}</div>
                <div className="text-slate-600">{exp.company}</div>
                <div className="text-xs text-slate-400 mt-1 mb-3">{exp.period} • {exp.location}</div>
                {exp.tag && (
                  <div className="inline-block px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded">{exp.tag}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Academic service */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm border-l-4 border-blue-500 pl-3">Academic Service</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {VOLUNTEERING.map((vol) => (
            <div key={`${vol.event}-${vol.date}`} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h4 className="font-bold text-slate-900 leading-snug">{vol.event}</h4>
                <span className="shrink-0 text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{vol.date}</span>
              </div>
              <p className="text-blue-600 text-sm font-medium mb-2">{vol.role}</p>
              <p className="text-slate-500 text-sm flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {vol.location}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Languages and training */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm border-l-4 border-blue-500 pl-3">Languages & Training</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
            <h4 className="font-bold text-slate-800 mb-5 flex items-center gap-2 text-lg">
              <Languages className="text-blue-500 w-5 h-5" /> Languages
            </h4>
            <div className="space-y-4">
              {[
                { name: 'Chinese', level: 'Native / Proficient', color: 'green', width: 'w-full' },
                { name: 'English', level: 'Advanced', color: 'blue', width: 'w-[85%]' },
                { name: 'Korean', level: 'Intermediate', color: 'amber', width: 'w-[40%]' }
              ].map((language) => (
                <div key={language.name}>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-slate-700 font-medium">{language.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      language.color === 'green'
                        ? 'bg-green-100 text-green-700'
                        : language.color === 'blue'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-amber-100 text-amber-700'
                    }`}>
                      {language.level}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className={`h-full ${language.width} ${
                      language.color === 'green'
                        ? 'bg-green-500'
                        : language.color === 'blue'
                          ? 'bg-blue-500'
                          : 'bg-amber-500'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Code className="w-24 h-24" />
            </div>
            <h4 className="font-bold mb-5 flex items-center gap-2 text-lg relative z-10">
              <Globe2 className="text-blue-300 w-5 h-5" /> Additional Training
            </h4>
            <div className="space-y-2 relative z-10">
              <p className="text-sm font-semibold text-blue-300">Machine Learning Winter Programme</p>
              <p className="text-lg font-bold">Girton College, Cambridge</p>
              <p className="text-xs text-slate-400">Jan 2023 - Feb 2023</p>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                Completed the programme with the assessed module in Machine Learning.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CV;
