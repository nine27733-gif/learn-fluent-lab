import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  Brain, 
  FileQuestion, 
  Play, 
  CheckCircle, 
  Clock, 
  Target,
  Zap,
  BarChart3 
} from "lucide-react";

export const AssessmentGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const { toast } = useToast();

  const handleGenerateAssessment = async () => {
    setIsGenerating(true);
    setGenerationProgress(0);

    // Simulate AI generation process
    for (let i = 0; i <= 100; i += 20) {
      setGenerationProgress(i);
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    setIsGenerating(false);
    toast({
      title: "Assessment Generated!",
      description: "Your personalized quiz is ready to take",
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI-Generated Assessments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your study materials into personalized quizzes, tests, and practice problems 
            tailored to your learning level and goals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="generate" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="generate">Generate New</TabsTrigger>
              <TabsTrigger value="library">Assessment Library</TabsTrigger>
              <TabsTrigger value="analytics">Performance Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="generate" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Generation controls */}
                <Card className="p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-primary w-10 h-10 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Create Assessment</h3>
                  </div>

                  <div className="space-y-6">
                    <AssessmentOption 
                      title="Quick Quiz"
                      description="5-10 questions from recent uploads"
                      duration="10 min"
                      difficulty="Adaptive"
                      icon={Zap}
                    />
                    <AssessmentOption 
                      title="Practice Test"
                      description="Comprehensive exam-style assessment"
                      duration="45 min"
                      difficulty="Advanced"
                      icon={FileQuestion}
                    />
                    <AssessmentOption 
                      title="Weak Areas Focus"
                      description="Targeted questions on struggling topics"
                      duration="20 min"
                      difficulty="Personalized"
                      icon={Target}
                    />
                  </div>

                  <div className="mt-8">
                    {isGenerating ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span>Generating your assessment...</span>
                          <span>{generationProgress}%</span>
                        </div>
                        <Progress value={generationProgress} />
                      </div>
                    ) : (
                      <Button 
                        onClick={handleGenerateAssessment}
                        className="w-full bg-gradient-primary hover:opacity-90"
                        size="lg"
                      >
                        Generate Assessment
                      </Button>
                    )}
                  </div>
                </Card>

                {/* Preview */}
                <Card className="p-6 shadow-card">
                  <h3 className="text-xl font-semibold mb-6">Assessment Preview</h3>
                  
                  <div className="space-y-4">
                    <QuestionPreview 
                      number={1}
                      question="What is the derivative of f(x) = 3x² + 2x - 1?"
                      type="Multiple Choice"
                    />
                    <QuestionPreview 
                      number={2}
                      question="Explain the relationship between entropy and spontaneous reactions."
                      type="Short Answer"
                    />
                    <QuestionPreview 
                      number={3}
                      question="Calculate the momentum of a 5kg object moving at 10 m/s."
                      type="Problem Solving"
                    />
                  </div>

                  <div className="mt-6 p-4 bg-gradient-card rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span>Estimated completion time:</span>
                      <span className="font-semibold">15-20 minutes</span>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="library" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AssessmentCard 
                  title="Calculus Fundamentals"
                  questions={15}
                  duration="25 min"
                  score={87}
                  status="completed"
                  date="2 days ago"
                />
                <AssessmentCard 
                  title="Organic Chemistry"
                  questions={20}
                  duration="35 min"
                  score={null}
                  status="available"
                  date="Generated today"
                />
                <AssessmentCard 
                  title="Physics Mechanics"
                  questions={12}
                  duration="20 min"
                  score={92}
                  status="completed"
                  date="1 week ago"
                />
                <AssessmentCard 
                  title="Statistics Review"
                  questions={18}
                  duration="30 min"
                  score={78}
                  status="completed"
                  date="3 days ago"
                />
                <AssessmentCard 
                  title="Biology Concepts"
                  questions={25}
                  duration="40 min"
                  score={null}
                  status="in-progress"
                  date="Started yesterday"
                />
                <AssessmentCard 
                  title="Quick Math Practice"
                  questions={8}
                  duration="15 min"
                  score={null}
                  status="available"
                  date="Generated today"
                />
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-5 h-5 text-learning-blue" />
                    <h3 className="font-semibold">Average Score</h3>
                  </div>
                  <div className="text-3xl font-bold text-learning-blue mb-2">84%</div>
                  <p className="text-sm text-muted-foreground">+7% from last month</p>
                </Card>

                <Card className="p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-5 h-5 text-learning-green" />
                    <h3 className="font-semibold">Assessments Completed</h3>
                  </div>
                  <div className="text-3xl font-bold text-learning-green mb-2">23</div>
                  <p className="text-sm text-muted-foreground">This month</p>
                </Card>

                <Card className="p-6 shadow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-learning-orange" />
                    <h3 className="font-semibold">Study Time</h3>
                  </div>
                  <div className="text-3xl font-bold text-learning-orange mb-2">18h</div>
                  <p className="text-sm text-muted-foreground">Assessment practice</p>
                </Card>
              </div>

              <Card className="p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-6">Performance by Subject</h3>
                <div className="space-y-4">
                  <SubjectPerformance subject="Mathematics" score={87} trend="+5%" />
                  <SubjectPerformance subject="Physics" score={79} trend="+12%" />
                  <SubjectPerformance subject="Chemistry" score={85} trend="+3%" />
                  <SubjectPerformance subject="Biology" score={91} trend="+8%" />
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

const AssessmentOption = ({ title, description, duration, difficulty, icon: Icon }: {
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  icon: any;
}) => {
  return (
    <div className="p-4 bg-gradient-card rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer group">
      <div className="flex items-start gap-3">
        <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {duration}
            </span>
            <Badge variant="outline" className="text-xs">{difficulty}</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuestionPreview = ({ number, question, type }: {
  number: number;
  question: string;
  type: string;
}) => {
  return (
    <div className="p-4 bg-secondary/50 rounded-lg">
      <div className="flex items-start gap-3">
        <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="text-xs">{type}</Badge>
          </div>
          <p className="text-sm">{question}</p>
        </div>
      </div>
    </div>
  );
};

const AssessmentCard = ({ title, questions, duration, score, status, date }: {
  title: string;
  questions: number;
  duration: string;
  score: number | null;
  status: "completed" | "available" | "in-progress";
  date: string;
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-learning-green" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-learning-orange" />;
      case "available":
        return <Play className="w-4 h-4 text-learning-blue" />;
    }
  };

  const getActionButton = () => {
    switch (status) {
      case "completed":
        return <Button size="sm" variant="outline">Review</Button>;
      case "in-progress":
        return <Button size="sm" className="bg-learning-orange">Continue</Button>;
      case "available":
        return <Button size="sm" className="bg-learning-blue">Start</Button>;
    }
  };

  return (
    <Card className="p-4 shadow-soft hover:shadow-card transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-sm">{title}</h3>
        {getStatusIcon()}
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{questions} questions</span>
          <span>{duration}</span>
        </div>
        {score && (
          <div className="text-lg font-bold text-learning-blue">{score}%</div>
        )}
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>

      {getActionButton()}
    </Card>
  );
};

const SubjectPerformance = ({ subject, score, trend }: {
  subject: string;
  score: number;
  trend: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium">{subject}</span>
      <div className="flex items-center gap-3">
        <Progress value={score} className="w-24 h-2" />
        <span className="text-sm font-semibold w-10">{score}%</span>
        <Badge variant="outline" className="text-xs text-learning-green border-learning-green">
          {trend}
        </Badge>
      </div>
    </div>
  );
};