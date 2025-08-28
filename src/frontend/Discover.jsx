import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Filter, Users } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const projects = [
  {
    id: 1,
    title: "AI Study Buddy",
    description: "A personalized learning assistant for college students.",
    tags: ["EdTech", "AI"],
    roles: ["Dev", "Design", "Marketing"],
    members: 5,
    isRequested: false
  },
  {
    id: 2,
    title: "GreenCart",
    description: "Marketplace for local sustainable products.",
    tags: ["Marketplace"],
    roles: ["Dev", "Marketing"],
    members: 3,
    isRequested: false
  },
  {
    id: 3,
    title: "FitMeet",
    description: "Group workout planning for busy professionals.",
    tags: ["Health", "Social"],
    roles: ["Design", "Marketing"],
    members: 4,
    isRequested: false
  },
  {
    id: 4,
    title: "ChefShare",
    description: "Platform to book home chefs on-demand.",
    tags: ["Marketplace", "Food"],
    roles: ["Developer"],
    members: 2,
    isRequested: false
  },
  {
    id: 5,
    title: "TravelHive",
    description: "Collaborative trip planning for friends.",
    tags: ["Travel", "Social"],
    roles: ["Dev", "Design"],
    members: 6,
    isRequested: false
  },
  {
    id: 6,
    title: "WellNest",
    description: "Daily mindfulness and journaling companion.",
    tags: ["Wellness", "Mobile"],
    roles: ["Design", "Marketing"],
    members: 1,
    isRequested: false
  }
];

const categories = ["All", "AI", "Fintech", "Health", "EdTech", "Marketplace", "Social", "Travel", "Wellness"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
const locations = ["All", "Remote", "On-site"];

export default function Discover() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [requestedProjects, setRequestedProjects] = useState([]);

  const handleRequestJoin = (projectId) => {
    setRequestedProjects(prev => [...prev, projectId]);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Discover Ideas</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            Alerts
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Category:</span>
          <div className="flex gap-2">
            {categories.slice(0, 6).map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/80 transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4 ml-auto">
          <Select defaultValue="trending">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trending">Trending</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="members">Most Members</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={project.id} 
            className="card-hover bg-surface-elevated animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-text-secondary text-sm mt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mt-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {project.roles.map((role) => (
                  <Badge key={role} className="text-xs bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary/20">
                    {role}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Users className="h-4 w-4" />
                  <span>{project.members} members</span>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button 
                    size="sm"
                    className="gradient-brand"
                    disabled={requestedProjects.includes(project.id)}
                    onClick={() => handleRequestJoin(project.id)}
                  >
                    {requestedProjects.includes(project.id) ? "Requested" : "Request to Join"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State - Show when no projects match filters */}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
            <Users className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No ideas yet. Be the first to create a TeamBox!</h3>
          <p className="text-text-secondary mb-4">
            Kickstart your startup journey by posting your idea and inviting collaborators.
          </p>
          <Button className="gradient-brand">
            Create TeamBox
          </Button>
        </div>
      )}
    </div>
  );
}