import LeadMagnetGenerator from "@/components/LeadMagnetGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">Lead Magnet Generator</h1>
        <p className="text-center mb-8 text-gray-600">Create compelling lead magnets in minutes</p>
        <LeadMagnetGenerator />
      </div>
    </div>
  );
};

export default Index;