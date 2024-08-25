<script lang="ts">
    import { onMount } from 'svelte';

    let cursorX = 0;
    let componentRect: [number, number];
    let comp: HTMLElement;

    function handleMouseMove(event: { clientX: number }) {
        // cursorX = event.clientX / window.innerWidth;
        cursorX = (event.clientX - componentRect[0]) / (componentRect[1] - componentRect[0]);
    }

    onMount(() => {
        const updatePosition = () => {
        if (comp) {
            componentRect = [comp.getBoundingClientRect().left, comp.getBoundingClientRect().right];
        }
    };

        updatePosition();
        window.addEventListener('resize', updatePosition);

        return () => {
            window.removeEventListener('resize', updatePosition);
        };
    });
</script>

<svelte:body on:mousemove={handleMouseMove} />

<div bind:this={comp} class="nav-div" style="--cursor-x: {cursorX}" />


<style>
    .nav-div {
        height: 2px;
        width: 100%;
        background: linear-gradient(
            to right,
            transparent,
            var(--main-highlight-dim-2) calc(var(--cursor-x) * 100% - 10%),
            var(--main-highlight) calc(var(--cursor-x) * 100%),
            var(--main-highlight-dim-2) calc(var(--cursor-x) * 100% + 10%),
            transparent
        );
    }
</style>
