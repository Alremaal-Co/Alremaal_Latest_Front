// This file is auto-generated. Do not edit directly.

import { z } from 'zod';
import { ProfileController_updateProfileRequestRoleEnum } from './enums';

/** Zod schema for {@link ProfileController_updateProfileRequest}. */
export const ProfileController_updateProfileRequestSchema = z.object({
  fullName: z.string().describe("الاسم الكامل للمستخدم").optional(),
  email: z.string().describe("البريد الإلكتروني للمستخدم (اختياري)").optional(),
  imageUrl: z.string().describe("رابط الصورة الشخصية").optional(),
  country: z.string().describe("الدولة التي يقيم بها المستخدم").optional(),
  language: z.string().describe("اللغة المفضلة للمستخدم").optional(),
  role: z.enum(ProfileController_updateProfileRequestRoleEnum).describe("تحديد نوع الحساب الأساسي للمستخدم").optional()
});

export type ProfileController_updateProfileRequestValidated = z.infer<typeof ProfileController_updateProfileRequestSchema>;