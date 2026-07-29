import React from 'react';
import { ExternalLink, MessageCircle, ShieldAlert, Sparkles } from 'lucide-react';
import PageHeader from '../PageHeader';

interface SpeakingTool {
  name: string;
  logo: string;
  screenshot: string;
  tagline: string;
  bestFor: string;
  highlights: string[];
  url: string;
  badge?: string;
  note?: string;
}

const SPEAKING_TOOLS: SpeakingTool[] = [
  {
    name: 'HelloTalk',
    logo: 'imgs/icon/language_learn/hellotalk_logo.png',
    screenshot: 'imgs/icon/language_learn/hellotalk_chatroom.avif',
    tagline: 'Find native speakers for one-to-one language exchange.',
    bestFor: 'Real-person conversation and sentence correction.',
    highlights: ['Native speakers', 'Voice messages', 'Corrections'],
    url: 'https://www.hellotalk.com/'
  },
  {
    name: 'Hilokal',
    logo: 'imgs/icon/language_learn/hilokal_logo.png',
    screenshot: 'imgs/optimized/recommendations/hilokal_chatroom.webp',
    tagline: 'Join topic-based live rooms and speak when ready.',
    bestFor: 'Low-pressure group speaking and listening.',
    highlights: ['Live rooms', 'Group practice', 'Listen first'],
    url: 'https://www.hilokal.com/'
  },
  {
    name: 'ChatGPT Live',
    logo: 'imgs/icon/language_learn/chatgpt_logo.png',
    screenshot: 'imgs/icon/language_learn/chatgpt_live_voice.webp',
    tagline: 'A full-duplex AI coach that listens and speaks at the same time.',
    bestFor: 'Anytime role-play, fluency drills, and instant feedback.',
    highlights: ['Full duplex', 'Fast response', 'Natural pauses & cues'],
    url: 'https://openai.com/index/introducing-gpt-live/',
    badge: 'Latest',
    note: 'Paid: GPT-Live-1 | Free: GPT-Live-1 mini. Rolling out on web and mobile.'
  }
];

const Recommendations: React.FC = () => {
  return (
    <div className="space-y-9">
      <PageHeader
        icon={Sparkles}
        eyebrow="Good picks"
        title="Recommendations"
        description="Useful tools, with only the key reasons to try them."
      />

      <section className="space-y-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-brand-700">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Speaking Practice
          </div>
          <h2 className="mt-2 text-2xl font-bold text-ink">Foreign-language conversation</h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Choose people for authentic exchange, voice rooms for exposure, or AI for practice anytime.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SPEAKING_TOOLS.map((tool) => (
            <article key={tool.name} className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white">
              <div className="border-b border-[#e8edeb] p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-line bg-[#f4f7f6] p-2">
                    <img
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-ink">{tool.name}</h3>
                      {tool.badge && (
                        <span className="rounded-md bg-brand-50 px-2 py-0.5 text-[11px] font-bold text-brand-700">{tool.badge}</span>
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-5 text-muted">{tool.tagline}</p>
                  </div>
                </div>
              </div>

              <div className="flex h-72 items-center justify-center border-b border-[#e8edeb] bg-[#eef2f1] p-4 md:h-64 xl:h-72">
                <img
                  src={tool.screenshot}
                  alt={`${tool.name} conversation interface`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="text-xs font-bold uppercase text-[#879492]">Best for</div>
                <p className="mt-1 text-sm leading-5 text-[#526263]">{tool.bestFor}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {tool.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-md border border-line bg-[#f7f9f8] px-2.5 py-1 text-xs font-medium text-[#627172]">
                      {highlight}
                    </span>
                  ))}
                </div>

                {tool.note && <p className="mt-3 text-xs leading-5 text-muted">{tool.note}</p>}

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                >
                  Official site
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flex gap-3 border-y border-amber-200 bg-amber-50 px-4 py-4">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
        <div>
          <h2 className="text-sm font-bold text-ink">Stay alert when talking to strangers</h2>
          <p className="mt-1 text-sm leading-6 text-[#526263]">
            Never send money or share identity, bank, address, workplace, or school details. Block and report suspicious requests.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Recommendations;
