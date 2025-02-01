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

interface FormSectionProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onGenerate: () => void;
}

const FormSection = ({ formData, setFormData, onGenerate }: FormSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
      <div className="space-y-2">
        <Label htmlFor="blogUrl">Blog Post URL</Label>
        <Input
          id="blogUrl"
          placeholder="https://example.com/blog-post"
          value={formData.blogUrl}
          onChange={(e) => setFormData({ ...formData, blogUrl: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="targetAudience">Target Audience</Label>
        <Input
          id="targetAudience"
          placeholder="e.g., Marketing Professionals"
          value={formData.targetAudience}
          onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Input
          id="industry"
          placeholder="e.g., Technology"
          value={formData.industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="toneOfVoice">Tone of Voice</Label>
        <Select
          value={formData.toneOfVoice}
          onValueChange={(value: FormData["toneOfVoice"]) =>
            setFormData({ ...formData, toneOfVoice: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select tone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Conversational">Conversational</SelectItem>
            <SelectItem value="Professional">Professional</SelectItem>
            <SelectItem value="Data-Driven">Data-Driven</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="keyTakeaways">Key Takeaways</Label>
        <Textarea
          id="keyTakeaways"
          placeholder="Enter the main points you want to highlight"
          value={formData.keyTakeaways}
          onChange={(e) => setFormData({ ...formData, keyTakeaways: e.target.value })}
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="callToAction">Call-to-Action</Label>
        <Select
          value={formData.callToAction}
          onValueChange={(value: FormData["callToAction"]) =>
            setFormData({ ...formData, callToAction: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select CTA" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Book a Demo">Book a Demo</SelectItem>
            <SelectItem value="Download Report">Download Report</SelectItem>
            <SelectItem value="Sign Up">Sign Up</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        className="w-full bg-primary hover:bg-primary/90 text-white"
        onClick={onGenerate}
      >
        Generate Lead Magnet
      </Button>
    </div>
  );
};

export default FormSection;