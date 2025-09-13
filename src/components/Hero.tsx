import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Brain, BarChart3, Zap } from "lucide-react";
import heroImage from "@/assets/hero-study.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute top-0 left-0 w-full h-full">
        <img 
          src={heroImage} 
          alt="Personalized Study Platform" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Transform Your Learning with
            <span className="block text-learning-blue">AI-Powered Intelligence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Upload your study materials, get personalized assessments, track your progress, 
            and receive AI-driven recommendations for optimal learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
              Start Learning Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              See How It Works
            </Button>
          </div>
          
          {/* Feature cards */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <FeatureCard 
              icon={Upload}
              title="Smart Upload"
              description="Process any document format with AI extraction"
            />
            <FeatureCard 
              icon={Brain}
              title="AI Assessment"
              description="Auto-generated quizzes and tests from your content"
            />
            <FeatureCard 
              icon={BarChart3}
              title="Progress Analytics"
              description="Detailed insights into your learning journey"
            />
            <FeatureCard 
              icon={Zap}
              title="Smart Recommendations"
              description="Personalized study paths powered by AI"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300 group">
      <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </Card>
  );
};