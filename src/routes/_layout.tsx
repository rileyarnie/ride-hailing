import { createFileRoute, Outlet } from "@tanstack/react-router";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <ModeToggle />
        </header>
        {/* <div className="flex flex-1 flex-col gap-4 p-4"> */}
        {/* <div className="grid auto-rows-min gap-4 md:grid-cols-4"> */}
        <div className="p-4">
          <Outlet />
        </div>
        {/* </div> */}
      </SidebarInset>
    </SidebarProvider>
  );
}
