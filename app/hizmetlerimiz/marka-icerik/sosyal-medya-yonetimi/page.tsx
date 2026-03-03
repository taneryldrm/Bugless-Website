"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import {
    Share2,
    Users,
    MessageSquare,
    BarChart3,
    Trophy,
    Calendar,
    Target,
    Zap,
    TrendingUp,
    Instagram,
    Facebook,
    Linkedin,
    Youtube,
    Search,
    PieChart,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        title: "Sosyal Medya Stratejisi Geliştirme",
        description: "Markanızın hedeflerini, hedef kitlesini ve sektör dinamiklerini analiz ederek Instagram, LinkedIn, TikTok, X ve diğer platformlar için size özel stratejik yol haritaları oluşturuyoruz.",
        icon: Target
    },
    {
        title: "İçerik Yönetimi & Üretimi",
        description: "Görsel, video ve metin içeriklerini bütüncül bir yaklaşım ile ele alıyor; markanızın sesini yansıtan yaratıcı ve profesyonel içerikler üretiyoruz.",
        icon: Share2
    },
    {
        title: "Etkileşim & Topluluk Yönetimi",
        description: "Takipçilerinizle canlı ve sürdürülebilir bir bağ kuruyor; gelen mesaj ve yorumları markanızın kurumsal kimliğine uygun şekilde profesyonelce yönetiyoruz.",
        icon: MessageSquare
    },
    {
        title: "Sosyal Medya Reklam Yönetimi",
        description: "Hedef kitlenize ulaşmanızı sağlayan reklam kampanyalarını veri odaklı şekilde kurguluyor; bütçenizi en yüksek dönüşümü alacak biçimde optimize ediyoruz.",
        icon: TrendingUp
    },
    {
        title: "Analiz & Raporlama",
        description: "Sosyal medya performansınızı anlık olarak takip ediyor; erişim, etkileşim ve büyüme metriklerini şeffaf ve anlaşılır raporlarla düzenli olarak sunuyoruz.",
        icon: BarChart3
    }
];

const approaches = [
    {
        title: "İtibar Yönetimi",
        description: "Sosyal medya hesaplarınızı sürekli izliyor; hızlı ve doğru geri dönüşlerle markanızın dijital itibarını güçlendiriyoruz.",
        icon: Trophy
    },
    {
        title: "Planlı & Programlı Çalışma",
        description: "Paylaşımlarınızı rastgele değil; stratejik takvimler doğrultusunda, doğru zamanda ve doğru içerikle yayınlıyoruz.",
        icon: Calendar
    },
    {
        title: "Marka Tutarlılığı",
        description: "Tüm platformlarda görsel dil, tonlama ve mesaj bütünlüğünü koruyarak güçlü bir marka algısı oluşturuyoruz.",
        icon: Zap
    }
];

const tools = [
    { name: "Instagram", icon: Instagram },
    { name: "Facebook", icon: Facebook },
    { name: "LinkedIn", icon: Linkedin },
    { name: "YouTube", icon: Youtube },
    { name: "TikTok", icon: Share2 },
    { name: "X", icon: MessageSquare },
    { name: "Meta Business Suite", icon: PieChart },
    { name: "Google Analytics", icon: Search }
];

const processSteps = [
    {
        number: "01",
        title: "Keşif & Analiz",
        description: "Markanızı, hedef kitlenizi ve rakiplerinizi detaylı biçimde analiz ediyoruz."
    },
    {
        number: "02",
        title: "Strateji Geliştirme",
        description: "Hedeflerinize en hızlı ve sürdürülebilir şekilde ulaşmanızı sağlayacak içerik ve yayın planını oluşturuyoruz."
    },
    {
        number: "03",
        title: "Kreatif Uygulama",
        description: "Tasarım, video ve metin üretim süreçlerini profesyonel ekibimizle hayata geçiriyoruz."
    },
    {
        number: "04",
        title: "Yayın & Optimizasyon",
        description: "İçerikleri en doğru zamanda yayına alıyor; performans verilerine göre anlık iyileştirmeler yapıyoruz."
    },
    {
        number: "05",
        title: "Raporlama & Gelişim",
        description: "Her ay şeffaf verilerle gelişimi analiz ediyor; bir sonraki ayın stratejisini birlikte güncelliyoruz."
    }
];

