<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
    import Scanline from "$lib/utils/components/scanline.svelte";
import type { PageData } from "./$types";
    import { afterUpdate, onMount, tick } from "svelte";

    export let data: PageData;

    onMount(async () => {
        const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
        headers.forEach((header, index) => {
            if (header.textContent !== null) {
                const ref = header.textContent.toLowerCase().replace(/ /g, "-");
                header.id = ref;
            }
        });

        await tick();
        const images = document.querySelectorAll(
            ".centered-container :global(.img.cap)",
        );

        images.forEach((img) => {
            const imageElement = img as HTMLImageElement;
            const captionText = imageElement.alt;
            const caption = document.createElement("div");
            caption.className = "caption";
            caption.textContent = captionText;
            if (imageElement.parentNode) {
                imageElement.parentNode.insertBefore(
                    caption,
                    imageElement.nextSibling,
                );
            }
        });
    });

    afterUpdate(() => {
        const tocHeader = document.querySelector("h3");
        if (tocHeader) {
            const tocList = tocHeader.nextElementSibling;
            if (tocList && tocList.tagName === "UL") {
                let toc = document.querySelector(".toc");
                if (toc !== null) {
                    toc.innerHTML = "";
                    toc.appendChild(tocHeader);
                    toc.appendChild(tocList);
                }

                const listItems = tocList.querySelectorAll("li");
                listItems.forEach((item) => {
                    const correspondingHeader = Array.from(
                        document.querySelectorAll("h1, h2, h3, h4, h5, h6"),
                    ).find((header) => header.textContent === item.textContent);
                    if (correspondingHeader) {
                        const originalContent = item.innerHTML;
                        item.innerHTML = `<a href="#${correspondingHeader.id}">${originalContent}</a>`;
                    }
                });
            }
        }
    });

    const hasNoBannerTag = data.tags && data.tags.includes("no-banner");
    const banner = data.banner ? data.banner : data.cover;

    let scroll = 0;


</script>

<svelte:window bind:scrollY={scroll} />

{#if !hasNoBannerTag}
    <!-- svelte-ignore a11y-missing-attribute -->
    <img
        class="cover-banner"
        src={banner}
        style:transform={`translate3d(0, ${scroll / 2}px, 0)`}
    />
{/if}
<div class="post-header {hasNoBannerTag ? 'no-banner' : ''}">
    <h1>{data.title}</h1>
    <Scanline />
</div>

<div class="centered-container">
    <div class="toc"></div>
    <article class="post">
        <svelte:component this={data.content} />
    </article>
</div>

<style>
    .post-header {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        max-width: 50rem;
        margin-left: auto;
        margin-right: auto;
        text-shadow: #ffffff50 0 0 20px;
    }
    .post-header.no-banner {
        height: 15rem;
    }
    .cover-banner {
        width: 100%;
        max-height: 100vh;
        object-fit: cover;
        z-index: 1;
        top: 0;
        margin-bottom: -5rem;
        mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 75%,
            rgba(0, 0, 0, 0) 100%
        ); /* Standard property */
        -webkit-mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 75%,
            rgba(0, 0, 0, 0) 100%
        );
    }

    .toc {
        position: sticky;
        top: 0;
        max-width: 10rem;
        height: 100%;
    }
    .toc:not(:empty) {
        padding-right: 2rem;
    }

    .toc :global(h3) {
        /* styles for h3 elements inside .toc */
        color: #c0c0c0;
    }

    .toc :global(ul) {
        /* styles for ul elements inside .toc */
        list-style-type: none;
        padding: 0;
    }

    .toc :global(ul > li) {
        /* styles for li elements that are direct children of ul elements inside .toc */
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }

    .toc :global(ul) {
        border-left: 1px solid #333;
    }

    .centered-container { 
        position: relative;
        z-index: 100;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: 60rem;
        padding-left: 2rem;
        padding-right: 2rem;
        background: linear-gradient(to right, #12121200, #12121290 15%, #12121290 85%, #12121200);
    }

    .post {
        display: flex;
        flex-direction: column;
        width:  100%;
        max-width: 50rem;
        padding-bottom: 20rem;
    }

    :global(code) {
        width: 100%;
    }

    @media (max-width: 768px) {
        .toc {
            display: inline;
            top: auto;
            width: 100%;
            max-width: 100%;
            height: auto;
        }

        .centered-container {
            flex-direction: column;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
    }

    .centered-container :global(img) {
        width: 100%;
        align-self: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .centered-container :global(.tiny) {
        width: 6rem;
    }
    .centered-container :global(.round) {
        border-radius: 5rem;
    }
    .centered-container :global(.caption) {
        text-align: center;
        font-size: 0.8rem;
        color: #666;
        margin-top: 0.5rem;
    }

    .date {
        margin-top: -2rem;
        margin-bottom: 3rem;
        font-size: 0.8rem;
        font-style: italic;
    }

    :global(ul) {
        margin-block-start: 0px;
        max-width: 40rem;
        margin-left: auto;
        margin-right: auto;
    }

    .post :global(h1) {
        margin-top: 4rem;
        font-size: 2rem;
    }
    .post :global(h2) {
        font-size: 1.8rem;
    }
    .post :global(h3) {
        font-size: 1.6rem;
    }
    .post :global(h4) {
        font-size: 1.4rem;
    }

    .post :global(p) {
        max-width: 40rem;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .post :global(video) {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

</style>
