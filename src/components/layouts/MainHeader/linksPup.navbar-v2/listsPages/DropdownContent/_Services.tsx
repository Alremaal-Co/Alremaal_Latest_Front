import { t } from "@/i18n/trans";
import Link from "next/link";

export const Services = () => {
    return (
      <div className="text-dis dark:text-or rounded-t-lg w-1/2 bg-gray-100 dark:bg-dark-card p-4">
        <h1 className="mb-2 text-xl font-bold">{t("Services")}</h1>
        <div className="space-y-2">
        <Service name={t("real-estate-financing")} link={"/real-estate-financing"} icon={"fa-building"} />
        <Service name={t("real-estate-offers")} link={"/offers/add-offer"} icon={"fa-building"} />
        <Service name={t("real-estate-orders")} link={"/orders/add-order"} icon={"fa-building"} />
        <Service name={t("real-estate-consulting")} link={"/real-estate-consulting"} icon={"fa-handshake"} />
        <Service name={t("company-promotion")} link={"/company-promotion"} icon={"fa-bullhorn"} />
        <Service name={t("finance-calculator")} link={"/finance-calculator"} icon={"fa-calculator"} />
        <Service name={t("investment-plans")} link={"/investment-plans"} icon={"fa-chart-line"} />
        <Service name={t("real-estate-marketing")} link={"/real-estate-marketing"} icon={"fa-bullhorn"} />
        <Service name={t("property-evaluation")} link={"/property-evaluation"} icon={"fa-calculator"} />
        </div>
      </div>
    );
  };



 export const Service =({name , link , icon}:{name:string , link:string , icon:string})=>{
    return(
    <div className="flex items-center gap-2 text-dis dark:text-white dark:hover:text-or cursor-pointer">
      <div className="w-7 h-7 rounded-[3px] flex items-center justify-center shadow-inner">
        <i  className={`fa-solid ${icon} `} />
      </div>
      <Link href={link} className=" hover:text-bl dark:hover:text-or">
        {name}
      </Link>
    </div>
    )
  }