import React from 'react';
import { EDUCATION, EXPERIENCE, VOLUNTEERING } from '../../constants';
import {
  Award,
  BriefcaseBusiness,
  ExternalLink,
  FileText,
  Globe2,
  GraduationCap,
  Languages,
  MapPin,
  Users,
} from 'lucide-react';
import PageHeader from '../PageHeader';

const awards = [
  'National Scholarship (2015-2017)',
  'Sichuan Province Outstanding Graduate',
  'Best Paper Nomination, ACM Multimedia 2024',
  'Best Paper Honorable Mention, ICVRV 2019',
  'UESTC Academic Rising Star',
];

const languages = [
  { name: 'Chinese', level: 'Native / Proficient' },
  { name: 'English', level: 'Advanced' },
  { name: 'Korean', level: 'Intermediate' },
];

const CV: React.FC = () => (
  <div className="space-y-12">
    <PageHeader
      icon={FileText}
      eyebrow="Academic record"
      title="Curriculum Vitae"
      description="Education, professional experience, honors, academic service, and training."
      aside={
        <a
          href="pdfs/Brief.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-[#cfdad7] bg-white px-4 py-2 text-sm font-semibold text-[#465657] transition-colors hover:border-brand-400 hover:text-brand-800"
        >
          View PDF
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      }
    />

    <CVSection icon={GraduationCap} title="Education">
      <div className="divide-y divide-[#e5ebe9] border-y border-[#e5ebe9]">
        {EDUCATION.map((education) => (
          <article
            key={education.id}
            className="grid gap-3 py-6 md:grid-cols-[185px_minmax(0,1fr)] md:gap-8"
          >
            <div>
              <p className="font-mono text-xs font-bold text-brand-700">{education.period}</p>
              {education.location && (
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#7a8887]">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {education.location}
                </p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold leading-snug text-ink">{education.institution}</h3>
              <p className="mt-1 text-sm font-semibold text-[#465657]">{education.degree}</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {education.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-sm leading-6 text-muted">
                    <span className="mt-2.5 h-1 w-1 shrink-0 bg-brand-400" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </CVSection>

    <CVSection icon={BriefcaseBusiness} title="Professional Experience">
      <div className="divide-y divide-[#e5ebe9] border-y border-[#e5ebe9]">
        {EXPERIENCE.map((experience) => (
          <article
            key={experience.id}
            className="grid gap-3 py-6 md:grid-cols-[185px_minmax(0,1fr)] md:gap-8"
          >
            <p className="font-mono text-xs font-bold text-brand-700">{experience.period}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-ink">{experience.role}</h3>
                <p className="mt-1 text-sm font-semibold text-[#465657]">{experience.company}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted">
                  <MapPin className="h-4 w-4 text-[#8a9795]" aria-hidden="true" />
                  {experience.location}
                </p>
              </div>
              {experience.tag && (
                <span className="w-fit rounded-md border border-[#d7e0de] bg-white px-2.5 py-1 text-xs font-semibold text-[#687776]">
                  {experience.tag}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </CVSection>

    <CVSection icon={Award} title="Awards & Honors">
      <ul className="grid border-y border-[#e5ebe9] sm:grid-cols-2">
        {awards.map((award, index) => (
          <li
            key={award}
            className={`flex items-start gap-3 py-4 text-sm font-medium leading-6 text-[#465657] ${
              index % 2 === 0 ? 'sm:pr-6' : 'sm:border-l sm:border-[#e5ebe9] sm:pl-6'
            } ${index < awards.length - 1 ? 'border-b border-[#e5ebe9]' : ''}`}
          >
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-amber-50 text-amber-600">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span>{award}</span>
          </li>
        ))}
      </ul>
    </CVSection>

    <CVSection icon={Users} title="Academic Service">
      <div className="divide-y divide-[#e5ebe9] border-y border-[#e5ebe9]">
        {VOLUNTEERING.map((service) => (
          <article
            key={`${service.event}-${service.date}`}
            className="grid gap-2 py-4 sm:grid-cols-[110px_minmax(0,1fr)_auto] sm:items-center sm:gap-6"
          >
            <time className="font-mono text-xs font-bold text-brand-700">{service.date}</time>
            <div>
              <h3 className="text-sm font-bold text-ink">{service.event}</h3>
              <p className="mt-1 text-sm text-muted">{service.role}</p>
            </div>
            <p className="inline-flex items-center gap-1.5 text-xs text-[#7a8887]">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {service.location}
            </p>
          </article>
        ))}
      </div>
    </CVSection>

    <CVSection icon={Languages} title="Languages & Training">
      <div className="grid border-y border-[#e5ebe9] md:grid-cols-2 md:divide-x md:divide-[#e5ebe9]">
        <div className="py-6 md:pr-8">
          <h3 className="text-sm font-bold uppercase text-[#7a8887]">Languages</h3>
          <dl className="mt-4 divide-y divide-[#edf1f0]">
            {languages.map((language) => (
              <div key={language.name} className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm font-semibold text-ink">{language.name}</dt>
                <dd className="text-sm text-muted">{language.level}</dd>
              </div>
            ))}
          </dl>
        </div>

        <article className="border-t border-[#e5ebe9] py-6 md:border-t-0 md:pl-8">
          <div className="flex items-center gap-2 text-sm font-bold uppercase text-[#7a8887]">
            <Globe2 className="h-4 w-4 text-brand-600" aria-hidden="true" />
            Additional Training
          </div>
          <p className="mt-4 text-sm font-semibold text-brand-700">Machine Learning Winter Programme</p>
          <h3 className="mt-1 text-lg font-bold text-ink">Girton College, Cambridge</h3>
          <p className="mt-1 font-mono text-xs text-[#7a8887]">Jan 2023 - Feb 2023</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Completed the programme with the assessed module in Machine Learning.
          </p>
        </article>
      </div>
    </CVSection>
  </div>
);

interface CVSectionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const CVSection: React.FC<CVSectionProps> = ({ icon: Icon, title, children }) => (
  <section className="grid gap-5 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-10">
    <div>
      <div className="flex items-center gap-2 text-brand-700">
        <Icon className="h-4 w-4" aria-hidden="true" />
        <h2 className="text-sm font-bold uppercase">{title}</h2>
      </div>
    </div>
    <div>{children}</div>
  </section>
);

export default CV;
