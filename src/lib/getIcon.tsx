import React from 'react';
import * as icons from 'lucide-react';

// --- تعريف الأنواع (Types) ---

// هذا النوع سيساعد TypeScript في فهم أن المفاتيح هي أسماء أيقونات Lucide
export type IconName = keyof typeof icons;

// هذا النوع سيضمن أننا نتعامل مع مكونات أيقونات Lucide فقط
type LucideIcon = React.FC<React.SVGProps<SVGSVGElement>>;

// --- الدالة الأساسية ---

/**
 * A utility function to dynamically render a Lucide icon based on its string name.
 * It provides a safe fallback icon if the requested icon name is not found.
 *
 * @param iconName - The string name of the icon (e.g., "Clock", "Users"). Case-sensitive.
 * @param props - Optional additional props to pass to the icon component (e.g., className, size).
 * @returns A Lucide React icon component or a fallback icon.
 */
export const getIcon = (iconName: string | undefined | null, props?: React.SVGProps<SVGSVGElement>): React.ReactElement => {
  // إذا لم يتم توفير اسم أيقونة، أعد أيقونة افتراضية
  if (!iconName) {
    return <icons.HelpCircle {...props} />;
  }

  // ابحث عن المكون المطابق لاسم الأيقونة.
  // من المهم التأكد من أن iconName هو مفتاح صالح في كائن icons.
  const IconComponent = icons[iconName as IconName] as LucideIcon | undefined;

  // إذا لم يتم العثور على المكون، أعد أيقونة افتراضية للتعامل مع الأخطاء
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in lucide-react library. Rendering fallback.`);
    return <icons.XCircle {...props} />;
  }

  // أعد المكون الذي تم العثور عليه مع تمرير أي خصائص إضافية
  return <IconComponent {...props} />;
};