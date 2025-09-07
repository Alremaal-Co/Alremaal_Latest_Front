// file: components/offers/AddOfferForm.tsx
"use client";

import { useState } from 'react';
import { realEstateOffersModule } from '@/lib/api-core/modules/realEstateOffers.module';
import { useModuleContext } from 'api-core-lib/client';
import { toast } from 'sonner';
import { globalStateManager } from 'api-core-lib';
import { ActionStateModule } from 'api-core-lib';

export function AddOfferForm() {
  const { actions , states , dehydrate , queries } = useModuleContext<typeof realEstateOffersModule>();

  const {create , forceDelete , getById , getSelect2 , list , listTrash , update } = actions

   
  // استخدام  حاله create بدون اي اعداد 
  const {called , data , error , loading , rawResponse , success ,isStale ,lastSuccessAt ,links ,message , meta , validationErrors} = states.create




  const [offerName, setOfferName] = useState('');
  const [cityAr, setCityAr] = useState('');
  const [cityEn, setCityEn] = useState('');

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!offerName || !cityAr || !cityEn) {
    alert('Please fill all fields');
    return;
  }

  const newOfferPayload = {
    data: {
      offer_name: offerName,
      city_name_ar: cityAr,
      city_name_en: cityEn,
    }
  };

  actions.create.execute(newOfferPayload, {
    // الخطوة 1: قبل إرسال الطلب
    onMutate: async () => {
      // إنشاء "عرض وهمي" مؤقت للعرض في الواجهة فورًا
      const optimisticOffer = {
        id: `optimistic-${Date.now()}`, // مفتاح مؤقت
        ...newOfferPayload.data
      };

      // الوصول إلى الكاش مباشرة وتحديثه
      // (هذه الوظيفة تحتاج إلى إضافتها إلى globalStateManager إذا لم تكن موجودة)
      globalStateManager.setState('list', (oldData: ActionStateModule<unknown>) => {
        console.log("Old Data before optimistic update:", oldData);
        return { ...oldData, data: [optimisticOffer , [...states.list.data]] };
      });
      
      // لنفترض أننا نريد إبطال الكاش بدلًا من التعديل اليدوي
      // سنقوم هنا بحفظ الحالة السابقة للرجوع إليها عند الخطأ
      const previousOffers = states.list.data; // حفظ البيانات الحالية
      
      // (مثال أبسط: إبطال الكاش فوراً لجعل الواجهة تظهر "stale")
      // actions.list.invalidate(); // يجعل القائمة تبدو قديمة

      return { previousOffers }; // إرجاع البيانات القديمة في context
    },
    
    // الخطوة 2: في حالة الفشل
    onError: (error, context) => {
      console.error("فشل الإنشاء، يتم التراجع:", error);
      // إذا كنا قد عدلنا الكاش يدويًا، يمكننا إرجاعه هنا
      // if (context?.previousOffers) {
      //   globalStateManager.setQueryData('list', context.previousOffers);
      // }
      alert('فشل إنشاء العرض، يرجى المحاولة مرة أخرى.');
    },

    // الخطوة 3: بعد الانتهاء (دائمًا)
    onSettled: () => {
      console.log("انتهت عملية الإنشاء.");
      // بعد نجاح أو فشل الطلب، أعد جلب البيانات الحقيقية من الخادم
      // لضمان أن الواجهة متطابقة مع قاعدة البيانات.
      // آلية invalidates: ['list'] في إعدادات الموديول ستقوم بهذا تلقائيًا!
      // لذلك قد لا تحتاج لاستدعاء أي شيء هنا إذا كانت الإعدادات صحيحة.
    },
    
    onSuccess: (data) => {
        console.log("تم إنشاء العرض بنجاح:", data);
        toast.success("تمت إضافة العرض بنجاح!");

        // مسح حقول النموذج
        setOfferName('');
        setCityAr('');
        setCityEn('');
    }
  });
};



  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Offer</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <input value={offerName} onChange={e => setOfferName(e.target.value)} placeholder="Offer Name" className="p-2 border rounded" />
        <input value={cityAr} onChange={e => setCityAr(e.target.value)} placeholder="City (AR)" className="p-2 border rounded" />
        <input value={cityEn} onChange={e => setCityEn(e.target.value)} placeholder="City (EN)" className="p-2 border rounded" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add Offer
        </button>
      </form>
    </div>
  );
}