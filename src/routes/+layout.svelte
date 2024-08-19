<script lang="ts">
	import { base } from "$app/paths";
	import rust from "svelte-highlight/languages/rust";
	import "../styles/code.css";
	import * as rive from "@rive-app/canvas";

	import { onMount } from "svelte";
	// Uncomment all this stuff to enable silly p5 sketch in background
	// import { runSketch } from "../lib/sketch";

	// let sketchContainer: HTMLElement;

	let riv_menu_btn: HTMLCanvasElement;
	let riv_logo: HTMLCanvasElement;

	onMount(() => {
		const rbtn = new rive.Rive({
			src: "/menu_back_btn.riv",
			canvas: riv_menu_btn,
			autoplay: true,
			stateMachines: "toggle",
			onLoad: () => {
				rbtn.resizeDrawingSurfaceToCanvas();
			},
			onStateChange: () => {
				toggleMenu();
			},
		});

		const rlogo = new rive.Rive({
			src: "/teodosin_logo.riv",
			canvas: riv_logo,
			autoplay: true,
			stateMachines: "toggle",
			onLoad: () => {
				rlogo.resizeDrawingSurfaceToCanvas();
			},
			onStateChange: () => {
				toggleMenu();
			},
		});
	});

	function toggleMenu() {
		console.log("toggle menu");
	}
</script>

<nav class="nav">
	<canvas class="menu_btn" bind:this={riv_menu_btn} width="100" height="50"></canvas>
	<canvas class="logo" bind:this={riv_logo} width="100" height="100"></canvas>
	<div class="right-side"></div>
</nav>

<slot />

<style>
	@import url("https://fonts.googleapis.com/css2?family=Calistoga&family=Cinzel+Decorative:wght@400;700;900&family=Corben:wght@400;700&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

	:global(body) {
		font-family: "Corben", serif;
		margin: 0;
		font-weight: 300;
		font-size: 18px;
		background-color: #121212;
		color: #FFBD2D;
	}

	:global(h1) {
		font-family: "Calistoga", serif;
		font-size: 3rem;
	}
	:global(h2) {
		font-family: "Calistoga", serif;
		font-size: 2rem;
	}

	:global(h3) {
		font-family: "Calistoga", serif;
		font-size: 1.5rem;
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
	.nav {
		position: absolute;
		user-select: none;
		width: 100vw;
		display: grid;
		grid-column: 3;
		grid-template-columns: 1fr auto 1fr;
		grid-auto-flow: column;
		z-index: 1;
	}
	.menu_btn {
		margin-left: 1rem;
		padding: 0.7rem;
		cursor: pointer;
	}
	.right-side {
		padding: 0.1rem;
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
