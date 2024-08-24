
interface PostFilter {
    categoryWhitelist?: string[];
    categoryBlocklist?: string[];
    tagWhitelist?: string[];
    tagBlocklist?: string[];
}

export const fetchMarkdownPosts = async (filter: PostFilter = {}) => {
    const allPostFiles = import.meta.glob('/src/posts/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    let allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            // @ts-ignore
            const { metadata } = await resolver();
            const postPath = path.slice(11, -3);

            return {
                meta: metadata,
                path: postPath
            };
        })
    );

    // Filter out posts with the "draft" tag
    allPosts = allPosts.filter(post => !post.meta.tags.includes('draft'));

    // Apply the new filtering logic
    return allPosts.filter(post => {
        const { categories, tags } = post.meta;

        const categoryPass = 
            (!filter.categoryWhitelist || filter.categoryWhitelist.some(cat => categories.includes(cat))) &&
            (!filter.categoryBlocklist || !filter.categoryBlocklist.some(cat => categories.includes(cat)));

        const tagPass = 
            (!filter.tagWhitelist || filter.tagWhitelist.some(tag => tags.includes(tag))) &&
            (!filter.tagBlocklist || !filter.tagBlocklist.some(tag => tags.includes(tag)));

        return categoryPass && tagPass;
    });
};