import { Hero } from "@/components/Hero";
import { DocumentUpload } from "@/components/DocumentUpload";
import { ProgressDashboard } from "@/components/ProgressDashboard";
import { StudyRecommendations } from "@/components/StudyRecommendations";
import { AssessmentGeneration } from "@/components/AssessmentGeneration";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DocumentUpload />
      <ProgressDashboard />
      <StudyRecommendations />
      <AssessmentGeneration />
    </div>
  );
};

export default Index;
