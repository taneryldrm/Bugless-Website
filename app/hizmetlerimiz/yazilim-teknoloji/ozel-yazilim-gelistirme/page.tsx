"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import {
    CheckCircle,
    ArrowRight,
    Laptop,
    Smartphone,
    Database,
    Zap,
    Lock,
    Code,
    TrendingUp,
    Cpu,
    ChevronDown
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const solutions = [
    {
        title: "SaaS Projeleri Geliştirme:",
        description: "Global pazara hitap eden, abonelik modelli yazılım platformlarınızı (Software as a Service) uçtan uca inşa ediyoruz.",
        icon: Laptop
    },
    {
        title: "Mobil Uygulama Geliştirme:",
        description: "iOS ve Android platformlarında yüksek kullanıcı deneyimi sunan, hızlı ve yerel (native) performansında uygulamalar kodluyoruz.",
        icon: Smartphone
    },
    {
        title: "API ve Sistem Entegrasyonları:",
        description: "Farklı yazılımların birbiriyle konuşmasını sağlayan güvenli köprüler kuruyor, karmaşık veri akışlarını otomatize ediyoruz.",
        icon: Cpu
    },
    {
        title: "Yapay Zeka (AI) Entegrasyonları:",
        description: "Mevcut sistemlerinize Zion AI gibi akıllı asistanlar ve veri işleme modelleri ekleyerek işletmenize zeka katıyoruz.",
        icon: Zap
    }
];

const advantages = [
    {
        title: "Modern Altyapı",
        description: "Next.js, React ve Supabase gibi güncel teknolojilerle veri tabanı ve arayüz süreçlerini en optimize şekilde yönetiyoruz.",
        icon: Database
    },
    {
        title: "Güvenli Kimlik Doğrulama",
        description: "Firebase ve modern şifreleme yöntemleriyle kullanıcı verilerini en üst düzeyde koruyoruz.",
        icon: Lock
    },
    {
        title: "Ölçeklenebilirlik",
        description: "Bugün ihtiyaçlarınızı çözerken, yarın milyonlarca kullanıcıya hizmet verebilecek esnek mimariler kuruyoruz.",
        icon: TrendingUp
    },
    {
        title: "Temiz Kod (Clean Code)",
        description: "Bakımı kolay, dokümante edilmiş ve dünya standartlarında kod yazıyoruz.",
        icon: Code
    }
];

const processSteps = [
    {
        number: "01",
        title: "Gereksinim Analizi & Proje Planı",
        description: "Beklentilerinizi analiz ediyor, kapsamlı bir ihtiyaç analizi ve proje takvimi oluşturuyoruz."
    },
    {
        number: "02",
        title: "Mimari Tasarım & Prototipleme",
        description: "Yazılımın iskeletini (backend) ve kullanıcı arayüzünü (frontend) en verimli şekilde kurguluyoruz."
    },
    {
        number: "03",
        title: "Geliştirme (Sprint Süreçleri)",
        description: "Çevik (Agile) metodoloji ile projeyi parçalara bölüyor, her aşamada size çalışan bir yapı sunuyoruz."
    },
    {
        number: "04",
        title: "Manuel ve Otomasyon Testleri",
        description: "Ömer ve test ekibimiz tarafından yürütülen titiz test süreçleriyle hata payını sıfıra indiriyoruz."
    },
    {
        number: "05",
        title: "Deployment & Bakım",
        description: "Yazılımınızı yayına alıyor, performansını izliyor ve sürekli güncel kalmasını sağlıyoruz."
    }
];

