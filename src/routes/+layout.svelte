<script lang="ts">
	import { base } from "$app/paths";
	import rust from "svelte-highlight/languages/rust";
	import "../styles/code.css";
	import * as rive from "@rive-app/canvas";

	import { onMount } from "svelte";
	import { goto } from "$app/navigation";

	import { page } from "$app/stores";

	let riv_logo: HTMLCanvasElement;

	onMount(async () => {
		const rlogo = new rive.Rive({
			src: "/teodosin_logo.riv",
			canvas: riv_logo,
			autoplay: true,
			stateMachines: "toggle",
			onLoad: () => {
				rlogo.resizeDrawingSurfaceToCanvas();
			},
		});
	});

	let cursorX = 0;

	function handleMouseMove(event: { clientX: number }) {
		cursorX = event.clientX / window.innerWidth;
		console.log(cursorX);
	}
</script>

<svelte:body on:mousemove={handleMouseMove}/>

<nav class="nav">
	<div class="nav-cont">
		<div class="side">
			<button
				class="nav-btn"
				on:click={() => goto("/")}
				class:active={$page.url.pathname === "/portfolio"}
			>
				Portfolio
			</button>
			<button
				class="nav-btn"
				on:click={() => goto("/karta")}
				class:active={$page.url.pathname === "/karta"}
			>
				Karta
			</button>
		</div>

		<canvas class="logo" bind:this={riv_logo} width="100" height="100"
		></canvas>

		<div class="side">
			<button
				class="nav-btn"
				on:click={() => goto("/gallery")}
				class:current={$page.url.pathname === "/gallery"}
			>
				Gallery
			</button>
			<button
				class="nav-btn"
				on:click={() => goto("/about")}
				class:active={$page.url.pathname === "/about"}
			>
				About
			</button>
			<button
				class="nav-btn"
				on:click={() => goto("/contact")}
				class:active={$page.url.pathname === "/contact"}
			>
				Contact
			</button>
		</div>
	</div>

	<div class="nav-div" style="--cursor-x: {cursorX}" />
</nav>

<slot />

<style>
	@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Corben:wght@400;700&family=DM+Serif+Text:ital@0;1&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

	:global(body) {
		font-family: "Corben", serif;
		min-height: 100vh;
		margin: 0;
		font-size: 1rem;
		background-color: #121212;
		color: #ffbd2d;
	}

	:global(h1) {
		font-family: "DM Serif Text", serif;
		font-size: 3rem;
	}
	:global(h2) {
		font-family: "DM Serif Text", serif;
		font-size: 2rem;
	}

	:global(h3) {
		font-family: "DM Serif Text", serif;
		font-size: 1.5rem;
	}
	:global(h4) {
		font-family: "DM Serif Text", serif;
		font-size: 1.2rem;
	}

	:global(a) {
		color: #bb86fc;
		text-decoration: none;
	}
	:global(a:hover) {
		color: #e3cdff;
	}

	:global(hr) {
		margin-top: 5rem;
		border: 0;
		width: 100%;
		height: 2px;
		background: #333;
	}

	.logo {
		padding: 0.1rem;
		box-shadow: #ffffff;
	}
	.nav-div {
		height: 1px;
		background: linear-gradient(
			to right,
			transparent,
			#ffbd2d80 calc(var(--cursor-x) * 100% - 10%),
			#ffbd2d calc(var(--cursor-x) * 100%),
			#ffbc2d80 calc(var(--cursor-x) * 100% + 10%),
			transparent
		);
	}
	.nav {
		position: sticky;
		top: 0;
		user-select: none;
		width: 100%;
		margin-bottom: 0.5rem;
		z-index: 60000;
		backdrop-filter: blur(10px);
	}
	.nav-cont {
		width: 100%;
		display: grid;
		grid-column: 3;
		grid-template-columns: 1fr auto 1fr;
		grid-auto-flow: column;
		z-index: 1;
	}
	.side {
		padding: 0.5rem;
		padding-left: 2rem;
		padding-right: 2rem;
		display: flex;
		flex-grow: 1;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.nav-btn {
		font-family: "DM Serif Text", serif;
		color: #ffbd2d;
		font-size: 1.2rem;
		user-select: contain;
		font-style: italic;
		height: 100%;
		background-color: transparent;
		border: none;
		opacity: 0.5;
		cursor: pointer;
		flex-grow: 0;
	}
	.nav-btn:hover {
		opacity: 1;
		text-shadow: #eeeeff 0px 0px 10px;
		transition: text-shadow 0.3s ease;
	}
	.nav-btn:current {
		font-style: normal;
		text-shadow: #eeeeff 0px 0px 16px;
	}

	/* width */
	:root::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	:root::-webkit-scrollbar-track {
		background: #000000;
	}

	/* Handle */
	:root::-webkit-scrollbar-thumb {
		background: #5f5f5f;
	}

	/* Handle on hover */
	:root::-webkit-scrollbar-thumb:hover {
		background: #383838;
	}
</style>
