import {
  Clock, Users, Shield, Calendar, Package, Building, Megaphone,
  LandPlot, FileText, Speaker, Gavel, CreditCard, FileSignature, Bell, Wallet, Home, BarChart2, FolderArchive, Map, Search, University, Wrench, Settings, FileCog, Receipt,
  Banknote
} from "lucide-react";

export const sidebarDataAr = {
  sections: [
    {
      title: "Menue",
      items: [
        {
          title: "لوحة التحكم",
          icon: Clock,
          href: "/admin/dashboard",
          items: [
            { title: "عام", href: "/admin/dashboard/general" },
            { title: "العروض العقارية", href: "/admin/dashboard/offers" },
            { title: "طلب تسويق", href: "/admin/dashboard/marketing" },
            { title: "المشاريع الاستثماريه", href: "/admin/dashboard/projects" },
            { title: "الطلبات العقاريه", href: "/admin/dashboard/requests" },
            { title: "طلبات التمويل", href: "/admin/dashboard/financing" },
            { title: "المخططات و الاراضي", href: "/admin/dashboard/lands" },
            { title: "طلبات التقييم", href: "/admin/dashboard/valuation" },
          ]
        },
        {
          title: "الأعضاء",
          icon: Users,
          href: "/admin/members",
          items: [
            { title: "مالك عقار", href: "/admin/members/owner" },
            { title: "وسيط عقاري", href: "/admin/members/broker" },
            { title: "مطور عقاري", href: "/admin/members/developer" },
            { title: "باحث عن عقار", href: "/admin/members/seeker-property" },
            { title: "باحث عن تمويل", href: "/admin/members/seeker-finance" },
            { title: "موظف بنك", href: "/admin/members/bank-employee" },
          ]
        },
        {
          title: "صلاحيات المستخدمين",
          icon: Shield,
          href: "/admin/permissions",
          items: [
            { title: "قائمه المستخدمين", href: "/admin/permissions/users" },
            { title: "مجموعات المستخدمين", href: "/admin/permissions/groups" },
          ]
        },
        {
          title: "الحجوزات اليوميه",
          icon: Calendar,
          href: "/admin/bookings",
          items: [
            { title: "قائمه الحجوزات اليوميه", href: "/admin/bookings/list" },
            { title: "اضافه حجز يومي", href: "/admin/bookings/add" },
          ]
        },
        {
          title: "الباقات و الإشتراكات",
          icon: Package,
          href: "/admin/subscriptions",
          items: [
            { title: "قائمه الباقات", href: "/admin/subscriptions/packages" },
            { title: "تفاصيل الاشتراكات", href: "/admin/subscriptions/details" },
          ]
        }
      ]
    },
    {
      title: "features",
      items: [
        {
          title: "العروض العقارية",
          icon: Building,
          href: "/admin/offers",
          items: [
            { title: "قائمة الإعلانات العقارية", href: "/admin/offers/list" },
            { title: "إضافه اعلان عقاري", href: "/admin/offers/add" },
            { title: "أرشيف الإعلانات العقاريه", href: "/admin/offers/archive" },
            { title: "إعلانات عقارية تحتاج مراجعه", href: "/admin/offers/review" },
            { title: "قائمة الإعلانات علي الخريطه", href: "/admin/offers/map" },
            { title: "الصفقات الخاصه", href: "/admin/offers/deals" },
            { title: "قائمه البلاغات", href: "/admin/offers/reports" },
          ]
        },
        {
          title: "طلب تسويق",
          icon: Megaphone,
          href: "/admin/marketing",
          items: [
            { title: "قائمه طلبات التسويق", href: "/admin/marketing/list" },
            { title: "إضافه طلب تسويق", href: "/admin/marketing/add" },
          ]
        },
        { title: "السجل العقاري", icon: FileText, href: "/admin/registry" },
        {
          title: "التقارير",
          icon: BarChart2,
          href: "/admin/reports",
          items: [
            { title: "تقارير الإعلانات العقاريه", href: "/admin/reports/ads" },
            { title: "تقرير طلبات العقار", href: "/admin/reports/property-requests" },
            { title: "تقرير طلبات التسويق", href: "/admin/reports/marketing-requests" },
            { title: "تقرير المشاريع والوحدات", href: "/admin/reports/projects-units" },
          ]
        },
        {
          title: "المشاريع الاستثماريه",
          icon: Speaker,
          href: "/admin/projects",
          items: [
            { title: "قائمه المشاريع", href: "/admin/projects/list" },
            { title: "الحجوزات الجديده", href: "/admin/projects/new-bookings" },
            { title: "الحجوزات المؤقته", href: "/admin/projects/temp-bookings" },
            { title: "الحجوزات المباعه", href: "/admin/projects/sold-bookings" },
          ]
        },
        {
          title: "الطلبات العقاريه",
          icon: Home,
          href: "/admin/property-requests",
          items: [
            { title: "قائمة الطلبات العقاريه", href: "/admin/property-requests/list" },
            { title: "إضافه طلب عقاري", href: "/admin/property-requests/add" },
            { title: "أرشيف الطلبات العقارية", href: "/admin/property-requests/archive" },
            { title: "قائمة الإعلانات علي الخريطه", href: "/admin/property-requests/map" },
          ]
        },
        {
          title: "طلبات التمويل",
          icon: Banknote,
          href: "/admin/financing",
          items: [
            { title: "طباعه نماذج", href: "/admin/financing/print" },
            { title: "سله الطلبات التمويليه", href: "/admin/financing/basket" },
            { title: "قائمه طلبات الوسطاء", href: "/admin/financing/broker-requests" },
            { title: "قائمة الطلبات التمويل", href: "/admin/financing/list" },
            { title: "إضافه طلب تمويل", href: "/admin/financing/add" },
          ]
        },
        {
          title: "المخططات و الاراضي",
          icon: LandPlot,
          href: "/admin/lands",
          items: [
            { title: "قائمه المخططات", href: "/admin/lands/plots-list" },
            { title: "أراضي بدون مخططات", href: "/admin/lands/lands-without-plots" },
          ]
        },
        {
          title: "طلبات التقييم",
          icon: Search,
          href: "/admin/valuation",
          items: [
            { title: "طلب تقييم عقاري", href: "/admin/valuation/request" },
          ]
        },
        { title: "الاعدادات", icon: FileText, href: "/admin/settings" },
        {
          title: "خدمات عامه",
          icon: Wrench,
          href: "/admin/general-services",
          items: [
            { title: "خدمات عقاريه", href: "/admin/general-services/real-estate" },
          ]
        },
        {
          title: "الشؤون القانونية",
          icon: Gavel,
          href: "/admin/legal",
          items: [
            { title: "لوحه التحكم", href: "/admin/legal/dashboard" },
            { title: "العقود", href: "/admin/legal/contracts" },
            { title: "القضايا", href: "/admin/legal/cases" },
            { title: "النزاعات", href: "/admin/legal/disputes" },
            { title: "المستندات", href: "/admin/legal/documents" },
            { title: "المواعيد", href: "/admin/legal/appointments" },
            { title: "الاشعارات", href: "/admin/legal/notifications" },
          ]
        },
        {
          title: "عمليات الدفع",
          icon: CreditCard,
          href: "/admin/payments",
          items: [
            { title: "إدارة المدفوعات", href: "/admin/payments/manage" },
          ]
        },
        { title: "طلبات تقسيط الإيجار", icon: Home, href: "/admin/rent-installments" },
        { title: "طلبات توثيق عقود الإيجار", icon: FileSignature, href: "/admin/rent-contracts" },
        {
            title: "الاشعارات",
            icon: Bell,
            href: "/admin/notifications",
            items: [
              { title: "إدارة نظام الإشعارات", href: "/admin/notifications/system" },
              { title: "إدارة قوالب الإرسال", href: "/admin/notifications/templates" },
            ]
        },
        {
          title: "سند القبض",
          icon: Receipt,
          href: "/admin/receipt-vouchers",
          items: [
            { title: "قائمه سندات القبض", href: "/admin/receipt-vouchers/list" },
            { title: "اضافه سند قبض", href: "/admin/receipt-vouchers/add" },
          ]
        },
        {
          title: "سند الصرف",
          icon: Wallet,
          href: "/admin/payment-vouchers",
          items: [
            { title: "قائمه سندات الصرف", href: "/admin/payment-vouchers/list" },
            { title: "اضافه سند صرف", href: "/admin/payment-vouchers/add" },
          ]
        },
        {
          title: "حسابات عامه",
          icon: FolderArchive,
          href: "/admin/accounts",
          items: [
            { title: "دليل الحسابات", href: "/admin/accounts/directory" },
            { title: "القيود اليوميه", href: "/admin/accounts/journal" },
          ]
        },
        {
          title: "الشكاوى و الإقتراحات",
          icon: Settings,
          href: "/admin/feedback",
          items: [
            { title: "قائمه الشكاوى و الإقتراحات", href: "/admin/feedback/list" },
          ]
        }
      ]
    },
    {
      title: "التصاميم",
      items: [
        {
          title: "تصميم منصه",
          icon: FileCog,
          href: "/admin/design",
          items: [
            { title: "الرئيسية", href: "/admin/design/main" },
            { title: "الخدمات", href: "/admin/design/services" },
            { title: "العروض العقاريه", href: "/admin/design/offers" },
            { title: "الوسطاء", href: "/admin/design/brokers" },
            { title: "المشاريع", href: "/admin/design/projects" },
            { title: "الاراضي والمخططات", href: "/admin/design/lands" },
            { title: "الطلبات العقاريه", href: "/admin/design/requests" },
            { title: "الاستشارات", href: "/admin/design/consultations" },
            { title: "الوظائف", href: "/admin/design/jobs" },
          ]
        }
      ]
    }
  ]
};