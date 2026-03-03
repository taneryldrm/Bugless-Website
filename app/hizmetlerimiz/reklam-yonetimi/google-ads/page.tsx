"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import {
    CheckCircle,
    ArrowRight,
    Target,
    Search,
    FileText,
    BarChart3,
    Zap,
    TrendingUp,
    PieChart,
    MousePointer2,
    Users,
    ShieldCheck
} from "lucide-react";
import Link from "next/link";

const solutions = [
    {
        title: "Stratejik Kampanya Planlama",
        description: "İş hedeflerinize uygun, bütçenizi en verimli şekilde kullanacak kampanya mimarisini oluşturuyoruz.",
        icon: Target
    },
    {
        title: "Anahtar Kelime ve Rakip Analizi",
        description: "Dönüşüm potansiyeli yüksek anahtar kelimeleri ve rakip stratejilerini detaylı şekilde analiz ediyoruz.",
        icon: Search
    },
    {
        title: "Performans Odaklı Reklam Metinleri",
        description: "CTR ve dönüşüm oranlarını artıran, ikna edici ve test edilmiş reklam metinleri yazıyoruz.",
        icon: FileText
    },
    {
        title: "Gelişmiş Takip ve Raporlama",
        description: "Tüm dönüşümleri anlık olarak izliyor, şeffaf raporlarla performansı net şekilde sunuyoruz.",
        icon: BarChart3
    }
];

const strategies = [
    {
        title: "Yeniden Pazarlama (Remarketing)",
        description: "Sitenizi ziyaret eden ancak dönüşüm sağlamayan kullanıcıları özel reklamlarla tekrar yakalıyoruz.",
        icon: Users
    },
    {
        title: "Dönüşüm Odaklı Landing Page Stratejileri",
        description: "Reklam tıklamalarını satışa dönüştüren yüksek performanslı sayfa yapıları kurguluyoruz.",
        icon: MousePointer2
    },
    {
        title: "Bütçe ve ROI Optimizasyonu",
        description: "Her kuruşun karşılığını almanız için bütçe dağılımını ve yatırım getirisini (ROI) optimize ediyoruz.",
        icon: TrendingUp
    },
    {
        title: "Lead (Potansiyel Müşteri) Toplama Kurguları",
        description: "Nitelikli müşteri verisi toplamanızı sağlayan gelişmiş form ve hedefleme stratejileri uyguluyoruz.",
        icon: PieChart
    }
];

const reasons = [
    {
        title: "Veriye Dayalı Yönetim",
        description: "Tahminlerle değil, gerçek kullanıcı verileri ve analitik çıktılarla hareket ediyoruz.",
        icon: BarChart3
    },
    {
        title: "ROI Odaklı Kampanya Kurgusu",
        description: "Sadece trafik değil, doğrudan ciro ve kârlılık artışını hedefleyen stratejiler geliştiriyoruz.",
        icon: Zap
    },
    {
        title: "Sürekli Optimizasyon",
        description: "Kampanyaları yayına alıp bırakmıyor, 7/24 performans takibiyle sürekli iyileştiriyoruz.",
        icon: TrendingUp
    },
    {
        title: "Açık ve Anlaşılır Raporlama",
        description: "Karmaşık terimlerden arındırılmış, sonuçları net şekilde gösteren şeffaf raporlar sunuyoruz.",
        icon: FileText
    },
    {
        title: "Özelleştirilmiş Danışmanlık",
        description: "Her sektöre aynı reçeteyi değil, işinize özel butik danışmanlık hizmeti sağlıyoruz.",
        icon: ShieldCheck
    },
    {
        title: "Gelişmiş Dönüşüm Takibi",
        description: "Satıştan form dolumuna kadar tüm değerli eylemleri teknik olarak kusursuz takip ediyoruz.",
        icon: Target
    }
];

