import { Laptop, ShoppingCart, Users, Megaphone, BarChart, MonitorSmartphone } from "lucide-react";

export const servicesData = [
    {
        id: "kurumsal-web-tasarim",
        title: "Kurumsal Web Tasarım",
        shortTitle: "Web Tasarım",
        icon: Laptop,
        description: "Markanızın dijital dünyadaki yüzü olan web sitenizi, en son teknolojilerle ve kullanıcı deneyimini (UX) merkeze alarak tasarlıyoruz.",
        fullDescription: "Modern iş dünyasında web sitesi, bir firmanın dijital kimliğidir. Bugless Digital olarak, sadece estetik değil, aynı zamanda fonksiyonel, hızlı ve dönüşüm odaklı web siteleri tasarlıyoruz. Mobil uyumluluktan SEO altyapısına kadar her detayı incelikle işliyoruz.",
        features: ["Özel Tasarım Arayüz (UI)", "Kullanıcı Deneyimi (UX) Optimizasyonu", "Mobil Uyumlu (Responsive) Yapı", "Hızlı Açılış Performansı", "SEO Dostu Kodlama", "Kolay Yönetilebilir Panel"],
        href: "/hizmetlerimiz/kurumsal-web-tasarim"
    },
    {
        id: "e-ticaret-cozumleri",
        title: "E-Ticaret Çözümleri",
        shortTitle: "E-Ticaret",
        icon: ShoppingCart,
        description: "Satış odaklı, güvenli ve yönetimi kolay e-ticaret altyapıları ile işinizi internete taşıyın.",
        fullDescription: "Ürünlerinizi 7/24 satabileceğiniz, güvenli ve ölçeklenebilir e-ticaret sistemleri kuruyoruz. Ödeme sistemleri entegrasyonundan kargo modüllerine, stok takibinden pazar yeri entegrasyonlarına kadar ihtiyacınız olan tüm süreçleri yönetiyoruz.",
        features: ["Gelişmiş E-Ticaret Altyapısı", "Pazaryeri Entegrasyonları", "Kargo ve Lojistik Entegrasyonu", "Güvenli Ödeme Sistemleri", "Stok ve Sipariş Yönetimi", "Kampanya Modülleri"],
        href: "/hizmetlerimiz/e-ticaret-cozumleri"
    },
    {
        id: "crm-yazilimlari",
        title: "CRM & Özel Yazılım",
        shortTitle: "CRM & Yazılım",
        icon: Users,
        description: "İş süreçlerinizi dijitalleştirin. Müşteri ilişkileri, stok takibi ve şirket içi yönetim panelleri.",
        fullDescription: "Her işletmenin ihtiyacı farklıdır. Hazır paketlerin yetersiz kaldığı noktalarda, işletmenizin iş akışına tam uyum sağlayan, verimliliği artıran özel yazılım çözümleri ve CRM sistemleri geliştiriyoruz.",
        features: ["Müşteri Yönetimi (CRM)", "İnsan Kaynakları Modülleri", "Proje ve Görev Yönetimi", "Depo ve Stok Takibi", "Özel Raporlama Ekranları", "Mobil Uygulama Desteği"],
        href: "/hizmetlerimiz/crm-yazilimlari"
    },
    {
        id: "dijital-reklam",
        title: "Dijital Reklam Yönetimi",
        shortTitle: "Dijital Reklam",
        icon: Megaphone,
        description: "Google ve Sosyal Medya reklamları ile potansiyel müşterilerinize en düşük maliyetle ulaşın.",
        fullDescription: "Reklam bütçenizi en verimli şekilde kullanarak, doğru hedef kitleye, doğru zamanda ve doğru mesajla ulaşıyoruz. Google Ads, Meta (Facebook/Instagram) ve LinkedIn reklamlarında profesyonel stratejiler üretiyoruz.",
        features: ["Google Ads (Arama & Görüntülü)", "Sosyal Medya Reklamları", "Dönüşüm Kurulumu & Takibi", "Yeniden Pazarlama (Remarketing)", "A/B Testleri", "Detaylı Aylık Raporlama"],
        href: "/hizmetlerimiz/dijital-reklam"
    },
    {
        id: "sosyal-medya",
        title: "Sosyal Medya Yönetimi",
        shortTitle: "Sosyal Medya",
        icon: BarChart,
        description: "Markanızın sosyal medyadaki sesini profesyonelce yönetin, takipçilerinizle etkileşimi artırın.",
        fullDescription: "Sosyal medya sadece paylaşım yapmak değil, bir topluluk oluşturmaktır. Markanızın diline uygun içerik stratejileri geliştiriyor, görsel tasarımlar hazırlıyor ve topluluğunuzu yönetiyoruz.",
        features: ["İçerik Stratejisi ve Planlama", "Profesyonel Tasarım & Video", "Topluluk Yönetimi & Moderasyon", "Rakip ve Sektör Analizi", "Etkileşim Artırma Çalışmaları", "Influencer Pazarlama"],
        href: "/hizmetlerimiz/sosyal-medya"
    },
    {
        id: "portfolyo-blog",
        title: "Portfolyo & Blog Siteleri",
        shortTitle: "Kişisel & Blog",
        icon: MonitorSmartphone,
        description: "Kişisel markanızı güçlendiren, minimalist ve içerik odaklı web siteleri.",
        fullDescription: "Sanatçılar, mimarlar, yazarlar veya düşünce liderleri için; işlerini en iyi şekilde sergileyebilecekleri, okuma deneyimi yüksek ve estetik portfolyo/blog siteleri tasarlıyoruz.",
        features: ["Minimalist ve Odaklı Tasarım", "Hızlı İçerik Yönetim Sistemi", "Newsletter/Bülten Entegrasyonu", "Gelişmiş Galeri Özellikleri", "Yazar Profilleri", "Sosyal Medya Paylaşım Araçları"],
        href: "/hizmetlerimiz/portfolyo-blog"
    }
];

