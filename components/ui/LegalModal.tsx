"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
}

export function LegalModal({ isOpen, onClose, title, content }: LegalModalProps) {
    // Prevent scroll when modal is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.95 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl max-h-[85vh] bg-[#111] border border-white/10 rounded-2xl shadow-2xl z-[10000] flex flex-col overflow-hidden"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/50">
                            <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                            <div className="text-gray-300 prose prose-invert prose-p:text-gray-400 prose-headings:text-white max-w-none">
                                {content}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
