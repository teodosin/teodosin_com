<script lang="ts">
	import { base } from "$app/paths";
	import rust from "svelte-highlight/languages/rust";
	import "../styles/code.css";
	import * as rive from "@rive-app/canvas";

	import { onMount, tick } from "svelte";
	import { afterNavigate, goto } from "$app/navigation";

	import { page } from "$app/stores";

	import Scanline from "$lib/utils/components/scanline.svelte";

	let riv_logo: HTMLCanvasElement;

	let currentPage: string;
	$: currentPage = $page.url.pathname;

	let monoTrigger: rive.StateMachineInput | undefined;
	let eyeTrigger: rive.StateMachineInput | undefined;
	let graphTrigger: rive.StateMachineInput | undefined;

	async function changeState() {
		await tick();
		switch (currentPage) {
			case "/about":
				if (monoTrigger) {
					monoTrigger.fire();
				}
				break;
			case "/gallery":
				if (eyeTrigger) {
					eyeTrigger.fire();
				}
				break;
			case "/karta":
				if (graphTrigger) {
					graphTrigger.fire();
				}
				break;
			case "/contact":
				if (monoTrigger) {
					monoTrigger.fire();
				}
				break;
			default:
				if (eyeTrigger) {
					eyeTrigger.fire();
				}
				break;
		}
	}

	onMount(async () => {
		const rlogo = new rive.Rive({
			src: "/teodosin_logo5.riv",
			canvas: riv_logo,
			autoplay: true,
			stateMachines: "states",
			onLoad: () => {
				rlogo.resizeDrawingSurfaceToCanvas();
				const inputs = rlogo.stateMachineInputs("states");

				monoTrigger = inputs.find((i) => i.name === "to-mono");
				eyeTrigger = inputs.find((i) => i.name === "to-eye");
				graphTrigger = inputs.find((i) => i.name === "to-graph");
			},
			onStateChange: () => {
				changeState();
			},
		});
	});

	afterNavigate(() => {
		changeState();
	});
</script>

<nav class="nav">
	<div class="nav-cont">
		<div class="side">
			<!-- <button class="nav-btn nav-btn-placeholder"> Spooky </button> -->
			<button
				class:active={currentPage === "/gallery"}
				class="nav-btn"
				on:click={() => goto("/")}
			>
				Portfolio
			</button>
			<button
				class:active={currentPage === "/karta"}
				class="nav-btn"
				on:click={() => goto("/karta")}
			>
				Karta
			</button>
		</div>

		<canvas class="logo" bind:this={riv_logo} width="100" height="100"
		></canvas>

		<div class="side">
			<button
				class:active={currentPage === "/about"}
				class="nav-btn"
				on:click={() => goto("/about")}
			>
				About
			</button>
			<button
				class:active={currentPage === "/contact"}
				class="nav-btn"
				on:click={() => goto("/contact")}
			>
				Contact
			</button>
			<!-- <button
				class:active={currentPage === "/gallery"}
				class="nav-btn nav-btn-placeholder"
				on:click={() => goto("/gallery")}
			>
				Gallery
			</button> -->
		</div>
	</div>

	<Scanline />
</nav>

<slot />

<style>
	@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Corben:wght@400;700&family=DM+Serif+Text:ital@0;1&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
	@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Georgian:wght@100..900&display=swap');
	/* Color palette */
	:global(:root) {
		--background-color: #121212;
		--main-highlight: #ffbd2d;
		--main-highlight-rgb: 255, 189, 45;
		--main-highlight-dim: #ffbd2d80;
		--main-highlight-dim-2: #ffbd2d40;
		--grayish: #daaada;
		--paragraph: #eeeeee;
		--subtle-bg: #20122088;
	}

	:global(html) {
		scrollbar-gutter: stable;
	}

	:global(body) {
		font-family: "Noto Serif Georgian", serif;
		min-height: 100vh;
		margin: 0;
		font-size: 1rem;
		background-color: #121212;
		color: #eeeeee;
	}

	:global(h1) {
		font-family: "DM Serif Text", serif;
		font-size: 3rem;
		color: var(--main-highlight);
	}
	:global(h2) {
		font-family: "DM Serif Text", serif;
		font-size: 2rem;
		color: var(--main-highlight);
	}

	:global(h3) {
		font-family: "DM Serif Text", serif;
		font-size: 1.5rem;
		color: var(--main-highlight);
	}
	:global(h4) {
		font-family: "DM Serif Text", serif;
		font-size: 1.2rem;
		color: var(--main-highlight);
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
		width: 5rem;
		height: 5rem;
		padding: 0.1rem;
		box-shadow: #ffffff;
	}

	.nav {
		position: sticky;
		top: 0;
		user-select: none;
		width: 100%;
		z-index: 60000;
		backdrop-filter: blur(10px);
	}
	.nav-cont {
		width: 100%;
		max-width: 60rem;
		display: grid;
		grid-column: 3;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
		grid-template-columns: 1fr auto 1fr;
		grid-auto-flow: column;
		z-index: 1;
	}
	.side {
		height: 100%;
		padding-left: 2rem;
		padding-right: 2rem;
		max-width: 30rem;
		display: flex;
		flex-grow: 1;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.nav-btn {
		font-family: "DM Serif Text", serif;
		color: var(--main-highlight);
		font-size: 1.2rem;
		user-select: contain;
		font-style: italic;
		height: 100%;
		background-color: transparent;
		border: none;
		opacity: 0.5;
		cursor: pointer;
		flex-grow: 1;
		transition:
			opacity 0.2s ease-in-out,
			text-shadow 0.2s ease-in-out;
	}
	.nav-btn:hover {
		opacity: 1;
		text-shadow: #eeeeff 0px 0px 10px;
	}
	.nav-btn:active {
		font-style: normal;
		text-shadow: #eeeeff 0px 0px 16px;
	}
	.nav-btn-placeholder {
		color: #00000000;
		cursor: default;
		user-select: none;
		text-shadow: none;
	}

	/* width */
	:root::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	:root::-webkit-scrollbar-track {
		background: var(--background-color);
	}

	/* Handle */
	:root::-webkit-scrollbar-thumb {
		background: var(--main-highlight-dim);
	}

	/* Handle on hover */
	:root::-webkit-scrollbar-thumb:hover {
		background: #383838;
	}

	@media (max-width: 768px) {
		:global(body) {
			font-size: 0.8rem;
		}
		:global(h1) {
			font-size: 2rem;
		}
		:global(h2) {
			font-size: 1.5rem;
		}
		:global(h3) {
			font-size: 1.2rem;
		}
		:global(h4) {
			font-size: 1rem;
		}
		.logo {
			width: 3rem;
			height: 3rem;
		}
		.nav-btn {
			font-size: 0.8rem;
		}
		.side {
			padding-left: 0rem;
			padding-right: 0rem;
		}
	}
</style>
