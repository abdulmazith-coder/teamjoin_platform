
// React lets us build components using JSX
import React from "react";

// Import our UI components
import { Button } from "@/components/ui/button";

// This is our main home page component
function Index() {
  // This function will run when the user clicks "Get Started"
  function handleGetStarted() {
    // You can add navigation logic here later
    console.log("User clicked Get Started!");
  }

  return (
    // Main container - centers content on the page
    <div className="min-h-screen flex items-center justify-center bg-background">
      {/* Card container for our welcome content */}
      <div className="text-center bg-card p-8 rounded-lg shadow-lg border border-border">
        {/* Main title */}
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Welcome to TeamJoin
        </h1>
        
        {/* Subtitle description */}
        <p className="text-xl text-muted-foreground mb-6">
          Start building your amazing teams and projects here!
        </p>
        
        {/* Button container */}
        <div className="mt-4">
          <Button 
            onClick={handleGetStarted}
            size="lg"
            className="font-bold"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Index;
