"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/PageHeader";
import {
    Search,
    Target,
    BarChart3,
    Award,
    Globe,
    ShoppingCart,
    MapPin,
    Zap,
    FileText,
    TrendingUp,
    ShieldCheck,
    Cpu,
    CheckCircle,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const values = [
    {
        title: "Başarıya Giden Yolda Doğru Kelimeler",
        description: "Stratejimizin temelini sadece yüksek hacimli kelimeler değil, markanıza gerçek dönüşüm getirecek doğru anahtar kelimeler oluşturur. Niş fırsatları, kullanıcı niyetini (intent) ve detaylı rekabet analizlerini birleştirerek, markanız için en karlı büyüme alanlarını belirliyoruz.",
        icon: Target
    },
    {
        title: "Ortalama İçerikle Yetinmeyin",
        description: "Google’ın “uzmanlık, deneyim ve değer” beklentisini merkezimize alıyoruz. İçeriklerimizi sadece botları memnun etmek için değil, gerçek kullanıcılara değer sunmak, sorularını yanıtlamak ve markanızı bir bilgi kaynağı olarak konumlandırmak için en yüksek kalite standartlarında üretiyoruz.",
        icon: Award
    }
];

const services = [
    {
        title: "SEO Danışmanlığı",
        description: "Markanızın dijital görünürlüğünü artırmak için sektörel trendlere ve algoritma güncellemelerine tam uyumlu, uzun vadeli büyüme stratejileri geliştiriyoruz.",
        icon: Search
    },
    {
        title: "Teknik SEO Hizmetleri",
        description: "Web sitenizin taranabilirliğini, hızını ve mobil performansını optimize ederek; Google botlarının sitenizi kusursuz bir şekilde anlamasını sağlıyoruz.",
        icon: Cpu
    },
    {
        title: "E-Ticaret SEO Çözümleri",
        description: "Ürün ve kategori sayfalarınızı satış odaklı optimize ediyor; arama sonuçlarından doğrudan dönüşüm ve ciro artışı elde etmenize odaklanıyoruz.",
        icon: ShoppingCart
    },
    {
        title: "Yerel SEO ve Harita Yönetimi",
        description: "İşletmenizin fiziksel konumunu dijitalde öne çıkarıyor; \"yakınımdaki\" aramalarında ve haritalarda en görünür sırada yer almanızı sağlıyoruz.",
        icon: MapPin
    },
    {
        title: "SEO Denetimi (Audit) & Kurulum",
        description: "Sitenizin mevcut durumunu 200'den fazla kriterde analiz ediyor; yanlışları düzelterek güçlü bir teknik temel üzerinde SEO sürecinizi başlatıyoruz.",
        icon: ShieldCheck
    }
];

const advantages = [
    {
        title: "SEO Uzmanlığı",
        description: "Algoritma değişimlerini anlık takip eden, güncel ve teknik SEO standartlarına hakim, tecrübeli bir ekiple çalışırsınız.",
        icon: Award
    },
    {
        title: "Şeffaf Raporlama",
        description: "Karmaşık verilerle değil; erişim, etkileşim ve dönüşüm odaklı, sonuçları net bir şekilde görebileceğiniz düzenli raporlar sunuyoruz.",
        icon: BarChart3
    },
    {
        title: "Kreatif Bakış Açısı",
        description: "SEO’yu sadece teknik bir iş değil; içerik kalitesi ve kullanıcı deneyimiyle (UX) birleşen bütüncül bir dijital pazarlama disiplini olarak yönetiyoruz.",
        icon: Zap
    }
];

const processSteps = [
    {
        number: "01",
        title: "Araştırma & Strateji Geliştirme",
        description: "Sektörünüzü ve rakiplerinizi derinlemesine analiz ederek, en kısa sürede sonuç verecek stratejik yol haritasını kurguluyoruz."
    },
    {
        number: "02",
        title: "Teknik Kurulum & Optimizasyon",
        description: "Sitenizdeki tüm teknik engelleri kaldırıyor; hız, güvenlik ve taranabilirlik açısından arama motorları için mükemmel hale getiriyoruz."
    },
    {
        number: "03",
        title: "İçerik Yönetimi & Otorite",
        description: "Kullanıcı değerini artıran kaliteli içerikler ve stratejik backlink çalışmalarıyla sitenizin sektörel otoritesini güçlendiriyoruz."
    },
    {
        number: "04",
        title: "Sürekli İzleme & İyileştirme",
        description: "SEO dinamik bir süreçtir. Performansı anlık takip ediyor, yeni fırsatlara göre stratejimizi sürekli güncelleyerek zirvedeki yerinizi koruyoruz."
    },
    {
        number: "05",
        title: "Raporlama & Toplantılar",
        description: "Gelişimi aylık şeffaf raporlarla paylaşıyor; düzenli toplantılarla atılacak yeni adımları ve başarı metriklerini birlikte değerlendiriyoruz."
    }
];

export default function SEOPage() {
    return (
        <main className="bg-white">
            {/* GİRİŞ / HERO */}
            <PageHeader
                title="SEO’da Zirveye Ulaşın: Kalıcı Büyüme İçin Stratejik Çözümler"
                description="Bugless Digital olarak SEO’yu sadece üst sıralarda yer alma çabası değil, markanızın dijital dünyadaki güven ve otoritesini inşa etme süreci olarak ele alıyoruz. Veri odaklı, sürdürülebilir ve gerçek dönüşümler getiren SEO yaklaşımımızla, işletmenizi arama sonuçlarında kalıcı bir otoriteye dönüştürüyor; potansiyel müşterilerinizin markanıza en doğru kanallardan ulaşmasını sağlıyoruz."
                ctaText="Ücretsiz SEO Analizi Hazırla"
                ctaHref="/iletisim"
                ctaDescription="Web sitenizi teknik, içerik ve otorite açısından tamamen ücretsiz analiz ediyor; büyüme fırsatlarınızı içeren kapsamlı bir rapor sunuyoruz."
                breadcrumb={
                    <Link
                        href="/hizmetlerimiz/buyume-seo"
                        className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
                    >
                        Büyüme & SEO
                        <ArrowRight size={12} />
                        <span className="text-white">SEO</span>
                    </Link>
                }
            />

            {/* TEMEL DEĞER ÖNERİLERİMİZ */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-110" />
                                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:rotate-6 transition-transform">
                                    <value.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-6 text-neutral-900 leading-tight">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO HİZMETLERİMİZ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            SEO Hizmetlerimiz
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
                                className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
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

            {/* KULLANDIĞIMIZ ARAÇLAR */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black leading-tight">
                                Kullandığımız <br /> <span className="text-gray-400">SEO Araçları</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed font-medium grayscale hover:grayscale-0 transition-all">
                                SEO süreçlerimizde hata payını sıfıra indirmek ve veri odaklı kararlar almak için Semrush, Ahrefs, Google Search Console, Screaming Frog ve Google Analytics gibi dünyanın en iyi SEO araçlarını kullanıyoruz.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {["Semrush", "Ahrefs", "Search Console", "Screaming Frog", "Analytics"].map((tool, i) => (
                                    <span key={i} className="px-6 py-3 bg-white border border-gray-100 rounded-full text-sm font-bold text-gray-400">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="w-full max-w-[320px] md:max-w-md mx-auto lg:max-w-none lg:w-1/2 relative">
                            <div className="aspect-square bg-white rounded-full border border-gray-100 shadow-2xl flex items-center justify-center p-8 relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border border-dashed border-gray-200 rounded-full z-20 pointer-events-none"
                                />
                                <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg z-10">
                                    <Image
                                        src="/images/hizmetler/seo-araclari-img.png"
                                        alt="SEO Araçları ve Veri Analizi"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEDEN BUGLESS? */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black tracking-tight">
                            Neden Bugless?
                        </h2>
                        <div className="w-24 h-1 bg-black mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {advantages.map((adv, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 bg-gray-50 rounded-[30px] flex items-center justify-center text-black mb-6 hover:bg-black hover:text-white transition-all transform hover:rotate-12 border border-gray-100">
                                    <adv.icon size={36} />
                                </div>
                                <h4 className="text-xl font-bold mb-4 text-neutral-900">{adv.title}</h4>
                                <p className="text-gray-600 leading-relaxed font-medium">{adv.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* “SÜREÇ HER ŞEYDİR”: HEDEFLERİNİZE NASIL ULAŞTIRIYORUZ */}
            <section className="py-24 bg-black text-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tight uppercase">
                            Süreç Her Şeydir
                        </h2>
                        <p className="text-gray-400 uppercase tracking-widest text-sm text-center">Hedeflerinize Nasıl Ulaştırıyoruz</p>
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

            {/* SON CTA */}
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
                            Hazırsanız SEO İle Büyümeye Başlayalım
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 italic">
                            “Web sitenizi teknik, içerik ve otorite açısından tamamen ücretsiz analiz ediyoruz. Büyüme fırsatlarınızı içeren kapsamlı bir rapor sunuyor ve size özel bir strateji görüşmesi planlıyoruz.”
                        </p>

                        <Link
                            href="/iletisim"
                            className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-14 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                        >
                            <span className="relative z-10">Ücretsiz SEO Analizi Al ve Randevu Oluştur</span>
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
