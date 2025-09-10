'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from '@/lib/utils';
import { settingsNavigation } from './settingsNavigation'; // افترض أن البيانات في ملف منفصل
import { HelpCircle } from 'lucide-react';
import { getIcon, IconName } from '@/lib/getIcon';


// --- بنية البيانات (تبقى كما هي) ---
type FormFieldType = "text" | "email" | "password" | "number" | "file" | "textarea" | "switch";
type FormField = { 
  id: string; 
  label: string; 
  type: FormFieldType; 
  placeholder?: string; 
  tooltip?: string;
};
type FormSection = { 
  title: string; 
  description?: string; 
  fields: FormField[]; 
};
type SettingsNavItem = { 
  title: string; 
  href: string; 
  icon: IconName; 
  description: string; 
  formSections: FormSection[]; 
};
type SettingsNavSection = { 
  title: string; 
  items: SettingsNavItem[]; 
};

// --- مُولِّد النماذج الديناميكي (FormGenerator) ---
const FormGenerator: React.FC<{ sections: FormSection[] }> = ({ sections }) => (
  <div className="space-y-8">
    {sections.map((section, index) => (
      <div key={section.title} className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-foreground">{section.title}</h4>
          {section.description && <p className="text-sm text-muted-foreground mt-1">{section.description}</p>}
        </div>
        {section.fields.map((field) => (
          <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            <div className="md:col-span-1 flex items-center gap-2">
              <Label htmlFor={field.id}>{field.label}</Label>
              {field.tooltip && (
                 <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild><button type="button"><HelpCircle className="size-4 text-muted-foreground" /></button></TooltipTrigger>
                    <TooltipContent><p>{field.tooltip}</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <div className="md:col-span-2">
              {field.type === 'switch' ? (
                <Switch id={field.id} dir="rtl" />
              ) : field.type === 'textarea' ? (
                <Textarea id={field.id} placeholder={field.placeholder} />
              ) : (
                <Input id={field.id} type={field.type} placeholder={field.placeholder} />
              )}
            </div>
          </div>
        ))}
        {index < sections.length - 1 && <Separator className="my-8" />}
      </div>
    ))}
  </div>
);


// --- مكون الصفحة الرئيسي ---
export default function ProfessionalSettingsPageWithAccordion() {
  const [activeItem, setActiveItem] = useState<SettingsNavItem>(settingsNavigation[0].items[0]);
  
  return (
    <div className="grid lg:grid-cols-[300px_1fr] h-screen bg-muted/20" dir="rtl">
      {/* القائمة الجانبية */}
      <aside className="hidden lg:flex flex-col border-l bg-card">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-foreground">مركز الإعدادات</h2>
        </div>
        <ScrollArea className="flex-1">
          <nav className="p-4 space-y-1">
            {settingsNavigation.map((section) => (
              <div key={section.title} className="space-y-1">
                <h3 className="mb-2 mt-4 px-3 text-sm font-semibold tracking-tight text-muted-foreground">
                  {section.title}
                </h3>
                {section.items.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => setActiveItem(item)}
                    className={cn(
                      "group w-full flex items-center rounded-md px-3 py-2.5 text-base font-medium transition-colors text-right",
                      activeItem.href === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {getIcon(item.icon, { className: "ml-3 h-5 w-5 flex-shrink-0" })}
                    <span className="flex-1 truncate">{item.title}</span>
                  </button>
                ))}
              </div>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      {/* منطقة المحتوى الرئيسية */}
      <main className="flex flex-col h-full">
        <ScrollArea className="flex-1">
          <div className="p-4 sm:p-6 md:p-8 space-y-8">
            <header>
              <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-4">
                {getIcon(activeItem.icon, { className: 'size-8' })}
                {activeItem.title}
              </h1>
              <p className="mt-2 text-muted-foreground max-w-2xl">
                {activeItem.description}
              </p>
            </header>

            {/* الأكورديون الديناميكي */}
            <Accordion type="multiple" className="w-full space-y-6">
              {activeItem.formSections.map((section, index) => (
                <AccordionItem key={section.title} value={`item-${index}`} className="border-none">
                  <Card className="overflow-hidden">
                    <AccordionTrigger className="hover:no-underline p-0 w-full">
                      <CardHeader className="flex flex-row items-center justify-between w-full p-6 hover:bg-muted/50 transition-colors">
                        <div className="flex flex-col items-start text-right">
                           <CardTitle className="text-xl font-bold text-foreground">
                              {section.title}
                           </CardTitle>
                           {section.description && (
                             <CardDescription className="mt-1">
                               {section.description}
                             </CardDescription>
                           )}
                        </div>
                        <div className="p-2 rounded-full bg-muted group-data-[state=open]:bg-primary/20 mr-auto">
                          {getIcon('ChevronDown', { className: 'size-5 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary' })}
                        </div>
                      </CardHeader>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="p-6 pt-0">
                         <FormGenerator sections={[section]} />
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
            
          </div>
        </ScrollArea>
        <div className="p-6 border-t bg-card sticky bottom-0">
          <div className="flex justify-start">
            <Button size="lg">حفظ إعدادات "{activeItem.title}"</Button>
          </div>
        </div>
      </main>
    </div>
  );
}