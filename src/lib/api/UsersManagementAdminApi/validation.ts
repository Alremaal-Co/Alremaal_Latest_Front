// This file is auto-generated. Do not edit directly.

import { z } from 'zod';

/** Zod schema for {@link UsersController_updateRequest}. */
export const UsersController_updateRequestSchema = z.object({
  fullNameEn: z.string().optional(),
  fullNameAr: z.string().optional(),
  email: z.string().optional(),
  city: z.string().optional(),
  district: z.string().optional(),
  imageUrl: z.string().optional()
});

export type UsersController_updateRequestValidated = z.infer<typeof UsersController_updateRequestSchema>;