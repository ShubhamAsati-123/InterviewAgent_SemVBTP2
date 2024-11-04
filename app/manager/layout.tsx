import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider >
          <AppSidebar/>
          <main className="w-screen">
            <SidebarTrigger/>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
