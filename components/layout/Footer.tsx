import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="mb-6 block">
                            <img
                                src="/logo.png"
                                alt="Bugless Digital Logo"
                                className="h-24 w-auto opacity-100"
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
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-white mb-4">Hizmetler</h4>
                        <ul className="space-y-2">
                            <li><Link href="/hizmetlerimiz#web" className="text-gray-400 hover:text-white text-sm">Web Tasarım</Link></li>
                            <li><Link href="/hizmetlerimiz#ecommerce" className="text-gray-400 hover:text-white text-sm">E-Ticaret</Link></li>
                            <li><Link href="/hizmetlerimiz#seo" className="text-gray-400 hover:text-white text-sm">SEO & Sosyal Medya</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-white mb-4">İletişim</h4>
                        <p className="text-gray-400 text-sm mb-2">info@buglessdigital.com.tr</p>
                        <p className="text-gray-400 text-sm mb-2">0501 609 3535</p>
                        <p className="text-gray-400 text-sm">Fatih Caddesi, Bornova/İzmir</p>
                        <div className="flex gap-4 mt-4">
                            {/* Social Icons could go here */}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs">
                        © {currentYear} Bugless Digital. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/gizlilik" className="text-gray-600 hover:text-white text-xs">Gizlilik Politikası</Link>
                        <Link href="/cerez" className="text-gray-600 hover:text-white text-xs">Çerez Politikası</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
