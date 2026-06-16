/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Sparkles, AlertTriangle, ShieldCheck, Instagram, Globe, Mail, Key, MessageCircle, Lock, Unlock } from 'lucide-react';

interface AboutViewProps {
  isUnlocked: boolean;
  onOpenActivate: () => void;
  onSetUnlocked: (val: boolean) => void;
}

export default function AboutView({ isUnlocked, onOpenActivate, onSetUnlocked }: AboutViewProps) {
  const socialLinks = [
    { name: 'Situs Utama', handle: 'temanparenting.id', icon: Globe, url: 'https://temanparenting.web.id/' },
    { name: 'Email Dukungan', handle: 'temanparenting.id@gmail.com', icon: Mail, url: 'mailto:temanparenting.id@gmail.com' },
    { name: 'WhatsApp', handle: '0851-1132-4256', icon: MessageCircle, url: 'https://wa.me/6285111324256' },
  ];

  return (
    <div className="space-y-6 pb-24 animate-in fade-in duration-200">
      {/* Visual Header card */}
      <div className="rounded-3xl bg-brand-lavender/40 border border-brand-lavender/35 p-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-teal shadow-xs mb-3">
          <Heart className="h-7 w-7 fill-brand-teal" />
        </div>
        
        <h3 className="font-display text-xl font-black text-brand-dark">
          Tentang OrtuPedia
        </h3>
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">
          Oleh Teman Parenting
        </span>
        
        <p className="mt-4 text-xs leading-relaxed text-brand-dark-light">
          OrtuPedia adalah aplikasi panduan parenting sederhana yang dirancang khusus untuk mempermudah Moms & Dads mendapatkan informasi ringkas, aman, dan tepercaya sepanjang mendampingi tumbuh kembang buah hati dari masa kandungan hingga umur balita.
        </p>
      </div>

      {/* Licensing Card */}
      <div className="rounded-3xl p-5 border bg-white shadow-3xs border-brand-mint/20 space-y-4">
        <div className="flex items-center gap-2 text-brand-teal">
          <Key className="h-5 w-5" />
          <h4 className="font-display text-sm font-bold">Status Lisensi Aplikasi</h4>
        </div>

        {isUnlocked ? (
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
            <div className="flex items-center gap-2 text-emerald-800">
              <ShieldCheck className="h-5 w-5 text-emerald-600 fill-emerald-50" />
              <span className="text-xs font-bold">OrtuPedia Premium Aktif ✨</span>
            </div>
            <p className="text-[11px] leading-relaxed text-emerald-700/80 mt-1.5">
              Selamat! Seluruh bagian panduan (Apa yang perlu Dilakukan, Dipersiapkan, Nutrisi, Hal Terlarang, Kapan Konsultasi, dan Kumpulan Doa) telah terbuka penuh selamanya. Terima kasih atas dukungan Anda!
            </p>
            <div className="mt-3.5 flex justify-end">
              <button 
                onClick={() => onSetUnlocked(false)}
                className="text-[10px] text-brand-dark-light/60 hover:text-red-600 underline font-medium cursor-pointer"
              >
                Reset Lisensi (Ubah ke Gratis)
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="rounded-2xl bg-amber-50/50 border border-amber-150 p-4 text-brand-dark">
              <div className="flex items-center gap-1.5 text-amber-800 mb-1.5">
                <Lock className="h-4 w-4 shrink-0" />
                <span className="text-xs font-bold">Akses Gratis Terbatas</span>
              </div>
              <p className="text-[11px] leading-relaxed text-brand-dark-light">
                Saat ini Anda berada dalam mode gratis. Beberapa bagian penting dilindungi kunci premium. Dapatkan kunci lisensi premium lifetime hanya dengan <span className="font-bold text-teal-800">Rp 24.000 saja</span>.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenActivate}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs py-3 px-4 shadow-3xs hover:shadow-sm transition-all cursor-pointer"
              >
                <Key className="h-3.5 w-3.5" />
                <span>Masukkan Kode Lisensi</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Core values or features */}
      <div className="space-y-4">
        <h4 className="font-display text-sm font-bold text-brand-dark">
          Mengapa Menggunakan OrtuPedia?
        </h4>

        <div className="grid gap-3">
          <div className="flex gap-3 rounded-2xl bg-white border border-brand-mint/10 p-4">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded bg-brand-mint text-brand-teal">
              <ShieldCheck className="h-4.5 w-4.5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-brand-dark">Informasi Tepercaya</h5>
              <p className="text-[11px] leading-relaxed text-brand-dark-light mt-0.5">
                Konten disusun berdasarkan referensi tepercaya tumbuh kembang, dibalut antarmuka yang modern, responsif, dan bebas distorsi iklan.
              </p>
            </div>
          </div>

          <div className="flex gap-3 rounded-2xl bg-white border border-brand-mint/10 p-4">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded bg-brand-cream text-amber-800">
              <Sparkles className="h-4.5 w-4.5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-brand-dark">Padat & Praktis</h5>
              <p className="text-[11px] leading-relaxed text-brand-dark-light mt-0.5">
                Kami tahu Moms & Dads sangat sibuk. Informasi sengaja diringkas tanpa embel-embel checklist rumit atau tracker yang membuat stres harian bertambah.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Required MEDICAL DISCLAIMER */}
      <div className="rounded-3xl border-2 border-dashed border-red-200 bg-red-50/50 p-5">
        <div className="mb-2 flex items-center gap-2 text-red-700">
          <AlertTriangle className="h-5 w-5 shrink-0" />
          <h4 className="font-display text-sm font-bold">Pernyataan Disclaimer Medis</h4>
        </div>
        <p className="text-[11px] leading-relaxed text-red-900 font-medium">
          &quot;Konten OrtuPedia bersifat edukatif dan tidak menggantikan konsultasi dengan dokter, bidan, psikolog, ahli gizi, konselor laktasi, atau profesional terkait.&quot;
        </p>
        <p className="mt-2 text-[10.5px] leading-relaxed text-red-800/80">
          Semua informasi seputar kehamilan, MPASI, imunisasi, maupun gejala medis merupakan edukasi umum. Jika Anda mendapati gejala mencemaskan atau kondisi darurat pada ibu or bayi, silakan segera mendatangi bidan atau dokter anak di rumah sakit bersalin terdekat.
        </p>
      </div>

      {/* Brand Social Links */}
      <div className="rounded-3xl bg-white p-5 border border-brand-mint/10 space-y-3">
        <h4 className="font-display text-xs font-bold uppercase tracking-wider text-brand-teal text-center">
          Ikuti & Hubungi Kami
        </h4>
        <p className="text-[11px] text-center text-brand-dark-light leading-relaxed max-w-xs mx-auto pb-2">
          Kami senang mendengar kisah seru dan masukan dari Moms & Dads! Silakan hubungi kami melalui kontak resmi di bawah ini.
        </p>

        <div className="space-y-2">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl bg-brand-offwhite hover:bg-brand-mint/30 px-4 py-2.5 text-xs text-brand-dark-light hover:text-brand-teal transition-all active:scale-98"
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="font-bold">{social.name}</span>
                </div>
                <span className="text-[11px] font-mono opacity-80">{social.handle}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Copyright branding footer */}
      <div className="text-center text-[11px] text-brand-dark-light/70 pt-4">
        <p>© 2026 OrtuPedia. Hak Cipta dilindungi.</p>
        <p className="mt-0.5">Dibuat dengan cinta untuk seluruh keluarga di Indonesia ❤️</p>
      </div>
    </div>
  );
}

