export const fetchMarkdownPosts = async (category = null, tag = null, ignoretags = null) => {
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

    let filteredPosts = allPosts;

    // filter out posts if filter is applied
    filteredPosts = ignoretags ? allPosts.filter(post => !post.meta.tags.includes(ignoretags)) : allPosts;

    // Filter posts by category or tag if they are provided
    filteredPosts = category || tag
        ? allPosts.filter(post => 
            (category ? post.meta.categories.includes(category) : false) ||
            (tag ? post.meta.tags.includes(tag) : false)
        )
        : allPosts;

    return filteredPosts;
};