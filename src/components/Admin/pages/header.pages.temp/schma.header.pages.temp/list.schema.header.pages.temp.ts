// =================================================================
// 1. سكيم البيانات (Schema) لدعم اللغتين
// =================================================================

import { LucideIcon, Mail, UserCheck, UserCog, UserPlus, Users } from "lucide-react";

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

export const pageDataSchema: { [key: string]: PageData } = {
    en: {
        breadcrumbs: [
            { label: 'Home', href: '/' },
            { label: 'Users' }
        ],
        title: 'User List',
        buttons: [
            { label: 'Invite User', icon: Mail, variant: 'outline' },
            { label: 'Add User', icon: UserPlus, variant: 'default' },
        ],
        stats: [
            { title: 'Total Users', icon: Users, value: '12,000', comparison: '+5% than last month', tooltip: 'Total number of registered users.' },
            { title: 'New Users', icon: UserPlus, value: '+350', comparison: '+10% vs last month', tooltip: 'Users who signed up in the last 30 days.' },
            { title: 'Pending Verifications', icon: UserCog, value: '42', comparison: '2% of users', tooltip: 'Users who have not yet verified their email.' },
            { title: 'Active Users', icon: UserCheck, value: '7800', comparison: '65% of all users', tooltip: 'Users who have logged in within the last 30 days.' },
        ]
    },
    ar: {
        breadcrumbs: [
            { label: 'الرئيسية', href: '/' },
            { label: 'المستخدمون' }
        ],
        title: 'قائمة المستخدمين',
        buttons: [
            { label: 'دعوة مستخدم', icon: Mail, variant: 'outline' },
            { label: 'إضافة مستخدم', icon: UserPlus, variant: 'default' },
        ],
        stats: [
            { title: 'إجمالي المستخدمين', icon: Users, value: '12,000', comparison: '+5% عن الشهر الماضي', tooltip: 'العدد الإجمالي للمستخدمين المسجلين.' },
            { title: 'مستخدمون جدد', icon: UserPlus, value: '+350', comparison: '+10% مقارنة بالشهر الماضي', tooltip: 'مستخدمون سجلوا في آخر 30 يومًا.' },
            { title: 'بانتظار التحقق', icon: UserCog, value: '42', comparison: '2% من المستخدمين', tooltip: 'مستخدمون لم يتحققوا من بريدهم الإلكتروني بعد.' },
            { title: 'مستخدمون نشطون', icon: UserCheck, value: '7800', comparison: '65% من كل المستخدمين', tooltip: 'مستخدمون سجلوا الدخول خلال آخر 30 يومًا.' },
        ]
    }
};