export const referencesData = [
    {
        id: "website-referanslari",
        title: "Website Referansları",
        description: "Tasarladığımız ve geliştirdiğimiz modern web siteleri.",
        items: ["Referans Firma 1", "Referans Firma 2", "Referans Firma 3", "Referans Firma 4"]
    },
    {
        id: "sosyal-medya-referanslari",
        title: "Sosyal Medya Referansları",
        description: "Yönettiğimiz sosyal medya hesapları ve başarı hikayeleri.",
        items: ["Referans Firma 5", "Referans Firma 6", "Referans Firma 7", "Referans Firma 8"]
    },
    {
        id: "reklam-yonetimi-referanslari",
        title: "Reklam Yönetimi Referansları",
        description: "Yüksek dönüşüm sağlayan dijital reklam kampanyalarımız.",
        items: ["Referans Firma 9", "Referans Firma 10", "Referans Firma 11", "Referans Firma 12"]
    },
    {
        id: "crm-referanslari",
        title: "CRM Referansları",
        description: "İş süreçlerini dijitalleştirdiğimiz firmalar.",
        items: ["Referans Firma 13", "Referans Firma 14", "Referans Firma 15", "Referans Firma 16"]
    }
];

export const startupsData = [
    {
        id: "fintech-pro",
        name: "FinTech Pro",
        category: "FinTech",
        description: "KOBİ'ler için geliştirilmiş, yapay zeka destekli finansal analiz ve nakit akışı yönetim platformu. Gelir-gider takibini otomatikleştirir, geleceğe yönelik finansal projeksiyonlar sunar.",
        fullDescription: "FinTech Pro, küçük ve orta ölçekli işletmelerin finansal sağlıklarını anlık olarak takip etmelerini sağlayan gelişmiş bir platformdur. Banka entegrasyonları, otomatik fatura işleme ve yapay zeka destekli nakit akışı tahminleri ile işletme sahiplerine stratejik kararlar almada yardımcı olur.",
        features: ["Otomatik Banka Entegrasyonu", "Yapay Zeka Destekli Tahminleme", "Gelir/Gider Takibi", "Fatura Yönetimi", "Çoklu Kullanıcı Desteği"],
        status: "Beta Yayında",
        techStack: ["React", "Node.js", "Python (AI)", "PostgreSQL"],
        href: "/startuplar/fintech-pro"
    },
    {
        id: "ecolog",
        name: "EcoLog",
        category: "Lojistik / Sustainability",
        description: "Lojistik firmaları için karbon ayak izi hesaplama ve optimizasyon aracı. Rotaları analiz ederek hem yakıt tasarrufu sağlar hem de çevresel etkiyi minimize eder.",
        fullDescription: "EcoLog, lojistik sektöründe sürdürülebilirliği artırmak amacıyla geliştirilmiştir. Filoların rota verilerini analiz ederek karbon salınımını hesaplar ve daha çevreci rota alternatifleri sunar. ISO standartlarına uygun raporlama modülü ile yeşil lojistik sertifikasyonu süreçlerini kolaylaştırır.",
        features: ["Karbon Ayak İzi Hesaplama", "Rota Optimizasyonu", "ISO Uyumlu Raporlama", "Filo Yönetimi", "Sürücü Performans Analizi"],
        status: "Geliştirme Aşamasında",
        techStack: ["Next.js", "Go", "PostGIS", "Docker"],
        href: "/startuplar/ecolog"
    },
    {
        id: "smartmenu",
        name: "SmartMenu",
        category: "Horeca",
        description: "Restoranlar için QR tabanlı, dinamik ve çok dilli dijital menü sistemi. Sipariş verme ve ödeme özellikleriyle entegre çalışır.",
        fullDescription: "SmartMenu, restoran ve kafeler için geliştirilen yeni nesil bir dijital menü çözümüdür. Müşteriler QR kodu okutarak menüye, görsellere ve içerik detaylarına ulaşabilir, garson çağırmadan sipariş verebilir ve ödeme yapabilir. İşletmeler ise panellerinden anlık fiyat ve ürün güncellemesi yapabilir.",
        features: ["QR Kodlu Dijital Menü", "Online Sipariş ve Ödeme", "Çoklu Dil Desteği", "Stok Yönetimi", "Masa Yönetimi"],
        status: "Yayında",
        techStack: ["Vue.js", "Firebase", "Stripe"],
        href: "/startuplar/smartmenu"
    }
];
