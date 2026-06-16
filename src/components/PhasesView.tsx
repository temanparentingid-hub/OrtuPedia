/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Compass, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { PHASES_DATA } from '../data/phasesData';
import { PhaseData } from '../types';

interface PhasesViewProps {
  onSelectPhase: (phase: PhaseData) => void;
}

type PhaseFilter = 'semua' | 'kehamilan' | 'bayi' | 'balita';

export default function PhasesView({ onSelectPhase }: PhasesViewProps) {
  const [filter, setFilter] = useState<PhaseFilter>('semua');

  const filterTabs = [
    { id: 'semua' as PhaseFilter, label: 'Semua Fase' },
    { id: 'kehamilan' as PhaseFilter, label: 'Kehamilan' },
    { id: 'bayi' as PhaseFilter, label: 'Bayi (0-12m)' },
    { id: 'balita' as PhaseFilter, label: 'Balita (1-5th)' },
  ];

  const filteredPhases = PHASES_DATA.filter((phase) => {
    if (filter === 'semua') return true;
    return phase.category === filter;
  });

  return (
    <div className="space-y-6 pb-24">
      {/* Title section */}
      <div>
        <h3 className="font-display text-xl font-black text-brand-dark">
          Pilih Fase Parenting
        </h3>
        <p className="text-xs text-brand-dark-light/90">
          Temukan panduan praktis dan ringkas dari masa kehamilan hingga balita Anda.
        </p>
      </div>

      {/* Horizontal filter tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-1.5 no-scrollbar">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
              filter === tab.id
                ? 'bg-brand-teal text-white shadow-sm shadow-brand-teal/15 scale-105'
                : 'bg-white border border-brand-mint/10 text-brand-dark-light hover:bg-brand-mint/30 hover:text-brand-teal'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Phase Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-1">
        {filteredPhases.map((phase) => (
          <button
            key={phase.id}
            onClick={() => onSelectPhase(phase)}
            className="group w-full text-left relative overflow-hidden rounded-3xl bg-white border border-brand-mint/10 p-5 shadow-xs transition-transform hover:-translate-y-0.5 hover:shadow-md hover:border-brand-teal/20 duration-200 active:scale-99"
          >
            {/* Color Accent Indicator Strip */}
            <div className={`absolute top-0 left-0 bottom-0 w-1.5 ${phase.bgColor}`} />
            
            <div className="pl-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal">
                      {phase.category === 'kehamilan' ? 'Masa Kehamilan' : phase.category === 'bayi' ? 'Kehidupan Bayi' : 'Anak Balita'}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-gray-300" />
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 font-medium">
                      <Clock className="h-3 w-3" />
                      {phase.ageRange}
                    </div>
                  </div>
                  <h4 className="font-display text-base font-bold text-brand-dark mt-1 group-hover:text-brand-teal transition-colors">
                    {phase.title}
                  </h4>
                </div>
                
                <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${phase.bgColor} text-brand-dark-light transition-all duration-300 group-hover:scale-110`}>
                  <Compass className="h-4.5 w-4.5 stroke-[2]" />
                </div>
              </div>
              
              <p className="mt-2 text-xs leading-relaxed text-brand-dark-light/95 line-clamp-2">
                {phase.summary}
              </p>
              
              <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-brand-teal opacity-90 group-hover:opacity-100 transition-opacity">
                Baca Panduan Lengkap
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
