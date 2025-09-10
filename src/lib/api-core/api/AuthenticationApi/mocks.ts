// This file is auto-generated. Do not edit directly.
import type { AuthController_completeProfileRequest, AuthController_requestOtpRequest, AuthController_verifyOtpRequest } from './types';
import { AuthController_completeProfileRequestRoleEnum } from './enums';

export const mockAuthController_completeProfileRequest: AuthController_completeProfileRequest = {
  "fullNameAr": "علي محمد",
  "fullNameEn": "Ali mohmed",
  "email": "user@example.com",
  "city": "Riyadh",
  "country": "SA",
  "language": "ar",
  "role": "PROPERTY_SEEKER"
};

export const mockAuthController_requestOtpRequest: AuthController_requestOtpRequest = {
  "phoneNumber": "+966501234567"
};

export const mockAuthController_verifyOtpRequest: AuthController_verifyOtpRequest = {
  "phoneNumber": "+966501234567",
  "otp": "123456"
};