import { FormData } from "./LeadMagnetGenerator";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

interface PreviewSectionProps {
  formData: FormData;
}

const PreviewSection = ({ formData }: PreviewSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <Button variant="outline" size="sm">
          <FileDown className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
      
      <div className="prose max-w-none">
        <div className="bg-secondary p-4 rounded-lg min-h-[400px]">
          <p className="text-gray-500 text-center mt-8">
            Your generated lead magnet will appear here
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;