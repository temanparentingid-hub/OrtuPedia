/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  AlertCircle, 
  Compass, 
  BookOpen, 
  Heart,
  X,
  RefreshCw 
} from 'lucide-react';
import { PHASES_DATA } from '../data/phasesData';
import { ARTICLES_DATA } from '../data/articlesData';
import { PhaseData, Article } from '../types';

interface HomeViewProps {
  onNavigateToTab: (tab: 'phases' | 'articles' | 'about') => void;
  onSelectPhase: (phase: PhaseData) => void;
  onSelectArticle: (article: Article) => void;
}

export default function HomeView({ onNavigateToTab, onSelectPhase, onSelectArticle }: HomeViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [deboggledQuery, setDeboggledQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<{
    phases: PhaseData[];
    articles: Article[];
  }>({ phases: [], articles: [] });

  const quickKeywords = [
    'MPASI',
    'hospital bag',
    'doa 4 bulan',
    'tasyakuran',
    'tummy time',
    'toilet training',
    'tantrum',
    'imunisasi',
    'makanan ibu hamil',
    'newborn',
    'screen time'
  ];

  // Simulated typing delay/Loader to fulfill "Loading state sederhana"
  useEffect(() => {
    if (!searchQuery.trim()) {
      setDeboggledQuery('');
      setSearchResults({ phases: [], articles: [] });
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const handler = setTimeout(() => {
      setDeboggledQuery(searchQuery.trim().toLowerCase());
    }, 450);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Execute search queries
  useEffect(() => {
    if (!deboggledQuery) {
      setSearchResults({ phases: [], articles: [] });
      setIsSearching(false);
      return;
    }

    // Filter Phases
    const matchedPhases = PHASES_DATA.filter((phase) => {
      const titleMatch = phase.title.toLowerCase().includes(deboggledQuery);
      const summaryMatch = phase.summary.toLowerCase().includes(deboggledQuery);
      const ringkasanMatch = phase.ringkasan.toLowerCase().includes(deboggledQuery);
      const doatradisiMatch = phase.doaTradisi?.judul.toLowerCase().includes(deboggledQuery) || 
                            phase.doaTradisi?.keterangan.toLowerCase().includes(deboggledQuery);
      const makananMatch = phase.makananDisarankan.some(
        food => food.nama.toLowerCase().includes(deboggledQuery) || food.manfaat.toLowerCase().includes(deboggledQuery)
      );
      const checklistMatch = phase.perluDilakukan.some(x => x.toLowerCase().includes(deboggledQuery)) ||
                             phase.perluDipersiapkan.some(x => x.toLowerCase().includes(deboggledQuery));

      return titleMatch || summaryMatch || ringkasanMatch || doatradisiMatch || makananMatch || checklistMatch;
    });

    // Filter Articles
    const matchedArticles = ARTICLES_DATA.filter((article) => {
      const titleMatch = article.title.toLowerCase().includes(deboggledQuery);
      const excerptMatch = article.excerpt.toLowerCase().includes(deboggledQuery);
      const contentMatch = article.content.toLowerCase().includes(deboggledQuery);
      const categoryMatch = article.category.toLowerCase().includes(deboggledQuery);

      return titleMatch || excerptMatch || contentMatch || categoryMatch;
    });

    // Add brief additional delay to let users see the clean Loading skeleton
    const loaderTimer = setTimeout(() => {
      setSearchResults({
        phases: matchedPhases,
        articles: matchedArticles
      });
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(loaderTimer);
  }, [deboggledQuery]);

  const handleApplyKeyword = (keyword: string) => {
    setSearchQuery(keyword);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setDeboggledQuery('');
    setSearchResults({ phases: [], articles: [] });
  };

  const hasResults = searchResults.phases.length > 0 || searchResults.articles.length > 0;

  return (
    <div className="space-y-8 pb-24">
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-brand-mint/60 p-6 shadow-sm border border-brand-mint/25">
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-teal/10 blur-xl"></div>
        <div className="relative">
          <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-brand-teal shadow-2xs">
            <Heart className="h-3 w-3 fill-brand-teal" /> Teman Terbaik Moms & Dads
          </div>
          <h1 className="font-display text-2xl font-black text-brand-dark leading-tight">
            Panduan praktis untuk Moms & Dads dari hamil sampai anak balita.
          </h1>
          <p className="mt-2.5 text-sm leading-relaxed text-brand-dark-light">
            Pilih fase parenting yang sedang dijalani, lalu baca panduan sederhana tentang apa yang perlu dilakukan, dipersiapkan, dimakan, dan diperhatikan.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigateToTab('phases')}
              className="flex items-center gap-2 rounded-2xl bg-brand-teal px-5 py-3 text-sm font-bold text-white shadow-md shadow-brand-teal/20 transition-all hover:bg-brand-teal-hover hover:shadow-lg active:scale-95"
            >
              Mulai Baca Panduan
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Central Search Section */}
      <section className="space-y-4">
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-brand-mint/10">
          <h3 className="font-display text-base font-bold text-brand-dark mb-1">
            Cari Informasi Cepat
          </h3>
          <p className="text-xs text-brand-dark-light/80 mb-4">
            Masukkan kata kunci apa saja seputar buah hati Anda.
          </p>
          
          {/* Input text-field wrapper */}
          <div className="relative flex items-center">
            <Search className="absolute left-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari MPASI, toilet training, tantrum..."
              className="w-full rounded-2xl border border-gray-100 bg-brand-offwhite py-3.5 pl-12 pr-10 text-sm leading-relaxed text-brand-dark placeholder:text-gray-400 focus:border-brand-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                aria-label="Bersihkan pencarian"
                className="absolute right-4 text-gray-400 hover:text-brand-dark active:scale-90"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Quick Keywords Carousel / Wrap */}
          <div className="mt-4">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-teal mb-2">
              KATA KUNCI POPULER:
            </span>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto no-scrollbar py-1">
              {quickKeywords.map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => handleApplyKeyword(keyword)}
                  className={`rounded-xl px-3 py-1.5 text-xs transition-all active:scale-95 ${
                    searchQuery.toLowerCase() === keyword.toLowerCase()
                      ? 'bg-brand-teal text-white font-semibold'
                      : 'bg-brand-offwhite border border-brand-mint/10 text-brand-dark-light hover:bg-brand-mint/40 hover:text-brand-teal'
                  }`}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH OUTPUT REGION */}
      {searchQuery.trim() !== '' && (
        <section className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark-light">
              Hasil untuk &quot;{searchQuery}&quot;
            </h4>
            <button 
              onClick={handleClearSearch}
              className="text-xs text-brand-teal font-semibold hover:underline"
            >
              Tutup Hasil
            </button>
          </div>

          {/* LOADING STATE - Simulated skeleton loader */}
          {isSearching ? (
            <div className="space-y-3 py-4 text-center rounded-3xl bg-white p-6 shadow-xs border border-brand-mint/10">
              <div className="mx-auto flex h-10 w-10 animate-spin items-center justify-center rounded-full text-brand-teal">
                <RefreshCw className="h-6 w-6" />
              </div>
              <p className="text-xs text-brand-dark-light font-medium mt-1">
                Sedang memindai database kesehatan & panduan membaca...
              </p>
              {/* Skeleton Cards */}
              <div className="mt-4 space-y-2 opacity-40">
                <div className="h-12 w-full bg-slate-100 rounded-xl animate-pulse"></div>
                <div className="h-12 w-full bg-slate-100 rounded-xl animate-pulse"></div>
              </div>
            </div>
          ) : !hasResults ? (
            /* EMPTY STATE jika tidak ditemukan */
            <div className="rounded-3xl border border-dashed border-brand-dark-light/20 bg-white p-8 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-cream text-amber-600 shadow-xs">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h5 className="font-display font-bold text-brand-dark text-base">
                Hasil Tidak Ditemukan
              </h5>
              <p className="mt-1 pb-2 text-xs leading-relaxed text-brand-dark-light">
                Maaf, kami tidak dapat menemukan panduan khusus untuk kata kunci tersebut. Coba gunakan istilah populer seperti <span className="font-bold text-brand-teal">MPASI</span>, <span className="font-bold text-brand-teal">tantrum</span>, atau <span className="font-bold text-brand-teal">hospital bag</span>.
              </p>
              <button
                onClick={handleClearSearch}
                className="mt-2 text-xs font-bold text-teal-800 bg-brand-mint px-4 py-2 rounded-xl active:scale-95 transition-all"
              >
                Atur Ulang Pencarian
              </button>
            </div>
          ) : (
            /* ACTUAL MATCHES STATE */
            <div className="space-y-3">
              {/* Phases Matches */}
              {searchResults.phases.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => onSelectPhase(phase)}
                  className="w-full text-left flex items-start gap-3.5 rounded-2xl bg-white border border-brand-mint/10 p-4 shadow-xs transition-all hover:bg-brand-mint/20 active:scale-98"
                >
                  <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-mint text-brand-teal`}>
                    <Compass className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-brand-teal bg-brand-mint px-1.5 py-0.25 rounded">
                        Fase Parenting
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">{phase.ageRange}</span>
                    </div>
                    <h5 className="font-display text-sm font-bold text-brand-dark mt-0.5">
                      Panduan Lengkap - {phase.title}
                    </h5>
                    <p className="text-xs text-brand-dark-light mt-1 line-clamp-1">
                      {phase.summary}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-brand-teal self-center" />
                </button>
              ))}

              {/* Articles Matches */}
              {searchResults.articles.map((article) => (
                <button
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="w-full text-left flex items-start gap-3.5 rounded-2xl bg-white border border-brand-mint/10 p-4 shadow-xs transition-all hover:bg-brand-mint/20 active:scale-98"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-cream text-amber-700">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-amber-700 bg-brand-cream px-1.5 py-0.25 rounded">
                        Artikel Praktis
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">BACA {article.readTime}</span>
                    </div>
                    <h5 className="font-display text-sm font-bold text-brand-dark mt-0.5">
                      {article.title}
                    </h5>
                    <p className="text-xs text-brand-dark-light mt-1 line-clamp-1">
                      {article.excerpt}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-brand-teal self-center" />
                </button>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Brief Hub features */}
      <section className="space-y-4">
        <h3 className="font-display text-base font-bold text-brand-dark">
          Jelajahi Bersama Teman Parenting
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onNavigateToTab('phases')}
            className="rounded-3xl bg-white p-5 text-left border border-brand-mint/10 shadow-xs hover:border-brand-teal transition-all active:scale-98"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-mint text-brand-teal">
              <Compass className="h-5 w-5" />
            </div>
            <h4 className="font-display text-sm font-bold text-brand-dark leading-tight">
              Pilih Fase
            </h4>
            <p className="mt-1 text-[11px] leading-relaxed text-brand-dark-light">
              Mulai dari kehamilan semester 1 hingga balita umur 5 tahun.
            </p>
          </button>

          <button
            onClick={() => onNavigateToTab('articles')}
            className="rounded-3xl bg-white p-5 text-left border border-brand-mint/10 shadow-xs hover:border-brand-teal transition-all active:scale-98"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cream text-amber-800">
              <BookOpen className="h-5 w-5" />
            </div>
            <h4 className="font-display text-sm font-bold text-brand-dark leading-tight">
              Artikel Praktis
            </h4>
            <p className="mt-1 text-[11px] leading-relaxed text-brand-dark-light">
              Tips ringkas, resep mual kehamilan, nutrisi laktasi, & MPASI.
            </p>
          </button>
        </div>
      </section>

      {/* Quick Warming Prompt Quote */}
      <section className="rounded-3xl bg-brand-cream/35 p-5 text-center border border-brand-cream/30">
        <p className="text-xs italic text-brand-dark-light leading-relaxed">
          &quot;Tidak ada orang tua yang sempurna, namun setiap ikhtiar Moms & Dads adalah pelukan cinta tak bersyarat bagi si buah hati.&quot;
        </p>
      </section>

      {/* Tiny Bottom Disclaimer */}
      <div className="text-center">
        <p className="text-[10px] text-brand-dark-light/65 uppercase tracking-wide leading-relaxed">
          Disclaimer Edukatif
        </p>
        <p className="mx-auto mt-1 max-w-xs text-[10px] leading-relaxed text-brand-dark-light/65">
          Konten OrtuPedia bersifat edukatif umum dan tidak menggantikan konsultasi medis terpercaya dengan dokter, bidan, psikolog, ahli gizi, konselor laktasi, atau profesional terkait secara langsung.
        </p>
      </div>
    </div>
  );
}
