"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import {
    Target,
    Cpu,
    TrendingUp,
    LineChart,
    BarChart3,
    Zap,
    Search,
    Users,
    CheckCircle,
    ArrowRight,
    HelpCircle,
    ShieldCheck,
    Globe,
    MousePointer2,
    ChevronDown
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
    {
        title: "Büyüme Stratejisi (Growth)",
        description: "Markanızın pazar payını artırmak için ölçeklenebilir ve sürdürülebilir büyüme kanalları belirliyor, veri odaklı büyüme kurguları inşa ediyoruz.",
        icon: TrendingUp
    },
    {
        title: "Teknoloji & Altyapı Stratejisi",
        description: "Dijital operasyonlarınızın kesintisiz yürümesi için en doğru teknoloji yığınını (tech-stack) ve altyapı mimarisini seçiyor, teknik verimliliği maksimize ediyoruz.",
        icon: Cpu
    },
    {
        title: "Dönüşüm Optimizasyonu (CRO)",
        description: "Web sitenize gelen trafiği sadece izlemiyoruz; kullanıcı davranışlarını analiz ederek bu trafiği en yüksek oranda somut satışa ve dönüşüme çeviriyoruz.",
        icon: MousePointer2
    },
    {
        title: "Pazarlama & Kanal Stratejisi",
        description: "Bütçenizi en verimli şekilde kullanmak için hangi kanalın (SEO, Ads, Sosyal Medya) markanıza ne zaman ve ne kadar katkı sağlayacağını planlıyoruz.",
        icon: Target
    },
    {
        title: "Veri & Performans Yönetimi",
        description: "Dağınık verileri anlamlı içgörülere dönüştürüyor; gerçek zamanlı dashboardlar ile performansınızı anlık olarak takip edilebilir kılıyoruz.",
        icon: BarChart3
    }
];

const zionFeatures = [
    {
        title: "AI Pazar & Rakip Analizi",
        description: "Sektörel trendleri ve rakip hamlelerini yapay zeka ile anlık takip ederek proaktif stratejiler geliştiriyoruz.",
        icon: Search
    },
    {
        title: "Tahminleme ve Büyüme Modelleri",
        description: "Gelecekteki büyüme potansiyelinizi geçmiş veriler ve makine öğrenmesi algoritmalarıyla yüksek doğrulukla modelliyoruz.",
        icon: Zap
    },
    {
        title: "Çok Kanallı Veri Birleştirme",
        description: "Web, Sosyal Medya, Ads ve CRM verilerinizi tek bir merkezde birleştirerek 360 derece müşteri görünümü sağlıyoruz.",
        icon: Globe
    }
];

const processSteps = [
    {
        number: "01",
        title: "Mevcut Durum Analizi (Audit)",
        description: "Dijital varlıklarınızı, teknoloji altyapınızı ve mevcut performansınızı mühendislik hassasiyetiyle analiz ediyoruz."
    },
    {
        number: "02",
        title: "Hedef & KPI Belirleme",
        description: "İşletmeniz için gerçekçi, ölçülebilir ve başarıya odaklanan temel performans göstergelerini (KPI) netleştiriyoruz."
    },
    {
        number: "03",
        title: "Yol Haritası (3, 6 ve 12 Aylık)",
        description: "Kısa ve uzun vadeli büyüme hedeflerinize ulaştıracak adım adım uygulama planlarını ve zaman çizelgelerini hazırlıyoruz."
    },
    {
        number: "04",
        title: "Teknoloji & Araç Kurulumu",
        description: "Stratejinin hayata geçmesi için gerekli olan yazılım, takip kodları ve analiz araçlarının kurulumlarını gerçekleştiriyoruz."
    },
    {
        number: "05",
        title: "Test & Validasyon",
        description: "Kurulan sistemlerin ve kurgulanan stratejilerin doğruluğunu gerçek verilerle test ederek sistemin kusursuzluğunu onaylıyoruz."
    },
    {
        number: "06",
        title: "Sürekli Danışmanlık ve Optimizasyon",
        description: "Dijital dünya değişkendir. Stratejimizi veriye göre sürekli güncelliyor, büyümenizi kesintisiz kılıyoruz."
    }
];

const faqItems = [
    {
        question: "1. Dijital Strateji Danışmanlığı tam olarak ne işe yarar?",
        answer: "Dijital dünyada atacağınız tüm adımların (reklam, içerik, yazılım, CRM, SEO) birbiriyle uyumlu ve aynı hedefe hizmet etmesini sağlar. Bütçenizi boşa harcamadan, ölçülebilir ve sürdürülebilir bir büyüme planı sunar."
    },
    {
        question: "2. Diğer ajansların verdiği danışmanlıktan farkınız nedir?",
        answer: "Biz yalnızca pazarlama odaklı değil, mühendislik vizyonuyla bakıyoruz. Bugless Digital’in yazılım gücü ve Zion AI’ın teknolojik desteğiyle stratejiyi sadece söylemde bırakmıyor, teknik olarak da uyguluyoruz."
    },
    {
        question: "3. Strateji ne kadar sürede sonuç verir?",
        answer: "İlk ay analiz ve kurulum (setup) sürecidir. 2–3 ay içerisinde veriye dayalı çıktılar netleşmeye başlar. Bu hizmet kısa vadeli bir “kampanya” değil, uzun vadeli bir büyüme sistemidir."
    },
    {
        question: "4. Halihazırda bir ajansım veya ekibim varsa sizinle çalışabilir miyim?",
        answer: "Kesinlikle. Dijital strateji danışmanlığı, mevcut ajans veya ekiplerin daha verimli çalışmasını sağlar. Süreci denetler, yol haritası çizer ve performansı optimize ederiz."
    },
    {
        question: "5. Hangi sektörlere dijital strateji danışmanlığı veriyorsunuz?",
        answer: "E-ticaret, hizmet, kurumsal, SaaS ve yerel markalar dahil olmak üzere geniş bir yelpazede çalışıyoruz. Bizim için önemli olan sektör değil, verinin okunabilirliği ve büyüme potansiyelidir."
    },
    {
        question: "6. Danışmanlık sürecinde raporlama nasıl yapılır?",
        answer: "Karmaşık tablolarla zamanınızı almıyoruz. Size özel oluşturulan dashboard üzerinden hedeflerin gerçekleşme oranlarını, performans verilerini ve gelişimi şeffaf şekilde takip edebilirsiniz."
    }
];

