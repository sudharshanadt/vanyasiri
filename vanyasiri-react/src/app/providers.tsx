"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/store/CartContext";

export function Providers({ children }: { children: ReactNode }) {
    return <CartProvider>{children}</CartProvider>;
}
