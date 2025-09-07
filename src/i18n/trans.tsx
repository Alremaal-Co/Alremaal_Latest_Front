


import { useTranslations } from "next-intl"

export const tran = (value: string) => {


    const tran = useTranslations();
    let translation;
    try {
        translation = tran(value);
        if (value === translation) {
          return <p className="text-er">{value}</p>;
        }
    } catch (error) {
        console.warn(`Translation not found for key: ${value}`);
        return <p className="text-er">{value}</p>;
    }

    return <p className="text-or">{translation}</p>;
}








// V1.0.0



/**
 * A shortcut for `useTranslations()` hook.
 *
 * @param key The key of the translation string.
 * @returns The translated string, or the original key if the translation is not found.
 */
export const t = (key: string): string => {
    const translateFn = useTranslations();
    return translateFn(key);

};




// v0.0.0
// import { useTranslations } from "next-intl";

// type TranslationKey = string;

// export const t = (value: TranslationKey): string => {
//     const tran = useTranslations("");
//     try {
        
//         const translation = tran(value);
//         if (!translation) {
//             console.warn(`Translation not found for key: ${value}`);
//             return value; 
//         }

//         return translation;
//     } catch (error) {
//         console.error(`Translation error for key: ${value}`);
//         return value; 
//     }
// };
