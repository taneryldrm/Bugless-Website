"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { storage, ContactMessage } from "@/lib/storage";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "Proje Teklifi Almak İstiyorum",
        message: "",
    });
    const [isSent, setIsSent] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Lütfen tüm zorunlu alanları doldurun.");
            return;
        }

        setIsSending(true);

        // Save message to localStorage
        const newMessage: ContactMessage = {
            id: Date.now().toString(),
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            sentAt: new Date().toISOString(),
            isRead: false,
        };

        const existing = storage.getMessages();
        storage.setMessages([newMessage, ...existing]);

        // Simulate a short delay for UX
        setTimeout(() => {
            setIsSending(false);
            setIsSent(true);
            setFormData({ name: "", email: "", subject: "Proje Teklifi Almak İstiyorum", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSent(false), 5000);
        }, 600);
    };

    return (
        <>
            <PageHeader
                title="İletişim"
                description="Bir fikriniz mi var? Gelin dijital dünyanın sınırsız potansiyelini ve markanızın geleceğini en iyi stratejiyle birlikte konuşalım."
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-8">Bize Ulaşın</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-black text-white p-3 rounded-lg">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Ofisimiz</h3>
                                        <p className="text-gray-600">
                                            Bugless Digital Ofisi<br />
                                            Fatih Caddesi<br />
                                            Bornova/İzmir
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-black text-white p-3 rounded-lg">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">E-Posta</h3>
                                        <p className="text-gray-600">info@buglessdigital.com.tr</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-black text-white p-3 rounded-lg">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Telefon</h3>
                                        <p className="text-gray-600">0501 609 3535</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h2 className="text-2xl font-display font-bold mb-6">Mesaj Gönderin</h2>

                            <AnimatePresence mode="wait">
                                {isSent ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle size={32} className="text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-display font-bold mb-3 text-neutral-900">
                                            Mesajınız Gönderildi!
                                        </h3>
                                        <p className="text-gray-500 max-w-sm">
                                            En kısa sürede size geri dönüş yapacağız. Teşekkür ederiz.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-6"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Adınız Soyadınız *</label>
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                                    placeholder="Ad Soyad"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">E-Posta Adresiniz *</label>
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                                    placeholder="ornek@email.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                                            <select
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white"
                                            >
                                                <option>Proje Teklifi Almak İstiyorum</option>
                                                <option>Genel Bilgi</option>
                                                <option>Kariyer / İş Başvurusu</option>
                                                <option>Diğer</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız *</label>
                                            <textarea
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                                                placeholder="Projenizden bahsedin..."
                                                required
                                            ></textarea>
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSending}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-black text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSending ? (
                                                <>
                                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                    Gönderiliyor...
                                                </>
                                            ) : (
                                                <>
                                                    Gönder <Send size={18} />
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
