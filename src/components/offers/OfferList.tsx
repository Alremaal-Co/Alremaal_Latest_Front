"use client";

import { realEstateOffersModule } from '@/lib/api-core/modules/realEstateOffers.module';
import { useModuleContext } from 'api-core-lib/client';
import { useEffect } from 'react';

export function OfferList() {
  const { states, queries, actions } = useModuleContext<typeof realEstateOffersModule>();

  const listQuery = queries.list;
  
  // استخراج الحالة الكاملة للإجراء 'list'.
  // `response` هنا هو ما يعادل `states.list.data`، وهو الكائن المتداخل.
  const { data: response, loading, error, isStale } = states.list;
  
  // ===================================================================================
  // ## التصحيح الحاسم والنهائي داخل المكون ##
  // ===================================================================================
  // نقوم بفك تداخل البيانات هنا بشكل صحيح:
  // 1. `offers` هي المصفوفة الموجودة داخل `response.data`.
  // 2. `meta` هو الكائن الموجود داخل `response.meta`.
  const offers = response || [];
  const meta = states.list?.meta;
  // ===================================================================================

  useEffect(() => {
    console.log("List Query State:", states.list);
  }, [response]);
  const handleDelete = (id: string) => {
      actions.delete.execute(undefined, { pathParams: { id } });
  };

  if (loading && !Array.isArray(offers)) return <p>Loading initial offers...</p>;
  if (error) return <p className="text-red-500">Error: {error.message || 'Something went wrong'}</p>;
  if (!listQuery) return <div>Query controls are unavailable.</div>;

  return (
    <div className="p-4 border rounded-lg shadow-md" style={{ opacity: isStale ? 0.2 : 1 }}>
      <h2 className="text-xl font-semibold mb-4">Current Offers ({meta?.totalItems || 0})</h2>
      <div className="space-y-2">
        {/* الآن `offers` هي مصفوفة بالفعل، و .map ستعمل بشكل صحيح */}
        {Array.isArray(offers) && offers.map((offer: any) => (
          <div key={offer.id} className="flex justify-between items-center p-2 border-b">
            <span>{offer.offer_name} ({offer.city_name_en})</span>
            <button onClick={() => handleDelete(offer.id)} className="text-red-500 text-sm hover:underline">Delete</button>
          </div>
        ))}
        {offers.length === 0 && !loading && <p>No offers found.</p>}
      </div>
      
      <div className="flex justify-center gap-4 mt-6">
        <button 
          onClick={() => listQuery.setPage((meta?.currentPage || 1) - 1)}
          disabled={!meta || meta.currentPage <= 1 || loading}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center">
          Page {meta?.currentPage || 1} of {meta?.totalPages || 1}
        </span>
        <button 
          onClick={() => listQuery.setPage((meta?.currentPage || 1) + 1)}
          disabled={!meta || meta.currentPage >= meta.totalPages || loading}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}