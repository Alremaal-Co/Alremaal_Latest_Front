"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronRight, Info } from 'lucide-react';
import { PageData, StatCardData } from './schma.header.pages.temp/list.schema.header.pages.temp';
import { useThemeCustomizer } from '@/context/ThemeCustomizerContext';
import { useColumnManagerContext } from '@/lib/api/ColumnManagerApi';
import { useDynamicDataOperationsContext } from '@/lib/api/DynamicDataOperationsApi';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DynamicForm } from '../../dynamic-form/DynamicForm';





const StatCard = ({ stat }: { stat: StatCardData }) => (
    <Card className='bg-accent'>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2  ">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <stat.icon className="h-4 w-4" />
                {stat.title}
            </CardTitle>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Info className="h-4 w-4 text-primary dark:bg-white dark:rounded-full dark:p-2 dark:w-8 dark:h-8 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{stat.tooltip}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </CardHeader>
        <CardContent>
            <div className="text-3xl font-bold text-primary dark:text-white ">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.comparison}</p>
        </CardContent>
    </Card>
);

const PageHeader = ({ data, lang }: { data: PageData, lang: 'ar' | 'en' }) => (
    <div className="mb-6  ">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
            {data.breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                    {item.href ? (
                        <Link href={item.href} className="hover:text-primary">{item.label}</Link>
                    ) : (
                        <span className=''>{item.label}</span>
                    )}
                    {index < data.breadcrumbs.length - 1 && (
                        <ChevronRight className={`h-4 w-4 mx-1 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                    )}
                </React.Fragment>
            ))}
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ">
            <h1 className="text-2xl font-bold tracking-tight text-primary dark:text-white">{data.title}</h1>
            <div className="flex items-center gap-2 ">
                {data.buttons.map((button, index) => (
                    <Button key={index} variant={button.variant}>
                        {button.label}
                        <button.icon className={`h-4 w-4 ${lang === 'ar' ? 'mr-2' : 'ml-2'}`} />
                    </Button>
                ))}
            </div>
        </div>
    </div>
);




export function PageHeaderWithStats({ schema }: { schema:{ [key: string]: PageData}}) {
    const { settings } = useThemeCustomizer();
    const lang = settings?.direction === "ltr" ? "en" : "ar";
    const data = schema[lang];

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const { states: columnManagerStates } = useColumnManagerContext();
    const { actions: dynamicDataActions, states: dynamicDataStates } = useDynamicDataOperationsContext();

    const columnsSchema = columnManagerStates.getColumns.data;
    const isLoadingSchema = columnManagerStates.getColumns.loading;
    
    const handleSubmit = (formData: any) => {
        dynamicDataActions.create.execute({data:formData}, {
            // pathParams: { endpoint: endpointName },
            onSuccess: () => {
                toast.success("Item added successfully!");
                setIsAddModalOpen(false);
                // dynamicDataActions.findAll.execute();
            },
            onError: (err) => {
                toast.error(err.message || "Failed to add item.");
            }
        });
    };

    return (
        <section className="p-4 relative curved h-[60vh shadow">
      <div className="mb-6  ">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
            {data.breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                    {item.href ? (
                        <Link href={item.href} className="hover:text-primary">{item.label}</Link>
                    ) : (
                        <span className=''>{item.label}</span>
                    )}
                    {index < data.breadcrumbs.length - 1 && (
                        <ChevronRight className={`h-4 w-4 mx-1 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                    )}
                </React.Fragment>
            ))}
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ">
            <h1 className="text-2xl font-bold tracking-tight text-primary dark:text-white">{data.title}</h1>
            <div className="flex items-center gap-2 ">
 <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
                        <DialogTrigger asChild>
                            <Button>{data.buttons.find(b => b.variant === 'default')?.label}</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>Add New Item</DialogTitle>
                            </DialogHeader>
                            {isLoadingSchema && <div>Loading form...</div>}
                            {columnsSchema && (
                                <DynamicForm
                                    columns={columnsSchema}
                                    isLoading={dynamicDataStates.create.loading}
                                    onSubmit={handleSubmit}
                                    lang={lang}
                                />
                            )}
                        </DialogContent>
                    </Dialog>
            </div>
        </div>
    </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
                {data.stats.map((stat, index) => (
                    <StatCard key={index} stat={stat} />
                ))}
            </div>
        </section>
    );
}






        // <section className="p-4">
        //     <div className="mb-6">
        //         <div className="flex items-center justify-between">
        //             {/* ... (Breadcrumbs و Title) */}
        //             <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        //                 <DialogTrigger asChild>
        //                     <Button>{data.buttons.find(b => b.variant === 'default')?.label}</Button>
        //                 </DialogTrigger>
        //                 <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        //                     <DialogHeader>
        //                         <DialogTitle>Add New Item</DialogTitle>
        //                     </DialogHeader>
        //                     {isLoadingSchema && <div>Loading form...</div>}
        //                     {columnsSchema && (
        //                         <DynamicForm
        //                             columns={columnsSchema}
        //                             isLoading={dynamicDataStates.create.loading}
        //                             onSubmit={handleSubmit}
        //                             lang={lang}
        //                         />
        //                     )}
        //                 </DialogContent>
        //             </Dialog>
        //         </div>
        //     </div>
        //       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        //         {data.stats.map((stat, index) => (
        //             <StatCard key={index} stat={stat} />
        //         ))}
        //     </div>
        // </section>