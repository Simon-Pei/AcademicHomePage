import React, { useState } from 'react';
import { RESEARCH_INTERESTS, NEWS } from '../../constants';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, ExternalLink, Mail, ScanEye, Sparkles } from 'lucide-react';

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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      <header className="max-w-4xl">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-teal-700">
          <ScanEye className="h-4 w-4" aria-hidden="true" />
          Augmented intelligence research
        </div>
        <h2 className="text-3xl font-bold text-[#172526] sm:text-4xl">Research Focus</h2>
        <p className="mt-5 text-lg leading-8 text-[#526263]">
          I am a Ph.D. candidate at <strong className="font-semibold text-[#172526]">UESTC</strong> and was
          also a visiting Ph.D. student at{' '}
          <a
            href="https://wit.kaist.ac.kr/team"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 transition-colors hover:text-teal-950"
          >
            KAIST&apos;s WIT Lab
          </a>
          .
          My research lies at the intersection of <strong className="font-semibold text-teal-800">Augmented Reality (AR)</strong> and{' '}
          <strong className="font-semibold text-teal-800">AI</strong>, with a core focus on{' '}
          <strong className="font-semibold text-[#172526]">Human-Agent Alignment</strong>.
        </p>

        <div className="mt-6 border-l-2 border-teal-600 bg-white/70 px-5 py-4">
          <p className="text-sm font-medium leading-6 text-[#334445] sm:text-base">
            <Sparkles className="mr-2 inline-block h-4 w-4 text-teal-700" aria-hidden="true" />
            Developing a <strong className="font-bold text-teal-800">Proactive AR Assistant</strong> by
            integrating LLMs with real-time physiological data to build context-aware systems that anticipate user needs.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {RESEARCH_INTERESTS.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[#cfdad7] bg-white px-3 py-1.5 text-xs font-semibold text-[#4b5d5e]"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section
        aria-label="Current opportunity status"
        className="grid gap-4 border-y border-[#dce5e2] bg-white/75 px-5 py-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
          <Briefcase className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <h3 className="text-sm font-bold text-[#172526]">On the Job Market</h3>
          </div>
          <p className="mt-1 text-sm leading-6 text-[#586869]">
            Seeking Postdoc, AR-related industry, or Faculty positions. Open to opportunities globally.
          </p>
        </div>
        {!showContact ? (
          <button
            type="button"
            onClick={() => setShowContact(true)}
            className="inline-flex w-fit items-center gap-2 rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm font-medium text-teal-800"
          >
            yqsimonpei3940 [at] hotmail.com
          </motion.div>
        )}
      </section>

      <section>
        <div className="mb-5 flex items-end justify-between gap-4 border-b border-[#dce5e2] pb-4">
          <div>
            <p className="text-xs font-semibold uppercase text-teal-700">Timeline</p>
            <h3 className="mt-1 text-2xl font-bold text-[#172526]">News &amp; Updates</h3>
          </div>
          <ArrowRight className="hidden h-5 w-5 text-[#9aa6a4] sm:block" aria-hidden="true" />
        </div>

        <div>
          {NEWS.map((item, index) => (
            <article
              key={`${item.date}-${item.title}`}
              className={`grid gap-2 border-b border-[#e3eae8] py-4 sm:grid-cols-[88px_minmax(0,1fr)] ${
                index === 0 ? 'border-t' : ''
              }`}
            >
              <time className="pt-0.5 font-mono text-xs font-medium text-[#7b8987]">{item.date}</time>
              <div className="grid grid-cols-[20px_minmax(0,1fr)] gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 items-center justify-center">
                  {shouldShowCongratsIcon(item.title) && (
                    <img
                      src={CONGRATS_ICON}
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-4 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </span>
                <div className="min-w-0">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1.5 text-sm font-bold text-[#243536] transition-colors hover:text-teal-800 hover:underline hover:underline-offset-2"
                    >
                      <span>{item.title}</span>
                      <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  ) : (
                    <h4 className="text-sm font-bold text-[#243536]">{item.title}</h4>
                  )}
                  <p className="mt-1 text-sm leading-6 text-[#667576]">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
