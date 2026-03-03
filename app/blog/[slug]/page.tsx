"use client";

import { useState, useEffect } from "react";
import { storage, BlogItem } from "@/lib/storage";
import { useParams, notFound } from "next/navigation";
import { Clock, Calendar, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPostPage() {
    const { slug } = useParams();
    const [post, setPost] = useState<BlogItem | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const posts = storage.getBlog();
        const found = posts.find(p => p.slug === slug);
        setPost(found || null);
        setLoading(false);
    }, [slug]);

    if (loading) return (
        <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-white">
            <div className="w-10 h-10 rounded-full border-4 border-gray-100 border-t-black animate-spin" />
        </div>
    );

    if (!post) {
        notFound();
    }

    const sharePost = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                });
            } catch (err) {
                console.log("Paylaşım iptal edildi:", err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Bağlantı kopyalandı!");
        }
    };

    return (
        <main className="bg-white min-h-screen selection:bg-black selection:text-white">
            <title>{post.title} - Bugless Digital</title>
            {post.metaDescription && <meta name="description" content={post.metaDescription} />}
            <article>
                {/* Hero / Header Section */}
                <header className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden bg-neutral-50/50">
                    <div className="container mx-auto px-6 max-w-4xl relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link
                                href="/blog"
                                className="group inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-black transition-colors mb-12 lg:mb-16"
                            >
                                <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" /> Tümü
                            </Link>

                            <div className="flex flex-wrap items-center gap-4 mb-6 md:mb-8">
                                <span className="px-4 py-1.5 bg-black text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg shadow-black/10">
                                    {post.category || "Genel"}
                                </span>
                                {post.readTime && (
                                    <span className="flex items-center gap-1.5 text-sm font-medium text-gray-500 bg-white px-4 py-1.5 rounded-full border border-gray-200">
                                        <Clock size={15} className="text-black" /> {post.readTime}
                                    </span>
                                )}
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl/tight font-display font-bold text-neutral-900 mb-10 tracking-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-t border-gray-200/60">
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold text-lg shadow-xl shadow-black/20">
                                        <img src="/logo.png" alt="BD" className="w-8 h-8 object-contain filter invert" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-bold text-black text-sm tracking-wide">Bugless Digital</div>
                                        {post.publishedAt && (
                                            <div className="text-sm text-gray-500 flex items-center gap-1.5 mt-0.5">
                                                <Calendar size={13} />
                                                {new Date(post.publishedAt).toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <button
                                    onClick={sharePost}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all text-sm font-bold tracking-widest uppercase text-gray-600 group"
                                >
                                    <Share2 size={16} className="transition-transform group-hover:scale-110" /> Paylaş
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </header>

                <section className="py-12 md:py-20 lg:py-24">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Cover Image */}
                            {post.image && (
                                <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden mb-16 md:mb-24 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] bg-gray-100 relative group">
                                    <div className="absolute inset-0 bg-black/5 mix-blend-overlay z-10"></div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>
                            )}

                            {/* Main Content Body */}
                            <div className="text-lg md:text-[21px] text-gray-700 font-light leading-[1.8] md:leading-[1.9] tracking-normal whitespace-pre-wrap">
                                {post.content}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Bottom Call to Action */}
                <section className="py-24 bg-neutral-900 text-white mt-12 rounded-t-[3rem]">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Dijital dönüşümünüzü<br /><span className="text-gray-400">bugün başlatın.</span></h2>
                            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl font-light leading-relaxed">
                                Sadece fikirleri okumakla kalmayın, onları gerçeğe dönüştürün. Bugless Digital uzmanlığıyla, okuduğunuz bu stratejileri kendi markanıza entegre edin ve rakiplerinizin bir adım önüne geçin.
                            </p>
                            <Link
                                href="/iletisim"
                                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                            >
                                Projeni Başlat
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </article>
        </main>
    );
}
