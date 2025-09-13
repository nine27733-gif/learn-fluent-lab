import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, BookOpen, Target, Clock, Award } from "lucide-react";

export const ProgressDashboard = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Track Your Learning Progress
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive analytics to help you understand your strengths, 
            identify areas for improvement, and optimize your study strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main progress card */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-card hover:shadow-hover transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Overall Progress</h3>
                <Badge variant="secondary" className="bg-gradient-success text-white">
                  Advanced
                </Badge>
              </div>

              <div className="space-y-6">
                <ProgressItem 
                  subject="Mathematics"
                  progress={85}
                  color="learning-blue"
                  trend="+12%"
                />
                <ProgressItem 
                  subject="Physics"
                  progress={72}
                  color="learning-green"
                  trend="+8%"
                />
                <ProgressItem 
                  subject="Chemistry"
                  progress={63}
                  color="learning-orange"
                  trend="+15%"
                />
                <ProgressItem 
                  subject="Biology"
                  progress={78}
                  color="learning-purple"
                  trend="+6%"
                />
              </div>
            </Card>
          </div>

          {/* Stats sidebar */}
          <div className="space-y-6">
            <StatCard 
              icon={BookOpen}
              title="Documents Processed"
              value="147"
              subtitle="This month"
              color="learning-blue"
            />
            <StatCard 
              icon={Target}
              title="Assessments Completed"
              value="42"
              subtitle="85% average score"
              color="learning-green"
            />
            <StatCard 
              icon={Clock}
              title="Study Time"
              value="24h"
              subtitle="This week"
              color="learning-orange"
            />
            <StatCard 
              icon={Award}
              title="Achievements"
              value="12"
              subtitle="Badges earned"
              color="learning-purple"
            />
          </div>
        </div>

        {/* Learning insights */}
        <div className="mt-12">
          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-primary w-10 h-10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Learning Insights</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <InsightCard 
                title="Peak Learning Time"
                value="2:00 PM - 4:00 PM"
                description="You're most productive during afternoon hours"
              />
              <InsightCard 
                title="Preferred Learning Style"
                value="Visual + Practice"
                description="Interactive content shows 23% better retention"
              />
              <InsightCard 
                title="Next Milestone"
                value="Advanced Physics"
                description="Complete 3 more assessments to unlock"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ProgressItem = ({ subject, progress, color, trend }: {
  subject: string;
  progress: number;
  color: string;
  trend: string;
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-medium">{subject}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{progress}%</span>
          <Badge variant="outline" className="text-xs text-learning-green border-learning-green">
            {trend}
          </Badge>
        </div>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

const StatCard = ({ icon: Icon, title, value, subtitle, color }: {
  icon: any;
  title: string;
  value: string;
  subtitle: string;
  color: string;
}) => {
  return (
    <Card className="p-4 shadow-soft hover:shadow-card transition-all duration-300 group">
      <div className="flex items-center gap-3">
        <div className={`bg-gradient-primary w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </Card>
  );
};

const InsightCard = ({ title, value, description }: {
  title: string;
  value: string;
  description: string;
}) => {
  return (
    <div className="text-center p-4 bg-gradient-card rounded-lg">
      <h4 className="font-semibold text-sm text-muted-foreground mb-2">{title}</h4>
      <p className="text-lg font-bold text-primary mb-1">{value}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};