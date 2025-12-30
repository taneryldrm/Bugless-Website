"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import { Code, Sparkles, Target, Lightbulb, Rocket, Search, PenTool, Zap, CheckCircle2 } from "lucide-react";

const stats = [
    { label: "Tamamlanan Proje", value: "50+" },
    { label: "Müşteri Memnuniyeti", value: "%100" },
    { label: "Yıllık Deneyim", value: "8+" },
    { label: "Teknik Destek", value: "7/24" },
];

const values = [
    {
        icon: Target,
        title: "Misyonumuz",
        description: "Müşterilerimizin dijital potansiyellerini maksimuma çıkararak, sürdürülebilir büyümelerine katkı sağlamak."
    },
    {
        icon: Lightbulb,
        title: "Vizyonumuz",
        description: "Global ölçekte tanınan, teknolojiyi sanata dönüştüren ve sektöründe standartları belirleyen öncü bir marka olmak."
    },
    {
        icon: Code,
        title: "Bugless Felsefesi",
        description: "Sadece çalışan kodlar değil, hatasız ve akıcı deneyimler tasarlıyoruz. Mükemmellik detaylarda gizlidir."
    }
];

const process = [
    {
        icon: Search,
        title: "Keşif & Analiz",
        description: "İhtiyaçlarınızı dinliyor, pazar araştırması yapıyor ve en doğru stratejiyi belirliyoruz."
    },
    {
        icon: PenTool,
        title: "Tasarım & Prototip",
        description: "Kullanıcı deneyimini odağa alarak modern ve etkileyici arayüzler tasarlıyoruz."
    },
    {
        icon: Code,
        title: "Geliştirme",
        description: "En son teknolojileri kullanarak güvenli, hızlı ve ölçeklenebilir kod yazıyoruz."
    },
    {
        icon: CheckCircle2,
        title: "Test & Optimizasyon",
        description: "Tüm cihazlarda ve senaryolarda testler yaparak kusursuz bir ürün ortaya çıkarıyoruz."
    },
    {
        icon: Rocket,
        title: "Yayın & Destek",
        description: "Projenizi hayata geçiriyor ve sonrasında da yanınızda olmaya devam ediyoruz."
    }
];

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="Hakkımızda"
                description="Teknoloji ve yaratıcılığın kesişim noktasında, markanız için değer üretiyoruz."
            />

            {/* Intro Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black">
                                Dijital Dünyanın <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    Mimarlarıyız.
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Bugless Digital, dijital dünyanın karmaşık problemlerine akılcı ve estetik çözümler üretmek amacıyla kurulmuş yeni nesil bir dijital ajanstır.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Ekibimiz, tasarımcılar, yazılımcılar ve stratejistlerden oluşan multidisipliner bir yapıya sahiptir. Her projeyi kendi girişimimiz gibi sahipleniyor, en ince detayına kadar titizlikle çalışıyoruz.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60" />
                            <div className="relative grid grid-cols-2 gap-6 p-8">
                                <div className="space-y-6 mt-12">
                                    <div className="bg-black text-white p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                        <Code size={32} className="mb-4 text-blue-400" />
                                        <h4 className="font-bold text-lg">Temiz Kod</h4>
                                        <p className="text-sm text-gray-400 mt-2">Performanslı ve güvenli altyapılar.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                                        <Zap size={32} className="mb-4 text-yellow-500" />
                                        <h4 className="font-bold text-lg text-black">Hızlı Çözüm</h4>
                                        <p className="text-sm text-gray-500 mt-2">Agile süreçlerle hızlı teslimat.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                                        <Sparkles size={32} className="mb-4 text-purple-500" />
                                        <h4 className="font-bold text-lg text-black">Yaratıcı Tasarım</h4>
                                        <p className="text-sm text-gray-500 mt-2">Kullanıcı odaklı modern arayüzler.</p>
                                    </div>
                                    <div className="bg-black text-white p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                        <Target size={32} className="mb-4 text-green-400" />
                                        <h4 className="font-bold text-lg">Sonuç Odaklı</h4>
                                        <p className="text-sm text-gray-400 mt-2">Ölçülebilir başarı kriterleri.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-black text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <h3 className="text-4xl md:text-5xl font-display font-bold mb-2 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                                    {stat.value}
                                </h3>
                                <p className="text-gray-400 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Değerlerimiz</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Bizi biz yapan ve her kararımızda bize yol gösteren temel prensiplerimiz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                                    <item.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Çalışma Sürecimiz</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Fikirden ürüne giden yolda, şeffaf ve planlı bir süreç yönetiyoruz.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gray-100" />

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                            {process.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="w-20 h-20 mx-auto bg-black text-white rounded-full flex items-center justify-center mb-6 shadow-lg relative z-10 border-4 border-white">
                                        <step.icon size={28} />
                                    </div>
                                    <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed px-2">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
