import { CarFront, MessageSquare, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface AdminSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeTab: "products" | "messages";
  setActiveTab: (tab: "products" | "messages") => void;
  onLogout: () => void;
}

export const AdminSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  activeTab,
  setActiveTab,
  onLogout,
}: AdminSidebarProps) => {
  return (
    <SidebarProvider defaultOpen={sidebarOpen}>
      <Sidebar>
        <SidebarContent>
          <div className="p-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-6 w-6 text-black cursor-pointer" />
            </Button>
          </div>
          <SidebarMenu className="space-y-6 px-3 mt-4">
            <SidebarMenuItem className="p-3 rounded-md w-full h-14 shadow-lg border border-gray-200">
              <SidebarMenuButton
                onClick={() => setActiveTab("products")}
                isActive={activeTab === "products"}
              >
                <CarFront className="text-xl" />
                <span>Products</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem className="p-3 rounded-md w-full h-14 shadow-lg border border-gray-200">
              <SidebarMenuButton
                onClick={() => setActiveTab("messages")}
                isActive={activeTab === "messages"}
              >
                <MessageSquare className="text-xl" />
                <span>Messages</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem className="p-3 rounded-md w-full h-14 shadow-lg text-red-600 border border-gray-200">
              <SidebarMenuButton onClick={onLogout}>
                <LogOut className="text-xl" />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
