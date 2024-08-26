<script lang="ts">
    import { onMount } from "svelte";

    let cursorX = 0;
    let cursorY = 0;
    let elementTop = 0;
    let elementBottom = 0;
    let windowHeight = 0;

    let cursorW = 10;
    let componentRect: [number, number];
    let comp: HTMLElement;

    function handleMouseMove(event: { clientX: number; clientY: number }) {
        cursorX =
            (event.clientX - componentRect[0]) /
            (componentRect[1] - componentRect[0]);
        const rect = comp.getBoundingClientRect();
        const elementCenterY = (rect.top + rect.bottom) / 2;
        const distanceY = Math.abs(event.clientY - elementCenterY);

        const maxDistance = window.innerHeight / 2;
        const dimFactor = 1 - Math.min(distanceY / maxDistance, 1);

        comp.style.setProperty("--highlight-intensity", dimFactor.toString());
    }

    onMount(() => {
        const updatePosition = () => {
            if (comp) {
                componentRect = [
                    comp.getBoundingClientRect().left,
                    comp.getBoundingClientRect().right,
                ];
                let compWidth = componentRect[1] - componentRect[0];
                let windowWidth = window.innerWidth;
                let ratio = compWidth / windowWidth;
                cursorW = cursorW / ratio;
            }
        };

        const handleScroll = () => {
            handleMouseMove({
                clientX: window.scrollX + window.innerWidth / 2,
                clientY: window.scrollY + window.innerHeight / 2,
            });
        }

        updatePosition();
        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<svelte:body on:mousemove={handleMouseMove} />

<div
    bind:this={comp}
    class="nav-div"
    style="--cursor-x: {cursorX}; --cursor-w: {cursorW}%"
/>

<style>
    .nav-div {
        height: 2px;
        width: 100%;
        background: linear-gradient(
            to right,
            transparent,
            rgba(
                    var(--main-highlight-rgb),
                    calc(0.2 * var(--highlight-intensity))
                )
                calc(var(--cursor-x) * 100% - var(--cursor-w)),
            rgba(var(--main-highlight-rgb), var(--highlight-intensity))
                calc(var(--cursor-x) * 100%),
            rgba(
                    var(--main-highlight-rgb),
                    calc(0.2 * var(--highlight-intensity))
                )
                calc(var(--cursor-x) * 100% + var(--cursor-w)),
            transparent
        );
    }
</style>
