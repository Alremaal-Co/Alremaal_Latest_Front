import { 
    LucideIcon, 
    Home, 
    PlusCircle, 
    Building2,
    ClipboardList,
    FileClock,
    FileX2,
    Search
} from "lucide-react";

export type BreadcrumbItem = {
    label: string;
    href?: string;
};

export type ActionButton = {
    label: string;
    icon: LucideIcon;
    variant: 'default' | 'outline';
};

export type StatCardData = {
    title: string;
    icon: LucideIcon;
    value: string;
    comparison: string;
    tooltip: string;
};

export type PageData = {
    breadcrumbs: BreadcrumbItem[];
    title: string;
    buttons: ActionButton[];
    stats: StatCardData[];
};

export const pageDataSchemaOffers: { [key: string]: PageData } = {
    en: {
        breadcrumbs: [
            { label: 'Dashboard', href: '/admin/dashboard' },
            { label: 'Real Estate Offers' }
        ],
        title: 'Offers List',
        buttons: [
            { label: 'Advanced Search', icon: Search, variant: 'outline' },
            { label: 'Add New Offer', icon: PlusCircle, variant: 'default' },
        ],
        stats: [
            { title: 'Total Offers', icon: Building2, value: '8,540', comparison: '+120 this month', tooltip: 'Total number of all offers ever created.' },
            { title: 'Active Offers', icon: ClipboardList, value: '6,210', comparison: '72% of total', tooltip: 'Offers currently visible and available on the platform.' },
            { title: 'Pending Review', icon: FileClock, value: '85', comparison: 'Needs immediate action', tooltip: 'New or updated offers waiting for admin approval.' },
            { title: 'Expired Offers', icon: FileX2, value: '1,350', comparison: '15% of total', tooltip: 'Offers that have passed their expiration date.' },
        ]
    },
    ar: {
        breadcrumbs: [
            { label: 'لوحة التحكم', href: '/admin/dashboard' },
            { label: 'العروض العقارية' }
        ],
        title: 'قائمة الإعلانات',
        buttons: [
            { label: 'بحث متقدم', icon: Search, variant: 'outline' },
            { label: 'إضافة إعلان جديد', icon: PlusCircle, variant: 'default' },
        ],
        stats: [
            { title: 'إجمالي الإعلانات', icon: Building2, value: '8,540', comparison: '+120 هذا الشهر', tooltip: 'العدد الإجمالي لجميع العروض التي تم إنشاؤها.' },
            { title: 'الإعلانات النشطة', icon: ClipboardList, value: '6,210', comparison: '72% من الإجمالي', tooltip: 'العروض المتاحة والمرئية حاليًا على المنصة.' },
            { title: 'بانتظار المراجعة', icon: FileClock, value: '85', comparison: 'تحتاج إلى إجراء فوري', tooltip: 'عروض جديدة أو محدثة بانتظار موافقة المسؤول.' },
            { title: 'الإعلانات المنتهية', icon: FileX2, value: '1,350', comparison: '15% من الإجمالي', tooltip: 'العروض التي تجاوزت تاريخ انتهاء صلاحيتها.' },
        ]
    }
};