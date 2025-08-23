import { NavLink, useLocation } from "react-router-dom";
import { 
  Compass, 
  Lightbulb, 
  Plus, 
  Users, 
  User,
  Sparkles
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Discover", url: "/", icon: Compass },
  { title: "Idea Detail", url: "/idea-detail", icon: Lightbulb },
  { title: "Create TeamBox", url: "/create", icon: Plus },
  { title: "Team Management", url: "/team", icon: Users },
  { title: "Profile", url: "/profile", icon: User },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-60"} collapsible="icon">
      <SidebarContent className="bg-surface-elevated">
        {/* Logo */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-brand-secondary flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            {!isCollapsed && (
              <span className="text-lg font-bold">TeamJoin</span>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent className="px-2">
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                          isActive 
                            ? "bg-primary text-primary-foreground shadow-md" 
                            : "hover:bg-secondary/80 text-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* New TeamBox Button */}
        <div className="p-4 mt-auto">
          <Button 
            asChild
            className="w-full gradient-brand hover:opacity-90 transition-opacity"
          >
            <NavLink to="/create">
              <Plus className="h-4 w-4 mr-2" />
              {!isCollapsed && "New TeamBox"}
            </NavLink>
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}