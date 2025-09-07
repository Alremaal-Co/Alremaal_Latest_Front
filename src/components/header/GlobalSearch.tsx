"use client";

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { useThemeCustomizer } from '@/context/ThemeCustomizerContext';
import { 
    Search, LucideIcon, ArrowRight // استيراد أيقونة السهم
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { sidebarDataAr } from '@/core/data/sidebar-data-ar';
import { sidebarDataEn } from '@/core/data/sidebar-data-en';

// --- الأنواع والسكيم ودوال المساعدة (تبقى كما هي) ---
type Category = 'Pages' | 'Actions' | 'Tools' | 'Settings';
type SearchableItem = { title: string; href: string; icon: LucideIcon; category: Category; parent?: string; };
type SearchSchema = { placeholder: string; emptyState: string; groups: Record<Category, string>; };

const getCategory = (href: string, title: string): Category => {
    const lowerTitle = title.toLowerCase();
    const lowerHref = href.toLowerCase();
    if (lowerHref.includes('/add') || lowerTitle.includes('add') || lowerTitle.includes('إضافة') || lowerTitle.includes('جديد')) return 'Actions';
    if (lowerHref.includes('settings') || lowerTitle.includes('settings') || lowerTitle.includes('اعدادات')) return 'Settings';
    if (lowerHref.includes('dashboard') || lowerHref.includes('reports') || lowerTitle.includes('dashboard') || lowerTitle.includes('تقارير') || lowerTitle.includes('لوحة التحكم')) return 'Tools';
    return 'Pages';
};

const flattenSidebarData = (data: any): SearchableItem[] => {
    const items: SearchableItem[] = [];
    data.sections.forEach((section: any) => {
        section.items.forEach((item: any) => {
            if (item.items && item.items.length > 0) {
                item.items.forEach((subItem: any) => {
                    items.push({ title: subItem.title, href: subItem.href, icon: item.icon, category: getCategory(subItem.href, subItem.title), parent: item.title });
                });
            } else if (item.href) {
                items.push({ title: item.title, href: item.href, icon: item.icon, category: getCategory(item.href, item.title), parent: section.title });
            }
        });
    });
    return items;
};

const searchSchema: { [key: string]: SearchSchema } = {
    en: {
        placeholder: "Search pages, actions, settings...",
        emptyState: "No results found.",
        groups: { Pages: "Pages", Actions: "Actions", Tools: "Tools", Settings: "Settings" },
    },
    ar: {
        placeholder: "ابحث في الصفحات، الإجراءات، الإعدادات...",
        emptyState: "لم يتم العثور على نتائج.",
        groups: { Pages: "صفحات", Actions: "إجراءات", Tools: "أدوات", Settings: "إعدادات" },
    }
};

const categoryOrder: Category[] = ['Pages', 'Actions', 'Tools', 'Settings'];

export function GlobalSearch() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const { settings } = useThemeCustomizer();
    const dir = settings.direction;
    const lang = dir === 'rtl' ? 'ar' : 'en';
    const t = searchSchema[lang];

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const groupedItems = useMemo(() => {
        const sourceData = lang === 'ar' ? sidebarDataAr : sidebarDataEn;
        const allItems = flattenSidebarData(sourceData);
        const grouped = allItems.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
        }, {} as Record<Category, SearchableItem[]>);
        return Object.entries(grouped).sort(([a], [b]) => categoryOrder.indexOf(a as Category) - categoryOrder.indexOf(b as Category));
    }, [lang]);

    const runCommand = (command: () => unknown) => {
        setIsOpen(false);
        command();
    };

    return (
        <>
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    onClick={() => setIsOpen(true)}
                    className={cn("relative h-9 w-full justify-start rounded-lg text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-96")}
                >
                    <Search className={cn("h-4 w-4")} />
                    <span className="hidden lg:inline-flex">{t.placeholder}</span>
                    <span className="inline-flex lg:hidden">Search...</span>
                    <kbd className={cn("pointer-events-none absolute top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex", dir === 'rtl' ? 'left-1.5' : 'right-1.5')}>
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </Button>
            </div>

            <CommandDialog open={isOpen} onOpenChange={setIsOpen} className="sm:max-w-4xl">
                <CommandInput className='' placeholder={t.placeholder} autoFocus={true} />
                
                <CommandList className="!h-[1000px] overflow-y-auto">
                    <CommandEmpty >{t.emptyState}</CommandEmpty>
                    {groupedItems.map(([category, items]) => (
                        <CommandGroup key={category} heading={t.groups[category as Category]}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {items.map((item) => (
                                    <CommandItem
                                        key={item.href}
                                        onSelect={() => runCommand(() => router.push(item.href))}
                                        className="flex flex-row items-center justify-start rounded-lg border cursor-pointer hover:bg-accent gap-3"
                                    >
                                        <ArrowRight className={cn("h-4 w-4 text-muted-foreground shrink-0", dir === 'rtl' && 'rotate-180')} />
                                        <div className={cn("flex flex-col", dir === 'rtl' ? 'text-right' : 'text-left')}>
                                            <span className="text-sm font-medium text-foreground">{item.title}</span>
                                            <p className="text-xs text-muted-foreground">{item.parent}</p>
                                        </div>
                                    </CommandItem>
                                ))}
                            </div>
                        </CommandGroup>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    );
}