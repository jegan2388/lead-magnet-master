import LeadMagnetGenerator from "@/components/LeadMagnetGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Lead Magnet Generator
          </h1>
          <p className="text-lg text-gray-600">
            Transform your blog posts into compelling lead magnets in minutes ✨
          </p>
        </div>
        <LeadMagnetGenerator />
      </div>
    </div>
  );
};

export default Index;