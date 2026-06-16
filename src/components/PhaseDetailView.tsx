/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ArrowLeft, 
  Target, 
  Sparkles, 
  Package, 
  Utensils, 
  AlertOctagon, 
  Heart, 
  PlusCircle, 
  Stethoscope, 
  BookOpen, 
  Award,
  BookMarked,
  Lock
} from 'lucide-react';
import { PhaseData } from '../types';

interface PhaseDetailViewProps {
  phase: PhaseData;
  onBack: () => void;
  isUnlocked: boolean;
  onOpenActivate: () => void;
}

interface LockedSectionWrapperProps {
  id: string;
  isUnlocked: boolean;
  sectionTitle: string;
  onOpenActivate: () => void;
  children: React.ReactNode;
  bgClassName?: string;
}

function LockedSectionWrapper({ 
  id, 
  isUnlocked, 
  sectionTitle, 
  onOpenActivate, 
  children,
  bgClassName = "bg-white p-6 border border-brand-mint/10"
}: LockedSectionWrapperProps) {
  if (isUnlocked) {
    return (
      <section id={id} className={`rounded-3xl shadow-sm ${bgClassName}`}>
        {children}
      </section>
    );
  }

  const isDark = bgClassName.includes('bg-slate-900') || bgClassName.includes('bg-slate-950');

  return (
    <section id={id} className={`relative rounded-3xl shadow-sm overflow-hidden min-h-[160px] ${bgClassName}`}>
      {/* Blurred container content using pointer-events-none and select-none to ensure non-copyable/non-readable text */}
      <div className="filter blur-md select-none pointer-events-none opacity-25">
        {children}
      </div>

      {/* Lock indicator absolute overlay */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-350 ${
        isDark ? 'bg-slate-950/80' : 'bg-white/50 backdrop-blur-[2px]'
      }`}>
        <div className={`mb-2.5 shrink-0 flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-transform active:scale-95 ${
          isDark 
            ? 'bg-slate-900 text-brand-mint border-slate-800' 
            : 'bg-brand-cream text-teal-800 border-brand-cream/80'
        }`}>
          <Lock className="h-5 w-5" />
        </div>
        
        <h4 className={`text-sm font-black tracking-tight px-3 ${
          isDark ? 'text-white' : 'text-brand-dark'
        }`}>
          Bagian &quot;{sectionTitle}&quot; Terkunci
        </h4>
        
        <p className={`text-[11px] leading-relaxed max-w-[250px] mt-1 mb-3.5 px-2 ${
          isDark ? 'text-slate-300' : 'text-brand-dark-light/90'
        }`}>
          Dapatkan akses penuh selamanya hanya <span className="line-through opacity-60 mr-1 text-[10px]/none inline-block">Rp 100.000</span> <span className="font-extrabold text-teal-600 dark:text-brand-teal">Rp 24.000</span>
        </p>
        
        <button
          onClick={onOpenActivate}
          className={`rounded-xl font-bold text-xs py-2 px-4 shadow-sm active:scale-98 cursor-pointer transition-all duration-300 hover:shadow-md ${
            isDark 
              ? 'bg-brand-mint hover:bg-brand-teal text-teal-950' 
              : 'bg-teal-800 hover:bg-teal-900 text-white'
          }`}
        >
          Buka Akses Premium
        </button>
      </div>
    </section>
  );
}

export default function PhaseDetailView({ phase, onBack, isUnlocked, onOpenActivate }: PhaseDetailViewProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Back Button and Phase Heading */}
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={onBack}
          aria-label="Kembali"
          className="flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-white text-brand-dark shadow-sm hover:bg-brand-mint hover:text-brand-teal transition-all active:scale-90"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
            Panduan Fase Perkembangan
          </span>
          <h2 className="text-2xl font-black text-brand-dark leading-tight">
            {phase.title}
          </h2>
        </div>
      </div>

      {/* Decorative Ribbon Header */}
      <div className={`mb-8 rounded-3xl p-6 ${phase.bgColor} transition-all`}>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-teal shadow-sm">
            <Award className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-medium uppercase tracking-wide opacity-85">
              Rentang Usia / Kategori
            </span>
            <p className="text-sm font-bold text-brand-dark">
              {phase.ageRange}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark-light">
              {phase.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Structured sections A to I */}
      <div className="space-y-6 pb-24">
        
        {/* A. Ringkasan Fase */}
        <section id="ringkasan" className="rounded-3xl bg-white p-6 shadow-sm border border-brand-mint/10">
          <div className="mb-3 flex items-center gap-2 text-brand-teal">
            <BookOpen className="h-5 w-5" />
            <h3 className="font-display text-lg font-bold">Ringkasan Fase</h3>
          </div>
          <p className="text-sm leading-relaxed text-brand-dark-light">
            {phase.ringkasan}
          </p>
        </section>

        {/* B. Fokus Utama Fase Ini */}
        <section id="fokus" className="rounded-3xl bg-white p-6 shadow-sm border border-brand-mint/10">
          <div className="mb-4 flex items-center gap-2 text-brand-teal">
            <Target className="h-5 w-5" />
            <h3 className="font-display text-lg font-bold">Fokus Utama Fase Ini</h3>
          </div>
          <div className="space-y-3">
            {phase.fokusPoin.map((point, index) => (
              <div key={index} className="flex items-start gap-3 rounded-2xl bg-brand-offwhite p-3.5 border border-brand-mint/5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-mint text-xs font-bold text-brand-teal">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-brand-dark-light">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* C. Apa Yang Perlu Dilakukan - LOCKED */}
        <LockedSectionWrapper
          id="dilakukan"
          isUnlocked={isUnlocked}
          sectionTitle="Apa yang Perlu Dilakukan"
          onOpenActivate={onOpenActivate}
          bgClassName="bg-white p-6 border border-brand-mint/10"
        >
          <div className="mb-4 flex items-center gap-2 text-brand-teal">
            <Sparkles className="h-5 w-5" />
            <h3 className="font-display text-lg font-bold">Apa yang Perlu Dilakukan</h3>
          </div>
          <ul className="space-y-3">
            {phase.perluDilakukan.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-teal" />
                <p className="text-sm leading-relaxed text-brand-dark-light">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </LockedSectionWrapper>

        {/* D. Apa Yang Perlu Dipersiapkan - LOCKED */}
        <LockedSectionWrapper
          id="dipersiapkan"
          isUnlocked={isUnlocked}
          sectionTitle="Apa yang Perlu Dipersiapkan"
          onOpenActivate={onOpenActivate}
          bgClassName="bg-white p-6 border border-brand-mint/10"
        >
          <div className="mb-4 flex items-center gap-2 text-brand-teal">
            <Package className="h-5 w-5" />
            <h3 className="font-display text-lg font-bold">Apa yang Perlu Dipersiapkan</h3>
          </div>
          <ul className="space-y-3">
            {phase.perluDipersiapkan.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                <p className="text-sm leading-relaxed text-brand-dark-light">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </LockedSectionWrapper>

        {/* E & F. Makanan yang Disarankan & Manfaat Makanan - LOCKED */}
        <LockedSectionWrapper
          id="makanan"
          isUnlocked={isUnlocked}
          sectionTitle="Nutrisi & Makanan"
          onOpenActivate={onOpenActivate}
          bgClassName="bg-white p-6 border border-brand-mint/10"
        >
          <div className="mb-4 flex items-center gap-2 text-brand-teal">
            <Utensils className="h-5 w-5" />
            <h3 className="font-display text-lg font-bold">Nutrisi & Makanan</h3>
          </div>
          <p className="mb-4 text-xs text-brand-dark-light/80 italic">
            Daftar asupan ramah gizi yang direkomendasikan pada masa tumbuh kembang or kehamilan ini:
          </p>
          <div className="space-y-3">
            {phase.makananDisarankan.map((food, index) => (
              <div 
                key={index} 
                className="rounded-2xl border border-brand-cream/50 bg-brand-cream/20 p-4 transition-all hover:bg-brand-cream/35"
              >
                <div className="flex items-center gap-2 text-amber-800">
                  <PlusCircle className="h-4 w-4 shrink-0" />
                  <h4 className="text-sm font-bold">{food.nama}</h4>
                </div>
                <div className="mt-1.5 flex items-start gap-1.5 pl-6 text-xs text-brand-dark-light leading-relaxed">
                  <span className="font-semibold text-brand-teal">Khasiat:</span>
                  <span>{food.manfaat}</span>
                </div>
              </div>
            ))}
          </div>
        </LockedSectionWrapper>

        {/* G. Hal yang Sebaiknya Dihindari - LOCKED */}
        <LockedSectionWrapper
          id="dihindari"
          isUnlocked={isUnlocked}
          sectionTitle="Hal Terlarang & Perlu Dihindari"
          onOpenActivate={onOpenActivate}
          bgClassName="bg-white p-6 border border-red-100"
        >
          <div className="mb-4 flex items-center gap-2 text-red-600">
            <AlertOctagon className="h-5 w-5" />
            <h3 className="font-display text-lg font-bold">Hal Terlarang & Perlu Dihindari</h3>
          </div>
          <ul className="space-y-3">
            {phase.halDihindari.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                <p className="text-sm leading-relaxed text-brand-dark-light">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </LockedSectionWrapper>

        {/* H. Kapan Perlu Konsultasi - LOCKED */}
        <LockedSectionWrapper
          id="konsultasi"
          isUnlocked={isUnlocked}
          sectionTitle="Kapan Perlu Konsultasi Medis?"
          onOpenActivate={onOpenActivate}
          bgClassName="bg-slate-900 p-6 text-white shadow-xl"
        >
          <div className="mb-3 flex items-center gap-2 text-brand-mint">
            <Stethoscope className="h-5 w-5" />
            <h3 className="font-display text-lg font-bold">Kapan Perlu Konsultasi Medis?</h3>
          </div>
          <p className="mb-4 text-xs text-slate-300 leading-relaxed">
            Moms & Dads, mohon segera hubungi dokter spesialis anak, kandungan, bidan, atau faskes terdekat jika mendapati kondisi darurat berikut:
          </p>
          <ul className="space-y-3">
            {phase.kapanKonsultasi.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500/30 text-red-400">
                  <span className="block h-1.5 w-1.5 rounded-full bg-red-400" />
                </div>
                <p className="text-sm leading-relaxed text-slate-200">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </LockedSectionWrapper>

        {/* I. Doa & Tradisi Keluarga (Muslim/Kultural - Opsional) - LOCKED */}
        {phase.doaTradisi && (
          <LockedSectionWrapper
            id="doa"
            isUnlocked={isUnlocked}
            sectionTitle="Doa Syukur & Memohon Kekuatan"
            onOpenActivate={onOpenActivate}
            bgClassName="bg-brand-lavender/20 border border-brand-lavender/35 p-6 shadow-sm"
          >
            <div className="mb-3 flex items-center gap-2 text-purple-800">
              <BookMarked className="h-5 w-5" />
              <h3 className="font-display text-lg font-bold">{phase.doaTradisi.judul}</h3>
            </div>
            <p className="mb-4 text-xs text-brand-dark-light italic">
              Bagi keluarga yang menjalankan tradisi syukuran dan doa spiritual, bacaan ini dapat diresapi sebagai ikhtiar batiniah:
            </p>
            
            {phase.doaTradisi.teksArab && (
              <div className="mb-3 rounded-2xl bg-white p-4 text-right font-serif text-lg leading-loose text-brand-dark border border-brand-lavender/30">
                {phase.doaTradisi.teksArab}
              </div>
            )}
            
            {phase.doaTradisi.teksLatin && (
              <div className="mb-2 text-xs italic text-brand-dark-light font-medium pl-2 border-l-2 border-brand-lavender">
                &quot;{phase.doaTradisi.teksLatin}&quot;
              </div>
            )}
            
            {phase.doaTradisi.arti && (
              <div className="mb-3 text-xs text-brand-dark-light pl-2">
                <span className="font-bold">Artinya: </span>
                {phase.doaTradisi.arti}
              </div>
            )}
            
            <p className="text-xs text-brand-dark-light/90 leading-relaxed border-t border-brand-lavender/30 pt-3">
              {phase.doaTradisi.keterangan}
            </p>
          </LockedSectionWrapper>
        )}

        {/* Footer Disclaimer */}
        <div className="rounded-2xl border border-dashed border-brand-dark-light/20 p-4 text-center text-xs text-brand-dark-light/80">
          <p className="leading-relaxed">
            🌱 <strong>Disclaimer:</strong> Konten OrtuPedia ini bersifat edukatif umum dan bukan merupakan pengganti pemeriksaan medis berkala. Selalu prioritaskan koordinasi bersama bidan serta dokter anak terpercaya Anda.
          </p>
        </div>
      </div>
    </div>
  );
}
