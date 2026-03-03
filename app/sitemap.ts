import { MetadataRoute } from 'next';
import { serviceCategories } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    // Projenin canlı yayınlanacağı ana domain
    const baseUrl = 'https://buglessdigital.com.tr';

    // Ana sayfalarımız
    const staticRoutes = [
        '',
        '/hakkimizda',
        '/hizmetlerimiz',
        '/referanslar',
        '/blog',
        '/iletisim',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Alt hizmet sayfalarımız (lib/data.ts içinden otomatik çekiliyor)
    const serviceRoutes = serviceCategories.flatMap((category) => {
        const catRoute = {
            url: `${baseUrl}${category.href}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        };

        const subRoutes = category.subServices.map((sub) => ({
            url: `${baseUrl}${sub.href}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }));

        return [catRoute, ...subRoutes];
    });

    // Not: Dinamik localStorage blog içerikleri Next.js build / server aşamasında erişilebilir olmadığı için
    // onları buraya statik ekleyemiyoruz. Bir veritabanı bağlandığında dinamik olarak buraya inject edilebilir.

    return [...staticRoutes, ...serviceRoutes];
}
