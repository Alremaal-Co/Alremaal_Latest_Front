"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Building2, Map, Camera, LayoutTemplate, FileSearch, Banknote, Handshake, Users, FileText,
    Calculator, FilePlus2, FileMinus2, Receipt, Percent, Users2, Calendar, ListChecks,
    BarChart3, LifeBuoy, Wrench, Grid3x3, Pin, PinOff, Megaphone
} from "lucide-react";

function usePersistentState<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [state, setState] = useState<T>(() => {
        if (typeof window === "undefined") return initialValue;
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) { console.error(error); return initialValue; }
    });
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(state));
        } catch (error) { console.error(error); }
    }, [key, state]);
    return [state, setState];
}

const allApps = [
    // الإعلانات والعقارات
    { code: "listings", name: "قائمة العقارات", description: "إضافة وإدارة جميع العقارات المتاحة.", icon: Building2, category: "listings", href: "#" },
    { code: "ads", name: "إدارة الإعلانات", description: "إنشاء وتتبع أداء الإعلانات العقارية.", icon: Megaphone, category: "listings", href: "#" },
    { code: "map_search", name: "بحث الخريطة", description: "أداة بحث مرئية للعقارات على الخريطة.", icon: Map, category: "listings", href: "#" },
    { code: "virtual_tours", name: "الجولات الافتراضية", description: "إدارة وربط الجولات المصورة للعقارات.", icon: Camera, category: "listings", href: "#" },
    { code: "cms_builder", name: "منشئ المواقع", description: "إنشاء صفحات هبوط خاصة بكل عقار أو مشروع.", icon: LayoutTemplate, category: "listings", href: "#" },

    // العملاء والصفقات
    { code: "crm", name: "إدارة العملاء", description: "قاعدة بيانات مركزية للعملاء المحتملين والفعليين.", icon: Users, category: "deals", href: "#" },
    { code: "requests", name: "طلبات العقارات", description: "استقبال وتصنيف طلبات الشراء والإيجار.", icon: FileSearch, category: "deals", href: "#" },
    { code: "financing_req", name: "طلبات التمويل", description: "متابعة طلبات التمويل المقدمة من العملاء.", icon: Banknote, category: "deals", href: "#" },
    { code: "offers", name: "العروض والمفاوضات", description: "إدارة العروض المقدمة وحالة المفاوضات.", icon: Handshake, category: "deals", href: "#" },
    { code: "contracts", name: "إدارة العقود", description: "إنشاء وتتبع العقود الإلكترونية والتوقيعات.", icon: FileText, category: "deals", href: "#" },

    // المالية والحسابات
    { code: "mortgage_calc", name: "حاسبة التمويل", description: "أداة لحساب أقساط التمويل العقاري.", icon: Calculator, category: "financials", href: "#" },
    { code: "receipt_voucher", name: "سند قبض", description: "إنشاء سند قبض مالي سريع.", icon: FilePlus2, category: "financials", href: "#" },
    { code: "payment_voucher", name: "سند صرف", description: "إنشاء سند صرف مالي سريع.", icon: FileMinus2, category: "financials", href: "#" },
    { code: "invoicing", name: "إنشاء فاتورة", description: "إصدار فواتير رسمية للعمولات والخدمات.", icon: Receipt, category: "financials", href: "#" },
    { code: "commissions", name: "حساب العمولات", description: "تتبع وحساب عمولات الفريق والوسطاء.", icon: Percent, category: "financials", href: "#" },

    // الإدارة والأدوات
    { code: "team", name: "إدارة الفريق", description: "إضافة أعضاء الفريق وتحديد الصلاحيات.", icon: Users2, category: "management", href: "#" },
    { code: "calendar", name: "التقويم والمواعيد", description: "جدولة مواعيد المعاينات والاجتماعات.", icon: Calendar, category: "management", href: "#" },
    { code: "tasks", name: "إدارة المهام", description: "متابعة المهام اليومية للفريق.", icon: ListChecks, category: "management", href: "#" },
    { code: "reports", name: "التقارير والتحليلات", description: "تحليلات أداء المبيعات والإعلانات.", icon: BarChart3, category: "management", href: "#" },
    { code: "services", name: "إدارة الخدمات", description: "إدارة الخدمات الإضافية (صيانة، تقييم).", icon: Wrench, category: "management", href: "#" },
    { code: "support", name: "الدعم الفني", description: "نظام تذاكر الدعم الداخلي والخارجي.", icon: LifeBuoy, category: "management", href: "#" },
];