const processSteps = [
    {
        number: "01",
        title: "Analiz",
        description: "Sektörünüzü, rakiplerinizi ve mevcut reklam performansınızı detaylı şekilde inceliyoruz."
    },
    {
        number: "02",
        title: "Kurgu",
        description: "Dönüşüm odaklı kampanya mimarisini ve kreatif stratejiyi oluşturuyoruz."
    },
    {
        number: "03",
        title: "Yayın",
        description: "Reklamları doğru platformda, doğru hedef kitleyle yayına alıyoruz."
    },
    {
        number: "04",
        title: "Takip",
        description: "7/24 performansı izliyor, verimliliği artırmak için anlık optimizasyonlar yapıyoruz."
    },
    {
        number: "05",
        title: "Raporlama",
        description: "Şeffaf verilerle sonuçları analiz ediyor, bir sonraki büyüme adımını birlikte planlıyoruz."
    }
];

export default function GoogleAdsPage() {
    return (
        <main className="bg-white">
            {/* HERO / ÜST ALAN */}
            <PageHeader
                title="Google Ads Yönetimi"
                description="Sadece tıklama değil, ölçülebilir büyüme sağlayan Google Ads stratejileri kurguluyoruz. Reklam bütçenizi veriye dayalı kararlarla maksimum dönüşüme çeviriyoruz."
                ctaText="Ücretsiz Reklam Analizi ve Randevu Planla"
                ctaHref="/iletisim"
                breadcrumb={
                    <Link
                        href="/hizmetlerimiz/reklam-yonetimi"
                        className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
                    >
                        Reklam Yönetimi
                        <ArrowRight size={12} />
                        <span className="text-white">Google Ads Yönetimi</span>
                    </Link>
                }
            />

            {/* GOOGLE ADS HİZMETLERİMİZ */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            Google Ads Hizmetlerimiz
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <solution.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-neutral-900">{solution.title}</h3>
                                <p className="text-gray-600 leading-relaxed italic">
                                    {solution.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KAZANMANIZ İÇİN TASARLADIĞIMIZ STRATEJİLER */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black leading-tight">
                                KAZANMANIZ İÇİN <br /> <span className="text-gray-400">TASARLADIĞIMIZ STRATEJİLER</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-lg">
                                Reklam bütçenizi bir maliyet değil, bir yatırım aracına dönüştürüyoruz:
                            </p>

                            <div className="space-y-10">
                                {strategies.map((strategy, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-6"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-black border border-gray-100">
                                            <strategy.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-neutral-900">{strategy.title}</h4>
                                            <p className="text-gray-600 font-medium">{strategy.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-square bg-gray-50 rounded-full flex items-center justify-center p-20 relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-[1px] border-dashed border-gray-200 rounded-full"
                                />
                                <Target size={200} className="text-gray-200 relative z-10 stroke-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEDEN BUGLESS DIGITAL? */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            Neden Bugless Digital?
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center p-6"
                            >
                                <div className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center mb-6">
                                    <reason.icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-neutral-900">{reason.title}</h4>
                                <p className="text-gray-600 font-medium">
                                    {reason.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SÜREÇ HER ŞEYDİR – ADIM ADIM BÜYÜME YOLCULUĞUMUZ */}
            <section className="py-24 bg-black text-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tight uppercase">
                            Süreç Her Şeydir
                        </h2>
                        <p className="text-gray-400 uppercase tracking-widest text-sm text-center">Adım Adım Büyüme Yolculuğumuz</p>
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

            {/* ALT CTA (KAPANIŞ) */}
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
                            Reklam Bütçenizi Boşa Harcamayı Bugün Durdurun
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 italic">
                            “Mevcut Google Ads hesaplarınızı ücretsiz analiz ediyor, verimsiz harcamaları ve büyüme fırsatlarını net bir raporla sunuyoruz.”
                        </p>

                        <Link
                            href="/iletisim"
                            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10">Ücretsiz Reklam Analizi Al</span>
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
