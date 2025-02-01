import { useState } from "react";
import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";
import { toast } from "@/components/ui/use-toast";

export type FormData = {
  blogUrl: string;
  targetAudience: string;
  industry: string;
  toneOfVoice: "Conversational" | "Professional" | "Data-Driven";
  keyTakeaways: string;
  callToAction: "Book a Demo" | "Download Report" | "Sign Up";
};

const LeadMagnetGenerator = () => {
  const [formData, setFormData] = useState<FormData>({
    blogUrl: "",
    targetAudience: "",
    industry: "",
    toneOfVoice: "Professional",
    keyTakeaways: "",
    callToAction: "Download Report",
  });

  const handleGenerate = () => {
    toast({
      title: "✨ Generating Lead Magnet",
      description: "Your lead magnet is being generated. Please wait...",
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
      <FormSection formData={formData} setFormData={setFormData} onGenerate={handleGenerate} />
      <PreviewSection formData={formData} />
    </div>
  );
};

export default LeadMagnetGenerator;