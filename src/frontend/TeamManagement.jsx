// React for building components
import React from "react";

// Import our UI components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// TeamManagement component - shows all the teams a user manages
function TeamManagement() {
  // Function that runs when user clicks "Create New Team"
  function handleCreateNewTeam() {
    // You can add navigation logic here later
    console.log("User wants to create a new team!");
  }

  // Sample team data - in a real app, this would come from a database
  const teams = [
    {
      id: 1,
      name: "Team Alpha",
      description: "Building the next big thing together",
      memberCount: 5,
      status: "Active",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Team Beta", 
      description: "Innovating for the future",
      memberCount: 3,
      status: "Planning",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page header with title and create button */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Team Management</h1>
        
        <Button onClick={handleCreateNewTeam} size="lg">
          Create New Team
        </Button>
      </div>
      
      {/* Grid of team cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Loop through each team and create a card */}
        {teams.map((team) => (
          <Card key={team.id} className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {/* Team avatar */}
                <Avatar className="h-8 w-8">
                  <AvatarImage src={team.avatar} />
                  <AvatarFallback className="bg-brand-primary text-primary-foreground">
                    {team.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                
                {/* Team name */}
                <span className="text-foreground">{team.name}</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              {/* Team description */}
              <p className="text-sm text-muted-foreground mb-4">
                {team.description}
              </p>
              
              {/* Team info badges */}
              <div className="flex items-center gap-2">
                {/* Member count badge */}
                <Badge variant="secondary">
                  {team.memberCount} Members
                </Badge>
                
                {/* Status badge */}
                <Badge 
                  variant="outline"
                  className="text-success border-success/20"
                >
                  {team.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Empty state message when no teams exist */}
      {teams.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg mb-4">
            You haven't created any teams yet.
          </p>
          <Button onClick={handleCreateNewTeam} variant="outline">
            Create Your First Team
          </Button>
        </div>
      )}
    </div>
  );
}

// Export the component so other files can use it
export default TeamManagement;
