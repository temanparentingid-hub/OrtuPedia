/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Sparkles, ShieldCheck, Lock } from 'lucide-react';

interface HeaderProps {
  isUnlocked: boolean;
  onOpenActivate: () => void;
}

export default function Header({ isUnlocked, onOpenActivate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-mint/20 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-lg items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-teal text-white shadow-sm shadow-brand-teal/20 transition-all hover:scale-105 active:scale-95">
            <Heart className="h-5 w-5 fill-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display text-xl font-bold tracking-tight text-brand-dark">
                OrtuPedia
              </span>
              <Sparkles className="h-3.5 w-3.5 text-brand-teal animate-pulse" />
            </div>
            <a 
              href="https://temanparenting.web.id/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-[10px] font-semibold tracking-widest uppercase text-brand-teal hover:underline"
            >
              by Teman Parenting
            </a>
          </div>
        </div>
        
        {isUnlocked ? (
          <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200 shadow-3xs animate-in zoom-in-95">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 fill-emerald-100" />
            <span>Mode Premium</span>
          </div>
        ) : (
          <button
            onClick={onOpenActivate}
            className="flex items-center gap-1.5 rounded-full bg-brand-mint px-3 py-1 text-xs font-bold text-teal-800 border border-brand-teal/20 hover:bg-brand-teal hover:text-white transition-all duration-300 shadow-3xs cursor-pointer"
          >
            <Lock className="h-3 w-3 -mt-0.5 animate-bounce" />
            <span>Mode Gratis</span>
          </button>
        )}
      </div>
    </header>
  );
}

