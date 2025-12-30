"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Laptop, ShoppingCart, BarChart, Users, Megaphone, MonitorSmartphone, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const servicesDetails = [
    {
        id: "web",
        title: "Kurumsal Web Tasarım",
        icon: Laptop,
        description: "Markanızın dijital dünyadaki yüzü olan web sitenizi, en son teknolojilerle ve kullanıcı deneyimini (UX) merkeze alarak tasarlıyoruz. Hızlı, güvenli ve SEO uyumlu web siteleri geliştiriyoruz.",
        features: ["Özel Tasarım Arayüz", "Responsive (Mobil Uyumlu)", "Yönetim Paneli", "SEO Altyapısı", "Hızlı Açılış Süresi"]
    },
    {
        id: "eticaret",
        title: "E-Ticaret Çözümleri",
        icon: ShoppingCart,
        description: "Ürünlerinizi dijital dünyada satmak için ihtiyacınız olan her şey. Güçlü altyapı, kolay yönetim paneli ve ödeme sistemleri entegrasyonu ile satışlarınızı artırın.",
        features: ["Gelişmiş E-Ticaret Altyapısı", "Pazaryeri Entegrasyonları", "Kargo Entegrasyonları", "Ödeme Sistemleri", "Stok Yönetimi"]
    },
    {
        id: "crm",
        title: "CRM & Özel Yazılım",
        icon: Users,
        description: "İş süreçlerinizi optimize etmek için size özel yazılımlar geliştiriyoruz. Müşteri ilişkileri yönetimi (CRM), ERP ve B2B paneller ile verimliliğinizi artırın.",
        features: ["Müşteri Takibi", "Satış Süreç Yönetimi", "Görevi ve Proje Takibi", "Raporlama Modülleri", "Mobil Uygulama"]
    },
    {
        id: "reklam",
        title: "Dijital Reklam Yönetimi",
        icon: Megaphone,
        description: "Google Ads, Meta (Facebook/Instagram) ve LinkedIn reklamlarıyla hedef kitlenize doğrudan ulaşın. Veri odaklı stratejilerle reklam bütçenizi en verimli şekilde kullanın.",
        features: ["Google Ads (Search, Display)", "Sosyal Medya Reklamları", "Remarketing Stratejileri", "Dönüşüm Optimizasyonu", "Aylık Raporlama"]
    },
    {
        id: "sosyalmedya",
        title: "Sosyal Medya Yönetimi",
        icon: BarChart,
        description: "Markanızın sosyal medyadaki sesini profesyonelce yönetiyoruz. İçerik üretimi, topluluk yönetimi ve moderasyon ile etkileşiminizi artırın.",
        features: ["İçerik Stratejisi & Planlama", "Reels & Video Prodüksiyon", "Moderasyon & İletişim", "Rakip Analizi", "Etkileşim Artırma"]
    },
    {
        id: "portfolyo",
        title: "Portfolyo & Blog Siteleri",
        icon: MonitorSmartphone,
        description: "Kişisel markanızı veya içeriklerinizi öne çıkaran, okuma deneyimi yüksek blog ve portfolyo siteleri tasarlıyoruz.",
        features: ["Minimalist Tasarım", "Hızlı İçerik Yönetimi", "Newsletter Entegrasyonu", "Görsel Odaklı Galeri", "Yazar Profilleri"]
    }
];

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="Hizmetlerimiz"
                description="Markanızın dijital dönüşümü için uçtan uca, profesyonel çözümler."
            />

            <section className="bg-white text-black py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 gap-16">
                        {servicesDetails.map((service, index) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center py-12 border-b border-gray-100 last:border-0`}
                            >
                                <div className="lg:w-1/2 flex justify-center">
                                    <div className="w-full max-w-md aspect-square bg-gray-50 rounded-3xl flex items-center justify-center p-12">
                                        <service.icon size={120} className="text-gray-200 stroke-1" />
                                    </div>
                                </div>

                                <div className="lg:w-1/2">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-black text-white rounded-lg">
                                            <service.icon size={24} />
                                        </div>
                                        <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Hizmet Detayı</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{service.title}</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle size={20} className="text-black fill-gray-100" />
                                                <span className="text-gray-700 font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
