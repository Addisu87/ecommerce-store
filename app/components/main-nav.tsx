"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { useEffect, useState } from "react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    handleResize(); // Initial check for screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={cn(
        "mx-6 flex items-center space-x-4 lg:space-x-6",
        isMobile && "flex-col"
      )}
    >
      {isMobile ? (
        // Render mobile dropdown for small screens
        <div className="lg:hidden">
          <select
            value={pathname}
            onChange={(e) => {
              window.location.href = e.target.value;
            }}
            className="block w-full p-2 border border-neutral-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            {routes.map((route) => (
              <option
                key={route.href}
                value={route.href}
                selected={route.active}
              >
                {route.label}
              </option>
            ))}
          </select>
        </div>
      ) : (
        // Render normal links for larger screens
        <>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-black",
                route.active ? "text-black" : "text-neutral-500"
              )}
            >
              {route.label}
            </Link>
          ))}
        </>
      )}
    </nav>
  );
};

export default MainNav;
