import React, { useMemo, useState } from 'react';
import { PUBLICATIONS } from '../../constants';
import { Cpu, ExternalLink, Layers3 } from 'lucide-react';
import PageHeader from '../PageHeader';

const MEDAL_ICON = 'imgs/icon/medal.png';

interface PublicationsProps {
  onHardwareSelect?: (hardwareId: string) => void;
}

type PublicationFilter = 'all' | 'conference' | 'journal' | 'highlight';

const Publications: React.FC<PublicationsProps> = ({ onHardwareSelect }) => {
  const [filter, setFilter] = useState<PublicationFilter>('all');

  const filteredPubs = useMemo(() => {
    if (filter === 'all') return PUBLICATIONS;
    if (filter === 'highlight') return PUBLICATIONS.filter((publication) => publication.highlight);
    return PUBLICATIONS.filter((publication) => publication.type === filter);
  }, [filter]);

  const sortedPubs = useMemo(() => {
    const originalOrder = new Map(PUBLICATIONS.map((publication, index) => [publication.id, index]));
    return [...filteredPubs].sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return (originalOrder.get(a.id) ?? 0) - (originalOrder.get(b.id) ?? 0);
    });
  }, [filteredPubs]);

  const pubsByYear = useMemo(() => {
    const groups = new Map<number, typeof PUBLICATIONS>();
    sortedPubs.forEach((publication) => {
      const group = groups.get(publication.year) ?? [];
      group.push(publication);
      groups.set(publication.year, group);
    });
    return Array.from(groups.entries());
  }, [sortedPubs]);

  const counts = {
    all: PUBLICATIONS.length,
    highlight: PUBLICATIONS.filter((publication) => publication.highlight).length,
    conference: PUBLICATIONS.filter((publication) => publication.type === 'conference').length,
    journal: PUBLICATIONS.filter((publication) => publication.type === 'journal').length,
  };

  const awardTags = new Set(['Best Paper Nomination', 'Best Paper Honorable Mention']);
  const filters: Array<{ id: PublicationFilter; label: string; count: number }> = [
    { id: 'all', label: 'All', count: counts.all },
    { id: 'highlight', label: 'Selected', count: counts.highlight },
    { id: 'conference', label: 'Conference', count: counts.conference },
    { id: 'journal', label: 'Journal', count: counts.journal },
  ];

  return (
    <div className="space-y-9">
      <PageHeader
        icon={Layers3}
        eyebrow="Research output"
        title="Publications"
        description="Research in augmented reality, human-AI interaction, and multimodal systems."
        aside={
          <div
            className="flex w-fit max-w-full overflow-x-auto rounded-md border border-[#cfdad7] bg-white p-1"
            role="group"
            aria-label="Filter publications"
          >
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                aria-pressed={filter === item.id}
                className={`flex shrink-0 items-center gap-1.5 rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
                  filter === item.id
                    ? 'bg-brand-700 text-white'
                    : 'text-[#647374] hover:bg-[#f0f4f3] hover:text-[#243536]'
                }`}
              >
                {item.label}
                <span className={filter === item.id ? 'text-brand-100' : 'text-[#97a3a1]'}>{item.count}</span>
              </button>
            ))}
          </div>
        }
      />

      <div className="space-y-10">
        <>
          {sortedPubs.length === 0 ? (
            <div className="py-12 text-center text-sm text-[#7c8a89]">
              No publications found in this category.
            </div>
          ) : (
            pubsByYear.map(([year, publications]) => (
              <section
                key={year}
                className="page-enter space-y-4"
              >
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-ink">{year}</h2>
                  <div className="h-px flex-1 bg-line" />
                  <span className="text-xs font-medium text-[#83918f]">
                    {publications.length} {publications.length === 1 ? 'work' : 'works'}
                  </span>
                </div>

                <div className="space-y-4">
                  {publications.map((publication) => (
                    <article
                      key={publication.id}
                      className={`relative overflow-hidden rounded-lg border bg-white transition-colors ${
                        publication.highlight
                          ? 'border-brand-300'
                          : 'border-[#dce5e2] hover:border-[#b9cac6]'
                      }`}
                    >
                      {publication.highlight && (
                        <span className="absolute inset-y-0 left-0 w-1 bg-brand-600" aria-hidden="true" />
                      )}

                      <div className={`grid ${publication.image ? 'md:grid-cols-[230px_minmax(0,1fr)]' : ''}`}>
                        {publication.image && (
                          <div className="flex min-h-44 items-center justify-center border-b border-[#e4ebe9] bg-[#f1f5f4] p-5 md:border-b-0 md:border-r">
                            <img
                              src={publication.image}
                              alt={`${publication.title} research figure`}
                              loading="lazy"
                              decoding="async"
                              className="aspect-video w-full object-contain"
                            />
                          </div>
                        )}

                        <div className="min-w-0 p-5 sm:p-6">
                          <p className="max-w-3xl text-xs font-bold leading-5 text-brand-700">
                            {publication.venue}
                          </p>

                          {publication.pdf ? (
                            <a
                              href={publication.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/title mt-2 inline-flex items-start gap-2 text-lg font-bold leading-snug text-[#1d2c2d] transition-colors hover:text-brand-800 sm:text-xl"
                            >
                              <span>{publication.title}</span>
                              <ExternalLink
                                className="mt-1 h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover/title:opacity-100"
                                aria-hidden="true"
                              />
                            </a>
                          ) : (
                            <h3 className="mt-2 text-lg font-bold leading-snug text-[#1d2c2d] sm:text-xl">{publication.title}</h3>
                          )}

                          <p className="mt-2 text-sm leading-6 text-[#627172]">
                            {publication.authors.split(', ').map((author, index) => (
                              <React.Fragment key={`${publication.id}-${author}-${index}`}>
                                <span
                                  className={
                                    author.includes('Yunqiang Pei')
                                      ? 'font-bold text-[#263536] underline decoration-brand-400 decoration-2 underline-offset-2'
                                      : ''
                                  }
                                >
                                  {author}
                                </span>
                                {index < publication.authors.split(', ').length - 1 ? ', ' : ''}
                              </React.Fragment>
                            ))}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {publication.tags?.map((tag) => {
                              const isAward = awardTags.has(tag);
                              return (
                                <span
                                  key={`${publication.id}-${tag}`}
                                  className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium ${
                                    isAward
                                      ? 'border-amber-200 bg-amber-50 text-amber-800'
                                      : 'border-[#d7e0de] bg-[#f7f9f8] text-[#627172]'
                                  }`}
                                >
                                  {isAward && (
                                    <img
                                      src={MEDAL_ICON}
                                      alt=""
                                      aria-hidden="true"
                                      loading="lazy"
                                      decoding="async"
                                      className="h-3.5 w-3.5 object-contain"
                                    />
                                  )}
                                  {tag}
                                </span>
                              );
                            })}
                          </div>

                          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#edf1f0] pt-4">
                            {publication.pdf && (
                              <a
                                href={publication.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-md bg-brand-700 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                              >
                                Open paper
                                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                              </a>
                            )}

                            {publication.hardware?.map((device) => (
                              <button
                                key={`${publication.id}-${device.id}`}
                                type="button"
                                onClick={() => onHardwareSelect?.(device.id)}
                                className="inline-flex items-center gap-1.5 rounded-md border border-[#cfdad7] bg-white px-3 py-1.5 text-xs font-semibold text-[#526263] transition-colors hover:border-brand-400 hover:bg-brand-50 hover:text-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                                title={`Open ${device.name} in Research Hardware`}
                              >
                                <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
                                {device.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))
          )}
        </>
      </div>
    </div>
  );
};

export default Publications;
