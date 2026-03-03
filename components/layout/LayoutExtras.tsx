"use client";

import { usePathname } from "next/navigation";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export function LayoutExtras() {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith("/admin");

    if (isAdmin) return null;

    return (
        <>
            <CTA />
            <Footer />
        </>
    );
}
