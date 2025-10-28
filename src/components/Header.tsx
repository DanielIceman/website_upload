import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const languages = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
  { code: "no", flag: "🇳🇴", name: "Norsk" },
  { code: "is", flag: "🇮🇸", name: "Íslenska" },
  { code: "pl", flag: "🇵🇱", name: "Polski" },
  { code: "ro", flag: "🇷🇴", name: "Română" },
];

export const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://i.postimg.cc/5yRZbF6b/arctic-logo.jpg" 
              alt="Arctic Workforce" 
              className="h-16 md:h-20 w-auto"
            />
          </div>
          
          <div className="relative">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <span className="text-2xl">{currentLang.flag}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </Button>
            
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-card border-2 border-primary rounded-lg shadow-lg overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-accent transition-colors text-left"
                    onClick={() => {
                      setCurrentLang(lang);
                      setIsLangOpen(false);
                    }}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
