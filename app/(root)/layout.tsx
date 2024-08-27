"use client";

import Sidebar from "@/components/Sidebar";
import Image from "next/image"
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "Sky",
    lastName: "Sayson",
    $id: "22101281",
    email: "jonazjuan.dev@gmail.com",
    userId: "Skysayson",
    dwollaCustomerUrl: "NA",
    dwollaCustomerId: "NA",
    address1: "Guizo, Mandaue City, Cebu",
    city: "Cebu City",
    state: "Visayas",
    postalCode: "6014",
    dateOfBirth: "12-03-2001",
    ssn: "T0170126B",
  };

  return (
    <main className="flex w-full h-screen font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image 
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="logo"
          />
          <div className="">
            <MobileNav 
              user = {loggedIn}
            />            
          </div>
        </div>
      {children}
      </div>
    </main>
  );
}
