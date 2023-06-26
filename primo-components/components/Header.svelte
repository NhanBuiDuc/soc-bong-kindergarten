<script>
	import { slide } from 'svelte/transition'
	import { Burger, Button } from '..'
	function handleToggleNav() {
		opened = !opened
	}
	const headerNavs = [
		{ content: 'N\u1EC1n T\u1EA3ng Gi\xE1o D\u1EE5c', href: '#foundation' },
		{ content: 'M\u1ED9t ng\xE0y tuy\u1EC7t v\u1EDDi t\u1EA1i ILO', href: '#aDayAtOurSchool' },
		{ content: 'V\xEC sao ch\u1ECDn ILO', href: '#why' }
	]
	let opened = false
	let innerWidth = 0
	$: isDesktop = innerWidth > 1023
	$: {
		if (isDesktop) {
			opened = true
		}
	}
</script>

<svelte:window bind:innerWidth />
<header>
	<div
		class="grid grid-cols-2 items-center gap-3.5 px-4 py-2.5 lg:mx-auto lg:max-w-screen-2xl lg:grid-cols-7"
	>
		<div>
			<img
				class="max-h-[100px] lg:max-h-none"
				src="https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor//logo-header.webp"
				alt="Logo"
			/>
		</div>
		<div class="flex justify-end lg:hidden">
			<Burger {opened} onClick={handleToggleNav} />
		</div>
		<div class="col-span-full lg:col-span-6">
			{#if opened}
				<ul
					class="flex flex-col items-center text-black lg:flex-row lg:justify-end"
					transition:slide
				>
					{#each headerNavs as { content, href } (content)}
						<li class="w-full py-2 text-center hover:text-[#4aadb5] lg:w-auto lg:px-7">
							<a {href}>
								{content}
							</a>
						</li>
					{/each}
					<li class="flex w-full items-center justify-center lg:w-auto">
						<Button class="font-bold text-white" fullWidth>Đăng ký tư vấn</Button>
					</li>
				</ul>
			{/if}
		</div>
	</div>
</header>
