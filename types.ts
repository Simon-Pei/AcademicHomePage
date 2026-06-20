export enum Section {
  ABOUT = 'about',
  PUBLICATIONS = 'publications',
  CV = 'cv',
  HARDWARE = 'hardware',
  GALLERY = 'gallery',
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  awards?: string;
  type: 'conference' | 'journal' | 'poster';
  doi?: string;
  pdf?: string;
  image?: string;
  tags?: string[];
  hardware?: Array<{
    id: string;
    name: string;
  }>;
  highlight?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location?: string;
  details: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  tag?: string;
}

export interface NewsItem {
  date: string;
  title: string;
  description: string;
  highlight?: boolean;
}
