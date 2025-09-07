"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; // استيراد Zod
import { ColumnManagerController_addColumnRequestValidated } from "@/lib/api/ColumnManagerApi";
import { ColumnManagerController_addColumnRequestDataTypeEnum } from "@/lib/api/ColumnManagerApi/enums";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl"; // استخدام hook الترجمة
import { useEffect, useMemo } from "react";

interface AddColumnFormProps {
  onSubmit: (data: ColumnManagerController_addColumnRequestValidated) => void;
  isLoading: boolean;
  defaultValues?: Partial<ColumnManagerController_addColumnRequestValidated> | null;
}

export const AddColumnForm = ({ onSubmit, isLoading, defaultValues }: AddColumnFormProps) => {
  const t = useTranslations();

  // الخطوة 1: تعريف السكيم داخل المكون باستخدام دالة الترجمة t()
  const ColumnManagerController_addColumnRequestSchema = useMemo(() => z.object({
    columnName: z.string().min(1, { message: t('validation.string.nonempty') }),
    dataType: z.enum(ColumnManagerController_addColumnRequestDataTypeEnum),
    labelAr: z.string().min(1, { message: t('validation.string.nonempty') }),
    labelEn: z.string().min(1, { message: t('validation.string.nonempty') }),
    isNullable: z.boolean().optional(),
    isSearchable: z.boolean().optional(),
    isFilterable: z.boolean().optional(),
    isSortable: z.boolean().optional(),
    isSelectable: z.boolean().optional(),
  }), [t]);


  const form = useForm<ColumnManagerController_addColumnRequestValidated>({
    resolver: zodResolver(ColumnManagerController_addColumnRequestSchema),
    defaultValues: defaultValues || {
      columnName: "",
      labelAr: "",
      labelEn: "",
      dataType: "text",
      isFilterable: true,
      isNullable: true,
      isSearchable: true,
      isSelectable: true,
      isSortable: true,
    },
  });
  
  useEffect(() => {
    if (defaultValues) {
      form.reset(defaultValues);
    }
  }, [defaultValues, form]);

  const properties: (keyof ColumnManagerController_addColumnRequestValidated)[] = [
    'isNullable', 'isSearchable', 'isFilterable', 'isSortable', 'isSelectable'
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4 overflow-auto">
        <div className="space-y-4">
          <FormField control={form.control} name="columnName" render={({ field }) => (
            <FormItem>
              <FormLabel>{t('addColumnForm.columnName.label')}</FormLabel>
              <FormControl><Input placeholder={t('addColumnForm.columnName.placeholder')} {...field} disabled={!!defaultValues} /></FormControl>
              <FormDescription>{t('addColumnForm.columnName.description')}</FormDescription>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="dataType" render={({ field }) => (
            <FormItem>
              <FormLabel>{t('addColumnForm.dataType.label')}</FormLabel>
              <FormControl>
                <div className="flex flex-wrap gap-2 pt-2">
                  {ColumnManagerController_addColumnRequestDataTypeEnum.map(type => (
                    <Button key={type} type="button" variant={field.value === type ? 'default' : 'outline'} onClick={() => field.onChange(type)} disabled={!!defaultValues}>
                      {type}
                    </Button>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField control={form.control} name="labelEn" render={({ field }) => (
            <FormItem>
              <FormLabel>{t('addColumnForm.labelEn.label')}</FormLabel>
              <FormControl><Input placeholder={t('addColumnForm.labelEn.placeholder')} {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="labelAr" render={({ field }) => (
            <FormItem>
              <FormLabel>{t('addColumnForm.labelAr.label')}</FormLabel>
              <FormControl><Input dir="rtl" placeholder={t('addColumnForm.labelAr.placeholder')} {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>
        <Separator />
        <div className="space-y-4">
          <h3 className="text-sm font-medium">{t('addColumnForm.properties.title')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {properties.map(prop => (
              <FormField key={prop} control={form.control} name={prop} render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 whitespace-nowrap">
                  <FormControl><Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} /></FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>{t(`addColumnForm.properties.${prop.replace('is', '').toLowerCase()}`)}</FormLabel>
                  </div>
                </FormItem>
              )} />
            ))}
          </div>
        </div>
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {defaultValues ? t('addColumnForm.updateButton') : t('addColumnForm.submitButton')}
        </Button>
      </form>
    </Form>
  );
};















// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ColumnManagerController_addColumnRequestSchema, ColumnManagerController_addColumnRequestValidated } from "@/lib/api/ColumnManagerApi";
// import { ColumnManagerController_addColumnRequestDataTypeEnum } from "@/lib/api/ColumnManagerApi/enums";
// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Separator } from "@/components/ui/separator";
// import { Loader2 } from "lucide-react";
// import { t } from "@/i18n/trans";
// import { useEffect } from "react";

// interface AddColumnFormProps {
//   onSubmit: (data: ColumnManagerController_addColumnRequestValidated) => void;
//   isLoading: boolean;
//   defaultValues?: Partial<ColumnManagerController_addColumnRequestValidated> | null;
// }

// export const AddColumnForm = ({ onSubmit, isLoading, defaultValues }: AddColumnFormProps) => {
//   const form = useForm<ColumnManagerController_addColumnRequestValidated>({
//     resolver: zodResolver(ColumnManagerController_addColumnRequestSchema),
//     defaultValues: defaultValues || {
//       columnName: "",
//       labelAr: "",
//       labelEn: "",
//       dataType: "text",
//       isFilterable: true,
//       isNullable: true,
//       isSearchable: true,
//       isSelectable: true,
//       isSortable: true,
//     },
//   });
  
//   useEffect(() => {
//     if (defaultValues) {
//       form.reset(defaultValues);
//     }
//   }, [defaultValues, form]);


//   const properties: (keyof ColumnManagerController_addColumnRequestValidated)[] = [
//     'isNullable', 'isSearchable', 'isFilterable', 'isSortable', 'isSelectable'
//   ];

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4 overflow-auto">
//         <div className="space-y-4">
//           <FormField control={form.control} name="columnName" render={({ field }) => (
//             <FormItem>
//               <FormLabel>{t('addColumnForm.columnName.label')}</FormLabel>
//               <FormControl><Input placeholder={t('addColumnForm.columnName.placeholder')} {...field} disabled={!!defaultValues} /></FormControl>
//               <FormDescription>{t('addColumnForm.columnName.description')}</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )} />
//           <FormField control={form.control} name="dataType" render={({ field }) => (
//             <FormItem>
//               <FormLabel>{t('addColumnForm.dataType.label')}</FormLabel>
//               <FormControl>
//                 <div className="flex flex-wrap gap-2 pt-2">
//                   {ColumnManagerController_addColumnRequestDataTypeEnum.map(type => (
//                     <Button key={type} type="button" variant={field.value === type ? 'default' : 'outline'} onClick={() => field.onChange(type)} disabled={!!defaultValues}>
//                       {type}
//                     </Button>
//                   ))}
//                 </div>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )} />
//         </div>
//         <Separator />
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <FormField control={form.control} name="labelEn" render={({ field }) => (
//             <FormItem>
//               <FormLabel>{t('addColumnForm.labelEn.label')}</FormLabel>
//               <FormControl><Input placeholder={t('addColumnForm.labelEn.placeholder')} {...field} /></FormControl>
//               <FormMessage />
//             </FormItem>
//           )} />
//           <FormField control={form.control} name="labelAr" render={({ field }) => (
//             <FormItem>
//               <FormLabel>{t('addColumnForm.labelAr.label')}</FormLabel>
//               <FormControl><Input dir="rtl" placeholder={t('addColumnForm.labelAr.placeholder')} {...field} /></FormControl>
//               <FormMessage />
//             </FormItem>
//           )} />
//         </div>
//         <Separator />
//         <div className="space-y-4">
//           <h3 className="text-sm font-medium">{t('addColumnForm.properties.title')}</h3>
//           <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
//             {properties.map(prop => (
//               <FormField key={prop} control={form.control} name={prop} render={({ field }) => (
//                 <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 whitespace-nowrap">
//                   <FormControl><Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} /></FormControl>
//                   <div className="space-y-1 leading-none">
//                     <FormLabel>{t(`addColumnForm.properties.${prop.replace('is', '').toLowerCase()}`)}</FormLabel>
//                   </div>
//                 </FormItem>
//               )} />
//             ))}
//           </div>
//         </div>
//         <Button type="submit" disabled={isLoading} className="w-full">
//           {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//           {defaultValues ? "Update Column" : t('addColumnForm.submitButton')}
//         </Button>
//       </form>
//     </Form>
//   );
// };











// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ColumnManagerController_addColumnRequestSchema, ColumnManagerController_addColumnRequestValidated } from "@/lib/api/ColumnManagerApi";
// import { ColumnManagerController_addColumnRequestDataTypeEnum } from "@/lib/api/ColumnManagerApi/enums";
// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Separator } from "@/components/ui/separator";
// import { Loader2 } from "lucide-react";
// import { t } from "@/i18n/trans";

// interface AddColumnFormProps {
//   onSubmit: (data: ColumnManagerController_addColumnRequestValidated) => void;
//   isLoading: boolean;
//   AllColumns?: Record<string, any>[] | null
//   editingColumn?:string | null;
// }

// export const AddColumnForm = ({ onSubmit, isLoading, AllColumns , editingColumn }: AddColumnFormProps) => {
//   const getDefaultValues= AllColumns?.filter((item)=> item.columnName === editingColumn)[0]
//   const form = useForm<ColumnManagerController_addColumnRequestValidated>({
//     resolver: zodResolver(ColumnManagerController_addColumnRequestSchema),
//       defaultValues: getDefaultValues || {
//       columnName: "",
//       labelAr: "",
//       labelEn: "",
//       dataType: "text",
//       isFilterable: true,
//       isNullable: true,
//       isSearchable: true,
//       isSelectable: true,
//       isSortable: true,
//     },
//   });

//   const properties: (keyof ColumnManagerController_addColumnRequestValidated)[] = [
//     'isNullable', 'isSearchable', 'isFilterable', 'isSortable', 'isSelectable'
//   ];

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4 overflow-auto">
//         <div className="space-y-4">
//           <FormField control={form.control} name="columnName" render={({ field }) => (
//             <FormItem>
//               <FormLabel>{t('addColumnForm.columnName.label')}</FormLabel>
//               <FormControl><Input placeholder={t('addColumnForm.columnName.placeholder')} {...field} disabled={!!getDefaultValues} /></FormControl>
//               <FormDescription>{t('addColumnForm.columnName.description')}</FormDescription>
//               <FormMessage />
//             </FormItem>
//           )} />
//           <FormField control={form.control} name="dataType" render={({ field }) => (
//             <FormItem>
//               <FormLabel>{t('addColumnForm.dataType.label')}</FormLabel>
//               <FormControl>
//                 <div className="flex flex-wrap gap-2 pt-2">
//                   {ColumnManagerController_addColumnRequestDataTypeEnum.map(type => (
//                     <Button key={type} type="button" variant={field.value === type ? 'default' : 'outline'} onClick={() => field.onChange(type)} disabled={!!getDefaultValues}>
//                       {type}
//                     </Button>
//                   ))}
//                 </div>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )} />
//         </div>
//         <Separator />
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <FormField control={form.control} name="labelEn" render={({ field }) => (
//             <FormItem>
//               <FormLabel>{t('addColumnForm.labelEn.label')}</FormLabel>
//               <FormControl><Input placeholder={t('addColumnForm.labelEn.placeholder')} {...field} /></FormControl>
//               <FormMessage />
//             </FormItem>
//           )} />
//           <FormField control={form.control} name="labelAr" render={({ field }) => (
//             <FormItem>
//               <FormLabel>{t('addColumnForm.labelAr.label')}</FormLabel>
//               <FormControl><Input dir="rtl" placeholder={t('addColumnForm.labelAr.placeholder')} {...field} /></FormControl>
//               <FormMessage />
//             </FormItem>
//           )} />
//         </div>
//         <Separator />
//         <div className="space-y-4">
//           <h3 className="text-sm font-medium">{t('addColumnForm.properties.title')}</h3>
//           <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
//             {properties.map(prop => (
//               <FormField key={prop} control={form.control} name={prop} render={({ field }) => (
//                 <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 whitespace-nowrap">
//                   <FormControl><Checkbox checked={field.value as boolean} onCheckedChange={field.onChange} /></FormControl>
//                   <div className="space-y-1 leading-none">
//                     <FormLabel>{t(`addColumnForm.properties.${prop.replace('is', '').toLowerCase()}`)}</FormLabel>
//                   </div>
//                 </FormItem>
//               )} />
//             ))}
//           </div>
//         </div>
//         <Button type="submit" disabled={isLoading} className="w-full">
//           {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//           {getDefaultValues ? "Update Column" : t('addColumnForm.submitButton')}
//         </Button>
//       </form>
//     </Form>
//   );
// };