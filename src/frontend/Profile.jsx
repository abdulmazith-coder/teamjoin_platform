import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github, Linkedin, Globe, Users, Edit } from "lucide-react";

const profile = {
  name: "Jordan Lee",
  title: "Builder + designer. Passionate about AI for productivity, clean UX, and hackathon weekends.",
  joined: 4,
  pending: 2,
  followers: 128,
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    portfolio: "https://portfolio.com"
  }
};

const joinedProjects = [
  {
    id: 1,
    name: "AI Study Buddy",
    role: "Product Designer",
    joinedDate: "Since May 2025",
    status: "active"
  },
  {
    id: 2,
    name: "GreenRoute",
    role: "Full-stack",
    joinedDate: "Since Mar 2025",
    status: "active"
  },
  {
    id: 3,
    name: "MarketPulse",
    role: "Growth",
    joinedDate: "Since Jan 2025",
    status: "active"
  }
];

const pendingRequests = [
  {
    id: 1,
    name: "HealthTrack",
    role: "Frontend",
    requestedDate: "2d ago",
    canWithdraw: true
  },
  {
    id: 2,
    name: "ShareCart",
    role: "Backend",
    requestedDate: "5d ago",
    canWithdraw: true
  }
];

export default function Profile() {
  const [withdrawnRequests, setWithdrawnRequests] = useState([]);

  const handleWithdraw = (requestId) => {
    setWithdrawnRequests(prev => [...prev, requestId]);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">User Profile</h1>
      </div>

      {/* Profile Section */}
      <Card className="bg-surface-elevated">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-2xl">JL</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
              <p className="text-text-secondary mb-4 max-w-md">
                {profile.title}
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 justify-center md:justify-start mb-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={profile.social.portfolio} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="flex gap-6 justify-center md:justify-start text-sm">
                <div>
                  <span className="font-semibold">Joined: {profile.joined}</span>
                </div>
                <div>
                  <span className="font-semibold">Pending: {profile.pending}</span>
                </div>
                <div>
                  <span className="font-semibold">Followers: {profile.followers}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit profile
              </Button>
              <Button className="gradient-brand">
                + New TeamBox
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Joined Projects */}
      <Card className="bg-surface-elevated">
        <CardHeader>
          <h3 className="text-xl font-semibold">Joined projects</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          {joinedProjects.map((project) => (
            <div key={project.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{project.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{project.name}</h4>
                  <p className="text-sm text-text-secondary">
                    Role: {project.role} • {project.joinedDate}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Open
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Pending Requests */}
      <Card className="bg-surface-elevated">
        <CardHeader>
          <h3 className="text-xl font-semibold">Pending requests</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          {pendingRequests.map((request) => (
            <div key={request.id} className="flex items-center justify-between p-4 rounded-lg border">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{request.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{request.name}</h4>
                  <p className="text-sm text-text-secondary">
                    Requested: {request.role} • {request.requestedDate}
                  </p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                disabled={withdrawnRequests.includes(request.id)}
                onClick={() => handleWithdraw(request.id)}
              >
                {withdrawnRequests.includes(request.id) ? "Withdrawn" : "Withdraw"}
              </Button>
            </div>
          ))}
          
          <div className="text-center text-sm text-text-secondary pt-4 border-t">
            You can have up to 3 pending requests. Keep exploring to find your next team.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}