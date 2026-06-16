/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PhaseData {
  id: string;
  title: string;
  category: 'kehamilan' | 'bayi' | 'balita';
  ageRange: string;
  summary: string;
  bgColor: string; // Tailwind bg class for decorative accents
  textColor: string; // Tailwind text class for contrast
  
  // Structured content Sections:
  ringkasan: string;
  fokusPoin: string[];
  perluDilakukan: string[];
  perluDipersiapkan: string[];
  makananDisarankan: {
    nama: string;
    manfaat: string;
  }[];
  halDihindari: string[];
  kapanKonsultasi: string[];
  
  // Optional Religious/Traditions content:
  doaTradisi?: {
    judul: string;
    teksArab?: string;
    teksLatin?: string;
    arti?: string;
    keterangan: string;
  };
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Kehamilan' | 'Melahirkan' | 'Newborn' | 'Bayi' | 'MPASI' | 'Balita' | 'Nutrisi' | 'Doa & Tradisi' | 'Tumbuh Kembang';
  readTime: string;
  author: string;
  iconName: string; // Lucide icon mapping
}

export type ActiveTab = 'home' | 'phases' | 'articles' | 'about';
