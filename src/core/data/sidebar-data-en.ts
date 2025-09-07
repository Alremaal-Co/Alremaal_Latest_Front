import {
  Clock, Users, Shield, Calendar, Package, Building, Megaphone,
  LandPlot, FileText, Speaker, Gavel, CreditCard, FileSignature, Bell, Wallet, Home, BarChart2, FolderArchive, Map, Search, University, Wrench, Settings, FileCog, Receipt,
  Banknote
} from "lucide-react";

export const sidebarDataEn = {
  sections: [
    {
      title: "Menu",
      items: [
        {
          title: "Dashboard",
          icon: Clock,
          href: "/admin/dashboard",
          items: [
            { title: "General", href: "/admin/dashboard/general" },
            { title: "Real Estate Offers", href: "/admin/dashboard/offers" },
            { title: "Marketing Requests", href: "/admin/dashboard/marketing" },
            { title: "Investment Projects", href: "/admin/dashboard/projects" },
            { title: "Property Requests", href: "/admin/dashboard/requests" },
            { title: "Financing Requests", href: "/admin/dashboard/financing" },
            { title: "Plots & Lands", href: "/admin/dashboard/lands" },
            { title: "Valuation Requests", href: "/admin/dashboard/valuation" },
          ]
        },
        {
          title: "Members",
          icon: Users,
          href: "/admin/members",
          items: [
            { title: "Property Owner", href: "/admin/members/owner" },
            { title: "Real Estate Broker", href: "/admin/members/broker" },
            { title: "Real Estate Developer", href: "/admin/members/developer" },
            { title: "Property Seeker", href: "/admin/members/seeker-property" },
            { title: "Finance Seeker", href: "/admin/members/seeker-finance" },
            { title: "Bank Employee", href: "/admin/members/bank-employee" },
          ]
        },
        {
          title: "User Permissions",
          icon: Shield,
          href: "/admin/permissions",
          items: [
            { title: "Users List", href: "/admin/permissions/users" },
            { title: "User Groups", href: "/admin/permissions/groups" },
          ]
        },
        {
          title: "Daily Bookings",
          icon: Calendar,
          href: "/admin/bookings",
          items: [
            { title: "Daily Bookings List", href: "/admin/bookings/list" },
            { title: "Add Daily Booking", href: "/admin/bookings/add" },
          ]
        },
        {
          title: "Packages & Subscriptions",
          icon: Package,
          href: "/admin/subscriptions",
          items: [
            { title: "Packages List", href: "/admin/subscriptions/packages" },
            { title: "Subscriptions Details", href: "/admin/subscriptions/details" },
          ]
        }
      ]
    },
    {
      title: "Features",
      items: [
        {
          title: "Real Estate Offers",
          icon: Building,
          href: "/admin/offers",
          items: [
            { title: "Offers List", href: "/admin/offers/list" },
            { title: "Add Offer", href: "/admin/offers/add" },
            { title: "Offers Archive", href: "/admin/offers/archive" },
            { title: "Offers for Review", href: "/admin/offers/review" },
            { title: "Map View", href: "/admin/offers/map" },
            { title: "Special Deals", href: "/admin/offers/deals" },
            { title: "Reports List", href: "/admin/offers/reports" },
          ]
        },
        {
          title: "Marketing Requests",
          icon: Megaphone,
          href: "/admin/marketing",
          items: [
            { title: "Requests List", href: "/admin/marketing/list" },
            { title: "Add Request", href: "/admin/marketing/add" },
          ]
        },
        { title: "Real Estate Registry", icon: FileText, href: "/admin/registry" },
        {
          title: "Reports",
          icon: BarChart2,
          href: "/admin/reports",
          items: [
            { title: "Ads Reports", href: "/admin/reports/ads" },
            { title: "Property Requests Report", href: "/admin/reports/property-requests" },
            { title: "Marketing Requests Report", href: "/admin/reports/marketing-requests" },
            { title: "Projects & Units Report", href: "/admin/reports/projects-units" },
          ]
        },
        {
          title: "Investment Projects",
          icon: Speaker,
          href: "/admin/projects",
          items: [
            { title: "Projects List", href: "/admin/projects/list" },
            { title: "New Bookings", href: "/admin/projects/new-bookings" },
            { title: "Temporary Bookings", href: "/admin/projects/temp-bookings" },
            { title: "Sold Bookings", href: "/admin/projects/sold-bookings" },
          ]
        },
        {
          title: "Property Requests",
          icon: Home,
          href: "/admin/property-requests",
          items: [
            { title: "Requests List", href: "/admin/property-requests/list" },
            { title: "Add Request", href: "/admin/property-requests/add" },
            { title: "Requests Archive", href: "/admin/property-requests/archive" },
            { title: "Map View", href: "/admin/property-requests/map" },
          ]
        },
        {
          title: "Financing Requests",
          icon: Banknote,
          href: "/admin/financing",
          items: [
            { title: "Print Forms", href: "/admin/financing/print" },
            { title: "Requests Basket", href: "/admin/financing/basket" },
            { title: "Brokers Requests List", href: "/admin/financing/broker-requests" },
            { title: "Financing Requests List", href: "/admin/financing/list" },
            { title: "Add Financing Request", href: "/admin/financing/add" },
          ]
        },
        {
          title: "Plots & Lands",
          icon: LandPlot,
          href: "/admin/lands",
          items: [
            { title: "Plots List", href: "/admin/lands/plots-list" },
            { title: "Lands Without Plots", href: "/admin/lands/lands-without-plots" },
          ]
        },
        {
          title: "Valuation Requests",
          icon: Search,
          href: "/admin/valuation",
          items: [
            { title: "Request Real Estate Valuation", href: "/admin/valuation/request" },
          ]
        },
        { title: "Settings", icon: Settings, href: "/admin/settings" },
        {
          title: "General Services",
          icon: Wrench,
          href: "/admin/general-services",
          items: [
            { title: "Real Estate Services", href: "/admin/general-services/real-estate" },
          ]
        },
        {
          title: "Legal Affairs",
          icon: Gavel,
          href: "/admin/legal",
          items: [
            { title: "Dashboard", href: "/admin/legal/dashboard" },
            { title: "Contracts", href: "/admin/legal/contracts" },
            { title: "Cases", href: "/admin/legal/cases" },
            { title: "Disputes", href: "/admin/legal/disputes" },
            { title: "Documents", href: "/admin/legal/documents" },
            { title: "Appointments", href: "/admin/legal/appointments" },
            { title: "Notifications", href: "/admin/legal/notifications" },
          ]
        },
        {
          title: "Payment Operations",
          icon: CreditCard,
          href: "/admin/payments",
          items: [
            { title: "Manage Payments", href: "/admin/payments/manage" },
          ]
        },
        { title: "Rent Installment Requests", icon: Home, href: "/admin/rent-installments" },
        { title: "Rent Contract Authentication", icon: FileSignature, href: "/admin/rent-contracts" },
        {
            title: "Notifications",
            icon: Bell,
            href: "/admin/notifications",
            items: [
              { title: "Manage Notification System", href: "/admin/notifications/system" },
              { title: "Manage Sending Templates", href: "/admin/notifications/templates" },
            ]
        },
        {
          title: "Receipt Vouchers",
          icon: Receipt,
          href: "/admin/receipt-vouchers",
          items: [
            { title: "Receipt Vouchers List", href: "/admin/receipt-vouchers/list" },
            { title: "Add Receipt Voucher", href: "/admin/receipt-vouchers/add" },
          ]
        },
        {
          title: "Payment Vouchers",
          icon: Wallet,
          href: "/admin/payment-vouchers",
          items: [
            { title: "Payment Vouchers List", href: "/admin/payment-vouchers/list" },
            { title: "Add Payment Voucher", href: "/admin/payment-vouchers/add" },
          ]
        },
        {
          title: "General Accounts",
          icon: FolderArchive,
          href: "/admin/accounts",
          items: [
            { title: "Chart of Accounts", href: "/admin/accounts/directory" },
            { title: "Journal Entries", href: "/admin/accounts/journal" },
          ]
        },
        {
          title: "Complaints & Suggestions",
          icon: Settings,
          href: "/admin/feedback",
          items: [
            { title: "Complaints & Suggestions List", href: "/admin/feedback/list" },
          ]
        }
      ]
    },
    {
      title: "Design",
      items: [
        {
          title: "Platform Design",
          icon: FileCog,
          href: "/admin/design",
          items: [
            { title: "Main Page", href: "/admin/design/main" },
            { title: "Services", href: "/admin/design/services" },
            { title: "Real Estate Offers", href: "/admin/design/offers" },
            { title: "Brokers", href: "/admin/design/brokers" },
            { title: "Projects", href: "/admin/design/projects" },
            { title: "Lands & Plots", href: "/admin/design/lands" },
            { title: "Property Requests", href: "/admin/design/requests" },
            { title: "Consultations", href: "/admin/design/consultations" },
            { title: "Jobs", href: "/admin/design/jobs" },
          ]
        }
      ]
    }
  ]
};