const AppItem = ({ app, isPinned, onPinToggle, isManaging }:any) => (
    <TooltipProvider delayDuration={200}>
        <Tooltip>
            <TooltipTrigger asChild>
                <a href={app.href} className="relative group flex flex-col items-center gap-2 rounded-lg p-2 transition-colors hover:bg-accent">
                    <app.icon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="text-xs font-medium text-center text-accent-foreground">{app.name}</span>
                    {isManaging && (
                        <button onClick={(e) => { e.preventDefault(); onPinToggle(app.code); }} className="absolute top-0 right-0 p-0.5 rounded-full bg-popover border border-border transition-colors hover:bg-muted">
                            {isPinned ? <PinOff className="h-3 w-3 text-destructive" /> : <Pin className="h-3 w-3 text-muted-foreground" />}
                        </button>
                    )}
                </a>
            </TooltipTrigger>
            <TooltipContent ><p>{app.description}</p></TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

export function AppsDropdown() {
    const initialPinnedApps = ['listings', 'crm', 'requests', 'calendar', 'reports', 'ads'];
    const [pinnedAppCodes, setPinnedAppCodes] = usePersistentState('pinned-real-estate-apps', initialPinnedApps);
    const [isManaging, setIsManaging] = useState(false);

    const pinnedApps = useMemo(() => allApps.filter(app => pinnedAppCodes.includes(app.code)), [pinnedAppCodes]);

    const handlePinToggle = (appCode:any) => {
        setPinnedAppCodes(prev => prev.includes(appCode) ? prev.filter(code => code !== appCode) : [...prev, appCode]);
    };

    const appsByCategory = {
        listings: allApps.filter(app => app.category === 'listings'),
        deals: allApps.filter(app => app.category === 'deals'),
        financials: allApps.filter(app => app.category === 'financials'),
        management: allApps.filter(app => app.category === 'management'),
    };

    return (
        <DropdownMenu>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon"><Grid3x3 className="h-[1.2rem] text-primary dark:text-white w-[1.2rem]" />
                        <span className="sr-only">التطبيقات</span></Button>
                        </DropdownMenuTrigger>
                        </TooltipTrigger>
                    <TooltipContent><p>التطبيقات</p></TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <DropdownMenuContent 
                showArrow={true} 
                align="center" 
                side="bottom"
                sideOffset={20}
                className="w-96 p-0 bg-popover text-popover-foreground border-border rounded-xl">
                <div className="p-3"><h3 className="text-center font-semibold text-foreground">لوحة التطبيقات العقارية</h3></div>
                <DropdownMenuSeparator className="bg-border" />

                <Tabs defaultValue="favorites" className="w-full">
                    {/* تحديث التبويبات لتناسب الفئات العقارية */}
                    <TabsList className="w-full grid grid-cols-5 h-auto p-1 bg-muted rounded-none">
                        <TabsTrigger value="favorites" className="text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md">المفضلة</TabsTrigger>
                        <TabsTrigger value="listings" className="text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md">العقارات</TabsTrigger>
                        <TabsTrigger value="deals" className="text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md">الصفقات</TabsTrigger>
                        <TabsTrigger value="financials" className="text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md">المالية</TabsTrigger>
                        <TabsTrigger value="management" className="text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg rounded-md">الإدارة</TabsTrigger>
                    </TabsList>
                    
                    <div className="p-4 max-h-[400px] overflow-y-auto">
                        <TabsContent value="favorites">
                            {pinnedApps.length > 0 ? (
                                <div className="grid grid-cols-4 gap-4">
                                    {pinnedApps.map(app => <AppItem key={app.code} app={app} isPinned onPinToggle={handlePinToggle} isManaging={isManaging} />)}
                                </div>
                            ) : (
                                <div className="text-center text-sm text-muted-foreground py-8"><p>لم تقم بتثبيت أي تطبيقات.</p><p>اضغط على "إدارة التثبيت" للبدء.</p></div>
                            )}
                        </TabsContent>
                        {Object.entries(appsByCategory).map(([category, apps]) => (
                            <TabsContent key={category} value={category}>
                                <div className="grid grid-cols-4 gap-4">
                                    {apps.map(app => <AppItem key={app.code} app={app} isPinned={pinnedAppCodes.includes(app.code)} onPinToggle={handlePinToggle} isManaging={isManaging} />)}
                                </div>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
                
                <DropdownMenuSeparator className="bg-border" />
                <div className="p-2 flex justify-between items-center text-sm">
                    <Button variant="link" size="sm" className="p-0 h-auto text-primary">متجر التطبيقات</Button>
                    <Button variant={isManaging ? "default" : "secondary"} size="sm" onClick={() => setIsManaging(!isManaging)}>
                        {isManaging ? "حفظ" : "إدارة التثبيت"}
                    </Button>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}