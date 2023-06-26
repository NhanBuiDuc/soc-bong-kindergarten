<script>
	import { SectionTitle } from '..'
	import emblaCarouselSvelte from 'embla-carousel-svelte'
	import Autoplay from 'embla-carousel-autoplay'
	const subTitles = [
		{
			content:
				'Tu\u1ED5i th\u01A1 ch\xEDnh l\xE0 giai \u0111o\u1EA1n quan tr\u1ECDng nh\u1EA5t trong qu\xE1 tr\xECnh ph\xE1t tri\u1EC3n c\u1EE7a m\u1ED9t con ng\u01B0\u1EDDi. Hi\u1EC3u \u0111\u01B0\u1EE3c \u0111i\u1EC1u \u0111\xF3, ILO \u0111\xE3 t\u1EADp trung x\xE2y d\u1EF1ng m\u1ED9t m\xF4i tr\u01B0\u1EDDng h\u1ECDc trong l\xE0nh v\xE0 th\xE2n thi\u1EC7n d\xE0nh cho con \u0111\u1EC3 m\u1ED7i ng\xE0y t\u1EDBi tr\u01B0\u1EDDng \u0111\u1EC1u l\xE0 m\u1ED9t ng\xE0y tr\xE0n \u0111\u1EA7y ni\u1EC1m vui v\xE0 h\u1EA1nh ph\xFAc. '
		}
	]
	const images = [
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/csvc01.webp',
			alt: '',
			caption: 'S\xE2n ch\u01A1i ch\xEDnh'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/csvc02.webp',
			alt: '',
			caption: 'S\xE2n ch\u01A1i th\u1EC3 thao'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/csvc03.webp',
			alt: '',
			caption: 'Khu v\u1EF1c h\u1ECDc t\u1EADp'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/csvc04.webp',
			alt: '',
			caption: 'Khu v\u01B0\u1EDDn ILO'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/csvc05.webp',
			alt: '',
			caption: 'Khu v\u01B0\u1EDDn ILO'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/csvc06.webp',
			alt: '',
			caption: 'Ph\xF2ng t\u01B0\u1EDFng t\u01B0\u1EE3ng'
		}
	]
	let emblaApi
	let options = { loop: true }
	let plugins = [Autoplay({ delay: 2e3, stopOnInteraction: false })]
	let scrollSnaps = []
	let selectedIndex = 0
	function onInit(e) {
		emblaApi = e.detail
		emblaApi.on('select', onSelect)
		scrollSnaps = emblaApi.scrollSnapList()
	}
	function scrollTo(index) {
		emblaApi?.scrollTo(index)
	}
	function onSelect(e) {
		selectedIndex = e.selectedScrollSnap()
	}
</script>

<section class="py-12">
	<div class="mx-auto flex max-w-screen-2xl flex-col gap-5 px-4">
		<SectionTitle title="CƠ SỞ VẬT CHẤT ILO" {subTitles} />
		<div
			class="overflow-hidden"
			use:emblaCarouselSvelte={{ options, plugins }}
			on:emblaInit={onInit}
		>
			<div class="flex items-center">
				{#each images as { src, alt, caption }}
					<figure class="relative min-w-0 flex-[0_0_100%]">
						<img {src} {alt} />
						<figcaption
							class="absolute bottom-5 right-0 rounded-l-3xl bg-[rgba(6,7,77,0.7)] px-9 py-2"
						>
							<p class="text-sm text-white">
								{caption}
							</p>
						</figcaption>
					</figure>
				{/each}
			</div>
			<ul class="mt-2 flex items-center justify-center gap-2.5">
				{#each scrollSnaps as _, i}
					{@const active = i === selectedIndex}
					<li class="grid h-8 w-8 place-items-center">
						<button
							class="before:block before:h-2.5 before:w-2.5 before:rounded-full before:bg-gray-300 before:p-1"
							class:active
							on:click={() => scrollTo(i)}
						/>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.active::before {
		content: var(--tw-content);
		background-color: rgb(6 7 77 / 0.7);
	}
</style>
