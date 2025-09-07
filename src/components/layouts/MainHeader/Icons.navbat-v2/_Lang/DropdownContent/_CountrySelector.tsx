import { useState, useMemo } from "react";

interface CountryInfo {
  country: string;
  languages: string[];
  currency: string;
}



export const DropdownColumn = ({
  label,
  placeholder,
  searchValue,
  setSearchValue,
  items,
  onItemSelect,
  active,
  isFocus=false,
  
}: {
  label: string;
  placeholder: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
  items: string[];
  onItemSelect: (value: string , code?:string) => void;
  active: string;
  isFocus?: boolean;
}) => {
  return (
    <div className="flex flex-col">
      <div className="my-2">
        {/* <AMInput
          className={`h-10 ${searchValue ? "border-scss" : "border-gr"} !border-[1px] !text-[14px] !rounded-[5px]`}
          onChange={(value) => setSearchValue(value)}
          placeholder={placeholder}
          value={searchValue}
          disabled={false}
          icon="fa-search"
          lang={t("lang")}
          isFocus={isFocus}
          Placeholder_CN={"!text-[10px] bg-gray-100 select-none dark:!bg-dark-card dark:text-gray-300"}
          customBgInput="dark:!bg-dark-card"
        /> */}
      </div>
      <div className=" max-h-[35vh] overflow-auto">
        <ul className="border dark:border-gray-600 hover:border-white rounded-md p-2 text-sm transition-all duration-1000 ease-in-out">
          {items.map((item, index) => (
            <li
              key={index}
              className={`p-2 dark:hover:bg-dark-box hover:bg-gray-200 hover:text-dis dark:hover:text-gray-300 dark:text-gray-400 cursor-pointer rounded-[5px]  ${
                active === item ? "bg-dis dark:bg-dark-box text-white" : ""
              }`}
              onClick={() => {
                setSearchValue("")
                onItemSelect(item)
                console.log("item selected" , item)
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

  
  const DropdownWithSearch = ({showLangDrop=true}:{showLangDrop?:boolean}) => {
    const [activeCountry, setActiveCountry] = useState("المملكة العربية السعودية");
    const [activeCurrency, setActiveCurrency] = useState("ريال سعودي");
    const [activeLanguage, setActiveLanguage] = useState("العربية");
    const [searchLanguage, setSearchLanguage] = useState("");
    const [searchCurrency, setSearchCurrency] = useState("");
    const [searchCountry, setSearchCountry] = useState("");
  

    // const router = useRouter();
    // const { pathname, asPath, query } = router;
  
    // const changeLanguage = (locale: string) => {
    //   router.push({ pathname, query }, asPath, { locale });
    // };
    
      


    const filteredLanguages = useMemo(
      () =>
        [...new Set(countriesInfo.flatMap((c) => c.languages))].filter((lang) =>
          lang.toLowerCase().includes(searchLanguage.toLowerCase())
        ),
      [searchLanguage]
    );
  
    const filteredCurrencies = useMemo(
      () =>
        [...new Set(countriesInfo.map((c) => c.currency))].filter((currency) =>
          currency.toLowerCase().includes(searchCurrency.toLowerCase())
        ),
      [searchCurrency]
    );
  
    const filteredCountries = useMemo(
      () =>
        [...new Set(countriesInfo.map((c) => c.country))].filter((country) =>
          country.toLowerCase().includes(searchCountry.toLowerCase())
        ),
      [searchCountry]
    );
  
    const handleCountrySelect = (country: string) => {
      setActiveCountry(country);
      const selectedCountry = countriesInfo.find((c) => c.country === country);
      if (selectedCountry) {
        setActiveCurrency(selectedCountry.currency);
        setActiveLanguage(selectedCountry.languages[0]);
      }
    };
  
    const handleCurrencySelect = (currency: string) => {
      setActiveCurrency(currency);
    };
  
    const handleLanguageSelect = (language: string , code?:string) => {
      setActiveLanguage(language);
      // code && changeLanguage(code)
    };
  
    return (
    <div className="relative z-[102]">
      <div className="absolute z-[10]  w-full h-44 rounded-lg bg-gray-100 dark:bg-dark-card rounded-b-[50%]"></div>

      <div className={`relative z-[103] grid  gap-4 p-4 max-w-4xl mx-auto shadow rounded-lg  ${showLangDrop ?"grid-cols-3" : "grid-cols-2"}`}>
        
        {
          showLangDrop && 
            <DropdownColumn
            label="اللغة"
            placeholder="بحث عن لغة..."
            searchValue={searchLanguage}
            setSearchValue={setSearchLanguage}
            items={filteredLanguages}
            onItemSelect={handleLanguageSelect}
            active={activeLanguage}
            isFocus={true}
          />
        }
           
        
      
        <DropdownColumn
          label="العملة"
          placeholder="بحث عن عملة..."
          searchValue={searchCurrency}
          setSearchValue={setSearchCurrency}
          items={filteredCurrencies}
          onItemSelect={handleCurrencySelect}
          active={activeCurrency}
        />
        <DropdownColumn
          label="الدولة"
          placeholder="بحث عن دولة..."
          searchValue={searchCountry}
          setSearchValue={setSearchCountry}
          items={filteredCountries}
          onItemSelect={handleCountrySelect}
          active={activeCountry}

        />
      </div>
    </div>
    );
  };
  
  export default DropdownWithSearch;
  interface CountryInfo {
    country: string;
    languages: string[];
    languageCodes: string[]; // خاصية جديدة لأكواد اللغات
    currency: string;
  }
  
  const countriesInfo: CountryInfo[] = [
    // الدول العربية
    { 
      country: "المملكة العربية السعودية", 
      languages: ["العربية"], 
      languageCodes: ["ar"], 
      currency: "ريال سعودي" 
    },
    { 
      country: "مصر", 
      languages: ["العربية"], 
      languageCodes: ["ar"], 
      currency: "جنيه مصري" 
    },
    { 
      country: "الإمارات العربية المتحدة", 
      languages: ["العربية"], 
      languageCodes: ["ar"], 
      currency: "درهم إماراتي" 
    },
    { 
      country: "المغرب", 
      languages: ["العربية"], 
      languageCodes: ["ar"], 
      currency: "درهم مغربي" 
    },
    { 
      country: "العراق", 
      languages: ["العربية"], 
      languageCodes: ["ar"], 
      currency: "دينار عراقي" 
    },
  
    // دول أخرى
    { 
      country: "الولايات المتحدة", 
      languages: ["الإنجليزية"], 
      languageCodes: ["en"], 
      currency: "دولار أمريكي" 
    },
    { 
      country: "فرنسا", 
      languages: ["الفرنسية"], 
      languageCodes: ["fr"], 
      currency: "يورو" 
    },
    { 
      country: "ألمانيا", 
      languages: ["الألمانية"], 
      languageCodes: ["de"], 
      currency: "يورو" 
    },
    { 
      country: "الصين", 
      languages: ["الصينية"], 
      languageCodes: ["zh"], 
      currency: "يوان صيني" 
    },
    { 
      country: "اليابان", 
      languages: ["اليابانية"], 
      languageCodes: ["ja"], 
      currency: "ين ياباني" 
    },
    { 
      country: "روسيا", 
      languages: ["الروسية"], 
      languageCodes: ["ru"], 
      currency: "روبل روسي" 
    },
    { 
      country: "إسبانيا", 
      languages: ["الإسبانية"], 
      languageCodes: ["es"], 
      currency: "يورو" 
    },
    { 
      country: "إيطاليا", 
      languages: ["الإيطالية"], 
      languageCodes: ["it"], 
      currency: "يورو" 
    },
    { 
      country: "الهند", 
      languages: ["الهندية", "الإنجليزية"], 
      languageCodes: ["hi", "en"], 
      currency: "روبية هندية" 
    },
    { 
      country: "البرازيل", 
      languages: ["البرتغالية"], 
      languageCodes: ["pt"], 
      currency: "ريال برازيلي" 
    },
    { 
      country: "كندا", 
      languages: ["الإنجليزية", "الفرنسية"], 
      languageCodes: ["en", "fr"], 
      currency: "دولار كندي" 
    },
    { 
      country: "الأرجنتين", 
      languages: ["الإسبانية"], 
      languageCodes: ["es"], 
      currency: "بيزو أرجنتيني" 
    },
    { 
      country: "سويسرا", 
      languages: ["الألمانية", "الفرنسية", "الإيطالية"], 
      languageCodes: ["de", "fr", "it"], 
      currency: "فرنك سويسري" 
    },
    { 
      country: "أستراليا", 
      languages: ["الإنجليزية"], 
      languageCodes: ["en"], 
      currency: "دولار أسترالي" 
    },
    { 
      country: "تركيا", 
      languages: ["التركية"], 
      languageCodes: ["tr"], 
      currency: "ليرة تركية" 
    },
    { 
      country: "كوريا الجنوبية", 
      languages: ["الكورية"], 
      languageCodes: ["ko"], 
      currency: "وون كوري" 
    },
    { 
      country: "جنوب أفريقيا", 
      languages: ["الإنجليزية", "الأفريكانية"], 
      languageCodes: ["en", "af"], 
      currency: "راند جنوب أفريقي" 
    },
    { 
      country: "النرويج", 
      languages: ["النرويجية"], 
      languageCodes: ["no"], 
      currency: "كرونة نرويجية" 
    },
    { 
      country: "السويد", 
      languages: ["السويدية"], 
      languageCodes: ["sv"], 
      currency: "كرونة سويدية" 
    },
  ];
  