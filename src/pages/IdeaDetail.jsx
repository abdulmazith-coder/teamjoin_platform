import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft, Users, Calendar, Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for the idea detail
const ideaData = {
  id: 1,
  title: "AI Study Buddy",
  description: "A personalized learning assistant that adapts to individual learning styles and provides real-time feedback. Using advanced AI algorithms, it creates custom study plans and tracks progress across multiple subjects.",
  fullDescription: `Our AI Study Buddy is designed to revolutionize how students learn and retain information. The platform uses machine learning to understand each student's unique learning patterns, strengths, and areas for improvement.

Key Features:
• Personalized study plans based on learning style assessment
• Real-time progress tracking and analytics
• Interactive flashcards with spaced repetition
• AI-powered practice questions and quizzes
• Collaborative study rooms for group learning
• Integration with popular educational platforms

The problem we're solving is the one-size-fits-all approach to education. Every student learns differently, yet most educational tools treat everyone the same. Our AI adapts to each individual, making learning more effective and engaging.

We're looking for passionate team members who believe in the power of personalized education and want to make a real impact on students' lives.`,
  tags: ["EdTech", "AI", "Machine Learning"],
  roles: ["Frontend Developer", "Backend Developer", "UI/UX Designer", "Data Scientist"],
  members: 5,
  maxMembers: 8,
  createdDate: "2 weeks ago",
  founder: {
    name: "Alex Chen",
    avatar: "/placeholder.svg",
    title: "AI Researcher & Educator"
  },
  team: [
    { name: "Sarah Johnson", role: "Full-stack Developer", avatar: "/placeholder.svg" },
    { name: "Mike Rodriguez", role: "UI/UX Designer", avatar: "/placeholder.svg" },
    { name: "Emily Watson", role: "Data Scientist", avatar: "/placeholder.svg" }
  ],
  techStack: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL"],
  stage: "MVP Development",
  commitment: "10-15 hours/week"
};

export default function IdeaDetail() {
  const { id } = useParams();
  const [isRequested, setIsRequested] = useState(false);

  const handleRequestJoin = () => {
    setIsRequested(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Back Button */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/discover">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Discover
          </Link>
        </Button>
      </div>

      {/* Header */}
      <Card className="bg-surface-elevated">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{ideaData.title}</h1>
                  <p className="text-text-secondary mb-4">{ideaData.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {ideaData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-6 text-sm text-text-secondary mb-6">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{ideaData.members}/{ideaData.maxMembers} members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Created {ideaData.createdDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  <span>{ideaData.stage}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 lg:w-48">
              <Button 
                className="gradient-brand"
                disabled={isRequested}
                onClick={handleRequestJoin}
              >
                {isRequested ? "Request Sent" : "Request to Join"}
              </Button>
              <Button variant="outline">
                <Star className="h-4 w-4 mr-2" />
                Save Idea
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Full Description */}
          <Card className="bg-surface-elevated">
            <CardHeader>
              <h3 className="text-xl font-semibold">About this project</h3>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                {ideaData.fullDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Open Roles */}
          <Card className="bg-surface-elevated">
            <CardHeader>
              <h3 className="text-xl font-semibold">Open roles</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ideaData.roles.map((role) => (
                  <div key={role} className="flex items-center justify-between p-3 rounded-lg border">
                    <span className="font-medium">{role}</span>
                    <Badge variant="secondary" className="bg-brand-secondary/10 text-brand-secondary">
                      Open
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Founder */}
          <Card className="bg-surface-elevated">
            <CardHeader>
              <h3 className="font-semibold">Project Founder</h3>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={ideaData.founder.avatar} />
                  <AvatarFallback>{ideaData.founder.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{ideaData.founder.name}</h4>
                  <p className="text-sm text-text-secondary">{ideaData.founder.title}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Profile
              </Button>
            </CardContent>
          </Card>

          {/* Current Team */}
          <Card className="bg-surface-elevated">
            <CardHeader>
              <h3 className="font-semibold">Current Team</h3>
            </CardHeader>
            <CardContent className="space-y-3">
              {ideaData.team.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{member.name}</p>
                    <p className="text-xs text-text-secondary">{member.role}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Project Details */}
          <Card className="bg-surface-elevated">
            <CardHeader>
              <h3 className="font-semibold">Project Details</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-1">
                  {ideaData.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-1">Commitment</h4>
                <p className="text-sm text-text-secondary">{ideaData.commitment}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-1">Current Stage</h4>
                <p className="text-sm text-text-secondary">{ideaData.stage}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}