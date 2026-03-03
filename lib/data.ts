import { Laptop, ShoppingCart, Users, Megaphone, BarChart, MonitorSmartphone } from "lucide-react";

export const serviceCategories = [
    {
        id: "yazilim-teknoloji",
        title: "Yazılım & Teknoloji Çözümleri",
        href: "/hizmetlerimiz/yazilim-teknoloji",
        description: "İşletmenizi geleceğe taşıyan modern yazılım ve gelişmiş teknoloji çözümleri.",
        subServices: [
            {
                id: "web-tasarim",
                title: "Web Tasarım & Geliştirme",
                href: "/hizmetlerimiz/yazilim-teknoloji/web-tasarim-gelistirme",
                description: "Markanızın dijital dünyadaki yüzü olan web sitenizi, en son teknolojilerle ve kullanıcı deneyimini (UX) merkeze alarak tasarlıyoruz.",
                features: ["Özel Tasarım Arayüz (UI)", "Kullanıcı Deneyimi (UX) Optimizasyonu", "Mobil Uyumlu (Responsive) Yapı", "Hızlı Açılış Performansı"]
            },
            {
                id: "crm-is-yonetim",
                title: "CRM & İş Yönetim Sistemleri",
                href: "/hizmetlerimiz/yazilim-teknoloji/crm-is-yonetim-sistemleri",
                description: "İş süreçlerinizi dijitalleştirin. Müşteri ilişkileri, stok takibi ve şirket içi yönetim panelleri.",
                features: ["Müşteri Yönetimi (CRM)", "İnsan Kaynakları Modülleri", "Proje ve Görev Yönetimi", "Depo ve Stok Takibi"]
            },
            {
                id: "ozel-yazilim",
                title: "Özel Yazılım Geliştirme",
                href: "/hizmetlerimiz/yazilim-teknoloji/ozel-yazilim-gelistirme",
                description: "Her işletmenin ihtiyacı farklıdır. İşletmenizin iş akışına tam uyum sağlayan özel yazılım çözümleri geliştiriyoruz.",
                features: ["Özel Raporlama Ekranları", "Mobil Uygulama Desteği", "API Entegrasyonları", "Veritabanı Mimari Tasarımı"]
            }
        ]
    },
    {
        id: "reklam-yonetimi",
        title: "Reklam Yönetimi",
        href: "/hizmetlerimiz/reklam-yonetimi",
        description: "Doğru hedef kitleye, doğru zamanda ve doğru mesajla ulaşarak reklam bütçenizi en verimli şekilde yönetiyoruz.",
        subServices: [
            {
                id: "google-ads",
                title: "Google Ads",
                href: "/hizmetlerimiz/reklam-yonetimi/google-ads",
                description: "Arama ağı, görüntülü reklam ve video reklamlar ile potansiyel müşterilerinize en düşük maliyetle ulaşın.",
                features: ["Arama Ağı Reklamları", "Görüntülü Reklam Ağı", "Remarketing Stratejileri", "Dönüşüm Takibi"]
            },
            {
                id: "sosyal-medya-reklamlari",
                title: "Sosyal Medya Reklamları",
                href: "/hizmetlerimiz/reklam-yonetimi/sosyal-medya-reklamlari",
                description: "Meta (Facebook, Instagram), LinkedIn ve TikTok reklamları ile markanızın görünürlüğünü ve satışlarını artırın.",
                features: ["Hedef Kitle Analizi", "Kreatif Reklam Tasarımları", "A/B Testleri", "Performans Raporlama"]
            }
        ]
    },
    {
        id: "marka-icerik",
        title: "Marka & İçerik Üretimi",
        href: "/hizmetlerimiz/marka-icerik",
        description: "Markanızın dilini ve görsel kimliğini profesyonel içerik üretimiyle güçlendiriyoruz.",
        subServices: [
            {
                id: "logo-tasarimi",
                title: "Logo Tasarımı",
                href: "/hizmetlerimiz/marka-icerik/logo-tasarimi",
                description: "Markanızın kimliğini yansıtan, akılda kalıcı ve modern logo tasarımları hazırlıyoruz.",
                features: ["Kurumsal Kimlik Tasarımı", "Vektörel Çizimler", "Renk ve Tipografi Belirleme", "Kullanım Kılavuzu"]
            },
            {
                id: "produksiyon",
                title: "Prodüksiyon",
                href: "/hizmetlerimiz/marka-icerik/produksiyon",
                description: "Profesyonel fotoğraf ve video çekimleri ile markanızın hikayesini en etkileyici şekilde anlatıyoruz.",
                features: ["Tanıtım Filmi", "Ürün Fotoğrafçılığı", "Sosyal Medya Video İçerikleri", "Drone Çekimi"]
            },
            {
                id: "sosyal-medya-yonetimi",
                title: "Sosyal Medya Yönetimi",
                href: "/hizmetlerimiz/marka-icerik/sosyal-medya-yonetimi",
                description: "Markanızın sosyal medyadaki sesini profesyonelce yönetiyor, takipçilerinizle etkileşimi artırıyoruz.",
                features: ["İçerik Stratejisi ve Planlama", "Topluluk Yönetimi", "Rakip Analizi", "Etkileşim Artırma"]
            }
        ]
    },
    {
        id: "buyume-seo",
        title: "Büyüme & SEO",
        href: "/hizmetlerimiz/buyume-seo",
        description: "Organik görünürlüğünüzü artıyor ve sürdürülebilir büyüme stratejileri geliştiriyoruz.",
        subServices: [
            {
                id: "seo",
                title: "Arama Motoru Optimizasyonu (SEO)",
                href: "/hizmetlerimiz/buyume-seo/seo-arama-motoru-optimizasyonu",
                description: "Web sitenizi Google'da üst sıralara taşıyacak veri odaklı SEO çalışmaları yürütüyoruz.",
                features: ["Teknik SEO Analizi", "Anahtar Kelime Araştırması", "İçerik Optimizasyonu", "Backlink Stratejileri"]
            },
            {
                id: "dijital-strateji",
                title: "Dijital Strateji Danışmanlığı",
                href: "/hizmetlerimiz/buyume-seo/dijital-strateji-danismanligi",
                description: "İşletmenizin dijital dönüşüm yol haritasını çiziyor ve büyüme hedeflerinize rehberlik ediyoruz.",
                features: ["Pazar Analizi", "Kullanıcı Yolculuğu Tasarımı", "Büyüme Metrikleri Takibi", "Dönüşüm Oranı Optimizasyonu (CRO)"]
            }
        ]
    }
];

