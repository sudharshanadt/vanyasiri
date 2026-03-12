"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PremiumSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
    viewportAmount?: number;
}

export default function PremiumSection({
    children,
    className = "",
    id,
    delay = 0,
    viewportAmount = 0.2
}: PremiumSectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: viewportAmount }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.section>
    );
}

export function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.21, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function RevealText({ children, delay = 0 }: { children: string, delay?: number }) {
    return (
        <div className="overflow-hidden bg-red-400">
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay, ease: [0.21, 1, 0.36, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
}
