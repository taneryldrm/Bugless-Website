"use client";

import { useState, useEffect } from "react";
import { storage, BlogItem, StartupItem, ReferenceItem, ContactMessage } from "@/lib/storage";
import {
    Plus,
    Trash2,
    Save,
    LogIn,
    LayoutDashboard,
    FileText,
    Rocket,
    ExternalLink,
    LogOut,
    MessageSquare,
    Mail,
    Clock,
    Eye,
    EyeOff,
    ImagePlus,
    Pencil,
    X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ADMIN_PASSWORD = "bugless123"; // Simple password

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");
    const [activeTab, setActiveTab] = useState<"blog" | "startups" | "references" | "messages">("blog");

    // Data states
    const [blogs, setBlogs] = useState<BlogItem[]>([]);
    const [startups, setStartups] = useState<StartupItem[]>([]);
    const [references, setReferences] = useState<ReferenceItem[]>([]);
    const [messages, setMessages] = useState<ContactMessage[]>([]);

    // Form states
    const [blogForm, setBlogForm] = useState<Partial<BlogItem>>({});
    const [startupForm, setStartupForm] = useState<Partial<StartupItem>>({});
    const [referenceForm, setReferenceForm] = useState<Partial<ReferenceItem>>({ category: "website" });

    // Edit states
    const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
    const [editingStartupId, setEditingStartupId] = useState<string | null>(null);
    const [editingReferenceId, setEditingReferenceId] = useState<string | null>(null);

    useEffect(() => {
        if (isLoggedIn) {
            setBlogs(storage.getBlog());
            setStartups(storage.getStartups());
            setReferences(storage.getReferences());
            setMessages(storage.getMessages());
        }
    }, [isLoggedIn]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsLoggedIn(true);
        } else {
            alert("Hatalı şifre!");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setPassword("");
    };

    // Image upload handler — converts file to base64
    const handleImageUpload = (file: File, callback: (dataUrl: string) => void) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            callback(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    // Blog handlers
    const saveBlog = () => {
        if (!blogForm.title || !blogForm.slug) return alert("Başlık ve Slug zorunludur!");

        if (editingBlogId) {
            // Update existing
            const updated = blogs.map(b => b.id === editingBlogId ? { ...b, ...blogForm } as BlogItem : b);
            setBlogs(updated);
            storage.setBlog(updated);
            setEditingBlogId(null);
        } else {
            // Add new
            const newItem: BlogItem = {
                id: Date.now().toString(),
                title: blogForm.title!,
                excerpt: blogForm.excerpt || "",
                content: blogForm.content || "",
                slug: blogForm.slug!,
                category: blogForm.category || "Genel",
                publishedAt: new Date().toISOString(),
                image: blogForm.image || ""
            };
            const updated = [newItem, ...blogs];
            setBlogs(updated);
            storage.setBlog(updated);
        }
        setBlogForm({});
    };

    const editBlog = (blog: BlogItem) => {
        setBlogForm(blog);
        setEditingBlogId(blog.id);
    };

    const cancelEditBlog = () => {
        setBlogForm({});
        setEditingBlogId(null);
    };

    const deleteBlog = (id: string) => {
        const updated = blogs.filter(b => b.id !== id);
        setBlogs(updated);
        storage.setBlog(updated);
        if (editingBlogId === id) cancelEditBlog();
    };

    // Startup handlers
    const saveStartup = () => {
        if (!startupForm.name) return alert("İsim zorunludur!");

        if (editingStartupId) {
            const updated = startups.map(s => s.id === editingStartupId ? { ...s, ...startupForm } as StartupItem : s);
            setStartups(updated);
            storage.setStartups(updated);
            setEditingStartupId(null);
        } else {
            const newItem: StartupItem = {
                id: Date.now().toString(),
                name: startupForm.name!,
                category: startupForm.category || "Genel",
                description: startupForm.description || "",
                status: startupForm.status || "Geliştirme Aşamasında",
                link: startupForm.link || "#",
                image: startupForm.image || ""
            };
            const updated = [newItem, ...startups];
            setStartups(updated);
            storage.setStartups(updated);
        }
        setStartupForm({});
    };

    const editStartup = (startup: StartupItem) => {
        setStartupForm(startup);
        setEditingStartupId(startup.id);
    };

    const cancelEditStartup = () => {
        setStartupForm({});
        setEditingStartupId(null);
    };

    const deleteStartup = (id: string) => {
        const updated = startups.filter(s => s.id !== id);
        setStartups(updated);
        storage.setStartups(updated);
        if (editingStartupId === id) cancelEditStartup();
    };

    // Reference handlers
    const saveReference = () => {
        if (!referenceForm.name) return alert("İsim zorunludur!");

        if (editingReferenceId) {
            const updated = references.map(r => r.id === editingReferenceId ? { ...r, ...referenceForm } as ReferenceItem : r);
            setReferences(updated);
            storage.setReferences(updated);
            setEditingReferenceId(null);
        } else {
            const newItem: ReferenceItem = {
                id: Date.now().toString(),
                category: referenceForm.category as any || "website",
                name: referenceForm.name!,
                description: referenceForm.description || "",
                image: referenceForm.image || "",
                link: referenceForm.link || ""
            };
            const updated = [newItem, ...references];
            setReferences(updated);
            storage.setReferences(updated);
        }
        setReferenceForm({ category: "website" });
    };

    const editReference = (ref: ReferenceItem) => {
        setReferenceForm(ref);
        setEditingReferenceId(ref.id);
    };

    const cancelEditReference = () => {
        setReferenceForm({ category: "website" });
        setEditingReferenceId(null);
    };

    const deleteReference = (id: string) => {
        const updated = references.filter(r => r.id !== id);
        setReferences(updated);
        storage.setReferences(updated);
        if (editingReferenceId === id) cancelEditReference();
    };

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-3xl p-10 shadow-2xl"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-white rounded-xl">
                            <LogIn className="text-black" size={24} />
                        </div>
                        <h1 className="text-2xl font-bold text-white">Admin Girişi</h1>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-2">Yönetici Şifresi</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                        >
                            Giriş Yap
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            {/* Sidebar / Nav */}
            <div className="fixed left-0 top-0 h-full w-64 bg-neutral-900 border-r border-neutral-800 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <LayoutDashboard className="text-black" size={20} />
                    </div>
                    <span className="font-bold text-xl uppercase tracking-tighter">Admin</span>
                </div>

                <nav className="flex-grow space-y-2">
                    <button
                        onClick={() => setActiveTab("blog")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "blog" ? "bg-white text-black" : "text-neutral-400 hover:text-white"}`}
                    >
                        <FileText size={18} /> Blog
                    </button>
                    <button
                        onClick={() => setActiveTab("startups")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "startups" ? "bg-white text-black" : "text-neutral-400 hover:text-white"}`}
                    >
                        <Rocket size={18} /> Startuplar
                    </button>
                    <button
                        onClick={() => setActiveTab("references")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "references" ? "bg-white text-black" : "text-neutral-400 hover:text-white"}`}
                    >
                        <ExternalLink size={18} /> Referanslar
                    </button>
                    <button
                        onClick={() => setActiveTab("messages")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "messages" ? "bg-white text-black" : "text-neutral-400 hover:text-white"}`}
                    >
                        <MessageSquare size={18} /> Mesajlar
                        {messages.filter(m => !m.isRead).length > 0 && (
                            <span className="ml-auto bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                {messages.filter(m => !m.isRead).length}
                            </span>
                        )}
                    </button>
                </nav>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 transition-all mt-auto"
                >
                    <LogOut size={18} /> Çıkış Yap
                </button>
            </div>

            {/* Main Content */}
            <div className="ml-64 p-12">
                <div className="max-w-4xl mx-auto">
                    <header className="mb-12">
                        <h1 className="text-4xl font-bold mb-2">
                            {activeTab === "blog" ? "Blog Yönetimi" : activeTab === "startups" ? "Startup Yönetimi" : activeTab === "references" ? "Referans Yönetimi" : "Gelen Mesajlar"}
                        </h1>
                        <p className="text-neutral-500">Bu bölümden içerikleri güncelleyebilir veya silebilirsiniz.</p>
                    </header>

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                        {activeTab === "blog" && (
                            <motion.div
                                key="blog"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-12"
                            >
                                <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            {editingBlogId ? <><Pencil size={20} /> Yazıyı Düzenle</> : <><Plus size={20} /> Yeni Yazı Ekle</>}
                                        </h3>
                                        {editingBlogId && (
                                            <button onClick={cancelEditBlog} className="text-sm text-neutral-400 hover:text-white transition-colors">İptal</button>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-400">Başlık</label>
                                            <input
                                                type="text"
                                                value={blogForm.title || ""}
                                                onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                                                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-400">Slug</label>
                                            <input
                                                type="text"
                                                value={blogForm.slug || ""}
                                                onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })}
                                                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-400">Kategori</label>
                                        <input
                                            type="text"
                                            value={blogForm.category || ""}
                                            onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                                            className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-400">Kısa Özet</label>
                                        <textarea
                                            rows={2}
                                            value={blogForm.excerpt || ""}
                                            onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                                            className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-400">İçerik</label>
                                        <textarea
                                            rows={6}
                                            value={blogForm.content || ""}
                                            onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                                            className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                        />
                                    </div>
                                    {/* Image Upload */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-400">Kapak Görseli</label>
                                        <div className="flex items-center gap-4">
                                            <label className="flex items-center gap-2 px-4 py-3 bg-neutral-800 border border-neutral-700 border-dashed rounded-xl cursor-pointer hover:border-neutral-500 transition-colors">
                                                <ImagePlus size={18} className="text-neutral-400" />
                                                <span className="text-sm text-neutral-400">
                                                    {blogForm.image ? "Değiştir" : "Resim Yükle"}
                                                </span>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) handleImageUpload(file, (url) => setBlogForm({ ...blogForm, image: url }));
                                                    }}
                                                />
                                            </label>
                                            {blogForm.image && (
                                                <div className="relative w-20 h-14 rounded-lg overflow-hidden border border-neutral-700">
                                                    <img src={blogForm.image} alt="Preview" className="w-full h-full object-cover" />
                                                    <button
                                                        type="button"
                                                        onClick={() => setBlogForm({ ...blogForm, image: undefined })}
                                                        className="absolute top-0.5 right-0.5 bg-red-500 rounded-full p-0.5"
                                                    >
                                                        <X size={12} />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        onClick={saveBlog}
                                        className="bg-white text-black font-bold px-8 py-3 rounded-xl hover:bg-neutral-200 transition-all flex items-center gap-2"
                                    >
                                        <Save size={18} /> {editingBlogId ? "Güncelle" : "Kaydet"}
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold">Mevcut Yazılar</h3>
                                    {blogs.map(blog => (
                                        <div key={blog.id} className={`border rounded-2xl p-6 flex items-center gap-4 group transition-all ${editingBlogId === blog.id ? "bg-white/5 border-white/20 ring-1 ring-white/10" : "bg-neutral-900/50 border-neutral-800"}`}>
                                            {blog.image && (
                                                <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-neutral-700">
                                                    <img src={blog.image} alt="" className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <div className="text-xs font-bold text-neutral-500 uppercase mb-1">{blog.category}</div>
                                                <h4 className="font-bold text-lg truncate">{blog.title}</h4>
                                            </div>
                                            <div className="flex items-center gap-1 flex-shrink-0">
                                                <button
                                                    onClick={() => editBlog(blog)}
                                                    className="p-3 text-neutral-500 hover:text-blue-400 hover:bg-blue-500/10 rounded-xl transition-all"
                                                >
                                                    <Pencil size={18} />
                                                </button>
                                                <button
                                                    onClick={() => deleteBlog(blog.id)}
                                                    className="p-3 text-neutral-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    {blogs.length === 0 && <p className="text-neutral-500 italic">Henüz yazı bulunmuyor.</p>}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "startups" && (
                            <motion.div
                                key="startups"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-12"
                            >
                                <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            {editingStartupId ? <><Pencil size={20} /> Startup Düzenle</> : <><Plus size={20} /> Yeni Startup Ekle</>}
                                        </h3>
                                        {editingStartupId && (
                                            <button onClick={cancelEditStartup} className="text-sm text-neutral-400 hover:text-white transition-colors">İptal</button>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-400">İsim</label>
                                            <input
                                                type="text"
                                                value={startupForm.name || ""}
                                                onChange={(e) => setStartupForm({ ...startupForm, name: e.target.value })}
                                                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-400">Kategori</label>
                                            <input
                                                type="text"
                                                value={startupForm.category || ""}
                                                onChange={(e) => setStartupForm({ ...startupForm, category: e.target.value })}
                                                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-400">Açıklama</label>
                                        <textarea
                                            rows={3}
                                            value={startupForm.description || ""}
                                            onChange={(e) => setStartupForm({ ...startupForm, description: e.target.value })}
                                            className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-400">Durum</label>
                                            <select
                                                value={startupForm.status || ""}
                                                onChange={(e) => setStartupForm({ ...startupForm, status: e.target.value })}
                                                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                            >
                                                <option value="Geliştirme Aşamasında">Geliştirme Aşamasında</option>
                                                <option value="Beta Yayında">Beta Yayında</option>
                                                <option value="Yayında">Yayında</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-400">Link</label>
                                            <input
                                                type="text"
                                                value={startupForm.link || ""}
                                                onChange={(e) => setStartupForm({ ...startupForm, link: e.target.value })}
                                                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-400">Görsel</label>
                                        <div className="flex items-center gap-4">
                                            <label className="flex items-center gap-2 px-4 py-3 bg-neutral-800 border border-neutral-700 border-dashed rounded-xl cursor-pointer hover:border-neutral-500 transition-colors">
                                                <ImagePlus size={18} className="text-neutral-400" />
                                                <span className="text-sm text-neutral-400">
                                                    {startupForm.image ? "Değiştir" : "Resim Yükle"}
                                                </span>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) handleImageUpload(file, (url) => setStartupForm({ ...startupForm, image: url }));
                                                    }}
                                                />
                                            </label>
                                            {startupForm.image && (
                                                <div className="relative w-20 h-14 rounded-lg overflow-hidden border border-neutral-700">
                                                    <img src={startupForm.image} alt="Preview" className="w-full h-full object-cover" />
                                                    <button
                                                        type="button"
                                                        onClick={() => setStartupForm({ ...startupForm, image: undefined })}
                                                        className="absolute top-0.5 right-0.5 bg-red-500 rounded-full p-0.5"
                                                    >
                                                        <X size={12} />
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        onClick={saveStartup}
                                        className="bg-white text-black font-bold px-8 py-3 rounded-xl hover:bg-neutral-200 transition-all flex items-center gap-2"
                                    >
                                        <Save size={18} /> {editingStartupId ? "Güncelle" : "Kaydet"}
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold">Mevcut Startuplar</h3>
                                    {startups.map(startup => (
                                        <div key={startup.id} className={`border rounded-2xl p-6 flex items-center gap-4 group transition-all ${editingStartupId === startup.id ? "bg-white/5 border-white/20 ring-1 ring-white/10" : "bg-neutral-900/50 border-neutral-800"}`}>
                                            {startup.image && (
                                                <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-neutral-700">
                                                    <img src={startup.image} alt="" className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <div className="text-xs font-bold text-neutral-500 uppercase mb-1">{startup.status}</div>
                                                <h4 className="font-bold text-lg truncate">{startup.name}</h4>
                                            </div>
                                            <div className="flex items-center gap-1 flex-shrink-0">
                                                <button
                                                    onClick={() => editStartup(startup)}
                                                    className="p-3 text-neutral-500 hover:text-blue-400 hover:bg-blue-500/10 rounded-xl transition-all"
                                                >
                                                    <Pencil size={18} />
                                                </button>
                                                <button
                                                    onClick={() => deleteStartup(startup.id)}
                                                    className="p-3 text-neutral-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    {startups.length === 0 && <p className="text-neutral-500 italic">Henüz startup bulunmuyor.</p>}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "references" && (
                            <motion.div
                                key="references"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-12"
                            >
                                <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold flex items-center gap-2">
                                            {editingReferenceId ? <><Pencil size={20} /> Referans Düzenle</> : <><Plus size={20} /> Yeni Referans Ekle</>}
                                        </h3>
                                        {editingReferenceId && (
                                            <button onClick={cancelEditReference} className="text-sm text-neutral-400 hover:text-white transition-colors">İptal</button>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-400">İsim</label>
                                            <input
                                                type="text"
                                                value={referenceForm.name || ""}
                                                onChange={(e) => setReferenceForm({ ...referenceForm, name: e.target.value })}
                                                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-400">Kategori</label>
                                            <select
                                                value={referenceForm.category || "website"}
                                                onChange={(e) => setReferenceForm({ ...referenceForm, category: e.target.value as any })}
                                                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                            >
                                                <option value="website">Website</option>
                                                <option value="social">Sosyal Medya</option>
                                                <option value="ads">Reklam Yönetimi</option>
                                                <option value="crm">CRM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-neutral-400">Açıklama</label>
                                        <textarea
                                            rows={2}
                                            value={referenceForm.description || ""}
                                            onChange={(e) => setReferenceForm({ ...referenceForm, description: e.target.value })}
                                            className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-400">Görsel</label>
                                            <div className="flex items-center gap-4">
                                                <label className="flex items-center gap-2 px-4 py-3 bg-neutral-800 border border-neutral-700 border-dashed rounded-xl cursor-pointer hover:border-neutral-500 transition-colors">
                                                    <ImagePlus size={18} className="text-neutral-400" />
                                                    <span className="text-sm text-neutral-400">
                                                        {referenceForm.image ? "Değiştir" : "Resim Yükle"}
                                                    </span>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={(e) => {
                                                            const file = e.target.files?.[0];
                                                            if (file) handleImageUpload(file, (url) => setReferenceForm({ ...referenceForm, image: url }));
                                                        }}
                                                    />
                                                </label>
                                                {referenceForm.image && (
                                                    <div className="relative w-20 h-14 rounded-lg overflow-hidden border border-neutral-700">
                                                        <img src={referenceForm.image} alt="Preview" className="w-full h-full object-cover" />
                                                        <button
                                                            type="button"
                                                            onClick={() => setReferenceForm({ ...referenceForm, image: undefined })}
                                                            className="absolute top-0.5 right-0.5 bg-red-500 rounded-full p-0.5"
                                                        >
                                                            <X size={12} />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-neutral-400">İncele Linki (URL)</label>
                                            <input
                                                type="text"
                                                value={referenceForm.link || ""}
                                                onChange={(e) => setReferenceForm({ ...referenceForm, link: e.target.value })}
                                                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 focus:outline-none"
                                                placeholder="https://..."
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={saveReference}
                                        className="bg-white text-black font-bold px-8 py-3 rounded-xl hover:bg-neutral-200 transition-all flex items-center gap-2"
                                    >
                                        <Save size={18} /> {editingReferenceId ? "Güncelle" : "Kaydet"}
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold">Mevcut Referanslar</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {references.map(ref => (
                                            <div key={ref.id} className={`border rounded-2xl p-6 flex items-center gap-4 group transition-all ${editingReferenceId === ref.id ? "bg-white/5 border-white/20 ring-1 ring-white/10" : "bg-neutral-900/50 border-neutral-800"}`}>
                                                {ref.image && (
                                                    <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-neutral-700">
                                                        <img src={ref.image} alt="" className="w-full h-full object-cover" />
                                                    </div>
                                                )}
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-xs font-bold text-neutral-500 uppercase mb-1">{ref.category}</div>
                                                    <h4 className="font-bold text-lg truncate">{ref.name}</h4>
                                                </div>
                                                <div className="flex items-center gap-1 flex-shrink-0">
                                                    <button
                                                        onClick={() => editReference(ref)}
                                                        className="p-3 text-neutral-500 hover:text-blue-400 hover:bg-blue-500/10 rounded-xl transition-all"
                                                    >
                                                        <Pencil size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => deleteReference(ref.id)}
                                                        className="p-3 text-neutral-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {references.length === 0 && <p className="text-neutral-500 italic">Henüz referans bulunmuyor.</p>}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "messages" && (
                            <motion.div
                                key="messages"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-6"
                            >
                                {/* Stats Bar */}
                                <div className="flex items-center gap-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                                    <div className="flex items-center gap-2">
                                        <MessageSquare size={18} className="text-neutral-400" />
                                        <span className="text-neutral-400 text-sm">Toplam:</span>
                                        <span className="text-white font-bold">{messages.length}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail size={18} className="text-rose-400" />
                                        <span className="text-neutral-400 text-sm">Okunmamış:</span>
                                        <span className="text-rose-400 font-bold">{messages.filter(m => !m.isRead).length}</span>
                                    </div>
                                </div>

                                {/* Message Cards */}
                                <div className="space-y-4">
                                    {messages.map(msg => (
                                        <div
                                            key={msg.id}
                                            className={`border rounded-2xl p-6 transition-all ${msg.isRead
                                                ? "bg-neutral-900/30 border-neutral-800"
                                                : "bg-neutral-900 border-neutral-700 ring-1 ring-rose-500/20"
                                                }`}
                                        >
                                            <div className="flex items-start justify-between gap-4 mb-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <h4 className="font-bold text-lg text-white">{msg.name}</h4>
                                                        {!msg.isRead && (
                                                            <span className="px-2 py-0.5 bg-rose-500/20 text-rose-400 text-[10px] font-bold rounded-full uppercase tracking-wider">
                                                                Yeni
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                                                        <span className="flex items-center gap-1">
                                                            <Mail size={14} /> {msg.email}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock size={14} /> {new Date(msg.sentAt).toLocaleString("tr-TR")}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => {
                                                            const updated = messages.map(m =>
                                                                m.id === msg.id ? { ...m, isRead: !m.isRead } : m
                                                            );
                                                            setMessages(updated);
                                                            storage.setMessages(updated);
                                                        }}
                                                        className={`p-2 rounded-lg transition-all ${msg.isRead
                                                            ? "text-neutral-500 hover:text-white hover:bg-neutral-800"
                                                            : "text-rose-400 hover:text-white hover:bg-rose-500/20"
                                                            }`}
                                                        title={msg.isRead ? "Okunmadı olarak işaretle" : "Okundu olarak işaretle"}
                                                    >
                                                        {msg.isRead ? <EyeOff size={18} /> : <Eye size={18} />}
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            const updated = messages.filter(m => m.id !== msg.id);
                                                            setMessages(updated);
                                                            storage.setMessages(updated);
                                                        }}
                                                        className="p-2 text-neutral-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <span className="inline-block px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-medium rounded-lg">
                                                    {msg.subject}
                                                </span>
                                            </div>

                                            <p className="text-neutral-300 leading-relaxed whitespace-pre-wrap">
                                                {msg.message}
                                            </p>
                                        </div>
                                    ))}
                                    {messages.length === 0 && (
                                        <p className="text-neutral-500 italic py-8 text-center">Henüz mesaj bulunmuyor.</p>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