export const referencesData = [
    {
        id: "website-referanslari",
        title: "Website Referansları",
        description: "Tasarladığımız ve geliştirdiğimiz modern web siteleri.",
        items: ["WRO48", "İçel Solar Market", "Serene", "Vera Temizlik"]
    },
    {
        id: "sosyal-medya-referanslari",
        title: "Sosyal Medya Referansları",
        description: "Yönettiğimiz sosyal medya hesapları ve başarı hikayeleri.",
        items: [] as string[]
    },
    {
        id: "reklam-yonetimi-referanslari",
        title: "Reklam Yönetimi Referansları",
        description: "Yüksek dönüşüm sağlayan dijital reklam kampanyalarımız.",
        items: [] as string[]
    },
    {
        id: "crm-referanslari",
        title: "CRM Referansları",
        description: "İş süreçlerini dijitalleştirdiğimiz firmalar.",
        items: ["Uçanlar"]
    }
];

export const startupsData: {
    id: string;
    name: string;
    category: string;
    description: string;
    fullDescription: string;
    features: string[];
    status: string;
    techStack: string[];
    href: string;
}[] = [
        {
            id: "play-my-jam",
            name: "Play My Jam",
            category: "Mobil Uygulama",
            description: "Müzik zevkini sosyalleştiren, mekanlarda çalacak şarkıları oylama ile belirleyen yenilikçi mobil uygulama.",
            fullDescription: "Play My Jam, müzik deneyimini tamamen yeniden tanımlayan bir mobil uygulamadır. Kullanıcılar mekanlarındaki müzik çalma listesine katkıda bulunabilir, favori şarkılarını önerebilir ve diğer kullanıcıların önerilerini oylayabilir. Mekan sahipleri için de güçlü bir yönetim paneli sunarak, müşteri memnuniyetini artırmayı hedefler.",
            features: [
                "Şarkı oylama sistemi",
                "Mekan bazlı müzik listeleri",
                "Gerçek zamanlı sıralama",
                "Kullanıcı profilleri",
                "Mekan yönetim paneli"
            ],
            status: "Yayında",
            techStack: ["React Native", "Node.js", "MongoDB", "Socket.io"],
            href: ""
        },
        {
            id: "santiye-cepte",
            name: "Şantiye Cepte",
            category: "Web Uygulama",
            description: "İnşaat sektörüne özel geliştirilen, şantiye yönetimini dijitalleştiren kapsamlı proje yönetim platformu.",
            fullDescription: "Şantiye Cepte, inşaat sektöründeki proje yönetimi süreçlerini kolaylaştırmak için tasarlanmış kapsamlı bir dijital platformdur. Şantiye takibi, malzeme yönetimi, iş gücü planlaması ve raporlama gibi kritik süreçleri tek bir çatı altında toplar.",
            features: [
                "Proje takip sistemi",
                "Malzeme yönetimi",
                "İş gücü planlaması",
                "Anlık raporlama",
                "Mobil uyumlu arayüz"
            ],
            status: "Geliştirme Aşamasında",
            techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
            href: ""
        }
    ];

