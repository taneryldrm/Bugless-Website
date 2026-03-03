"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import {
    CheckCircle,
    ArrowRight,
    Target,
    Zap,
    MessageSquare,
    BarChart3,
    Search,
    Users,
    ChevronDown,
    Smartphone,
    Layout,
    Globe,
    ShieldCheck,
    MousePointer2,
    TrendingUp
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const advantages = [
    {
        title: "Veriye Dayalı Yaklaşım",
        description: "Reklam kampanyalarınızın her adımını anlık verilerle analiz eder, tahminlerle değil kanıtlanmış performans verileriyle bütçenizi yönetiriz.",
        icon: BarChart3
    },
    {
        title: "Özgün ve Dinamik İçerik Üretimi",
        description: "Reels, statik görseller ve motion içeriklerle hedef kitlenizin dikkatini çeken, aksiyona yönlendiren kreatifler üretiriz.",
        icon: Layout
    },
    {
        title: "ROI Odaklı Reklam Yönetimi",
        description: "Her kampanyanın temelinde kazanç vardır. Reklam maliyetlerini minimize ederken dönüşüm oranlarını artırırız.",
        icon: TrendingUp
    },
    {
        title: "Pazar ve Rakip Analizi",
        description: "Rakiplerinizi ve sektörel fırsatları sürekli analiz eder, markanızın öne çıkmasını sağlayacak boşlukları tespit ederiz.",
        icon: Search
    }
];

const solutions = [
    {
        title: "Meta Ads (Instagram & Facebook)",
        description: "Instagram ve Facebook’ta yüksek dönüşümlü ürün ve hizmet reklamlarıyla hedef kitlenize doğru zamanda ulaşın.",
        icon: Globe
    },
    {
        title: "Google Ads (YouTube & Display)",
        description: "Arama ve video reklamlarıyla talebi satışa dönüştüren stratejik kampanyalar oluştururuz.",
        icon: Search
    },
    {
        title: "Remarketing (Yeniden Pazarlama)",
        description: "Sitenizi ziyaret edip ayrılan kullanıcıları özel mesajlarla yeniden yakalar, satış sürecini tamamlarız.",
        icon: Target
    }
];

const aiFeatures = [
    {
        title: "7/24 AI Call Agent",
        description: "Reklamdan gelen telefonları anında karşılar, tek bir fırsat bile kaçmaz.",
        icon: Smartphone
    },
    {
        title: "Akıllı WhatsApp Botu",
        description: "Müşteri sorularını anında yanıtlar, otomatik randevu ve satış akışları oluşturur.",
        icon: MessageSquare
    },
    {
        title: "Otomatik CRM Kaydı",
        description: "Reklamdan gelen tüm lead’ler anında CRM sisteminize işlenir.",
        icon: ShieldCheck
    }
];

const processSteps = [
    {
        number: "01",
        title: "Analiz & Audit",
        description: "Mevcut reklam hesapları ve rakipler detaylı şekilde incelenir."
    },
    {
        number: "02",
        title: "Kreatif Üretim",
        description: "Thumb-stopping görsel ve video içerikler hazırlanır."
    },
    {
        number: "03",
        title: "Kampanya Mimarisi",
        description: "AIDA modeline uygun funnel ve satış yapıları kurulur."
    },
    {
        number: "04",
        title: "A/B Testleri",
        description: "En yüksek performanslı kombinasyonlar belirlenir."
    },
    {
        number: "05",
        title: "Optimizasyon",
        description: "Reklam performansı günlük olarak iyileştirilir."
    },
    {
        number: "06",
        title: "Şeffaf Raporlama",
        description: "Tüm veriler canlı dashboard üzerinden sunulur."
    }
];

const faqs = [
    {
        question: "Reklam performansını nasıl takip ederim?",
        answer: "Size özel hazırlanan canlı dashboard üzerinden tüm metrikleri 7/24 takip edebilirsiniz."
    },
    {
        question: "Reklam kreatifleri ne sıklıkla güncellenir?",
        answer: "Performans düşüşü başladığı anda yeni kreatifler yayına alınır."
    },
    {
        question: "Reklamdan gelen lead’lere anında dönüş yapılmazsa ne olur?",
        answer: "Zion AI devreye girer ve satış süreci siz uyurken bile devam eder."
    }
];

