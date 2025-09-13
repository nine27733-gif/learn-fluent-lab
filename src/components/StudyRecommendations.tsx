import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, TrendingUp, Star, ChevronRight } from "lucide-react";

export const StudyRecommendations = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI-Powered Study Recommendations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized suggestions based on your learning patterns, 
            performance data, and study goals to maximize your academic success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Priority recommendations */}
          <Card className="p-6 shadow-card hover:shadow-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-primary w-10 h-10 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Priority Focus Areas</h3>
            </div>

            <div className="space-y-4">
              <RecommendationItem 
                title="Organic Chemistry Reactions"
                description="Practice mechanism problems - 23% improvement potential"
                priority="high"
                estimatedTime="45 min"
              />
              <RecommendationItem 
                title="Calculus Integration Techniques"
                description="Review substitution methods before upcoming exam"
                priority="medium"
                estimatedTime="30 min"
              />
              <RecommendationItem 
                title="Physics Problem Solving"
                description="Focus on momentum and energy conservation"
                priority="medium"
                estimatedTime="60 min"
              />
            </div>
          </Card>

          {/* Adaptive learning */}
          <Card className="p-6 shadow-card hover:shadow-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-success w-10 h-10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Adaptive Learning Path</h3>
            </div>

            <div className="space-y-4">
              <LearningPathItem 
                title="Master Complex Numbers"
                progress={75}
                nextStep="Complete practice problems"
                difficulty="Intermediate"
              />
              <LearningPathItem 
                title="Thermodynamics Principles"
                progress={45}
                nextStep="Review entropy concepts"
                difficulty="Advanced"
              />
              <LearningPathItem 
                title="Molecular Geometry"
                progress={90}
                nextStep="Take final assessment"
                difficulty="Beginner"
              />
            </div>
          </Card>
        </div>

        {/* Quick actions */}
        <div className="grid md:grid-cols-4 gap-6">
          <QuickAction 
            icon={Star}
            title="Daily Challenge"
            description="Complete today's personalized quiz"
            action="Start Challenge"
            color="learning-blue"
          />
          <QuickAction 
            icon={Clock}
            title="Study Session"
            description="Begin focused 25-min study block"
            action="Start Session"
            color="learning-green"
          />
          <QuickAction 
            icon={Brain}
            title="Weak Areas"
            description="Review flagged concepts"
            action="Review Now"
            color="learning-orange"
          />
          <QuickAction 
            icon={TrendingUp}
            title="Progress Check"
            description="See your weekly improvement"
            action="View Report"
            color="learning-purple"
          />
        </div>
      </div>
    </section>
  );
};

const RecommendationItem = ({ title, description, priority, estimatedTime }: {
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  estimatedTime: string;
}) => {
  const getPriorityColor = () => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
    }
  };

  return (
    <div className="p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors group">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-semibold text-sm">{title}</h4>
        <Badge className={`text-xs ${getPriorityColor()}`}>
          {priority}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          {estimatedTime}
        </div>
        <Button size="sm" variant="ghost" className="h-6 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Start
          <ChevronRight className="w-3 h-3 ml-1" />
        </Button>
      </div>
    </div>
  );
};

const LearningPathItem = ({ title, progress, nextStep, difficulty }: {
  title: string;
  progress: number;
  nextStep: string;
  difficulty: string;
}) => {
  return (
    <div className="p-4 bg-secondary/50 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-sm">{title}</h4>
        <Badge variant="outline" className="text-xs">{difficulty}</Badge>
      </div>
      <div className="w-full bg-secondary rounded-full h-2 mb-2">
        <div 
          className="bg-gradient-success h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground">{nextStep}</p>
    </div>
  );
};

const QuickAction = ({ icon: Icon, title, description, action, color }: {
  icon: any;
  title: string;
  description: string;
  action: string;
  color: string;
}) => {
  return (
    <Card className="p-6 text-center shadow-soft hover:shadow-card transition-all duration-300 group cursor-pointer">
      <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <Button size="sm" variant="outline" className="w-full">
        {action}
      </Button>
    </Card>
  );
};