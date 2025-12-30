"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title="İletişim"
                description="Projeleriniz için bizimle iletişime geçin. Kahvemizi içmeye bekleriz."
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
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Adınız Soyadınız</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all" placeholder="Ad Soyad" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">E-Posta Adresiniz</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all" placeholder="ornek@email.com" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-white">
                                        <option>Proje Teklifi Almak İstiyorum</option>
                                        <option>Genel Bilgi</option>
                                        <option>Kariyer / İş Başvurusu</option>
                                        <option>Diğer</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all" placeholder="Projenizden bahsedin..."></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-black text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
                                >
                                    Gönder <Send size={18} />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
