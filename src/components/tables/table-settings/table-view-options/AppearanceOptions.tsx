"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { FeatureTooltip } from "./FeatureTooltip";
import { t } from "@/i18n/trans";

export const AppearanceOptions = ({...props }: any) => (
  <div className="space-y-4">
    <h3 className="text-base font-semibold">{t('appearance')}</h3>
    <div className="space-y-3 pl-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Label htmlFor="zebra-striping" className="text-sm text-muted-foreground">{t('zebraStriping')}</Label>
          <FeatureTooltip content={t('zebraStripingTooltip')} />
        </div>
        <Switch id="zebra-striping" checked={props.isStriped} onCheckedChange={props.setIsStriped} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Label htmlFor="row-borders" className="text-sm text-muted-foreground">{t('rowBorders')}</Label>
          <FeatureTooltip content={t('rowBordersTooltip')} />
        </div>
        <Switch id="row-borders" checked={props.hasBorders} onCheckedChange={props.setHasBorders} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Label htmlFor="row-hover" className="text-sm text-muted-foreground">{t('hoverEffect')}</Label>
          <FeatureTooltip content={t('hoverEffectTooltip')} />
        </div>
        <Switch id="row-hover" checked={props.enableHover} onCheckedChange={props.setEnableHover} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Label htmlFor="sticky-header" className="text-sm text-muted-foreground">{t('stickyHeader')}</Label>
          <FeatureTooltip content={t('stickyHeaderTooltip')} />
        </div>
        <Switch id="sticky-header" checked={props.isStickyHeader} onCheckedChange={props.setIsStickyHeader} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Label htmlFor="truncate-text" className="text-sm text-muted-foreground">{t('truncateText')}</Label>
          <FeatureTooltip content={t('truncateTextTooltip')} />
        </div>
        <Switch id="truncate-text" checked={props.truncateText} onCheckedChange={props.setTruncateText} />
      </div>
    </div>
  </div>
);