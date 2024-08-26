<script>
    // @ts-nocheck
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import { fetchMarkdownPosts } from "$lib/utils";
    import TagFilter from "$lib/utils/components/tag-filter.svelte";
    import GalleryItem from "$lib/utils/components/gallery-item.svelte";

    /**
     * @type {any[]}
     */
    let posts = [];
    let filteredPosts = [];
    let categories = [];

    onMount(async () => {
        posts = await fetchMarkdownPosts({
           categoryBlocklist: ["about"]
        });
        filteredPosts = posts;
        categories = Array.from(
            new Set(posts.flatMap((post) => post.meta.tags)),
        );
    });

    function toggleMenu() {
        console.log("toggle menu");
    }

    function handlecategoryselected(event) {
        const selectedTag = event.detail;
        if (selectedTag) {
            filteredPosts = posts.filter((post) =>
                post.meta.categories.includes(selectedTag),
            );
        } else {
            filteredPosts = posts;
        }
    }

    let selectedPost = null;

    let colors = [
        "#6B8E23",
        "#556B2F",
        "#483D8B",
        "#4B0082",
        "#696969",
        "#800000",
        "#8B4513",
    ];

    let bcolor = colors[Math.floor(Math.random() * colors.length)];

    function handleSelect(event) {
        selectedPost = event.detail;
    }
</script>

<div class="container">
    <div class="horz-cont">
        <div class="grid-container">
            {#each filteredPosts as post}
                <GalleryItem on:select={handleSelect} post={post} selectedPost={selectedPost} />
            {/each}
        </div>
    </div>
</div>

<style>
    .container {
        max-width: 40rem;
        margin: 0 auto;
        padding: 20px;
    }


    .grid-container {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        margin-bottom: 20rem;
    }

    @media (max-width: 768px) {
        .container {
            padding: 4px;
        }
    }
    @media (min-width: 768px) {
        .container {
            max-width: 80rem;
        }
        .grid-container {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
    @media (min-width: 1280px) {
        .grid-container {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }
</style>