export default function SocialMediaManagementPage() {
    return (
        <main className="bg-white">
            {/* HERO / ÜST ALAN */}
            <PageHeader
                title="Sosyal Medya Yönetimi ile Markanızı Güçlü Bir Dijital Varlığa Dönüştürün."
                description="Sosyal medyada sadece paylaşım yapmıyoruz; markanız için stratejik, tutarlı ve sürdürülebilir bir dijital kimlik inşa ediyoruz. Bugless Digital olarak, markanızı hedef kitlenizle güçlü bağlar kuran bir sosyal medya varlığına dönüştürüyoruz."
                ctaText="Ücretsiz Sosyal Medya Analizi ve Randevu Planla"
                ctaHref="/iletisim"
                ctaDescription="Sektörünüzü, rakiplerinizi ve mevcut sosyal medya performansınızı analiz ediyor; markanıza özel büyüme yol haritasını 24 saat içinde sunuyoruz."
                breadcrumb={
                    <Link
                        href="/hizmetlerimiz/marka-icerik"
                        className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
                    >
                        Marka & İçerik Üretimi
                        <ArrowRight size={12} />
                        <span className="text-white">Sosyal Medya Yönetimi</span>
                    </Link>
                }
            />

            {/* SOSYAL MEDYA YÖNETİMİ HİZMETLERİMİZ */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            Sosyal Medya Yönetimi Hizmetlerimiz
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-neutral-900">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HİZMETİMİZDE KULLANDIĞIMIZ ARAÇLAR */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold text-black mb-4">Hizmetimizde Kullandığımız Araçlar</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Sosyal medya süreçlerinizi güçlendirmek için sektörün en güncel araçlarını kullanıyoruz.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-black transition-colors group"
                            >
                                <tool.icon size={32} className="text-gray-400 group-hover:text-black transition-colors" />
                                <span className="text-sm font-bold text-gray-600 group-hover:text-black transition-colors text-center">{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOSYAL MEDYA YÖNETİMİNDE TEMEL YAKLAŞIMIMIZ */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black leading-tight">
                                Temel <br /> <span className="text-gray-400">Yaklaşımımız</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-lg">
                                Görsel estetiği, stratejik planlama ve disiplinli yönetim anlayışıyla birleştiriyoruz.
                            </p>

                            <div className="space-y-10">
                                {approaches.map((approach, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-6"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-black border border-gray-100 shadow-sm">
                                            <approach.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-neutral-900">{approach.title}</h4>
                                            <p className="text-gray-600 font-medium">{approach.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full max-w-[320px] md:max-w-md mx-auto lg:max-w-none lg:w-1/2 relative">
                            <div className="aspect-square bg-white rounded-3xl border border-gray-100 shadow-2xl flex items-center justify-center p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gray-50 opacity-50"></div>
                                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg z-10">
                                    <Image
                                        src="/images/hizmetler/sosyal-medya-yonetimi.png"
                                        alt="Sosyal Medya Yönetimi ve Stratejik Planlama"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* “SÜREÇ HER ŞEYDİR”: HEDEFLERİNİZE NASIL ULAŞIYORUZ? */}
            <section className="py-24 bg-black text-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tight uppercase">
                            Süreç Her Şeydir
                        </h2>
                        <p className="text-gray-400 uppercase tracking-widest text-sm text-center">Hedeflerinize Nasıl Ulaşıyoruz?</p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="space-y-4">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group flex flex-col md:flex-row gap-6 md:gap-12 p-8 rounded-3xl border border-white/5 hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="text-5xl md:text-6xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors">
                                        {step.number}
                                    </div>
                                    <div className="flex-grow pt-2">
                                        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                        <p className="text-gray-400 text-lg leading-relaxed italic">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ÜCRETSİZ ANALİZ VE RANDEVU (ÖZEL CTA) */}
            <section className="relative py-24 overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 italic tracking-tighter">
                            Sosyal Medyada Markanız Ne Kadar Güçlü?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 italic">
                            “Mevcut sosyal medya hesaplarınızı, içerik performansınızı ve rakip konumunuzu tamamen ücretsiz analiz ediyoruz. Markanızı bir üst seviyeye taşıyacak net aksiyon planını sunuyor ve size özel bir strateji görüşmesi planlıyoruz.”
                        </p>

                        <Link
                            href="/iletisim"
                            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10">Şimdi Ücretsiz Sosyal Medya Analizi Al ve Randevu Oluştur</span>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                                <ArrowRight size={24} />
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
