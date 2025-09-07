"use client";

import React from "react";
import { ArrowDownIcon, ArrowUpIcon, CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FeatureTooltip } from "./FeatureTooltip";
import { t } from "@/i18n/trans";

export const DensityToggle = ({ density, setDensity }: any) => {
  const densityOptions = [
    { value: 'compact', label: t('compact'), icon: <ArrowDownIcon className="h-4 w-4" /> },
    { value: 'standard', label: t('standard'), icon: <CaretSortIcon className="h-4 w-4" /> },
    { value: 'comfortable', label: t('comfortable'), icon: <ArrowUpIcon className="h-4 w-4" /> },
  ];
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h3 className="text-base font-semibold">{t('tableDensity')}</h3>
        <FeatureTooltip content={t('densityTooltip')} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {densityOptions.map(opt => (
          <Button key={opt.value} variant="outline" size="sm" onClick={() => setDensity(opt.value as any)} className={cn("flex flex-col h-16", density === opt.value && "border-primary ring-2 ring-primary")}>
            {opt.icon}
            <span className="mt-1 text-xs">{opt.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};