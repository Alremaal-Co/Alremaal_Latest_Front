// file: src/lib/api-core/config/realEstateOffers.module.ts

import { ApiModuleConfig, ActionConfigModule, QueryOptions } from 'api-core-lib';

// ===================================================================================
// #region DTOs (Data Transfer Objects) based on your screenshots
// ===================================================================================

export interface RealEstateOffer {
  id: string;
  offer_name: string;
  city_name_ar: string;
  city_name_en: string;
}

// The API expects the data to be nested under a "data" property for mutations
export interface RealEstateOfferInput {
  data: {
    offer_name: string;
    city_name_ar: string;
    city_name_en: string;
  };
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
  };
  links: Record<string, string | null>;
}

export interface Select2Option {
  code: string;
  name: string;
}

// ===================================================================================
// #region Module Configuration
// ===================================================================================

export const realEstateOffersModule: ApiModuleConfig<{
  list: ActionConfigModule<QueryOptions, PaginatedResponse<RealEstateOffer>>;
  listTrash: ActionConfigModule<QueryOptions, PaginatedResponse<RealEstateOffer>>;
  getById: ActionConfigModule<undefined, RealEstateOffer>;
  getSelect2: ActionConfigModule<QueryOptions, Select2Option[]>;
  create: ActionConfigModule<RealEstateOfferInput, RealEstateOffer>;
  update: ActionConfigModule<{ data: Partial<RealEstateOffer> }, RealEstateOffer>;
  forceDelete: ActionConfigModule<undefined, { success: boolean; message: string }>;
  delete: ActionConfigModule<undefined, { success: boolean; message: string }>;
}> = {
  baseEndpoint: '/api/v1/dynamic', 
  actions: {
    list: {
      method: 'GET', path: '/{endpointName}',
      // [FIX] Added the missing 'hasQuery' and 'autoFetch' properties.
      hasQuery: true, 
      autoFetch: true,
      // cacheResponse: true,

    },
    listTrash: {
      method: 'GET', path: '/{endpointName}/trash',
      // [FIX] Added the missing 'hasQuery' property.
      hasQuery: true,
      // cacheResponse: true,
    },
    getById: {
      method: 'GET', path: '/{endpointName}/{id}',
      invalidates: ['list'],
    },
    getSelect2: {
      method: 'GET', path: '/{endpointName}/select2',
      // [FIX] Added the missing 'hasQuery' property.
      hasQuery: true,
    },
    create: {
      method: 'POST', path: '/{endpointName}',
      invalidates: ['list'],
    },
    update: {
      method: 'PATCH', path: '/{endpointName}/{id}',
      invalidates: ['list', 'getById'],
    },
    delete: {
      method: 'DELETE', path: '/{endpointName}/{id}',
      invalidates: ['list', 'getById'],
    },
     forceDelete: {
      method: 'DELETE', path: '/{endpointName}/{id}/soft-delete',
      invalidates: ['list', 'getById'],
    },
  },
};