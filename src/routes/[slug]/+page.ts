// src/routes/blog/[slug]/+page.js

interface PostMeta {
    title: string;
    date: string;
    categories: string[];
    tags: string[];
    cover?: string;
    banner?: string;
    maincol?: string;
    contrastcol?: string;
}

// @ts-ignore
export const load: PageLoad = async ({ params }) => {
    try {
        const posts = import.meta.glob<{ metadata: PostMeta, default: any }>('/src/posts/*.md');
        const postPath = `/src/posts/${params.slug}.md`;

        if (!posts[postPath]) {
            console.error(`Post ${params.slug} does not exist`);
            return {
                status: 404,
                error: new Error(`Post ${params.slug} not found`)
            };
        }

        const post = await posts[postPath]();
        const { title, date, categories, tags, cover, banner, maincol, contrastcol } = post.metadata;
        const content = post.default;
        
        return {
            content,
            title,
            date,
            categories,
            tags,
            cover,
            banner,
            maincol,
            contrastcol
        };
    } catch (error) {
        console.error(`Error loading post ${params.slug}:`, error);
        throw error;
    }
};