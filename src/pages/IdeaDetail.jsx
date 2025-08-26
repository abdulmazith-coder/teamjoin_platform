import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams } from "react-router-dom";

const IdeaDetail = () => {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Idea Details</h1>
        <Button>Join Team</Button>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>ID</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">Amazing Project Idea #{id}</CardTitle>
              <p className="text-muted-foreground">Created by John Doe</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">
              This is an innovative project that aims to revolutionize the way we think about technology. 
              It combines cutting-edge AI with user-friendly design to create something truly remarkable.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Required Skills</h3>
            <div className="flex gap-2 flex-wrap">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Node.js</Badge>
              <Badge>UI/UX Design</Badge>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Team Members</h3>
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdeaDetail;
