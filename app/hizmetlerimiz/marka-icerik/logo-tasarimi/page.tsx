"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import {
    CheckCircle,
    ArrowRight,
    Palette,
    Zap,
    Layout,
    Type,
    FileText,
    ShieldCheck,
    Target,
    PenTool,
    Search,
    Dribbble,
    Grid,
    Check
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const foundationPoints = [
    {
        title: "Sessiz İletişim",
        description: "Logonuz, müşterinizle kurduğunuz ilk ve en güçlü bağdır. İlk saniyede güven, kalite ve profesyonellik mesajını verir.",
        icon: MessageSquare
    },
    {
        title: "Dijital Otorite",
        description: "Markanızın sektörel ağırlığını sadece ismiyle değil, görsel duruşuyla da hissettirir.",
        icon: ShieldCheck
    },
    {
        title: "Tam Uyumluluk",
        description: "Logo sadece bir görsel değil; web, mobil, sosyal medya ve basılı materyallerde kusursuz çalışan bir sistemdir.",
        icon: Grid
    }
];

const solutions = [
    {
        title: "Özgün Logo Tasarımı",
        description: "Markanızın DNA'sını yansıtan, zamansız ve sektörel ağırlığı olan profesyonel logo çözümleri.",
        icon: PenTool
    },
    {
        title: "Kurumsal Kimlik Kitabı (Brandbook)",
        description: "Markanızın tüm görsel standartlarını belirleyen kapsamlı rehberler hazırlıyoruz.",
        icon: FileText
    },
    {
        title: "Kartvizit ve Antetli Kağıt Tasarımları",
        description: "Profesyonel duruşunuzu tamamlayan, kurumsal kimlikle tam uyumlu basılı materyaller.",
        icon: Layout
    },
    {
        title: "Sosyal Medya Görsel Dili ve Şablonları",
        description: "Dijital mecralarda markanızın tutarlı ve etkileyici görünmesini sağlayan şablonlar.",
        icon: Dribbble
    },
    {
        title: "Tipografi ve Font Seçimi",
        description: "Markanızın karakterini güçlendiren, okunaklı ve estetik yazı tipi stratejileri.",
        icon: Type
    },
    {
        title: "Stratejik Renk Paleti Oluşturma",
        description: "Psikolojik etkisi yüksek ve markanızın duygusunu doğru yansıtan renk teorileri.",
        icon: Palette
    }
];

const depthPoints = [
    {
        title: "Markanızın Karakterini Yansıtıyoruz",
        description: "Bir logo, bir işletmenin yüzüdür. Markanızın ne hissettirmesi gerektiğini analiz eder; modern, minimalist ve sektörde otorite kuran görsel dilleri bilinçli şekilde oluştururuz.",
        icon: Target
    },
    {
        title: "Altın Oran ve Matematiksel Hassasiyet",
        description: "Logo tasarımını sanatsal olduğu kadar teknik bir disiplin olarak ele alırız. Logonuzu tüm platformlarda kusursuz görünmesi için matematiksel oranlar ve estetik dengeyle tasarlarız.",
        icon: Grid
    }
];

const processSteps = [
    {
        number: "01",
        title: "Brief ve Tanıma",
        description: "Sektörünüzü, rakiplerinizi ve markanızdan beklentilerinizi derinlemesine analiz ediyoruz."
    },
    {
        number: "02",
        title: "Araştırma ve Moodboard",
        description: "Tasarımın yönünü belirleyecek görsel konseptleri ve ilham panolarını oluşturuyoruz."
    },
    {
        number: "03",
        title: "Kreatif Eskizleme",
        description: "Dijital tasarıma geçmeden önce en güçlü fikirleri eskizlerle netleştiriyoruz."
    },
    {
        number: "04",
        title: "Dijitalleştirme ve Sunum",
        description: "Seçilen konseptleri en yüksek teknik standartlarda dijital ortama aktarıyor ve size sunuyoruz."
    },
    {
        number: "05",
        title: "Revize ve Final Teslimat",
        description: "Görüşleriniz doğrultusunda son halini verdiğimiz tüm dosyaları kullanıma hazır şekilde teslim ediyoruz."
    }
];

import { MessageSquare } from "lucide-react";

export default function LogoDesignPage() {
    return (
        <main className="bg-white">
            {/* HERO / ÜST ALAN */}
            <PageHeader
                title="Sadece Bir Logo Değil, Bir Marka Hikayesi Tasarlıyoruz."
                description="İlk bakışta güven veren, sektörel ağırlığınızı yansıtan ve dijital dünyada fark yaratan kurumsal kimlikleri stratejik olarak kurguluyoruz. Bugless Digital olarak, markanızın DNA’sını profesyonel ve zamansız bir imzaya dönüştürüyoruz."
                ctaText="Ücretsiz Kimlik Analizi ve Randevu Planla"
                ctaHref="/iletisim"
                ctaDescription="Mevcut logonuzu, marka algınızı ve sektörel konumunuzu profesyonel gözlerle analiz ediyor; güçlü ve zayıf yönlerinizi net bir raporla sunuyoruz."
                breadcrumb={
                    <Link
                        href="/hizmetlerimiz/marka-icerik"
                        className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
                    >
                        Marka & İçerik Üretimi
                        <ArrowRight size={12} />
                        <span className="text-white">Logo Tasarımı</span>
                    </Link>
                }
            />

            {/* LOGO NEDEN MARKANIN TEMELİDİR? */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            Logo Neden Markanın Temelidir?
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {foundationPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <point.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-neutral-900">{point.title}</h3>
                                <p className="text-gray-600 leading-relaxed italic">
                                    {point.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LOGO TASARIMINDA DERİNLİK */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black leading-tight">
                                Logo Tasarımında <br /> <span className="text-gray-400">Derinlik</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-lg">
                                Tasarımı sadece estetik değil, stratejik bir disiplin olarak görüyoruz.
                            </p>

                            <div className="space-y-10">
                                {depthPoints.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-6"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-black border border-gray-100">
                                            <point.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-neutral-900">{point.title}</h4>
                                            <p className="text-gray-600 font-medium">{point.description}</p>
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
                                        src="/images/hizmetler/logo-tasarim-derinlik.png"
                                        alt="Logo Tasarımında Derinlik"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KURUMSAL KİMLİK HİZMETLERİMİZ */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            Kurumsal Kimlik Hizmetlerimiz
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <solution.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-neutral-900">{solution.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {solution.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SÜREÇ HER ŞEYDİR – ADIM ADIM TASARIM YOLCULUĞUMUZ */}
            <section className="py-24 bg-black text-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tight uppercase">
                            Süreç Her Şeydir
                        </h2>
                        <p className="text-gray-400 uppercase tracking-widest text-sm text-center">Adım Adım Tasarım Yolculuğumuz</p>
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
                            Logonuz Markanızı Ne Kadar Temsil Ediyor?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 italic">
                            “Mevcut görsel kimliğinizi; sektörel rekabet gücü, modern standartlara uyum ve dijital performans açısından tamamen ücretsiz analiz ediyoruz.”
                        </p>

                        <Link
                            href="/iletisim"
                            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10">Şimdi Ücretsiz Kimlik Analizi Al ve Randevu Oluştur</span>
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
