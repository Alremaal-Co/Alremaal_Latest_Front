"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// تعريف جميع الإعدادات الممكنة
export interface ThemeSettings {
  primaryColor: string;
  mode: 'light' | 'dark' | 'system';
  skin: 'default' | 'border' | 'semi-dark';
  layout: 'vertical' | 'collapsed' | 'horizontal';
  contentWidth: 'compact' | 'wide';
  direction: 'ltr' | 'rtl';
  fontSize: number;
  routerTransition: 'fade' | 'slide-in' | 'none';
}

// القيم الافتراضية للثيم
export const defaultSettings: ThemeSettings = {
  primaryColor: '#013064',
  mode: 'light',
  skin: 'default',
  layout: 'vertical',
  contentWidth: 'compact',
  direction: 'ltr',
  fontSize: 16,
  routerTransition: 'fade',
};

export const ThemeCustomizerContext = createContext<{
  settings: ThemeSettings;
  setSettings: React.Dispatch<React.SetStateAction<ThemeSettings>>;
  resetSettings: () => void;
}>({
  settings: defaultSettings,
  setSettings: () => {},
  resetSettings: () => {},
});

export const ThemeCustomizerProvider = ({ children, locale }: { children: ReactNode, locale: string }) => {
  const [settings, setSettings] = useState<ThemeSettings>(() => {
    const directionFromLocale = locale === 'ar' ? 'rtl' : 'ltr';
    if (typeof window !== 'undefined') {
      const savedSettingsString = localStorage.getItem('theme-settings');
      const savedSettings = savedSettingsString ? JSON.parse(savedSettingsString) : {};

      return { 
        ...defaultSettings, 
        ...savedSettings, 
        direction: directionFromLocale 
      };
    }
    
    return { ...defaultSettings, direction: directionFromLocale };
  });

  const resetSettings = () => {
    const directionFromLocale = locale === 'ar' ? 'rtl' : 'ltr';
    setSettings({ ...defaultSettings, direction: directionFromLocale });
  };
  
  useEffect(() => {
    localStorage.setItem('theme-settings', JSON.stringify(settings));
    applySettingsToDOM(settings);
  }, [settings]);

  const applySettingsToDOM = (currentSettings: ThemeSettings) => {
    const root = document.documentElement; 
    
    // تطبيق السمات
    root.setAttribute('data-skin', currentSettings.skin);
    root.setAttribute('data-layout', currentSettings.layout);
    root.setAttribute('data-content-width', currentSettings.contentWidth);
    root.dir = currentSettings.direction;

    // تطبيق الألوان
    root.style.setProperty('--primary', currentSettings.primaryColor);
    
    // تطبيق الوضع الداكن/الفاتح
    if (currentSettings.mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // تطبيق حجم الخط
    root.style.setProperty('--base-font-size', `${currentSettings.fontSize}px`);
  };


  return (
    <ThemeCustomizerContext.Provider value={{ settings, setSettings, resetSettings }}>
      
      {children}
    </ThemeCustomizerContext.Provider>
  );
};

export const useThemeCustomizer = () => useContext(ThemeCustomizerContext);