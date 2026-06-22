import React from 'react';
import { CheckCircle2, MessageCircle, ShieldAlert, Sparkles } from 'lucide-react';

interface LanguageTool {
  name: string;
  logo: string;
  screenshot: string;
  tagline: string;
  bestFor: string;
  reasons: string[];
}

const LANGUAGE_TOOLS: LanguageTool[] = [
  {
    name: 'HelloTalk',
    logo: 'imgs/icon/language_learn/hellotalk_logo.png',
    screenshot: 'imgs/icon/language_learn/hellotalk_chatroom.avif',
    tagline: 'Language exchange through real conversations with native speakers.',
    bestFor: 'Daily one-to-one chat, voice messages, pronunciation correction, and finding long-term language partners.',
    reasons: [
      'It lowers the barrier to start speaking because text, voice notes, and calls can be mixed naturally.',
      'Correction-style interaction is useful when you want quick feedback from native speakers.',
      'The partner-matching model works well for building a lightweight daily speaking routine.'
    ]
  },
  {
    name: 'Hilokal',
    logo: 'imgs/icon/language_learn/hilokal_logo.png',
    screenshot: 'imgs/icon/language_learn/hilokal_chatroom.svg',
    tagline: 'Live voice rooms for joining lightweight speaking practice sessions.',
    bestFor: 'Low-pressure group speaking, listening practice, topic rooms, and getting used to spontaneous conversation.',
    reasons: [
      'Voice rooms are useful when you want more exposure than a single fixed language partner can provide.',
      'Topic-based rooms make it easier to practice practical scenarios instead of isolated textbook sentences.',
      'It is a good complement to one-to-one apps because you can listen first and speak when ready.'
    ]
  }
];

const SAFETY_NOTES = [
  'Do not transfer money, buy crypto, join investments, or pay for private coaching before verifying the person and the service.',
  'Keep conversations inside the platform until trust is established; be cautious with external links, QR codes, and file downloads.',
  'Avoid sharing passport, bank, address, workplace, school ID, or other sensitive personal information.',
  'Use block/report tools immediately if someone pressures you, asks for money, or pushes a relationship or business scheme too quickly.'
];

const Recommendations: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="border-b border-slate-200 pb-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <Sparkles className="h-3.5 w-3.5" />
              Good Picks
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Recommendations</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Personal notes on useful tools and products. The first topic is real-person speaking practice for foreign language learning.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <div className="text-2xl font-bold text-slate-900">{LANGUAGE_TOOLS.length}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">Language tools</div>
          </div>
        </div>
      </header>

      <section className="space-y-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            <MessageCircle className="h-4 w-4" />
            Real Conversation Practice
          </div>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">Foreign-language speaking practice apps</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
            These apps are most useful when treated as practice environments, not as miracle shortcuts. Set a small routine, prepare a few topics,
            and review new phrases after each conversation.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {LANGUAGE_TOOLS.map((tool) => (
            <article key={tool.name} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-2">
                    <img src={tool.logo} alt={`${tool.name} logo`} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{tool.name}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{tool.tagline}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4">
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                  <img src={tool.screenshot} alt={`${tool.name} conversation interface`} className="w-full object-contain" loading="lazy" />
                </div>
              </div>

              <div className="space-y-5 p-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Best for</div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{tool.bestFor}</p>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Why I recommend it</div>
                  <ul className="mt-3 space-y-2">
                    {tool.reasons.map((reason) => (
                      <li key={reason} className="flex gap-2 text-sm leading-6 text-slate-600">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-amber-200 bg-white text-amber-600">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Scam safety reminder</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Language exchange is useful, but it also involves strangers. Keep a clear boundary and treat unusual requests as risk signals.
            </p>
            <ul className="mt-3 grid gap-2 md:grid-cols-2">
              {SAFETY_NOTES.map((note) => (
                <li key={note} className="rounded-lg border border-amber-200 bg-white/70 px-3 py-2 text-sm leading-6 text-slate-700">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recommendations;