const faqs = [
    {
        question: "Özel yazılım geliştirmek ne kadar sürer?",
        answer: "Projenin kapsamına göre değişmekle birlikte, MVP (Minimum Uygulanabilir Ürün) süreçlerimiz genellikle 8 ila 12 hafta arasında tamamlanmaktadır. Planlama aşamasında size net bir takvim sunuyoruz."
    },
    {
        question: "Yazılımın kaynak kodlarına sahip olabilecek miyim?",
        answer: "Evet. Yapılan anlaşma gereği, projeniz için yazılan tüm kaynak kodları ve mülkiyet hakları tamamen markanıza aittir."
    },
    {
        question: "Mevcut bir sistemim var, üzerine geliştirme yapabilir misiniz?",
        answer: "Teknik ekibimiz mevcut altyapınızı inceler; eğer teknolojik olarak güncellenmeye uygunsa sisteminize yeni modüller ekleyebilir veya modern teknolojilere göç (migration) sürecini yönetebiliriz."
    },
    {
        question: "Yapay zeka (AI) özelliklerini her yazılıma ekleyebilir misiniz?",
        answer: "Çoğu zaman evet. Veri girişinden müşteri desteğine kadar pek çok sürece Zion AI tabanlı akıllı çözümler entegre ederek verimliliğinizi artırabiliyoruz."
    },
    {
        question: "Geliştirme bittikten sonra destek vermeye devam ediyor musunuz?",
        answer: "Kesinlikle. Yazılımın yaşayan bir organizma olduğunu biliyoruz. Teknik destek, sunucu yönetimi ve yeni özellik ekleme gibi konularda uzun vadeli iş ortağınız oluyoruz."
    }
];

export default function CustomSoftwarePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="bg-white">
            {/* HERO / ÜST ALAN */}
            <PageHeader
                title="Özel Yazılım Geliştirme"
                description="Hazır Çözümlerle Yetinmeyin, Geleceği Kodlayalım. Standart yazılımların sınırlarına takılmayın. Bugless Digital olarak, işletmenizin benzersiz ihtiyaçlarına tam uyum sağlayan, ölçeklenebilir ve yüksek performanslı özel yazılım çözümleri üretiyoruz."
                ctaText="Ücretsiz Yazılım Analizi ve Teklif Al"
                ctaHref="/iletisim"
                ctaDescription="“İşletmenizin ihtiyaçlarını teknik ekibimizle analiz ediyor, en doğru teknoloji yığınını ve çözüm mimarisini 24 saat içinde projelendiriyoruz.”"
                breadcrumb={
                    <Link
                        href="/hizmetlerimiz/yazilim-teknoloji"
                        className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
                    >
                        Yazılım & Teknoloji Çözümleri
                        <ArrowRight size={12} />
                        <span className="text-white">Özel Yazılım Geliştirme</span>
                    </Link>
                }
            />

            {/* ÖZEL YAZILIM ÇÖZÜM ALANLARIMIZ */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            ÖZEL YAZILIM ÇÖZÜM ALANLARIMIZ
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

            {/* TEKNOLOJİ YIĞINIMIZ VE MÜHENDİSLİK YAKLAŞIMIMIZ */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black leading-tight">
                                TEKNOLOJİ YIĞINIMIZ VE <br /> <span className="text-gray-400">MÜHENDİSLİK YAKLAŞIMIMIZ</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-lg">
                                Sıradan bir ajans değil, bir yazılım ve yapay zeka şirketiyiz:
                            </p>

                            <div className="space-y-10">
                                {advantages.map((adv, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col items-start gap-0"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-black border border-gray-100 mb-4">
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
                                        src="/images/hizmetler/ozel-yazilim-teknoloji.png"
                                        alt="Teknoloji Yığınımız ve Mühendislik Yaklaşımımız"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SÜREÇ HER ŞEYDİR: KODUN YAŞAM DÖNGÜSÜ */}
            <section className="py-24 bg-black text-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tight">
                            "SÜREÇ HER ŞEYDİR": KODUN YAŞAM DÖNGÜSÜ
                        </h2>
                        <p className="text-gray-400 uppercase tracking-widest text-sm text-center">Geliştirme Adımlarımız</p>
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
                                    <div className={`p-2 rounded-full bg-gray-50 transition-all duration-300 ${openFaq === index ? 'rotate-180 bg-neutral-900 text-white' : 'text-neutral-600 group-hover:text-neutral-900'}`}>
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
                                                Cevap: {faq.answer}
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
                        <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 italic tracking-tighter">
                            SINIRLARI TEKNOLOJİYLE AŞIN (ÖZEL CTA)
                        </h2>
                        <p className="text-xl text-white font-medium mb-4 italic">
                            Hazır Paketlere Sığmayan Fikirler İçin Buradayız.
                        </p>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 italic">
                            Bugless Digital'in mühendislik gücüyle tanışın ve işinizi dijitalde benzersiz kılın.
                        </p>

                        <Link
                            href="/iletisim"
                            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10">ÜCRETSİZ TEKNİK DANIŞMANLIK AL</span>
                            <ArrowRight size={24} className="relative z-10" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
