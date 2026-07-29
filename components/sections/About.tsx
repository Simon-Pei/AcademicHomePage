import React, { useState } from 'react';
import { NEWS, PUBLICATIONS, RESEARCH_INTERESTS } from '../../constants';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CodeXml,
  ContactRound,
  GraduationCap,
  Mail,
  MapPin,
  ScanEye,
  Sparkles,
} from 'lucide-react';

const CONGRATS_ICON = 'imgs/icon/congrats.png';

const shouldShowCongratsIcon = (title: string) => (
  title.includes('Defense Completed') ||
  title.includes('Featured') ||
  title.includes('Honor') ||
  title.includes('Paper Accepted') ||
  title.includes('Best Paper')
);

const profileLinks = [
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=XzZSbxAAAAAJ&hl=en&authuser=1',
    icon: GraduationCap,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Simon-Pei',
    icon: CodeXml,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yunqiang-pei-198b16334/',
    icon: ContactRound,
  },
];

const selectedPublications = PUBLICATIONS.filter((publication) =>
  ['c1', 'c2', 'c3'].includes(publication.id)
);

const About: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="space-y-14 lg:space-y-16">
      <section className="grid gap-8 border-b border-line pb-12 md:grid-cols-[190px_minmax(0,1fr)] md:items-center lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
        <div className="mx-auto w-full max-w-[190px] md:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <img
              src="imgs/profilephoto260616.avif"
              alt="Portrait of Yunqiang Pei"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-full w-full scale-[1.12] object-cover object-center"
            />
          </div>
        </div>

        <header className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-brand-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Open to research opportunities
          </div>
          <h1 className="mt-4 text-4xl font-bold text-ink sm:text-5xl">Yunqiang Pei</h1>
          <p className="mt-3 text-lg font-semibold text-brand-800 sm:text-xl">AR × AI Researcher</p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-brand-600" aria-hidden="true" />
              UESTC Ph.D. Candidate
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-600" aria-hidden="true" />
              Chengdu
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-7 text-[#526263] sm:text-lg sm:leading-8">
            I study how augmented reality and artificial intelligence can work together as
            proactive, context-aware assistants. My work centers on human-agent alignment,
            multimodal reasoning, and physiological sensing in interactive systems.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#465657] transition-colors hover:text-brand-800"
              >
                <link.icon className="h-4 w-4 text-[#7e8c8a] transition-colors group-hover:text-brand-600" aria-hidden="true" />
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
            <button
              type="button"
              onClick={() => setShowContact((value) => !value)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#465657] transition-colors hover:text-brand-800"
              aria-expanded={showContact}
            >
              <Mail className="h-4 w-4 text-[#7e8c8a]" aria-hidden="true" />
              {showContact ? 'Hide email' : 'Email'}
            </button>
          </div>

          {showContact && (
            <p className="page-enter mt-3 w-fit border-l-2 border-brand-400 pl-3 font-mono text-sm text-brand-800">
              yqsimonpei3940 [at] hotmail.com
            </p>
          )}
        </header>
      </section>

      <section className="grid gap-7 border-b border-line pb-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-brand-700">
            <ScanEye className="h-4 w-4" aria-hidden="true" />
            Research direction
          </div>
          <h2 className="mt-3 text-2xl font-bold text-ink">Human-centered augmented intelligence</h2>
        </div>

        <div>
          <p className="text-base leading-7 text-[#526263] sm:text-lg sm:leading-8">
            I am a Ph.D. candidate at <strong className="font-semibold text-ink">UESTC</strong> and
            was a visiting Ph.D. student at{' '}
            <a
              href="https://wit.kaist.ac.kr/team"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-800 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-brand-900"
            >
              KAIST&apos;s WIT Lab
            </a>
            . My research lies at the intersection of augmented reality and AI, with a core
            focus on human-agent alignment.
          </p>

          <div className="mt-6 border-l-2 border-brand-500 bg-white px-5 py-4">
            <p className="text-sm font-medium leading-6 text-[#334445] sm:text-base">
              <Sparkles className="mr-2 inline-block h-4 w-4 text-amber-500" aria-hidden="true" />
              Developing a <strong className="font-bold text-brand-800">Proactive AR Assistant</strong>{' '}
              by integrating LLMs with real-time physiological data to anticipate user needs.
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
        </div>
      </section>

      <section
        aria-label="Current opportunity status"
        className="grid gap-4 border-y border-[#cfe1dc] bg-[#edf7f4] px-5 py-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-emerald-700">
          <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-ink">On the Job Market</h2>
          <p className="mt-1 text-sm leading-6 text-[#586869]">
            Seeking Postdoc, AR-related industry, or Faculty positions. Open to opportunities globally.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4 border-b border-line pb-5">
          <div>
            <p className="text-xs font-bold uppercase text-brand-700">Recent research</p>
            <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">Selected Publications</h2>
          </div>
          <a
            href="#publications"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
          >
            View all
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div>
          {selectedPublications.map((publication) => (
            <article
              key={publication.id}
              className="grid gap-4 border-b border-[#e3eae8] py-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-center"
            >
              <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md border border-line bg-[#eef2f1] p-3">
                <img
                  src={publication.image}
                  alt={`${publication.title} research figure`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold leading-5 text-brand-700">
                  {publication.year} · {publication.venue}
                </p>
                <h3 className="mt-1.5 text-base font-bold leading-6 text-ink sm:text-lg">
                  {publication.title}
                </h3>
                {publication.pdf && (
                  <a
                    href={publication.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#667576] transition-colors hover:text-brand-800"
                  >
                    Open paper
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-2 flex items-end justify-between gap-4 border-b border-line pb-5">
          <div>
            <p className="text-xs font-bold uppercase text-brand-700">Timeline</p>
            <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">News &amp; Updates</h2>
          </div>
          <span className="font-mono text-xs text-[#879492]">{NEWS.length} entries</span>
        </div>

        <div>
          {NEWS.map((item) => (
            <article
              key={`${item.date}-${item.title}`}
              className="grid gap-2 border-b border-[#e3eae8] py-4 sm:grid-cols-[88px_minmax(0,1fr)]"
            >
              <time className="pt-0.5 font-mono text-xs font-semibold text-[#7b8987]">{item.date}</time>
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
                      className="inline-flex items-start gap-1.5 text-sm font-bold text-[#243536] transition-colors hover:text-brand-800 hover:underline hover:underline-offset-2"
                    >
                      <span>{item.title}</span>
                      <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  ) : (
                    <h3 className="text-sm font-bold text-[#243536]">{item.title}</h3>
                  )}
                  <p className="mt-1 text-sm leading-6 text-[#667576]">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
