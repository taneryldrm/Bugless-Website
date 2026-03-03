"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import {
    Video,
    Play,
    Smartphone,
    Layers,
    FileText,
    MapPin,
    Zap,
    Scissors,
    CheckCircle,
    ArrowRight,
    Camera
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Kurumsal Tanıtım Filmleri",
        description: "Şirketinizin vizyonunu, kültürünü ve gücünü yansıtan; güven veren profesyonel tanıtım filmlerini stratejik bir hikâye kurgusuyla hazırlıyoruz.",
        icon: Video
    },
    {
        title: "Ürün ve Reklam Çekimleri",
        description: "Ürünlerinizin öne çıkan özelliklerini satış odaklı bir bakış açısıyla ele alıyor, yüksek dönüşüm sağlayan reklam filmleri üretiyoruz.",
        icon: Play
    },
    {
        title: "Sosyal Medya ve Reels İçerikleri",
        description: "Algoritmaların sevdiği, izlenme oranlarını artıran, dinamik ve trend odaklı kısa video içerikleri markanız için tasarlıyoruz.",
        icon: Smartphone
    },
    {
        title: "Motion Graphics ve Animasyon",
        description: "Karmaşık mesajları sadeleştiren, dikkat çekici 2D ve 3D animasyon çözümlerini marka dilinize uygun şekilde üretiyoruz.",
        icon: Layers
    }
];

const solutions = [
    {
        title: "Senaryo ve Hikâye Tasarımı",
        description: "Videonun temelini oluşturan güçlü senaryoları, hikâye akışını ve storyboard süreçlerini stratejik olarak kurguluyoruz.",
        icon: FileText
    },
    {
        title: "Mekân ve Cast Yönetimi",
        description: "Hikâyenize en uygun çekim mekânlarını ve profesyonel oyuncu/figüran kadrosunu sizin adınıza organize ediyoruz.",
        icon: MapPin
    },
    {
        title: "İleri Teknoloji Ekipman",
        description: "En güncel kamera, ışık ve ses teknolojileriyle sinematik kaliteyi garanti altına alıyoruz.",
        icon: Camera
    },
    {
        title: "Post-Prodüksiyon (Kurgu & Montaj)",
        description: "Profesyonel kurgu, renk düzenleme (color grading), ses tasarımı ve efekt süreçlerini titizlikle tamamlıyoruz.",
        icon: Scissors
    }
];

const processSteps = [
    {
        number: "01",
        title: "Ön Hazırlık ve Strateji",
        description: "Hedeflerinizi analiz ediyor, markanıza en uygun video konseptini belirliyoruz."
    },
    {
        number: "02",
        title: "Üretim (Çekim)",
        description: "Planlanan senaryoyu profesyonel ekibimiz ve ekipmanlarımızla gerçeğe dönüştürüyoruz."
    },
    {
        number: "03",
        title: "Kurgu ve Görselleştirme",
        description: "Çekilen görüntüleri hikâyeye uygun şekilde birleştiriyor, post-prodüksiyon sürecini yürütüyoruz."
    },
    {
        number: "04",
        title: "Revize ve Final",
        description: "Geri bildirimleriniz doğrultusunda videoyu mükemmelleştiriyor ve en yüksek kalitede teslim ediyoruz."
    }
];

export default function ProductionPage() {
    return (
        <main className="bg-white">
            {/* HERO / ÜST ALAN */}
            <PageHeader
                title="Profesyonel Prodüksiyon ile Marka Hikayenizi Bizimle Yaşatın."
                description="Sadece video çekmiyoruz; izleyicilerinizle bağ kuran, akılda kalan ve markanızı güçlendiren sinematik deneyimler kurguluyoruz. Bugless Digital olarak, markanızın dijital dünyadaki görsel yüzünü en yüksek prodüksiyon standartlarında hayata geçiriyoruz."
                ctaText="Ücretsiz Prodüksiyon Analizi ve Randevu Planla"
                ctaHref="/iletisim"
                ctaDescription="Markanız için en etkili video stratejisini analiz ediyor, size özel prodüksiyon yol haritasını sunuyoruz."
                breadcrumb={
                    <Link
                        href="/hizmetlerimiz/marka-icerik"
                        className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
                    >
                        Marka & İçerik Üretimi
                        <ArrowRight size={12} />
                        <span className="text-white">Prodüksiyon</span>
                    </Link>
                }
            />

            {/* VİDEO PRODÜKSİYON HİZMETLERİMİZ */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            Video Prodüksiyon Hizmetlerimiz
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-neutral-900">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed italic">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ANAHTAR TESLİM PRODÜKSİYON ÇÖZÜMLERİMİZ */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black leading-tight">
                                Anahtar Teslim <br /> <span className="text-gray-400">Prodüksiyon Çözümlerimiz</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-lg">
                                Tüm süreci tek bir merkezden, profesyonel bir disiplinle uçtan uca yönetiyoruz.
                            </p>

                            <div className="space-y-10">
                                {solutions.map((solution, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-6"
                                    >
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-black border border-gray-100">
                                            <solution.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 text-neutral-900">{solution.title}</h4>
                                            <p className="text-gray-600 font-medium">{solution.description}</p>
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
                                <Camera size={200} className="text-gray-200 relative z-10 stroke-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* "SÜREÇ HER ŞEYDİR": PRODÜKSİYON ADIMLARIMIZ */}
            <section className="py-24 bg-black text-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tight uppercase">
                            Süreç Her Şeydir
                        </h2>
                        <p className="text-gray-400 uppercase tracking-widest text-sm text-center">Prodüksiyon Adımlarımız</p>
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
                            Markanızın Görsel Gücünü Keşfetmeye Hazır Mısınız?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 italic">
                            “Mevcut video içeriklerinizi, prodüksiyon kalitenizi ve marka algınızı tamamen ücretsiz analiz ediyoruz. Sektörünüze özel video strateji raporunu sunuyor ve size özel bir görüşme planlıyoruz.”
                        </p>

                        <Link
                            href="/iletisim"
                            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10">Şimdi Ücretsiz Analiz Al ve Randevu Oluştur</span>
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
