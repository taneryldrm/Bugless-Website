import { PageHeader } from "@/components/ui/PageHeader";
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

// Revalidate every 60 seconds
export const revalidate = 60;

export async function generateStaticParams() {
    const query = `*[_type == "post"]{
    slug
  }`;
    const posts = await client.fetch(query);

    return posts.map((post: any) => ({
        slug: post.slug.current,
    }));
}

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    category,
    publishedAt,
    body
  }`;
    return client.fetch(query, { slug });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <PageHeader
                title={post.title}
                description={post.category || "Blog"}
            />

            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        {post.publishedAt && (
                            <p className="text-gray-500 mb-8">{new Date(post.publishedAt).toLocaleDateString("tr-TR")}</p>
                        )}
                        <PortableText value={post.body} />
                    </div>
                </div>
            </section>
        </>
    );
}
