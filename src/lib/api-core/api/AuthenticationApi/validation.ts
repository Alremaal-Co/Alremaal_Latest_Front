// This file is auto-generated. Do not edit directly.

import { z } from 'zod';
import { AuthController_completeProfileRequestRoleEnum } from './enums';

/** Zod schema for {@link AuthController_completeProfileRequest}. */
export const AuthController_completeProfileRequestSchema = z.object({
  fullNameAr: z.string().min(1, { "message": "validation.string.nonempty" }).describe("Full name in Arabic"),
  fullNameEn: z.string().min(1, { "message": "validation.string.nonempty" }).describe("Full name in English"),
  email: z.string().describe("User email (optional)").optional(),
  city: z.string().min(1, { "message": "validation.string.nonempty" }).describe("City"),
  country: z.string().min(1, { "message": "validation.string.nonempty" }).describe("Country Code (e.g., SA, AE)"),
  language: z.string().min(1, { "message": "validation.string.nonempty" }).describe("Preferred language (ar/en)"),
  role: z.enum(AuthController_completeProfileRequestRoleEnum).describe("The primary role of the user")
});

export type AuthController_completeProfileRequestValidated = z.infer<typeof AuthController_completeProfileRequestSchema>;

/** Zod schema for {@link AuthController_requestOtpRequest}. */
export const AuthController_requestOtpRequestSchema = z.object({
  phoneNumber: z.string().min(1, { "message": "validation.string.nonempty" }).describe("User phone number in international format")
});

export type AuthController_requestOtpRequestValidated = z.infer<typeof AuthController_requestOtpRequestSchema>;

/** Zod schema for {@link AuthController_verifyOtpRequest}. */
export const AuthController_verifyOtpRequestSchema = z.object({
  phoneNumber: z.string().min(1, { "message": "validation.string.nonempty" }).describe("User phone number in international format"),
  otp: z.string().min(1, { "message": "validation.string.nonempty" }).describe("The 6-digit OTP code")
});

export type AuthController_verifyOtpRequestValidated = z.infer<typeof AuthController_verifyOtpRequestSchema>;