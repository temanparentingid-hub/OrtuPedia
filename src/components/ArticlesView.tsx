/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  User, 
  Share2, 
  Sparkles,
  BookmarkCheck,
  ChevronRight,
  Lock
} from 'lucide-react';
import { ARTICLES_DATA } from '../data/articlesData';
import { Article } from '../types';

interface ArticlesViewProps {
  selectedArticle: Article | null;
  onSelectArticle: (article: Article | null) => void;
  isUnlocked?: boolean;
  onOpenActivate?: () => void;
}

export default function ArticlesView({ 
  selectedArticle, 
  onSelectArticle,
  isUnlocked = false,
  onOpenActivate
}: ArticlesViewProps) {
  const [filter, setFilter] = useState<string>('Semua');

  // Helper to parse line for bold formatting (e.g. **bold**) and italic (e.g. *italic*)
  const renderFormattedText = (text: string) => {
    // First, let's process bold tags `**`
    const boldParts = text.split('**');
    return boldParts.map((bPart, bIdx) => {
      if (bIdx % 2 === 1) {
        // This is inside **bold**
        return (
          <strong key={`b-${bIdx}`} className="font-extrabold text-brand-dark">
            {bPart}
          </strong>
        );
      }
      
      // Inside plain text, check for single '*' representing italic strings
      const italicParts = bPart.split('*');
      if (italicParts.length > 1) {
        return italicParts.map((iPart, iIdx) => {
          if (iIdx % 2 === 1) {
            return (
              <em key={`i-${iIdx}`} className="italic font-medium text-brand-dark/90">
                {iPart}
              </em>
            );
          }
          return iPart;
        });
      }

      return bPart;
    });
  };

  const categories = [
    'Semua',
    'Kehamilan',
    'Melahirkan',
    'Newborn',
    'Bayi',
    'MPASI',
    'Balita',
    'Nutrisi',
    'Doa & Tradisi'
  ];

  const filteredArticles = filter === 'Semua' 
    ? ARTICLES_DATA 
    : ARTICLES_DATA.filter(article => article.category === filter);

  // Determine lock state
  const selectedArticleIndex = selectedArticle 
    ? ARTICLES_DATA.findIndex(art => art.id === selectedArticle.id)
    : -1;
  const isSelectedArticleLocked = !isUnlocked && selectedArticleIndex >= 8;

  // If a single article is clicked, render the clean detailed Reader View
  if (selectedArticle) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 pb-24">
        {/* Navigation Bar */}
        <div className="mb-6 flex items-center gap-3">
          <button
            onClick={() => onSelectArticle(null)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-dark shadow-sm hover:bg-brand-mint hover:text-brand-teal transition-all active:scale-95"
            aria-label="Kembali ke daftar artikel"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-brand-cream px-2 py-0.5 rounded-full inline-block">
              {selectedArticle.category}
            </span>
            <span className="text-xs text-gray-400 font-medium ml-2">
              {selectedArticle.readTime} Bacaan
              {isSelectedArticleLocked && " • 🔒 Premium"}
            </span>
          </div>
        </div>

        {/* Article Reader Canvas */}
        <article className="rounded-3xl bg-white p-6 shadow-sm border border-brand-mint/5 overflow-hidden">
          <h2 className="font-display text-2xl font-black text-brand-dark leading-snug">
            {selectedArticle.title}
          </h2>
          
          <div className="mt-4 flex items-center gap-3 border-b border-gray-100 pb-4 text-xs text-brand-dark-light">
            <div className="flex items-center gap-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-mint text-brand-teal text-[10px] font-bold">
                TP
              </div>
              <span className="font-semibold text-brand-dark">{selectedArticle.author}</span>
            </div>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span>Medically Reviewed</span>
          </div>

          <div className="mt-6 text-sm leading-relaxed text-brand-dark-light space-y-4">
            {isSelectedArticleLocked ? (
              <>
                {/* Solitary preview paragraph shown as a free preview tease */}
                <div className="space-y-1.5 text-brand-dark-dt">
                  {(selectedArticle.content.split('\n\n')[0] || '').split('\n').map((line, lineIdx) => {
                    const trimmed = line.trim();
                    const isBullet = trimmed.startsWith('-');
                    const isNumbered = /^\d+\.\s/.test(trimmed);

                    return (
                      <div 
                        key={lineIdx} 
                        className={`leading-relaxed whitespace-pre-wrap ${
                          isBullet ? 'pl-5 relative my-1' : isNumbered ? 'pl-5 relative my-1' : ''
                        }`}
                      >
                        {isBullet && (
                          <span className="absolute left-1.5 top-2.5 h-1.5 w-1.5 rounded-full bg-brand-teal" />
                        )}
                        {isNumbered && (
                          <span className="absolute left-0 top-0 font-bold text-brand-teal text-xs">
                            {trimmed.match(/^(\d+)\./)?.[1]}.
                          </span>
                        )}
                        
                        <span>
                          {renderFormattedText(
                            isBullet 
                              ? trimmed.replace(/^-\s*/, '') 
                              : isNumbered 
                                ? trimmed.replace(/^\d+\.\s*/, '') 
                                : line
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Blurry text placeholder simulation under absolute lock overlay */}
                <div className="relative pt-4 mt-4 border-t border-dashed border-brand-mint/10">
                  <div className="filter blur-[5px] select-none pointer-events-none opacity-20 space-y-4">
                    <p className="font-bold">Berikut ini adalah kelanjutan dari poin penting di atas:</p>
                    <p>1. Memastikan kebutuhan gizi harian anak terpenuhi secara lengkap dan seimbang dengan memperbanyak asupan protein hewani esensial.</p>
                    <p>2. Menjadwalkan waktu istirahat yang teratur dan konsisten untuk mengoptimalkan sekresi hormon pertumbuhan si kecil.</p>
                    <p>3. Selalu melakukan koordinasi aktif bersama tenaga medis atau posyandu terdekat untuk pemantauan kurva berat badan.</p>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-t from-white via-white/95 to-transparent">
                    <div className="mb-2.5 shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-brand-cream text-teal-800 border border-brand-cream/80 shadow-3xs">
                      <Lock className="h-5 w-5" />
                    </div>
                    
                    <h4 className="text-sm font-black text-brand-dark">
                      Konten Premium Terkunci 🔒
                    </h4>
                    
                    <p className="text-[11.5px] leading-relaxed max-w-[280px] mt-1.5 mb-4 text-brand-dark-light/95">
                      Dapatkan akses instan ke seluruh <strong>50+ artikel mendalam</strong> OrtuPedia selamanya hanya dengan <strong className="text-teal-800 font-extrabold text-xs">Rp 24.000</strong>!
                    </p>
                    
                    <button
                      onClick={onOpenActivate}
                      className="rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs py-2 px-4 shadow-sm active:scale-98 cursor-pointer transition-all duration-300 hover:shadow-md"
                    >
                      Buka Akses Premium
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Convert content paragraphs with elegant list item detection & markdown bold parsing */
              selectedArticle.content.split('\n\n').map((paragraph, index) => {
                const lines = paragraph.split('\n');
                return (
                  <div key={index} className="space-y-1.5 text-brand-dark-dt">
                    {lines.map((line, lineIdx) => {
                      const trimmed = line.trim();
                      const isBullet = trimmed.startsWith('-');
                      const isNumbered = /^\d+\.\s/.test(trimmed);

                      return (
                        <div 
                          key={lineIdx} 
                          className={`leading-relaxed whitespace-pre-wrap ${
                            isBullet ? 'pl-5 relative my-1' : isNumbered ? 'pl-5 relative my-1' : ''
                          }`}
                        >
                          {isBullet && (
                            <span className="absolute left-1.5 top-2.5 h-1.5 w-1.5 rounded-full bg-brand-teal" />
                          )}
                          {isNumbered && (
                            <span className="absolute left-0 top-0 font-bold text-brand-teal text-xs">
                              {trimmed.match(/^(\d+)\./)?.[1]}.
                            </span>
                          )}
                          
                          <span>
                            {renderFormattedText(
                              isBullet 
                                ? trimmed.replace(/^-\s*/, '') 
                                : isNumbered 
                                  ? trimmed.replace(/^\d+\.\s*/, '') 
                                  : line
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })
            )}
          </div>

          {/* Supportive Prompt footer */}
          <div className="mt-8 rounded-2xl bg-brand-mint/20 p-4 text-xs text-brand-dark-light border border-brand-mint/10">
            <div className="flex items-start gap-2.5">
              <BookmarkCheck className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-brand-teal">Catatan Teman Parenting</p>
                <p className="mt-1 leading-relaxed text-[11.5px]">
                  {isSelectedArticleLocked 
                    ? 'Buka akses premium sekarang untuk melengkapi khazanah keilmuan dan tuntunan eksklusif OrtuPedia.' 
                    : 'Artikel di atas sengaja diringkas secara praktis agar Moms & Dads tidak kelebihan informasi (information overload). Jika Moms ragu mengenai keluhan khusus, silakan mengkonsultasikannya kepada profesional medis.'}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Educational Disclaimer Bottom Card */}
        <div className="mt-6 rounded-2xl border border-dashed border-brand-dark-light/20 p-4 text-center text-xs text-brand-dark-light/85">
          <p className="leading-relaxed">
            📢 <strong>Disclaimer:</strong> Konten OrtuPedia berfokus pada panduan praktis dan edukasi umum. Tidak menggantikan konsultasi langsung dengan dokter, bidan, psikolog, atau ahli gizi Anda.
          </p>
        </div>
      </div>
    );
  }

  // Otherwise, render full filterable directory grid
  return (
    <div className="space-y-6 pb-24">
      {/* Search Header */}
      <div>
        <h3 className="font-display text-xl font-black text-brand-dark">
          Pustaka Artikel Pendek
        </h3>
        <p className="text-xs text-brand-dark-light/95">
          Kumpulan tips singkat dan ramah keluarga yang disusun praktis dan padat.
        </p>
      </div>

      {/* Horizontal categories list */}
      <div className="flex gap-1.5 overflow-x-auto pb-2.5 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
              filter === cat
                ? 'bg-brand-teal text-white shadow-sm shadow-brand-teal/15 scale-105'
                : 'bg-white border border-brand-mint/10 text-brand-dark-light hover:bg-brand-mint/30 hover:text-brand-teal'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Cards list */}
      <div className="space-y-4">
        {filteredArticles.map((article) => {
          const articleIndex = ARTICLES_DATA.findIndex(art => art.id === article.id);
          const isArticleLocked = !isUnlocked && articleIndex >= 8;

          return (
            <button
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="w-full text-left flex items-start gap-4 rounded-3xl bg-white border border-brand-mint/15 p-5 shadow-xs transition-all hover:bg-brand-mint/5 hover:border-brand-teal/20 hover:shadow-xs group duration-200"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-cream/60 text-amber-800 transition-all group-hover:scale-105">
                <BookOpen className="h-5 w-5" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[9px] font-black uppercase tracking-wider text-amber-700 bg-brand-cream px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium">
                    {article.readTime} Baca
                  </span>
                  {isArticleLocked && (
                    <span className="text-[9px] font-bold text-teal-800 bg-brand-mint px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                      <Lock className="h-2 w-2" /> Premium
                    </span>
                  )}
                </div>
                <h4 className="font-display text-sm font-bold text-brand-dark mt-1.5 leading-snug group-hover:text-brand-teal transition-colors">
                  {article.title}
                </h4>
                <p className="mt-1 text-xs text-brand-dark-light/95 line-clamp-2">
                  {article.excerpt}
                </p>
              </div>

              {isArticleLocked ? (
                <Lock className="h-4 w-4 text-brand-dark-light/40 self-center shrink-0" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-400 self-center transition-transform group-hover:translate-x-0.5 shrink-0" />
              )}
            </button>
          );
        })}

        {filteredArticles.length === 0 && (
          <div className="rounded-3xl border border-dashed border-brand-dark-light/20 bg-white p-8 text-center py-12">
            <p className="text-sm text-brand-dark-light">
              Belum ada artikel di kategori <span className="font-bold text-brand-teal">{filter}</span>.
            </p>
            <button
              onClick={() => setFilter('Semua')}
              className="mt-3 text-xs font-bold text-brand-teal hover:underline"
            >
              Kembali ke Semua Artikel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
