/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Home, Compass, BookOpen, Info } from 'lucide-react';
import { ActiveTab } from '../types';

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const navItems = [
    { id: 'home' as ActiveTab, label: 'Beranda', icon: Home },
    { id: 'phases' as ActiveTab, label: 'Fase', icon: Compass },
    { id: 'articles' as ActiveTab, label: 'Artikel', icon: BookOpen },
    { id: 'about' as ActiveTab, label: 'Tentang', icon: Info },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-mint/20 bg-brand-offwhite/95 pb-safe shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-lg items-center justify-around py-2 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all duration-200 ${
                isActive 
                  ? 'text-brand-teal font-semibold' 
                  : 'text-gray-400 hover:text-brand-dark-light'
              }`}
            >
              <div 
                className={`flex h-10 w-12 items-center justify-center rounded-xl transition-all ${
                  isActive 
                    ? 'bg-brand-mint text-brand-teal scale-105' 
                    : 'bg-transparent'
                }`}
              >
                <Icon className="h-5 w-5 stroke-[2.25]" />
              </div>
              <span className="mt-1 text-[11px] tracking-wide">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
