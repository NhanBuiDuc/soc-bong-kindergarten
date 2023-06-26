<script lang="ts">
	import '../app.css'
	import '@fontsource/montserrat/vietnamese-300.css'
	import '@fontsource/montserrat/vietnamese-400.css'
	import '@fontsource/montserrat/vietnamese-500.css'
	import '@fontsource/montserrat/vietnamese-600.css'
	import '@fontsource/montserrat/vietnamese-700.css'
	import '@fontsource/montserrat/vietnamese-800.css'
	import '@fontsource/montserrat/vietnamese-900.css'
	import { Footer, Header } from '$lib'
	import { fade } from 'svelte/transition'

	const showOnPx = 150
	let hidden = true

	function scrollContainer() {
		return document.documentElement || document.body
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false
		} else {
			hidden = true
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="grid place-items-center">
	<div class="relative flex h-full min-h-screen w-full flex-col md:px-10 lg:p-0">
		{#if !hidden}
			<div class="fixed bottom-5 right-1 z-10 px-2.5 py-1" transition:fade>
				<a href="#registerForm">
					<img
						src="https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/CTA.png"
						alt="Register button"
					/>
				</a>
			</div>
		{/if}
		<slot name="header">
			<Header />
		</slot>
		<div class="fixed right-0 top-20 z-40 flex max-w-xs flex-col gap-5 lg:mr-5" />
		<main class="flex-grow">
			<slot />
		</main>
		<slot name="footer">
			<Footer />
		</slot>
	</div>
</div>