export default function SocialMediaAdsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="bg-white">
            {/* HERO / ÜST ALAN */}
            <PageHeader
                title="Sosyal Medya Reklamları"
                description="Reklam harcamalarınızı tahminlere değil, verilere dayandırın. Bugless Digital olarak sosyal medya reklamlarını sadece görünürlük için değil, satış ve sürdürülebilir büyüme için yönetiyoruz."
                ctaText="Ücretsiz Strateji Toplantısı Planla"
                ctaHref="/iletisim"
                breadcrumb={
                    <Link
                        href="/hizmetlerimiz/reklam-yonetimi"
                        className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
                    >
                        Reklam Yönetimi
                        <ArrowRight size={12} />
                        <span className="text-white">Sosyal Medya Reklamları</span>
                    </Link>
                }
            />

            {/* BÖLÜM 1 – NEDEN SOSYAL MEDYA REKLAMLARI? */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black leading-tight">
                                Sosyal Medya Reklamlarını <br /> <span className="text-gray-400">Şansa Bırakmayın</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-lg">
                                Başarıyı tesadüfe bırakmıyoruz; süreci verilerle yönetiyoruz. Her reklam kararını gerçek zamanlı performans metriklerine göre alıyor, bütçenizi en verimli şekilde yönlendiriyoruz.
                            </p>

                            <div className="space-y-10">
                                {advantages.map((adv, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-6"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-black border border-gray-100">
                                            <adv.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-neutral-900">{adv.title}</h4>
                                            <p className="text-gray-600 font-medium">{adv.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full max-w-[320px] md:max-w-md mx-auto lg:max-w-none lg:w-1/2 relative">
                            <div className="aspect-square bg-gray-50 rounded-full flex items-center justify-center p-8 relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-[1px] border-dashed border-gray-200 rounded-full z-20 pointer-events-none"
                                />
                                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl z-10">
                                    <Image
                                        src="/images/hizmetler/sosyal-medya-strateji.png"
                                        alt="Sosyal Medya Reklamlarını Şansa Bırakmayın"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BÖLÜM 2 – REKLAM HİZMET KAPSAMI */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            Reklam Hizmet Kapsamımız
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            {/* BÖLÜM 3 – ZION AI ENTEGRASYONU */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2 text-right">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black leading-tight">
                                Zion AI <span className="text-gray-400">Entegrasyonu</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-6 max-w-lg ml-auto">
                                Bu alan, rakiplerde olmayan teknolojik gücümüz.
                            </p>
                            <p className="text-2xl font-bold text-black italic mb-12">
                                “Süreç sadece reklamla bitmez, satışla başlar.”
                            </p>

                            <div className="space-y-10">
                                {aiFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-row-reverse gap-6"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-black border border-gray-100">
                                            <feature.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-neutral-900">{feature.title}</h4>
                                            <p className="text-gray-600 font-medium">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full max-w-[320px] md:max-w-md mx-auto lg:max-w-none lg:w-1/2 relative">
                            <div className="aspect-square bg-gray-50 rounded-full flex items-center justify-center p-8 relative">
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-[1px] border-dashed border-gray-200 rounded-full z-20 pointer-events-none"
                                />
                                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl z-10">
                                    <Image
                                        src="/images/hizmetler/zion-ai-sosyal.png"
                                        alt="Zion AI Entegrasyonu"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BÖLÜM 4 – UYGULAMA SÜRECİ */}
            <section className="py-24 bg-black text-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tight uppercase">
                            UYGULAMA SÜRECİ
                        </h2>
                        <p className="text-gray-400 uppercase tracking-widest text-sm text-center">The Bugless Process</p>
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

            {/* BÖLÜM 5 – SIKÇA SORULAN SORULAR (SSS) */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold mb-4 text-black">Sıkça Sorulan Sorular</h2>
                        <div className="w-16 h-1 bg-black mx-auto"></div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors group"
                                >
                                    <span className="font-bold text-lg text-neutral-900">{faq.question}</span>
                                    <div className={`p-2 rounded-full bg-gray-50 transition-all duration-300 ${openFaq === index ? 'rotate-180 bg-neutral-900 text-white' : 'text-neutral-400 group-hover:text-neutral-900'}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-8 pb-8 text-neutral-700 leading-relaxed italic border-t border-gray-50 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
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
                        <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 italic tracking-tighter text-white">
                            Reklam Bütçenizi Boşa Harcamayı Bugün Durdurun
                        </h2>

                        <Link
                            href="/iletisim"
                            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10">Ücretsiz Reklam Analizi ve Randevu Al</span>
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
