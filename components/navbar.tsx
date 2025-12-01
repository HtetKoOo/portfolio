"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Hammer, Home, MessageCircle, Presentation, User } from "lucide-react";
export function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "#",
            icon: <Home className="h-7 w-7 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "#about",
            icon: <User className="h-7 w-7 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Experience",
            link: "#experience",
            icon: <Hammer className="h-7 w-7 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Project",
            link: "#project",
            icon: <Presentation className="h-7 w-7 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "#contact",
            icon: <MessageCircle className="h-7 w-7 text-neutral-500 dark:text-white" />,
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
