/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveTab, PhaseData, Article } from './types';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomeView from './components/HomeView';
import PhasesView from './components/PhasesView';
import PhaseDetailView from './components/PhaseDetailView';
import ArticlesView from './components/ArticlesView';
import AboutView from './components/AboutView';
import ActivationModal from './components/ActivationModal';

export default function App() {
  const [activeTab, setActiveTab2] = useState<ActiveTab>('home');
  const [selectedPhase, setSelectedPhase] = useState<PhaseData | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  // License integration
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    return localStorage.getItem('ortupedia_license_unlocked') === 'true';
  });
  const [activationModalOpen, setActivationModalOpen] = useState(false);

  // Persist license status across sessions
  useEffect(() => {
    localStorage.setItem('ortupedia_license_unlocked', isUnlocked ? 'true' : 'false');
  }, [isUnlocked]);

  // Smooth view transition helper
  const setActiveTab = (tab: ActiveTab) => {
    if (tab === activeTab) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveTab2(tab);
      setTransitioning(false);
    }, 150);
  };

  // When a user selects a phase from the search outcomes
  const handleSelectPhaseFromSearch = (phase: PhaseData) => {
    setSelectedPhase(phase);
    setActiveTab('phases');
  };

  // When a user selects an article from the search outcomes
  const handleSelectArticleFromSearch = (article: Article) => {
    setSelectedArticle(article);
    setActiveTab('articles');
  };

  // Navigation from call-to-actions
  const handleNavigateToTab = (tab: 'phases' | 'articles' | 'about') => {
    if (tab === 'phases') {
      setSelectedPhase(null); // Reset detail view so list is opened
    }
    setActiveTab(tab);
  };

  // Scroll back to top whenever active view or child changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedPhase, selectedArticle]);

  return (
    <div className="min-h-screen bg-brand-offwhite">
      {/* Outer framing to prioritize Mobile-First responsive design */}
      <div className="mx-auto flex min-h-screen max-w-lg flex-col bg-brand-offwhite shadow-xl shadow-brand-dark/5 border-x border-brand-mint/10">
        
        {/* Universal Sticky Header */}
        <Header isUnlocked={isUnlocked} onOpenActivate={() => setActivationModalOpen(true)} />

        {/* Main Immersive Canvas Body */}
        <main className={`flex-1 px-6 py-6 transition-opacity duration-200 ${
          transitioning ? 'opacity-40' : 'opacity-100'
        }`}>
          {activeTab === 'home' && (
            <HomeView 
              onNavigateToTab={handleNavigateToTab}
              onSelectPhase={handleSelectPhaseFromSearch}
              onSelectArticle={handleSelectArticleFromSearch}
            />
          )}

          {activeTab === 'phases' && (
            selectedPhase ? (
              <PhaseDetailView 
                phase={selectedPhase} 
                onBack={() => setSelectedPhase(null)} 
                isUnlocked={isUnlocked}
                onOpenActivate={() => setActivationModalOpen(true)}
              />
            ) : (
              <PhasesView 
                onSelectPhase={(phase) => setSelectedPhase(phase)} 
              />
            )
          )}

          {activeTab === 'articles' && (
            <ArticlesView 
              selectedArticle={selectedArticle}
              onSelectArticle={(art) => setSelectedArticle(art)}
              isUnlocked={isUnlocked}
              onOpenActivate={() => setActivationModalOpen(true)}
            />
          )}

          {activeTab === 'about' && (
            <AboutView 
              isUnlocked={isUnlocked}
              onOpenActivate={() => setActivationModalOpen(true)}
              onSetUnlocked={setIsUnlocked}
            />
          )}
        </main>

        {/* Floating Comfort Bottom Navigation */}
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Modern Activation Popup */}
      <ActivationModal 
        isOpen={activationModalOpen}
        onClose={() => setActivationModalOpen(false)}
        onUnlockSuccessfully={() => setIsUnlocked(true)}
      />
    </div>
  );
}
