import { IconName } from "@/lib/getIcon";

// --- تعريف بنية البيانات (تبقى كما هي) ---
type FormFieldType = "text" | "email" | "password" | "number" | "file" | "textarea" | "switch";
type FormField = { id: string; label: string; type: FormFieldType; placeholder?: string; description?: string; };
type FormSection = { title: string; description?: string; fields: FormField[]; };
type SettingsNavItem = { title: string; href: string; icon: IconName; description: string; formSections: FormSection[]; };
type SettingsNavSection = { title: string; items: SettingsNavItem[]; };

// --- مصدر البيانات المركزي، الشامل، والنهائي ---
export const settingsNavigation: SettingsNavSection[] = [
  {
    title: "الإعدادات الرئيسية",
    items: [
      {
        title: "الإعدادات الأساسية",
        href: "general-basic",
        icon: "SlidersHorizontal",
        description: "إدارة معلومات المنصة الأساسية، اللغة، والموقع.",
        formSections: [
          {
            title: "بيانات المنشأة",
            description: "تحتوي على تفاصيل أساسية مثل اسم الشركة، الشعار، وبيانات الاتصال.",
            fields: [
              { id: "companyNameAr", label: "اسم المنشأة (العربية)", type: "text", placeholder: "شركة الرمال العقارية" },
              { id: "companyNameEn", label: "اسم المنشأة (الإنجليزية)", type: "text", placeholder: "Al Remaal Real Estate" },
              { id: "companyLogoLight", label: "شعار المنشأة (الوضع الفاتح)", type: "file", description: "يفضل أن يكون بامتداد SVG أو PNG بخلفية شفافة." },
              { id: "companyLogoDark", label: "شعار المنشأة (الوضع الداكن)", type: "file" },
            ],
          },
          {
            title: "بيانات الدعم الفني",
            description: "تحدد وسائل الاتصال التي يمكن للمستخدمين من خلالها الحصول على المساعدة.",
            fields: [
              { id: "supportPhone", label: "رقم هاتف الدعم", type: "text", placeholder: "+966..." },
              { id: "supportEmail", label: "بريد الدعم الإلكتروني", type: "email", placeholder: "support@example.com" },
            ],
          },
           {
            title: "التواصل الاجتماعي",
            description: "روابط حسابات التواصل الاجتماعي الخاصة بالمنصة.",
            fields: [
              { id: "socialTwitter", label: "رابط حساب X (تويتر)", type: "text", placeholder: "https://x.com/username" },
              { id: "socialFacebook", label: "رابط حساب فيسبوك", type: "text", placeholder: "https://facebook.com/username" },
              { id: "socialInstagram", label: "رابط حساب انستغرام", type: "text", placeholder: "https://instagram.com/username" },
            ],
          },
        ],
      },
      {
        title: "إدارة أنواع العقارات",
        href: "property-types",
        icon: "Building2",
        description: "تحديد وتصنيف أنواع العقارات المختلفة في النظام.",
        formSections: [
            {
                title: "قائمة أنواع العقارات",
                description: "إدارة الفئات الرئيسية للعقارات مثل سكني، تجاري، صناعي.",
                fields: [ { id: "propertyTypeManager", label: "إدارة الأنواع", type: "textarea", placeholder: "مكون جدول تفاعلي لإدارة أنواع العقارات سيتم وضعه هنا..."}]
            },
            {
                title: "أقسام العقار",
                description: "تحديد الأقسام الفرعية مثل شقة، فيلا، مكتب، مستودع.",
                fields: [ { id: "propertyCategoryManager", label: "إدارة الأقسام", type: "textarea", placeholder: "مكون جدول تفاعلي لإدارة أقسام العقارات سيتم وضعه هنا..."}]
            },
             {
                title: "ميزات العقار",
                description: "إدارة الميزات العامة التي يمكن إضافتها للعقارات مثل مسبح، مصعد، إلخ.",
                fields: [ { id: "propertyFeatureManager", label: "إدارة الميزات", type: "textarea", placeholder: "مكون جدول تفاعلي لإدارة ميزات العقارات سيتم وضعه هنا..."}]
            }
        ]
      },
      {
        title: "المعلومات الجغرافية",
        href: "geo",
        icon: "Map",
        description: "إدارة الدول، المدن، المناطق، والأحياء.",
        formSections: [
             { title: "قائمة الدول", fields: [{id: 'geoCountries', label: 'إدارة الدول', type: 'textarea', placeholder: 'جدول تفاعلي لإدارة الدول...'}]},
             { title: "قائمة المدن", fields: [{id: 'geoCities', label: 'إدارة المدن', type: 'textarea', placeholder: 'جدول تفاعلي لإدارة المدن...'}]},
             { title: "قائمة المناطق", fields: [{id: 'geoRegions', label: 'إدارة المناطق', type: 'textarea', placeholder: 'جدول تفاعلي لإدارة المناطق...'}]},
             { title: "قائمة الأحياء", fields: [{id: 'geoDistricts', label: 'إدارة الأحياء', type: 'textarea', placeholder: 'جدول تفاعلي لإدارة الأحياء...'}]},
        ]
      },
      {
        title: "إعدادات الخريطة",
        href: "map-settings",
        icon: "MapPin",
        description: "تخصيص طبقات الخريطة وإعدادات العرض الجغرافي.",
        formSections: [
             { 
                 title: "مفتاح API للخرائط", 
                 fields: [{id: 'mapApiKey', label: 'مفتاح Google Maps API', type: 'text', placeholder: 'AIzaSy...'}]
             },
             { 
                 title: "إعدادات العرض", 
                 fields: [
                     {id: 'mapDefaultLat', label: 'خط العرض الافتراضي', type: 'number', placeholder: '24.7136'},
                     {id: 'mapDefaultLng', label: 'خط الطول الافتراضي', type: 'number', placeholder: '46.6753'},
                     {id: 'mapDefaultZoom', label: 'مستوى التقريب الافتراضي', type: 'number', placeholder: '10'},
                ]
            }
        ]
      },
    ],
  },
  {
    title: "إدارة المستخدمين والوصول",
    items: [
      {
        title: "قائمة الفروع",
        href: "branches",
        icon: "Building",
        description: "إدارة فروع الشركة المختلفة ومواقعها وبياناتها.",
        formSections: [
            { title: "إدارة الفروع", fields: [{id: 'branchManager', label: 'إدارة الفروع', type: 'textarea', placeholder: 'جدول تفاعلي لإدارة الفروع...'}]}
        ]
      },
       {
        title: "قائمة الصناديق",
        href: "cash-boxes",
        icon: "Wallet",
        description: "إدارة الصناديق المالية المرتبطة بالفروع والمستخدمين.",
        formSections: [
            { title: "إدارة الصناديق", fields: [{id: 'cashBoxManager', label: 'إدارة الصناديق', type: 'textarea', placeholder: 'جدول تفاعلي لإدارة الصناديق...'}]}
        ]
      },
      {
        title: "إشعارات الفريق",
        href: "team-notifications",
        icon: "Bell",
        description: "تحديد قنوات وأنواع التنبيهات لأعضاء الفريق.",
        formSections: [
            { 
                title: "تنبيهات عامة", 
                fields: [
                    {id: 'notifyOnNewUser', label: 'تنبيه عند تسجيل مستخدم جديد', type: 'switch', description: 'إرسال بريد إلكتروني للمشرفين.'},
                    {id: 'notifyOnNewProperty', label: 'تنبيه عند إضافة عقار جديد', type: 'switch', description: 'إرسال تنبيه لفريق المراجعة.'},
                ]
            }
        ]
      },
      {
        title: "شروط وأحكام المنصة",
        href: "terms",
        icon: "FileText",
        description: "تعديل وإدارة شروط الاستخدام وسياسة الخصوصية.",
        formSections: [
            { title: "شروط الاستخدام", fields: [{id: 'termsOfService', label: 'محتوى شروط الاستخدام', type: 'textarea', placeholder: 'اكتب هنا...'}]},
            { title: "سياسة الخصوصية", fields: [{id: 'privacyPolicy', label: 'محتوى سياسة الخصوصية', type: 'textarea', placeholder: 'اكتب هنا...'}]},
        ]
      },
    ],
  },
  {
    title: "الإعدادات المتقدمة",
    items: [
      {
        title: "قائمة البنوك",
        href: "banks",
        icon: "Landmark",
        description: "إدارة قائمة البنوك المعتمدة لعمليات التمويل.",
        formSections: [
            { title: "إدارة البنوك", fields: [{id: 'bankManager', label: 'إدارة البنوك', type: 'textarea', placeholder: 'جدول تفاعلي لإدارة البنوك...'}]}
        ]
      },
      {
        title: "بيانات عمر العقار",
        href: "property-age",
        icon: "CalendarClock",
        description: "تحديد خيارات عمر العقار المتاحة في الفلاتر.",
        formSections: [
            { title: "إدارة أعمار العقارات", fields: [{id: 'propertyAgeManager', label: 'إدارة خيارات عمر العقار', type: 'textarea', placeholder: 'جدول تفاعلي لإدارة خيارات عمر العقار...'}]}
        ]
      },
      {
        title: "واجهات API",
        href: "api-integrations",
        icon: "Plug",
        description: "إدارة التكامل مع الخدمات الخارجية ومفاتيح API.",
        formSections: [
            { title: "خدمات الرسائل (SMS)", fields: [{id: 'smsApiToken', label: 'توكن بوابة الرسائل', type: 'text', placeholder: '...'}]},
            { title: "خدمات البريد الإلكتروني", fields: [{id: 'emailApiToken', label: 'مفتاح SendGrid/Mailgun API', type: 'text', placeholder: '...'}]},
        ]
      },
      {
        title: "اللغة",
        href: "language",
        icon: "Languages",
        description: "إدارة ترجمة النصوص وإضافة لغات جديدة للمنصة.",
        formSections: [
            { title: "إدارة الترجمات", fields: [{id: 'translationManager', label: 'إدارة نصوص الواجهة', type: 'textarea', placeholder: 'جدول تفاعلي لإدارة الترجمات (key/value)...'}]}
        ]
      },
      {
        title: "أسئلة شائعة",
        href: "faq",
        icon: "HelpCircle",
        description: "إضافة وتعديل الأسئلة الشائعة وأجوبتها.",
        formSections: [
            { title: "إدارة الأسئلة الشائعة", fields: [{id: 'faqManager', label: 'إدارة الأسئلة والأجوبة', type: 'textarea', placeholder: 'جدول تفاعلي لإدارة الأسئلة الشائعة...'}]}
        ]
      },
    ],
  },
];