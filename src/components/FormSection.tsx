import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormData } from "./LeadMagnetGenerator";
import { Label } from "@/components/ui/label";
import { Sparkles } from "lucide-react";

interface FormSectionProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onGenerate: () => void;
}

const FormSection = ({ formData, setFormData, onGenerate }: FormSectionProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-indigo-100 space-y-6 hover:shadow-xl transition-shadow duration-300">
      <div className="space-y-2">
        <Label htmlFor="blogUrl" className="text-sm font-medium text-gray-700">Blog Post URL</Label>
        <Input
          id="blogUrl"
          placeholder="https://example.com/blog-post"
          value={formData.blogUrl}
          onChange={(e) => setFormData({ ...formData, blogUrl: e.target.value })}
          className="transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="targetAudience" className="text-sm font-medium text-gray-700">Target Audience</Label>
        <Input
          id="targetAudience"
          placeholder="e.g., Marketing Professionals"
          value={formData.targetAudience}
          onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
          className="transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry" className="text-sm font-medium text-gray-700">Industry</Label>
        <Input
          id="industry"
          placeholder="e.g., Technology"
          value={formData.industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          className="transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="toneOfVoice" className="text-sm font-medium text-gray-700">Tone of Voice</Label>
        <Select
          value={formData.toneOfVoice}
          onValueChange={(value: FormData["toneOfVoice"]) =>
            setFormData({ ...formData, toneOfVoice: value })
          }
        >
          <SelectTrigger className="transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500">
            <SelectValue placeholder="Select tone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Conversational">✨ Conversational</SelectItem>
            <SelectItem value="Professional">👔 Professional</SelectItem>
            <SelectItem value="Data-Driven">📊 Data-Driven</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="keyTakeaways" className="text-sm font-medium text-gray-700">Key Takeaways</Label>
        <Textarea
          id="keyTakeaways"
          placeholder="Enter the main points you want to highlight"
          value={formData.keyTakeaways}
          onChange={(e) => setFormData({ ...formData, keyTakeaways: e.target.value })}
          className="min-h-[100px] transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="callToAction" className="text-sm font-medium text-gray-700">Call-to-Action</Label>
        <Select
          value={formData.callToAction}
          onValueChange={(value: FormData["callToAction"]) =>
            setFormData({ ...formData, callToAction: value })
          }
        >
          <SelectTrigger className="transition-all duration-200 hover:border-indigo-300 focus:border-indigo-500">
            <SelectValue placeholder="Select CTA" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Book a Demo">🎯 Book a Demo</SelectItem>
            <SelectItem value="Download Report">📥 Download Report</SelectItem>
            <SelectItem value="Sign Up">✍️ Sign Up</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-6 shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={onGenerate}
      >
        <Sparkles className="mr-2 h-5 w-5" /> Generate Lead Magnet
      </Button>
    </div>
  );
};

export default FormSection;