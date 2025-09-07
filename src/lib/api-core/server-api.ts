


// file: src/lib/api-core/server-api.ts

import { realEstateOffersModule } from './modules/realEstateOffers.module';
import { createServerApi } from 'api-core-lib/server';
import { serverApiClient } from './serverApi';

// تهيئة مساعد الخادم للموديول المحدد
export const realEstateOffersServerApi = createServerApi(serverApiClient, realEstateOffersModule);

// يمكنك إضافة المزيد من المساعدات لموديولات أخرى هنا
// export const usersServerApi = createServerApi(apiClient, usersModule);