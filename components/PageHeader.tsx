import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  aside?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  icon: Icon,
  eyebrow,
  title,
  description,
  aside,
}) => (
  <header className="border-b border-line pb-7">
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase text-brand-700">
          <Icon className="h-4 w-4" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
        <h1 className="text-3xl font-bold text-ink sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-muted sm:text-base">{description}</p>
      </div>
      {aside && <div className="w-full min-w-0 md:w-auto md:shrink-0">{aside}</div>}
    </div>
  </header>
);

export default PageHeader;
