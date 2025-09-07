"use client";

import React from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const FeatureTooltip = ({ content }: { content: string }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <InfoCircledIcon className="h-4 w-4 text-muted-foreground ml-2" />
      </TooltipTrigger>
      <TooltipContent><p>{content}</p></TooltipContent>
    </Tooltip>
  </TooltipProvider>
);