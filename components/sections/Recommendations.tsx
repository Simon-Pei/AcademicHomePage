import React from 'react';
import { ExternalLink, MessageCircle, ShieldAlert, Sparkles } from 'lucide-react';

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
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-6">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase text-emerald-700">
          <Sparkles className="h-4 w-4" />
          Good Picks
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Recommendations</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">Useful tools, with only the key reasons to try them.</p>
      </header>

      <section className="space-y-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-400">
            <MessageCircle className="h-4 w-4" />
            Speaking Practice
          </div>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">Foreign-language conversation</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">Choose people for authentic exchange, voice rooms for exposure, or AI for practice anytime.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SPEAKING_TOOLS.map((tool) => (
            <article key={tool.name} className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-2">
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
                      <h4 className="text-lg font-bold text-slate-900">{tool.name}</h4>
                      {tool.badge && (
                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">{tool.badge}</span>
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-5 text-slate-500">{tool.tagline}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-3">
                <div className="flex h-64 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white p-3 sm:h-72 xl:h-64">
                  <img
                    src={tool.screenshot}
                    alt={`${tool.name} conversation interface`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="text-xs font-semibold uppercase text-slate-400">Best for</div>
                <p className="mt-1 text-sm leading-5 text-slate-600">{tool.bestFor}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {tool.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
                      {highlight}
                    </span>
                  ))}
                </div>

                {tool.note && <p className="mt-3 text-xs leading-5 text-slate-500">{tool.note}</p>}

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-800"
                >
                  Official site
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
        <div>
          <h3 className="text-sm font-bold text-slate-900">Stay alert when talking to strangers</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Never send money or share identity, bank, address, workplace, or school details. Block and report suspicious requests.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Recommendations;
