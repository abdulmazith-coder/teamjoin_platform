// React for building components
import React, { useState } from "react";

// Import our UI components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Router hook to get the ID from the URL
import { useParams } from "react-router-dom";

// IdeaDetail component - shows details for a specific project idea
function IdeaDetail() {
  // Get the project ID from the URL (like /idea/123)
  const { id } = useParams();
  
  // State to track if user has joined this team
  const [hasJoined, setHasJoined] = useState(false);
  
  // Function that runs when user clicks "Join Team"
  function handleJoinTeam() {
    setHasJoined(true);
    console.log(`User joined project ${id}!`);
    // You can add API call logic here later
  }

  // Sample project data - in a real app, this would come from a database based on the ID
  const projectData = {
    id: id,
    title: `Amazing Project Idea #${id}`,
    creator: "John Doe",
    description: "This is an innovative project that aims to revolutionize the way we think about technology. It combines cutting-edge AI with user-friendly design to create something truly remarkable.",
    requiredSkills: ["React", "TypeScript", "Node.js", "UI/UX Design"],
    teamMembers: [
      { name: "John Doe", avatar: "/placeholder.svg", initials: "JD" },
      { name: "Jane Smith", avatar: "/placeholder.svg", initials: "JS" }
    ],
    avatar: "/placeholder.svg"
  };

  return (
    <div className="space-y-6">
      {/* Page header with title and join button */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Idea Details</h1>
        
        <Button 
          onClick={handleJoinTeam}
          disabled={hasJoined}
          variant={hasJoined ? "secondary" : "default"}
          size="lg"
        >
          {hasJoined ? "Joined!" : "Join Team"}
        </Button>
      </div>
      
      {/* Main project card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            {/* Project avatar */}
            <Avatar className="h-16 w-16">
              <AvatarImage src={projectData.avatar} />
              <AvatarFallback className="bg-brand-primary text-primary-foreground text-lg">
                ID
              </AvatarFallback>
            </Avatar>
            
            {/* Project title and creator */}
            <div>
              <CardTitle className="text-2xl text-foreground">
                {projectData.title}
              </CardTitle>
              <p className="text-muted-foreground">
                Created by {projectData.creator}
              </p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Project description section */}
          <div>
            <h3 className="font-semibold mb-2 text-foreground">Description</h3>
            <p className="text-muted-foreground">
              {projectData.description}
            </p>
          </div>
          
          {/* Required skills section */}
          <div>
            <h3 className="font-semibold mb-2 text-foreground">Required Skills</h3>
            <div className="flex gap-2 flex-wrap">
              {/* Loop through each skill and create a badge */}
              {projectData.requiredSkills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Team members section */}
          <div>
            <h3 className="font-semibold mb-2 text-foreground">Team Members</h3>
            <div className="flex gap-2">
              {/* Loop through each team member and show their avatar */}
              {projectData.teamMembers.map((member, index) => (
                <Avatar key={index} className="h-10 w-10">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback className="bg-brand-primary text-primary-foreground">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Success message when user joins */}
      {hasJoined && (
        <Card className="border-success bg-success/5">
          <CardContent className="pt-6">
            <p className="text-success font-medium">
              🎉 You've successfully joined this team! The project creator will be in touch soon.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Export the component so other files can use it
export default IdeaDetail;
