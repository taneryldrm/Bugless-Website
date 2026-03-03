"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTA } from "@/components/sections/CTA";
import {
    CheckCircle,
    ArrowRight,
    Laptop,
    ShoppingCart,
    User,
    Zap,
    Smartphone,
    Search,
    ChevronDown
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const solutions = [
    {
        title: "Kurumsal Web Siteleri",
        description: "Markanızın prestijini dijital dünyaya taşıyan, güven veren ve kurumsal kimliğinizle tam uyumlu profesyonel web çözümleri.",
        icon: Laptop
    },
    {
        title: "E-Ticaret Sistemleri",
        description: "Sadece bir dükkân değil; yüksek dönüşümlü bir satış makinesi. Kullanıcı dostu arayüzler ve güvenli ödeme altyapılarıyla satışlarınızı artırıyoruz.",
        icon: ShoppingCart
    },
    {
        title: "Portföy & Kişisel Siteler",
        description: "Sanatınızı, işlerinizi veya projelerinizi en etkileyici şekilde sergileyen, modern ve dinamik portföy tasarımları.",
        icon: User
    }
];

const advantages = [
    {
        title: "Hız ve Performans (Core Web Vitals)",
        description: "Google’ın hız kriterlerine tam uyumlu, saniyeler içinde açılan altyapılar kuruyoruz.",
        icon: Zap
    },
    {
        title: "Mobil Öncelikli (Mobile-First) Tasarım",
        description: "Sitenizi tüm ekranlarda kusursuz çalışacak şekilde, mobil kullanıcıyı merkeze alarak tasarlıyoruz.",
        icon: Smartphone
    },
    {
        title: "SEO Dostu Mimari",
        description: "Teknik SEO altyapısını kodlama aşamasında entegre ederek Google botları için ‘okunabilir’ yapılar oluşturuyoruz.",
        icon: Search
    }
];

const processSteps = [
    {
        number: "01",
        title: "Analiz & UX Stratejisi",
        description: "Hedef kitlenizi ve ihtiyaçlarınızı analiz ediyor, kullanıcı deneyimi (UX) haritasını çıkarıyoruz."
    },
    {
        number: "02",
        title: "UI Tasarım",
        description: "Marka kimliğinize uygun, modern ve çarpıcı bir görsel arayüz tasarlıyoruz."
    },
    {
        number: "03",
        title: "Kodlama & Geliştirme",
        description: "Tasarımı, temiz kod yapısı ve güncel teknolojilerle (Next.js, React vb.) hayata geçiriyoruz."
    },
    {
        number: "04",
        title: "Test & Kalite Kontrol",
        description: "Yayına girmeden önce tüm fonksiyonları, formları ve güvenlik açıklarını titizlikle test ediyoruz."
    },
    {
        number: "05",
        title: "Lansman & Destek",
        description: "Sitenizi yayına alıyor, performansını izlemeye devam ederek teknik destek sunuyoruz."
    }
];

const faqs = [
    {
        question: "Web sitemi kendim güncelleyebilir miyim?",
        answer: "Kesinlikle. Sizin için hazırladığımız kullanıcı dostu yönetim paneli sayesinde teknik bilgiye ihtiyaç duymadan içeriklerinizi, görsellerinizi ve ürünlerinizi dilediğiniz zaman güncelleyebilirsiniz."
    },
    {
        question: "Sistem yayına girdikten sonra teknik destek veriyor musunuz?",
        answer: "Evet. Bugless Digital olarak işimiz siteyi teslim etmekle bitmiyor. Güncelleme, yedekleme ve güvenlik takibi gibi konularda periyodik destek paketlerimize yanınızdayız."
    },
    {
        question: "E-ticaret sitemde hangi ödeme sistemlerini kullanabilirim?",
        answer: "Türkiye’deki tüm bankaların sanal POS altyapıları ve iyzico, PayTR gibi popüler ödeme kuruluşlarıyla tam entegrasyon sağlıyoruz."
    },
    {
        question: "Mevcut sitem çok yavaş, iyileştirme yapıyor musunuz?",
        answer: "Evet. “Performance Optimization” hizmetimizle mevcut sitenizin kod yapısını inceliyor, görselleri optimize ediyor ve sunucu taraflı iyileştirmelerle hız skorlarını yukarı taşıyoruz."
    },
    {
        question: "SEO uyumlu web sitesi ne demek?",
        answer: "Sadece içerik değil; kod yapısının, başlık hiyerarşisinin (H1–H6), site haritasının ve meta etiketlerinin Google’ın güncel algoritmalarına uygun şekilde yapılandırılması demektir. Biz bunu standart olarak sunuyoruz."
    }
];

export default function WebDesignPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="bg-white">
            {/* HERO / ÜST ALAN */}
            <PageHeader
                title="Web Tasarım & Geliştirme"
                description="Dijitaldeki Yüzünüzü Mühendislik Vizyonuyla İnşa Edin. Sadece ‘güzel görünen’ siteler değil; hızlı, güvenli ve satış odaklı dijital varlıklar geliştiriyoruz."
                ctaText="Ücretsiz Proje Analizi ve Teklif Al"
                ctaHref="/iletisim"
                ctaDescription="“Sitenizin hızını, mobil uyumluluğunu ve teknolojik altyapısını ücretsiz analiz ediyor, dijital dönüşüm yol haritanızı 24 saat içinde hazırlıyoruz.”"
                breadcrumb={
                    <Link
                        href="/hizmetlerimiz/yazilim-teknoloji"
                        className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
                    >
                        Yazılım & Teknoloji Çözümleri
                        <ArrowRight size={12} />
                        <span className="text-white">Web Tasarım & Geliştirme</span>
                    </Link>
                }
            />

            {/* WEB TASARIM & YAZILIM ÇÖZÜMLERİMİZ */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            Web Tasarım & Yazılım Çözümlerimiz
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

            {/* NEDEN BUGLESS TEKNOLOJİSİ? */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black leading-tight">
                                Neden Bugless <br /> <span className="text-gray-400">Teknolojisi?</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-lg">
                                Mühendislik vizyonumuzu tasarım disipliniyle birleştirerek standartların ötesinde bir dijital varlık oluşturuyoruz.
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
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-square bg-gray-50 rounded-full flex items-center justify-center p-20 relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-[1px] border-dashed border-gray-200 rounded-full"
                                />
                                <Laptop size={200} className="text-gray-200 relative z-10 stroke-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SÜREÇ HER ŞEYDİR – ADIM ADIM GELİŞTİRME */}
            <section className="py-24 bg-black text-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tight">
                            Süreç Her Şeydir
                        </h2>
                        <p className="text-gray-400 uppercase tracking-widest text-sm text-center">Adım Adım Geliştirme Yolculuğu</p>
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

            {/* SIKÇA SORULAN SORULAR (SSS) */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold mb-4 text-black">Merak Edilenler</h2>
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
                        <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 italic tracking-tighter">
                            Şimdi Dijitalde Fark Yaratın
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 italic">
                            “İster global bir e-ticaret markası olun ister butik bir kurumsal firma; dijital başarınız doğru teknolojiyle başlar.”
                        </p>

                        <Link
                            href="/iletisim"
                            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10">Ücretsiz Proje Analizi ve Teklif Al</span>
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
