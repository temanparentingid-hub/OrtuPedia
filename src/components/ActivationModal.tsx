/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Key, MessageCircle, Sparkles, Check, AlertCircle, AlertTriangle, ExternalLink } from 'lucide-react';

interface ActivationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlockSuccessfully: () => void;
}

export default function ActivationModal({ isOpen, onClose, onUnlockSuccessfully }: ActivationModalProps) {
  const [code, setCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const cleanCode = code.trim().toUpperCase();

    // Valid codes (case-insensitive checks)
    const validCodes = [
      '0506OP-2'
    ];

    if (!cleanCode) {
      setErrorMsg('Silakan masukkan kode lisensi terlebih dahulu.');
      return;
    }

    if (validCodes.includes(cleanCode)) {
      setSuccess(true);
      setTimeout(() => {
        onUnlockSuccessfully();
        onClose();
        setSuccess(false);
        setCode('');
      }, 1500);
    } else {
      setErrorMsg('Kode lisensi tidak valid. Pastikan penulisan sudah benar atau hubungi admin WhatsApp jika ada kendala!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      {/* Dialog Shell */}
      <div className="relative w-full max-w-sm max-h-[92vh] overflow-y-auto no-scrollbar rounded-3xl bg-white p-6 shadow-2xl border border-brand-mint/25 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-offwhite hover:bg-brand-mint/20 text-brand-dark-light transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header content */}
        <div className="text-center pb-3 border-b border-brand-mint/10">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-mint text-brand-teal mb-1.5">
            <Key className="h-5 w-5" />
          </div>
          <h4 className="font-display text-base font-black text-brand-dark">
            Aktivasi OrtuPedia Premium
          </h4>
          <p className="text-[11px] text-brand-dark-light mt-0.5">
            Dapatkan bimbingan lengkap & aman selamanya tanpa batas!
          </p>
        </div>

        {/* Price & Promo Info */}
        <div className="my-4 rounded-2xl bg-brand-cream/30 border border-brand-cream p-4 text-center">
          <span className="inline-block rounded-full bg-amber-100 text-[10px] font-extrabold uppercase tracking-wide text-amber-800 px-2.5 py-0.5 mb-1.5 animate-pulse">
            PROMO TERBATAS
          </span>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs text-brand-dark-light/70 line-through">
              Rp 100.000
            </span>
            <span className="font-display text-xl font-bold text-teal-800">
              Rp 24.000
            </span>
          </div>
          <p className="text-[11px] font-semibold text-brand-dark-light mt-1">
            Akses Selamanya (Lifetime Access) • Satu Kali Bayar
          </p>
        </div>

        {/* Locked benefits list */}
        <div className="space-y-1.5 max-h-36 overflow-y-auto no-scrollbar py-1">
          <h5 className="text-[11px] font-extrabold text-brand-teal uppercase tracking-wider mb-1">
            Fitur Yang Akan Terbuka:
          </h5>
          {[
            'Apa yang Perlu Dilakukan (Langkah Konkrit)',
            'Apa yang Perlu Dipersiapkan (Checklist Alat)',
            'Nutrisi & Makanan (Detail gizi & Manfaat)',
            'Hal Terlarang & Perlu Dihindari (Sisi Keamanan)',
            'Kapan Perlu Konsultasi Medis (Peringatan Dini)',
            'Doa Syukur & Memohon Kekuatan (Ikhtiar Batin)',
            'Artikel tips lebih lengkap dan akan terus update'
          ].map((benefit, i) => (
            <div key={i} className="flex items-center gap-2 text-left">
              <Check className="h-3 w-3 shrink-0 text-brand-teal" />
              <span className="text-[11.5px] text-brand-dark-light">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Instruction Card (Orange-Cream background) */}
        <div className="bg-[#FFF8F3] border border-[#FFEADA] rounded-3xl p-4.5 mt-4 space-y-4">
          
          {/* Header of instruction card */}
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4.5 w-4.5 text-[#D97706] shrink-0 mt-0.5" />
            <h5 className="font-extrabold text-[13px] text-[#A13E00] leading-tight">
              Bagaimana Cara Mendapatkan Kode?
            </h5>
          </div>

          {/* White inner steps card */}
          <div className="bg-white rounded-2xl p-4 border border-[#FFEADA]/35 space-y-3.5">
            
            {/* Step 1 */}
            <div className="flex items-start gap-3">
              <div className="relative flex flex-col items-center justify-center shrink-0">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF3EA] border border-[#FFD3B4] text-[10.5px] font-extrabold text-[#D97706]">
                  1
                </div>
                <div className="absolute top-5 w-[1.5px] h-4.5 bg-[#FFD3B4]/60" />
              </div>
              <p className="text-[11.5px] leading-relaxed text-brand-dark-light my-0.5">
                Klik tombol <span className="font-extrabold text-brand-teal">Dapatkan Kode Akses</span> di bawah
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <div className="relative flex flex-col items-center justify-center shrink-0">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF3EA] border border-[#FFD3B4] text-[10.5px] font-extrabold text-[#D97706]">
                  2
                </div>
                <div className="absolute top-5 w-[1.5px] h-4.5 bg-[#FFD3B4]/60" />
              </div>
              <p className="text-[11.5px] leading-relaxed text-brand-dark-light my-0.5">
                Klik tombol <span className="font-extrabold text-brand-dark">Buy Now</span> pada halaman tujuan
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <div className="relative flex flex-col items-center justify-center shrink-0">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF3EA] border border-[#FFD3B4] text-[10.5px] font-extrabold text-[#D97706]">
                  3
                </div>
                <div className="absolute top-5 w-[1.5px] h-5 bg-[#FFD3B4]/60" />
              </div>
              <p className="text-[11.5px] leading-relaxed text-brand-dark-light my-0.5">
                Selesaikan proses pembayaran pada form <span className="font-extrabold text-brand-dark">Checkout</span> (Rp 24.000)
              </p>
            </div>

            {/* Step 4 (Checkmark) */}
            <div className="flex items-start gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E6F4EA] border border-[#C2E7CD] text-[10.5px] font-bold text-[#137333] shrink-0">
                ✓
              </div>
              <p className="text-[11.5px] leading-relaxed text-brand-dark-light my-0.5">
                <span className="font-extrabold text-[#137333]">Selesai!</span> Kode akses premium akan dikirim otomatis ke email Moms & Dads
              </p>
            </div>

          </div>

          {/* Dapatkan Kode Akses Button */}
          <a
            href="https://lynk.id/temanparenting/9o6xm6xzwqqj/checkout?token=cGFyYW1zPSU1QiU1RCZ0aWNrZXRzPSU1QiU1RCZiaWRfcHJpY2U9MCZxdHlfcHJvZD0xJnNlc3NpZD0mdG90YWxfcHJpY2U9JnRvdGFsX3VuaXQ9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full justify-center flex items-center gap-1.5 rounded-xl bg-[#005F5A] hover:bg-[#004D49] text-white font-bold text-xs py-2.5 px-4 shadow-xs hover:shadow-sm active:scale-[0.99] cursor-pointer transition-all duration-200"
          >
            <span>Dapatkan Kode Akses</span>
            <ExternalLink className="h-3.5 w-3.5 shrink-0" />
          </a>

          {/* Help link at the bottom of the card */}
          <div className="text-center text-[11px] text-brand-dark-light/90">
            Ada kendala?{' '}
            <a
              href="https://wa.me/6285111324256?text=Halo%20admin%20Teman%20Parenting%2C%20saya%20ada%20kendala%20aktivasi%20di%20aplikasi%20OrtuPedia"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-brand-teal hover:underline cursor-pointer"
            >
              hubungi admin via Whatsapp
            </a>
          </div>

        </div>

        {/* Input Form area: MASUKKAN KODE AKSES */}
        <div className="mt-5.5">
          {success ? (
            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-center text-emerald-800 animate-in zoom-in-95">
              <Sparkles className="h-6 w-6 text-emerald-500 mx-auto mb-1 animate-spin" />
              <h5 className="text-xs font-bold">Aktivasi Berhasil!</h5>
              <p className="text-[11px] text-emerald-600 mt-0.5">Membuka seluruh akses premium OrtuPedia...</p>
            </div>
          ) : (
            <form onSubmit={handleVerify} className="space-y-2.5">
              <label className="block font-sans text-[11px] font-extrabold tracking-wider text-brand-dark-light/95 uppercase">
                MASUKKAN KODE AKSES
              </label>
              
              <div className="flex gap-2.5">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Contoh: 12345"
                  className="flex-1 rounded-xl border border-gray-200 bg-[#F9F9FA] px-3.5 py-3 text-xs text-brand-dark placeholder-brand-dark-light/50 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors"
                />
                
                <button
                  type="submit"
                  className="rounded-xl bg-[#005F5A] hover:bg-[#004D49] text-white font-extrabold text-xs px-5.5 py-3 shadow-xs hover:shadow-md transition-all duration-300 transform active:scale-98 cursor-pointer shrink-0"
                >
                  Aktifkan
                </button>
              </div>

              {errorMsg && (
                <div className="flex items-start gap-1.5 text-[11px] text-red-600 leading-relaxed font-semibold mt-1">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
