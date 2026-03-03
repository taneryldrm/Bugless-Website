"use client";

export type BlogItem = {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    slug: string;
    category: string;
    readTime?: string;
    metaDescription?: string;
    publishedAt: string;
    image?: string;
};

export type StartupItem = {
    id: string;
    name: string;
    category: string;
    description: string;
    status: string;
    link: string;
    image?: string;
};

export type ReferenceItem = {
    id: string;
    category: "website" | "social" | "ads" | "crm";
    name: string;
    description?: string;
    image?: string;
    link?: string;
};

export type ContactMessage = {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    sentAt: string;
    isRead: boolean;
};

const STORAGE_KEYS = {
    BLOG: "bugless_blog",
    STARTUPS: "bugless_startups",
    REFERENCES: "bugless_references",
    MESSAGES: "bugless_messages",
};

export const storage = {
    getBlog: (): BlogItem[] => {
        if (typeof window === "undefined") return [];
        const data = localStorage.getItem(STORAGE_KEYS.BLOG);
        return data ? JSON.parse(data) : [];
    },
    setBlog: (data: BlogItem[]) => {
        if (typeof window === "undefined") return;
        localStorage.setItem(STORAGE_KEYS.BLOG, JSON.stringify(data));
    },

    getStartups: (): StartupItem[] => {
        if (typeof window === "undefined") return [];
        const data = localStorage.getItem(STORAGE_KEYS.STARTUPS);
        return data ? JSON.parse(data) : [];
    },
    setStartups: (data: StartupItem[]) => {
        if (typeof window === "undefined") return;
        localStorage.setItem(STORAGE_KEYS.STARTUPS, JSON.stringify(data));
    },

    getReferences: (): ReferenceItem[] => {
        if (typeof window === "undefined") return [];
        const data = localStorage.getItem(STORAGE_KEYS.REFERENCES);
        return data ? JSON.parse(data) : [];
    },
    setReferences: (data: ReferenceItem[]) => {
        if (typeof window === "undefined") return;
        localStorage.setItem(STORAGE_KEYS.REFERENCES, JSON.stringify(data));
    },

    getMessages: (): ContactMessage[] => {
        if (typeof window === "undefined") return [];
        const data = localStorage.getItem(STORAGE_KEYS.MESSAGES);
        return data ? JSON.parse(data) : [];
    },
    setMessages: (data: ContactMessage[]) => {
        if (typeof window === "undefined") return;
        localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(data));
    },
};

