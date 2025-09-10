"use client"

import React, { useRef } from 'react';
import { useThemeCustomizer } from '@/context/ThemeCustomizerContext';
import { Check, Edit, Laptop, Moon, Sun, RotateCcw, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SheetClose } from '@/components/ui/sheet';
import * as Previews from './customizer-previews';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing'; 

const primaryColors = ['#013064', '#009688', '#ffc107', '#dc3545', '#0dcaf0'];

export function ThemeCustomizer() {
  const { settings, setSettings, resetSettings } = useThemeCustomizer();
  const colorInputRef = useRef<HTMLInputElement>(null);

  const t = useTranslations('ThemeCustomizer');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleDirectionChange = (newDirection: 'ltr' | 'rtl') => {
    setSettings(prev => ({ ...prev, direction: newDirection }));

    const newLocale = newDirection === 'rtl' ? 'ar' : 'en';
    if (locale !== newLocale) {
      router.push(pathname, { locale: newLocale });
    }
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex flex-col h-full">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">{t('title')}</h3>
                <p className="text-muted-foreground text-sm">{t('subtitle')}</p>
              </div>
              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={resetSettings}>
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>{t('resetTooltip')}</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SheetClose asChild>
                      <Button variant="outline" size="icon">
                        <X className="w-4 h-4" />
                      </Button>
                    </SheetClose>
                  </TooltipTrigger>
                  <TooltipContent><p>{t('closeTooltip')}</p></TooltipContent>
                </Tooltip>
              </div>
          </div>
        </div>
        
        <div className="flex-grow overflow-y-auto p-6 space-y-8">
          {/* Theming Section */}
          <CustomizerSection title={t('themingTitle')}>
            <h4 className="font-medium text-sm mb-3">{t('primaryColor')}</h4>
            <div className="flex flex-wrap gap-3">
              {primaryColors.map(color => (
                <Button key={color} variant="outline" size="icon" className={cn("w-10 h-10 rounded-lg p-0", {"border-2 border-primary": settings.primaryColor === color})} onClick={() => setSettings(prev => ({ ...prev, primaryColor: color }))}>
                  <div className="w-full h-full rounded-md" style={{ backgroundColor: color }} />
                </Button>
              ))}
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-lg" onClick={() => colorInputRef.current?.click()}>
                <Edit className="w-5 h-5" />
                <input ref={colorInputRef} type="color" className="sr-only" value={settings.primaryColor} onChange={(e) => setSettings(prev => ({...prev, primaryColor: e.target.value}))}/>
              </Button>
            </div>
          </CustomizerSection>

          {/* Mode Section */}
          <CustomizerSection title={t('modeTitle')}>
            <div className="grid grid-cols-3 gap-3">
              <OptionButton isSelected={settings.mode === 'light'} onClick={() => setSettings(p => ({ ...p, mode: 'light' }))} label={t('light')}><Sun className="w-6 h-6" /></OptionButton>
              <OptionButton isSelected={settings.mode === 'dark'} onClick={() => setSettings(p => ({ ...p, mode: 'dark' }))} label={t('dark')}><Moon className="w-6 h-6" /></OptionButton>
              <OptionButton isSelected={settings.mode === 'system'} onClick={() => setSettings(p => ({ ...p, mode: 'system' }))} label={t('system')}><Laptop className="w-6 h-6" /></OptionButton>
            </div>
          </CustomizerSection>

          {/* Skin Section */}
          <CustomizerSection title={t('skinTitle')}>
            <div className="grid grid-cols-3 gap-3">
              <OptionButton isSelected={settings.skin === 'default'} onClick={() => setSettings(p => ({ ...p, skin: 'default' }))} label={t('default')}><Previews.SkinDefault /></OptionButton>
              <OptionButton isSelected={settings.skin === 'border'} onClick={() => setSettings(p => ({ ...p, skin: 'border' }))} label={t('border')}><Previews.SkinBorder /></OptionButton>
              <OptionButton isSelected={settings.skin === 'semi-dark'} onClick={() => setSettings(p => ({ ...p, skin: 'semi-dark' }))} label={t('semiDark')}><Previews.SkinSemiDark /></OptionButton>
            </div>
          </CustomizerSection>
          
          {/* Layout Section */}
          <CustomizerSection title={t('layoutTitle')}>
              <h4 className="font-medium text-sm mb-3">{t('layouts')}</h4>
              <div className="grid grid-cols-3 gap-3">
                  <OptionButton isSelected={settings.layout === 'vertical'} onClick={() => setSettings(p => ({ ...p, layout: 'vertical' }))} label={t('vertical')}><Previews.LayoutVertical /></OptionButton>
                  <OptionButton isSelected={settings.layout === 'collapsed'} onClick={() => setSettings(p => ({ ...p, layout: 'collapsed' }))} label={t('collapsed')}><Previews.LayoutCollapsed /></OptionButton>
                  <OptionButton isSelected={settings.layout === 'horizontal'} onClick={() => setSettings(p => ({ ...p, layout: 'horizontal' }))} label={t('horizontal')}><Previews.LayoutHorizontal /></OptionButton>
              </div>
              
              <h4 className="font-medium text-sm my-3">{t('content')}</h4>
              <div className="grid grid-cols-2 gap-3">
                  <OptionButton isSelected={settings.contentWidth === 'compact'} onClick={() => setSettings(p => ({ ...p, contentWidth: 'compact' }))} label={t('compact')}><Previews.ContentCompact /></OptionButton>
                  <OptionButton isSelected={settings.contentWidth === 'wide'} onClick={() => setSettings(p => ({ ...p, contentWidth: 'wide' }))} label={t('wide')}><Previews.ContentWide /></OptionButton>
              </div>

              <h4 className="font-medium text-sm my-3">{t('direction')}</h4>
              <div className="grid grid-cols-2 gap-3">
                  <OptionButton isSelected={settings.direction === 'ltr'} onClick={() => handleDirectionChange('ltr')} label={t('ltr')}><Previews.DirectionLTR /></OptionButton>
                  <OptionButton isSelected={settings.direction === 'rtl'} onClick={() => handleDirectionChange('rtl')} label={t('rtl')}><Previews.DirectionRTL /></OptionButton>
              </div>
          </CustomizerSection>

          {/* Base Font Size Section */}
          {/* Base Font Size Section */}
          <CustomizerSection title={t('fontSizeTitle')}>
            <div className="flex items-center gap-4">
              <span className="text-xs">A</span>
              {/*  ✅ هنا تم التصحيح */}
              <Slider
                value={[settings.fontSize]}
                max={20}
                min={12}
                step={1}
                onValueChange={(v) => setSettings(p => ({ ...p, fontSize: v[0] }))}
              />
              <span className="text-xl">A</span>
            </div>
          </CustomizerSection>

          {/* Router Transition Section */}
          <CustomizerSection title={t('routerTransitionTitle')}>
              <Select value={settings.routerTransition} onValueChange={(v) => setSettings(p => ({ ...p, routerTransition: v as any }))}>
                  <SelectTrigger><SelectValue placeholder={t('selectTransition')} /></SelectTrigger>
                  <SelectContent>
                      <SelectItem value="fade">{t('fade')}</SelectItem>
                      <SelectItem value="slide-in">{t('slideIn')}</SelectItem>
                      <SelectItem value="none">{t('none')}</SelectItem>
                  </SelectContent>
              </Select>
          </CustomizerSection>
        </div>
      </div>
    </TooltipProvider>
  )
}

// مكونات مساعدة
const CustomizerSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div>
    <h3 className="mb-4 text-sm font-semibold uppercase text-muted-foreground tracking-wider bg-muted/50 px-3 py-1.5 rounded-md inline-block">{title}</h3>
    {children}
  </div>
);

const OptionButton = ({ isSelected, children, label, ...props }: { isSelected: boolean, children: React.ReactNode, label: string } & React.ComponentPropsWithoutRef<'button'>) => (
  <div className="flex flex-col items-center gap-2">
    <button {...props} className={cn("w-full h-auto p-2 rounded-lg border-2 flex items-center justify-center transition-all", isSelected ? "border-primary bg-primary/10" : "border-muted/80 hover:border-primary/50")}>
      {children}
    </button>
    <span className="text-xs font-medium text-muted-foreground">{label}</span>
  </div>
);