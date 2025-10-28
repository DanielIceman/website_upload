import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileCheck, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  {
    number: "1",
    title: "Upload Your CV",
    description: "Submit your resume in PDF, DOC, or DOCX format",
  },
  {
    number: "2",
    title: "Quick Review",
    description: "We'll review your profile within 24-48 hours",
  },
  {
    number: "3",
    title: "Perfect Match",
    description: "Get connected with suitable job opportunities",
  },
];

export const CVUpload = () => {
  const [fileName, setFileName] = useState<string>("");
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      toast({
        title: "File Selected",
        description: `${file.name} is ready to upload`,
      });
    }
  };

  const handleSubmit = () => {
    if (fileName) {
      toast({
        title: "CV Submitted Successfully!",
        description: "We'll review your profile and get back to you within 48 hours.",
      });
      setFileName("");
    }
  };

  return (
    <div className="bg-[linear-gradient(135deg,_hsl(199_95%_96%)_0%,_hsl(199_95%_92%)_100%)] border-2 border-primary rounded-2xl p-8 md:p-12 text-center mb-12 shadow-lg">
      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Looking for Your Next Opportunity?
      </h3>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        Upload your CV and let us match you with leading Nordic companies. 
        We handle everything from job placement to relocation support.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
        {steps.map((step) => (
          <div 
            key={step.number}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-[linear-gradient(135deg,_hsl(199_89%_48%),_hsl(199_89%_38%))] text-white flex items-center justify-center text-xl font-bold mb-4 mx-auto">
              {step.number}
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
        <label htmlFor="cv-upload" className="cursor-pointer">
          <input
            type="file"
            id="cv-upload"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileChange}
          />
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all w-full"
            asChild
          >
            <span>
              <Upload className="mr-2 h-5 w-5" />
              Choose File
            </span>
          </Button>
        </label>
        
        {fileName && (
          <div className="flex items-center gap-2 text-sm text-foreground bg-white px-4 py-3 rounded-lg shadow-md w-full animate-fade-in">
            <FileCheck className="h-5 w-5 text-primary" />
            <span className="flex-1 text-left truncate">{fileName}</span>
          </div>
        )}
        
        {fileName && (
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all w-full"
            onClick={handleSubmit}
          >
            <Send className="mr-2 h-5 w-5" />
            Submit CV
          </Button>
        )}
        
        <p className="text-xs text-muted-foreground">
          Maximum file size: 10MB • Accepted formats: PDF, DOC, DOCX
        </p>
      </div>
    </div>
  );
};
