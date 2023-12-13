import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
//import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/shared/Navigation/Navigation";
import CurrentUserProvider from "@/context/CurrentUserContext";
import getCurrentUser from "@/actions/getCurrentUser";
import getCurrentChannel from "@/actions/getCurrentChannel";
import CreateChannelModalProvider from "@/context/CreateChannelModalContext";
import CreateChannelModal from "@/components/shared/Modal/CreateChannelModal";
import { Toaster } from "react-hot-toast";
import CurrentChannelProvider from "@/context/CurrentChannelContext";
import UploadVideoModalProvider from "@/context/UploadVideoModalContext";
import SidebarProvider from "@/context/SidebarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Auth",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  const currentChannel = await getCurrentChannel();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <CreateChannelModalProvider>
            <Toaster toastOptions={{ position: "bottom-left" }} />
            <CreateChannelModal />
            <CurrentUserProvider user={currentUser}>
              <CurrentChannelProvider channel={currentChannel}>
                <UploadVideoModalProvider>
                  <SidebarProvider>
                    <main>
                      <Navigation />
                      <div className="pt-16">{children}</div>
                    </main>
                  </SidebarProvider>
                </UploadVideoModalProvider>
              </CurrentChannelProvider>
            </CurrentUserProvider>
          </CreateChannelModalProvider>
          {/* <Toaster /> */}
        </Provider>
      </body>
    </html>
  );
}