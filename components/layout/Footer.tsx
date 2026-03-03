"use client";

import Link from "next/link";
import { useState } from "react";
import { Instagram } from "lucide-react";
import { LegalModal } from "@/components/ui/LegalModal";

type LegalType = 'gizlilik' | 'cerez' | 'kvkk' | 'kullanim';

export function Footer() {
    const currentYear = new Date().getFullYear();
    const [activeModal, setActiveModal] = useState<LegalType | null>(null);

    const legalContent = {
        gizlilik: {
            title: "Gizlilik Politikası",
            content: (
                <div className="space-y-4 text-sm">
                    <p>Bu gizlilik politikası, Bugless Digital'in kullanıcı verilerini nasıl topladığını, kullandığını ve koruduğunu açıklar.</p>
                    <h3 className="text-lg font-bold text-white mt-6">Toplanan Veriler</h3>
                    <p>Sitemizi ziyaret ettiğinizde iletişim formları veya analiz araçları aracılığıyla adınız, e-posta adresiniz ve cihaz bilgileriniz gibi veriler toplanabilir.</p>
                    <h3 className="text-lg font-bold text-white mt-6">Verilerin Kullanımı</h3>
                    <p>Toplanan veriler yalnızca size daha iyi hizmet sunmak, taleplerinize yanıt vermek ve site deneyimini iyileştirmek amacıyla kullanılır.</p>
                    <h3 className="text-lg font-bold text-white mt-6">Veri Güvenliği</h3>
                    <p>Müşteri verileri en yüksek güvenlik standartlarıyla korunmakta ve yasal zorunluluklar haricinde hiçbir 3. taraf ile paylaşılmamaktadır.</p>
                </div>
            )
        },
        cerez: {
            title: "Çerez (Cookie) Politikası",
            content: (
                <div className="space-y-4 text-sm">
                    <p>Bugless Digital web sitesinde, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek amacıyla çerezler (cookies) kullanılmaktadır.</p>
                    <h3 className="text-lg font-bold text-white mt-6">Çerez Nedir?</h3>
                    <p>Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük veri dosyalarıdır.</p>
                    <h3 className="text-lg font-bold text-white mt-6">Hangi Çerezleri Kullanıyoruz?</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Zorunlu Çerezler:</strong> Sitenin temel işlevlerinin çalışması için gereklidir.</li>
                        <li><strong>Analitik Çerezler:</strong> Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur (örn. Google Analytics).</li>
                    </ul>
                    <h3 className="text-lg font-bold text-white mt-6">Çerez Yönetimi</h3>
                    <p>Tarayıcınızın ayarlarından çerez kullanımını kısıtlayabilir veya tamamen kapatabilirsiniz.</p>
                </div>
            )
        },
        kvkk: {
            title: "KVKK Aydınlatma Metni",
            content: (
                <div className="space-y-4 text-sm">
                    <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla Bugless Digital tarafından aşağıda açıklanan kapsamda işlenebilecektir.</p>
                    <h3 className="text-lg font-bold text-white mt-6">Kişisel Verilerin İşlenme Amacı</h3>
                    <p>Kişisel verileriniz, sunduğumuz hizmetlerden faydalanabilmeniz, iletişim formları üzerinden gelen taleplerin yanıtlanması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.</p>
                    <h3 className="text-lg font-bold text-white mt-6">Kişisel Verilerin Aktarılması</h3>
                    <p>Kişisel verileriniz, kanuni yükümlülükler gereği yetkili kamu kurum ve kuruluşları ile yasal çerçevede iş ortaklarımıza aktarılabilir.</p>
                    <h3 className="text-lg font-bold text-white mt-6">İlgili Kişinin Hakları</h3>
                    <p>KVKK'nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini, silinmesini talep etme hakkına sahipsiniz.</p>
                </div>
            )
        },
        kullanim: {
            title: "Kullanım Koşulları",
            content: (
                <div className="space-y-4 text-sm">
                    <p>Bu web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.</p>
                    <h3 className="text-lg font-bold text-white mt-6">Telif Hakkı ve Fikri Mülkiyet</h3>
                    <p>Bu sitede yer alan tüm metinler, görseller, logolar ve tasarımlar Bugless Digital'e aittir. İzinsiz kullanılamaz, kopyalanamaz veya çoğaltılamaz.</p>
                    <h3 className="text-lg font-bold text-white mt-6">Sorumluluk Reddi</h3>
                    <p>Web sitemizdeki içerikler bilgilendirme amaçlıdır. Bugless Digital, bu içeriklerin doğruluğu veya güncelliği konusunda herhangi bir garanti vermez.</p>
                    <h3 className="text-lg font-bold text-white mt-6">Değişiklik Hakkı</h3>
                    <p>Bugless Digital, sitede yer alan bilgileri ve kullanım koşullarını önceden haber vermeksizin dilediği zaman değiştirme hakkını saklı tutar.</p>
                </div>
            )
        }
    };

    return (
        <footer className="bg-black border-t border-white/10 py-12 relative z-10">
            {activeModal && (
                <LegalModal
                    isOpen={!!activeModal}
                    onClose={() => setActiveModal(null)}
                    title={legalContent[activeModal].title}
                    content={legalContent[activeModal].content}
                />
            )}
            
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="mb-6 block">
                            <img
                                src="/logo.png"
                                alt="Bugless Digital Logo"
                                className="h-48 w-auto opacity-100"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Modern dijital deneyimler tasarlayan, yaratıcı ve yenilikçi dijital ajans.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-white mb-4">Hızlı Erişim</h4>
                        <ul className="space-y-2">
                            <li><Link href="/hakkimizda" className="text-gray-400 hover:text-white text-sm">Hakkımızda</Link></li>
                            <li><Link href="/hizmetlerimiz" className="text-gray-400 hover:text-white text-sm">Hizmetlerimiz</Link></li>
                            <li><Link href="/referanslar" className="text-gray-400 hover:text-white text-sm">Referanslar</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-white text-sm">Blog</Link></li>
                            <li><Link href="/iletisim" className="text-gray-400 hover:text-white text-sm">İletişim</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-white mb-4">Hizmetler</h4>
                        <ul className="space-y-2">
                            <li><Link href="/hizmetlerimiz/yazilim-teknoloji" className="text-gray-400 hover:text-white text-sm">Yazılım & Teknoloji</Link></li>
                            <li><Link href="/hizmetlerimiz/reklam-yonetimi" className="text-gray-400 hover:text-white text-sm">Reklam Yönetimi</Link></li>
                            <li><Link href="/hizmetlerimiz/marka-icerik" className="text-gray-400 hover:text-white text-sm">Marka & İçerik Üretimi</Link></li>
                            <li><Link href="/hizmetlerimiz/buyume-seo" className="text-gray-400 hover:text-white text-sm">Büyüme & SEO</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-white mb-4">İletişim</h4>
                        <p className="text-gray-400 text-sm mb-2">info@buglessdigital.com.tr</p>
                        <p className="text-gray-400 text-sm mb-2">0501 609 3535</p>
                        <p className="text-gray-400 text-sm">Fatih Caddesi, Bornova/İzmir</p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.36 6.33 6.33 0 0 0 6.25-6.36V7.98a8.29 8.29 0 0 0 4.49 1.35V5.88a4.81 4.81 0 0 1-2.42-1.19z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs">
                        © {currentYear} Bugless Digital. Tüm hakları saklıdır.
                    </p>
                    <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
                        <button onClick={() => setActiveModal('gizlilik')} className="text-gray-600 hover:text-white text-xs text-left">Gizlilik Politikası</button>
                        <button onClick={() => setActiveModal('cerez')} className="text-gray-600 hover:text-white text-xs text-left">Çerez Politikası</button>
                        <button onClick={() => setActiveModal('kvkk')} className="text-gray-600 hover:text-white text-xs text-left">KVKK Aydınlatma Metni</button>
                        <button onClick={() => setActiveModal('kullanim')} className="text-gray-600 hover:text-white text-xs text-left">Kullanım Koşulları</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
