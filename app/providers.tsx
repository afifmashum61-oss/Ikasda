// app/providers.tsx
'use client';

import { createContext, useContext, useState, Suspense } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Language = "ID" | "EN";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ID",
  setLang: () => {},
});

// Custom hook untuk mengakses bahasa di komponen mana saja
export const useLanguage = () => useContext(LanguageContext);

export function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ID");

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </LanguageContext.Provider>
    </NextThemesProvider>
  );
}