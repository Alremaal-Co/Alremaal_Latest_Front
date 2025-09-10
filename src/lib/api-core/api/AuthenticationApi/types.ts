// This file is auto-generated. Do not edit directly.

import type { AuthController_completeProfileRequestRoleEnum } from './enums';

export interface AuthController_completeProfileRequest {
  /** Full name in Arabic */
  fullNameAr: string;
  /** Full name in English */
  fullNameEn: string;
  /** User email (optional) */
  email?: string;
  /** City */
  city: string;
  /** Country Code (e.g., SA, AE) */
  country: string;
  /** Preferred language (ar/en) */
  language: string;
  /** The primary role of the user */
  role: AuthController_completeProfileRequestRoleEnum;
}

export interface AuthController_requestOtpRequest {
  /** User phone number in international format */
  phoneNumber: string;
}

export interface AuthController_verifyOtpRequest {
  /** User phone number in international format */
  phoneNumber: string;
  /** The 6-digit OTP code */
  otp: string;
}