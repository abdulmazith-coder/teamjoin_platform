import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoreHorizontal, Users, MessageCircle, Check, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const teamMembers = [
  {
    id: 1,
    name: "Maya Patel",
    tags: ["Full-stack", "Next.js"],
    avatar: "/placeholder.svg",
    isActive: true
  },
  {
    id: 2,
    name: "Leo Martin",
    tags: ["Designer", "UX/UI"],
    avatar: "/placeholder.svg",
    isActive: true
  }
];

const joinRequests = [
  {
    id: 1,
    name: "Aria Chen",
    tags: ["Growth", "SEO"],
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Sami Rao",
    tags: ["Backend", "Node"],
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Nora Williams",
    tags: ["iOS", "Swift"],
    avatar: "/placeholder.svg",
  }
];

const chatMessages = [
  {
    id: 1,
    sender: "Maya",
    message: "Just pushed the onboarding flow. Please review.",
    time: "2m ago",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    sender: "Leo",
    message: "Shared a quick mock for the dashboard widgets.",
    time: "5m ago",
    avatar: "/placeholder.svg"
  }
];

export default function TeamManagement() {
  const [acceptedMembers, setAcceptedMembers] = useState<number[]>([]);
  const [rejectedMembers, setRejectedMembers] = useState<number[]>([]);

  const handleAccept = (memberId: number) => {
    setAcceptedMembers(prev => [...prev, memberId]);
  };

  const handleReject = (memberId: number) => {
    setRejectedMembers(prev => [...prev, memberId]);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Team Management</h1>
      </div>

      {/* Team Members */}
      <Card className="bg-surface-elevated">
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="text-xl font-semibold">Team members</h3>
          <Badge variant="secondary" className="bg-brand-secondary/10 text-brand-secondary">
            2/3
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <h4 className="font-medium text-text-secondary">Accepted members</h4>
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{member.name}</h4>
                    <div className="flex gap-1 mt-1">
                      {member.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                  Options
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Join Requests */}
      <Card className="bg-surface-elevated">
        <CardHeader>
          <h3 className="text-xl font-semibold">Join requests</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          {joinRequests.map((request) => {
            const isAccepted = acceptedMembers.includes(request.id);
            const isRejected = rejectedMembers.includes(request.id);
            const isProcessed = isAccepted || isRejected;
            
            return (
              <div key={request.id} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={request.avatar} />
                    <AvatarFallback>{request.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{request.name}</h4>
                    <div className="flex gap-1 mt-1">
                      {request.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {isProcessed ? (
                    <Badge variant={isAccepted ? "default" : "destructive"}>
                      {isAccepted ? "Accepted" : "Rejected"}
                    </Badge>
                  ) : (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleReject(request.id)}
                      >
                        <X className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                      <Button 
                        size="sm"
                        className="gradient-brand"
                        onClick={() => handleAccept(request.id)}
                      >
                        <Check className="h-4 w-4 mr-1" />
                        Accept
                      </Button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
          
          <div className="text-center text-sm text-text-secondary pt-4 border-t">
            Limit 3 accepted members per team. You have 1 slot left.
          </div>
        </CardContent>
      </Card>

      {/* Private Team Chat */}
      <Card className="bg-surface-elevated">
        <CardHeader className="flex flex-row items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          <h3 className="text-xl font-semibold">Private team chat</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          {chatMessages.map((message) => (
            <div key={message.id} className="flex gap-3">
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage src={message.avatar} />
                <AvatarFallback>{message.sender[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{message.sender}</span>
                  <span className="text-xs text-text-secondary">{message.time}</span>
                </div>
                <p className="text-sm text-text-secondary">{message.message}</p>
              </div>
            </div>
          ))}
          
          {/* Chat Input Placeholder */}
          <div className="pt-4 border-t">
            <div className="flex gap-2">
              <div className="flex-1 px-3 py-2 bg-muted rounded-lg text-sm text-muted-foreground">
                Type a message...
              </div>
              <Button size="sm" className="gradient-brand">
                Send
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}