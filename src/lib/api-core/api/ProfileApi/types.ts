// This file is auto-generated. Do not edit directly.

import type { ProfileController_updateProfileRequestRoleEnum } from './enums';

export interface ProfileController_updateProfileRequest {
  /** الاسم الكامل للمستخدم */
  fullName?: string;
  /** البريد الإلكتروني للمستخدم (اختياري) */
  email?: string;
  /** رابط الصورة الشخصية */
  imageUrl?: string;
  /** الدولة التي يقيم بها المستخدم */
  country?: string;
  /** اللغة المفضلة للمستخدم */
  language?: string;
  /** تحديد نوع الحساب الأساسي للمستخدم */
  role?: ProfileController_updateProfileRequestRoleEnum;
}