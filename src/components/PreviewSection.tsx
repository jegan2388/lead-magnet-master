import { FormData } from "./LeadMagnetGenerator";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

interface PreviewSectionProps {
  formData: FormData;
}

const PreviewSection = ({ formData }: PreviewSectionProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Preview</h2>
        <Button variant="outline" size="sm" className="hover:bg-indigo-50 transition-colors duration-200">
          <FileDown className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
      
      <div className="prose max-w-none">
        <div className="bg-gradient-to-br from-gray-50 to-indigo-50 p-6 rounded-xl min-h-[400px] animate-fade-in">
          <p className="text-gray-500 text-center mt-8">
            Your generated lead magnet will appear here ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;