"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
    icon?: React.ReactNode; // Make icon optional
    name: string;
    link: string;
}  

interface ProfileItem {
  img: string;
  name: string;
  sub: string;
}

interface SidebarItems {
  logo: React.ReactNode;
  menu: MenuItem[];
  view: MenuItem[];
  profile: ProfileItem[];
}

interface SidebarProps {
  items: SidebarItems;
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const pathname = usePathname();
  const [activeProfile, setActiveProfile] = useState(items.profile[0]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleProfileClick = (item: ProfileItem) => {
    setActiveProfile(item);
    if (isMobileSidebarOpen) setIsMobileSidebarOpen(false); // Close mobile sidebar
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-2 left-2 z-50">
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="bg-white p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="black" strokeWidth={2} />
          </svg>
        </button>
      </div>

      {/* Sidebar (hidden on mobile) */}
      <div
        className={`h-full w-[260px] md:block ${
          isMobileSidebarOpen ? "block fixed w-60 left-0 top-0 bottom-0 z-[9999] bg-white" : "hidden"
        }`}
      >
        <div className="flex flex-col h-full justify-between md:max-w-52 absolute top-0 bottom-0 left-0 right-0">
            <div className="sticky top-0">
                <div className="p-6 flex items-center justify-between">
                    {items.logo}
                    <button
                        onClick={() => setIsMobileSidebarOpen(false)}
                        className="md:hidden"
                    >
                        X
                    </button>
                </div>
                <div className="">
                {items.menu.map((item, index) => (
                    <Link key={index} href={item.link}
                        className={`flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 ${
                        pathname === item.link ? "bg-gray-100 font-bold" : ""
                        }`}
                    >
                        {item.icon}
                        <span className="ml-2">{item.name}</span>
                    </Link>
                ))}
                </div>
            </div>
            {/* View Items */}
            <div className="h-full overflow-y-auto">
            {items.view.map((item, index) => (
                <Link key={index} href={item.link} className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
                    {item.name}
                </Link>
            ))}
            </div>

            {/* Profile Section */}
            <div className="md:fixed bottom-0 left-0 md:w-52">
                <div
                    className="flex w-full items-center space-x-2 p-4 bg-gray-100 cursor-pointer"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                    <Image
                        width={50}
                        height={50}
                        src={activeProfile.img}
                        alt={activeProfile.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p>{activeProfile.name}</p>
                        <p className="text-sm text-gray-500">{activeProfile.sub}</p>
                    </div>
                </div>
                {/* Profile Options (Hidden by default) */}
                {isProfileOpen && (
                    <div className="absolute w-52 bottom-16 left-0">
                        {items.profile.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                            setActiveProfile(item);
                            setIsProfileOpen(false); // Close profile options when a profile is selected
                            }}
                            className={`flex items-center px-4 py-2 hover:bg-gray-200 w-full ${
                            activeProfile === item ? "bg-gray-300" : ""
                            }`}
                        >
                            <Image
                                width={50}
                                height={50}
                                src={item.img}
                                alt={item.name}
                                className="w-10 h-10 rounded-full mr-2"
                            />
                            <div>
                                <p>{item.name}</p>
                                <p className="text-sm text-gray-500">{item.sub}</p>
                            </div>
                        </button>
                        ))}
                    </div>
                )}

            </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