const successPoints = [
    {
        title: "Pazar & Rakip Analizi",
        description: "Rakiplerinizin zayıf noktalarını ve pazarın boşluklarını veriye dayalı olarak tespit ediyoruz."
    },
    {
        title: "Kullanıcı Davranış Analizi",
        description: "Ziyaretçilerinizin neden satın almadığını değil, nasıl satın alabileceklerini analiz ediyoruz."
    },
    {
        title: "Bütünsel (360°) Yaklaşım",
        description: "Yazılım, tasarım ve pazarlamayı birbirinden kopuk değil, birbirini besleyen tek bir ekosistem olarak görüyoruz."
    }
];

export default function DigitalStrategyPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="bg-white">
            {/* 1. GİRİŞ / HERO */}
            <PageHeader
                title="Dijitalde Tahmin Yürütmeyin, Mühendislik Hassasiyetiyle Büyüyün."
                description="Dijital varlığınızı bir üst seviyeye taşımak için sadece fikir üretmiyoruz; veriye dayalı yol haritaları ve sürdürülebilir büyüme mimarileri inşa ediyoruz. Bugless Digital olarak stratejiyi yalnızca anlatmıyor, teknik olarak hayata geçiriyoruz."
                ctaText="ÜCRETSİZ DİJİTAL CHECK-UP & STRATEJİ RANDEVUSU AL"
                ctaHref="/iletisim"
                ctaDescription="Dijital varlıklarınızı analiz ediyor, markanız için en doğru büyüme stratejisini ve teknolojik gereksinimleri belirliyoruz."
                breadcrumb={
                    <Link
                        href="/hizmetlerimiz/buyume-seo"
                        className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
                    >
                        Büyüme & SEO
                        <ArrowRight size={12} />
                        <span className="text-white">Dijital Strateji</span>
                    </Link>
                }
            />

            {/* 2. DANIŞMANLIK HİZMET KAPSAMI */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            Danışmanlık Hizmet Kapsamı
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

            {/* 3. ZION AI ENTEGRASYONU */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black leading-tight">
                                Karar Mekanizmalarınızı Veriyle, <br />
                                <span className="text-gray-400">İletişiminizi Yapay Zekayla Güçlendirin.</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed font-medium">
                                Dijital strateji kağıt üzerinde kalmaz. Bugless Digital’in kardeş teknolojisi Zion AI ile strateji, operasyonel mükemmelliğe dönüşür.
                            </p>

                            <div className="space-y-10">
                                {zionFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-6"
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
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-square bg-gray-50 rounded-full flex items-center justify-center p-20 relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border border-dashed border-gray-200 rounded-full"
                                />
                                <Cpu size={200} className="text-gray-200 relative z-10 stroke-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. UYGULAMA SÜRECİ (THE BUGLESS STRATEGY PROCESS) */}
            <section className="py-24 bg-black text-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tight uppercase">
                            Süreç Her Şeydir
                        </h2>
                        <p className="text-gray-400 uppercase tracking-widest text-sm text-center">The Bugless Strategy Process</p>
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

            {/* 5. “VERİ ODAKLI KARAR”: BAŞARIYA NASIL ULAŞIYORUZ? */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            “Veri Odaklı Karar”: Başarıya Nasıl Ulaşıyoruz?
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Büyümeyi rastgele fikirlerle değil, somut veriler ve kullanıcı psikolojisi üzerine inşa edilen disiplinli bir metodolojiyle sağlıyoruz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {successPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 bg-gray-50 rounded-[30px] flex items-center justify-center text-black mb-6 hover:bg-black hover:text-white transition-all transform hover:rotate-12 border border-gray-100">
                                    <CheckCircle size={36} />
                                </div>
                                <h4 className="text-xl font-bold mb-4 text-neutral-900">{point.title}</h4>
                                <p className="text-gray-600 leading-relaxed font-medium">{point.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SIKÇA SORULAN SORULAR (SSS) */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold mb-4 text-black text-center">Sıkça Sorulan Sorular (SSS)</h2>
                        <div className="w-16 h-1 bg-black mx-auto"></div>
                    </div>

                    <div className="space-y-4">
                        {faqItems.map((faq, index) => (
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
                                                * Cevap: {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. KAPANIŞ & CTA */}
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
                            Strateji Bir Sunum Değil, Çalışan Bir Sistemdir.
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 italic">
                            “Bugless Digital olarak büyümeyi rastgele değil; ölçülebilir, sürdürülebilir ve ölçeklenebilir şekilde inşa ediyoruz.”
                        </p>

                        <Link
                            href="/iletisim"
                            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10">ÜCRETSİZ STRATEJİ ANALİZİ AL</span>
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
