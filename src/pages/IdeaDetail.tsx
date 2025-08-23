import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Share, Bookmark, TrendingUp, Users, MessageCircle, Lightbulb } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const project = {
  title: "AI Study Buddy",
  description: "Personalized learning assistant helping students master complex topics.",
  fullDescription: "We are building a context-aware study companion that generates study plans, quizzes, and explanations tailored to each learner. Our initial target is university students in STEM majors. We're looking for teammates passionate about education and AI.",
  tags: ["EdTech", "AI", "Mobile"],
  trending: true,
  members: 5,
  features: [
    "Adaptive study plan generator",
    "In-app spaced repetition flashcards", 
    "GPT-powered Q&A with citation",
    "Progress dashboard"
  ],
  timeline: {
    mvp: "8 weeks",
    launch: "Q1 2026"
  },
  founder: {
    name: "Sam Carter",
    role: "Founder / PM",
    avatar: "/placeholder.svg"
  }
};

const teamRoles = [
  {
    name: "Full-stack Developer",
    status: "Open",
    skills: ["Node/Next"],
    isOpen: true
  },
  {
    name: "Product Designer", 
    status: "Open",
    skills: ["UX/UI"],
    isOpen: true
  },
  {
    name: "Growth Marketer",
    status: "Open", 
    skills: ["SEO/Social"],
    isOpen: true
  }
];

const teamMembers = [
  {
    name: "Sam Carter",
    role: "Founder / PM", 
    avatar: "/placeholder.svg"
  },
  {
    name: "Jin Park",
    role: "ML Engineer",
    avatar: "/placeholder.svg"
  },
  {
    name: "Ana Gomez", 
    role: "Advisor",
    avatar: "/placeholder.svg"
  }
];

export default function IdeaDetail() {
  const [hasJoined, setHasJoined] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleJoinTeam = () => {
    setHasJoined(true);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Idea Detail</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleBookmark}>
                <Bookmark className={`h-4 w-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                {isBookmarked ? 'Saved' : 'Save'}
              </Button>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Project Overview */}
          <Card className="bg-surface-elevated">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-brand-secondary">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    {project.trending && (
                      <Badge className="bg-warning/10 text-warning hover:bg-warning/20">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                    <Badge className="bg-success/10 text-success hover:bg-success/20">
                      <Users className="h-3 w-3 mr-1" />
                      {project.members} members
                    </Badge>
                  </div>
                  <p className="text-text-secondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About This Project */}
          <Card className="bg-surface-elevated">
            <CardHeader>
              <h3 className="text-xl font-semibold">About this project</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-text-secondary leading-relaxed">
                {project.fullDescription}
              </p>
              
              <div>
                <h4 className="font-semibold mb-3">What you'll build</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Timeline</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">MVP</span>
                      <span className="font-medium">{project.timeline.mvp}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Launch target</span>
                      <span className="font-medium">{project.timeline.launch}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Screenshots */}
          <Card className="bg-surface-elevated">
            <CardHeader>
              <h3 className="text-xl font-semibold">Screenshots</h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-text-secondary">Screenshot 1</span>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-text-secondary">Screenshot 2</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Team & Roles */}
          <Card className="bg-surface-elevated">
            <CardHeader>
              <h3 className="text-lg font-semibold">Team & Roles</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {teamRoles.map((role, index) => (
                <div key={index} className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{role.name}</h4>
                    <Badge 
                      variant={role.isOpen ? "default" : "secondary"}
                      className={role.isOpen ? "bg-success/10 text-success hover:bg-success/20" : ""}
                    >
                      {role.status}
                    </Badge>
                  </div>
                  <div className="flex gap-1">
                    {role.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Members */}
          <Card className="bg-surface-elevated">
            <CardHeader>
              <h3 className="text-lg font-semibold">Members</h3>
            </CardHeader>
            <CardContent className="space-y-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{member.name}</p>
                    <p className="text-xs text-text-secondary">{member.role}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button 
              className="w-full gradient-brand"
              disabled={hasJoined}
              onClick={handleJoinTeam}
            >
              <Users className="h-4 w-4 mr-2" />
              {hasJoined ? "Join Request Sent" : "Join Team"}
            </Button>
            <Button variant="outline" className="w-full">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message Founder
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}