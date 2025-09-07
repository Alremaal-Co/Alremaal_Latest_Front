/**
 * @file Layout for the main public-facing website pages.
 * @module app/(main)/layout
 */


import MainFooter from "@/components/layouts/MainFooter";
import { MainHeader } from "@/components/layouts/MainHeader";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MainHeader />

      <div className="h-[4.2rem]"></div>
      <main className="flex-grow h-full min-h-[90vh]">{children}</main>
      <div className="h-[4.2rem]"></div>
      <MainFooter />
    </div>
  );
}