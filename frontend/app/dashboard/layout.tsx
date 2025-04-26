"use client";

import type React from "react";
import { AuthProvider } from "@/components/auth/auth-provider";
import { ProtectedRoute } from "@/components/auth/protected-route";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { SidebarProvider } from "@/components/ui/sidebar"; // <-- you missed this import

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <SidebarProvider> {/* <-- Wrap everything with SidebarProvider */}
          <div className="flex min-h-screen flex-col">
            <DashboardHeader />
            <div className="flex flex-1">
              <DashboardSidebar />
              <main className="flex-1 p-4 md:p-6">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </ProtectedRoute>
    </AuthProvider>
  );
}
