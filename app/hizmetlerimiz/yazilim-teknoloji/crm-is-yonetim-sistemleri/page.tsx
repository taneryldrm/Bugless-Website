"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import {
    CheckCircle,
    ArrowRight,
    Users,
    ClipboardList,
    FileText,
    Database,
    Zap,
    Smartphone,
    Search,
    ChevronDown,
    MessageSquare,
    BarChart3
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const solutions = [
    {
        title: "Müşteri İlişkileri Yönetimi",
        description: "Potansiyel müşteriden sadık müşteriye giden tüm yolculuğu tek bir panelden izleyin, hiçbir fırsatı kaçırmayın.",
        icon: Users
    },
    {
        title: "Proje ve Görev Takibi",
        description: "Ekibinizin iş yükünü yönetin, teslim tarihlerini otomatikleştirin ve projelerinizin kârlılığını anlık olarak görün.",
        icon: ClipboardList
    },
    {
        title: "Satış ve Teklif Yönetimi",
        description: "Saniyeler içinde profesyonel teklifler oluşturun, revizyon süreçlerini takip edin ve satış kapatma oranlarınızı artırın.",
        icon: FileText
    },
    {
        title: "Entegre Finans ve Stok Takibi",
        description: "Gelir-gider dengenizi, faturalandırma süreçlerinizi ve stok durumunuzu operasyonunuzla tam entegre şekilde yönetin.",
        icon: Database
    }
];

const advantages = [
    {
        title: "Otomatik Lead Kaydı",
        description: "Reklamlardan gelen tüm form ve telefon verileri, Zion AI aracılığıyla CRM sistemine anında işlenir.",
        icon: Zap
    },
    {
        title: "Akıllı WhatsApp ve Call Agent Entegrasyonu",
        description: "Müşteri görüşmeleri CRM kartlarına otomatik not olarak eklenir, manuel veri giriş hataları sıfıra indirilir.",
        icon: MessageSquare
    },
    {
        title: "Veri Analitiği ve Tahminleme",
        description: "Geçmiş verileri analiz ederek satış trendlerini ve müşteri davranışlarını öngören raporlar sunulur.",
        icon: BarChart3
    }
];

const processSteps = [
    {
        number: "01",
        title: "İş Analizi & İhtiyaç Belirleme",
        description: "Mevcut iş akışınızı, darboğazları ve dijitalleşmesi gereken noktaları analiz ederiz."
    },
    {
        number: "02",
        title: "Sistem Mimarisi ve Tasarım",
        description: "Sektörünüze ve ölçeğinize uygun CRM mimarisini kurgularız."
    },
    {
        number: "03",
        title: "Geliştirme ve Entegrasyon",
        description: "Mevcut web siteniz, reklam hesaplarınız ve araçlarınızla tam entegrasyon sağlanır."
    },
    {
        number: "04",
        title: "Veri Göçü (Migration)",
        description: "Eski sistemlerdeki tüm veriler kayıpsız şekilde yeni altyapıya taşınır."
    },
    {
        number: "05",
        title: "Eğitim ve Canlıya Geçiş",
        description: "Ekibinize kullanım eğitimi verilir ve sistem tam verimle canlıya alınır."
    }
];

const faqs = [
    {
        question: "Neden hazır bir CRM yerine Bugless’in özel sistemini seçmeliyim?",
        answer: "Hazır sistemler işinize değil, siz hazır sisteme uyum sağlarsınız. Biz, iş yapış şeklinize özel, sade ve gerçekten ihtiyaç duyduğunuz özellikleri barındıran sistemler kuruyoruz."
    },
    {
        question: "Sistem verilerimiz ne kadar güvende?",
        answer: "Verileriniz yüksek güvenlik standartlarına sahip sunucularda, düzenli yedekleme ve şifreleme yöntemleriyle korunur. Veri mülkiyeti tamamen size aittir."
    },
    {
        question: "Mobil cihazlardan erişim sağlayabilir miyim?",
        answer: "Evet. Geliştirdiğimiz tüm sistemler %100 mobil uyumludur. Dünyanın her yerinden süreçlerinizi yönetebilirsiniz."
    },
    {
        question: "Mevcut muhasebe ve ERP sistemleriyle entegre olur mu?",
        answer: "Evet. API desteği sunan tüm popüler muhasebe ve ERP sistemleriyle çift taraflı veri akışı sağlıyoruz."
    },
    {
        question: "Ekibimiz sistemi kullanmakta zorlanır mı?",
        answer: "Hayır. Tasarım yaklaşımımız “basitliktir”. Ayrıca eğitim ve dokümantasyon desteği sunuyoruz."
    }
];

export default function CRMPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <main className="bg-white">
            {/* HERO / ÜST ALAN */}
            <PageHeader
                title="CRM & İş Yönetim Sistemleri"
                description="İşinizi Tesadüflerle Değil, Verilerle Yönetin. Karmaşık Excel tablolarından ve kaybolan müşteri verilerinden kurtulun. Bugless Digital olarak operasyonel süreçlerinizi dijitalleştiren özel CRM çözümleri geliştiriyoruz."
                ctaText="Ücretsiz Sistem Analizi ve Demo Talep Et"
                ctaHref="/iletisim"
                ctaDescription="Mevcut iş akışınızı inceliyor, dijitalleşme potansiyelinizi ve operasyonel açıklarınızı profesyonel bir raporla sunuyoruz."
                breadcrumb={
                    <Link
                        href="/hizmetlerimiz/yazilim-teknoloji"
                        className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
                    >
                        Yazılım & Teknoloji Çözümleri
                        <ArrowRight size={12} />
                        <span className="text-white">CRM & İş Yönetim Sistemleri</span>
                    </Link>
                }
            />

            {/* CRM VE İŞ YÖNETİM ÇÖZÜMLERİMİZ */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            CRM ve İş Yönetim Çözümlerimiz
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

            {/* ZION AI VE TEKNOLOJİK GÜCÜMÜZ */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black leading-tight">
                                Zion AI ve <br /> <span className="text-gray-400">Teknolojik Gücümüz</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-lg">
                                CRM sistemini sadece bir veri tabanı değil, akıllı bir asistana dönüştüren Zion AI teknolojisiyle tanışın.
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
                                <Zap size={200} className="text-gray-200 relative z-10 stroke-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SÜREÇ HER ŞEYDİR – DİJİTAL DÖNÜŞÜM YOL HARİTAMIZ */}
            <section className="py-24 bg-black text-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tight">
                            Süreç Her Şeydir
                        </h2>
                        <p className="text-gray-400 uppercase tracking-widest text-sm text-center">Dijital Dönüşüm Yol Haritamız</p>
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
                            Operasyonunuzu Bir Üst Seviyeye Taşıyın
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 italic">
                            “Şirketinizin büyümesini yavaşlatan operasyonel yükleri teknolojiyle aşın. Gelin, süreci birlikte dijitalleştirelim.”
                        </p>

                        <Link
                            href="/iletisim"
                            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10">Ücretsiz Sistem Analizi ve Demo Talep Et</span>
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
