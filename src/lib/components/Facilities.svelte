<script lang="ts">
	import { SectionTitle } from '$lib'
	import type { SubTitleProps } from '$lib/components/SectionTitle/SectionTitle.svelte'
	import emblaCarouselSvelte, { type EmblaCarouselType } from 'embla-carousel-svelte'
	import Autoplay from 'embla-carousel-autoplay'

	const subTitles: SubTitleProps[] = [
		{
			content:
				'Tuổi thơ chính là giai đoạn quan trọng nhất trong quá trình phát triển của một con người. Hiểu được điều đó, ILO đã tập trung xây dựng một môi trường học trong lành và thân thiện dành cho con để mỗi ngày tới trường đều là một ngày tràn đầy niềm vui và hạnh phúc. '
		}
	]
	const images: { src: string; alt: string; caption: string }[] = [
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/csvc01.webp',
			alt: '',
			caption: 'Sân chơi chính'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/csvc02.webp',
			alt: '',
			caption: 'Sân chơi thể thao'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/csvc03.webp',
			alt: '',
			caption: 'Khu vực học tập'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/csvc04.webp',
			alt: '',
			caption: 'Khu vườn ILO'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/csvc05.webp',
			alt: '',
			caption: 'Khu vườn ILO'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/csvc06.webp',
			alt: '',
			caption: 'Phòng tưởng tượng'
		}
	]
	let emblaApi: any
	let options = { loop: true }
	let plugins = [Autoplay({ delay: 2000, stopOnInteraction: false })]
	let scrollSnaps: number[] = []
	let selectedIndex = 0

	function onInit(e: any) {
		emblaApi = e.detail
		emblaApi.on('select', onSelect)
		scrollSnaps = emblaApi.scrollSnapList()
	}

	function scrollTo(index: number) {
		emblaApi?.scrollTo(index)
	}

	function onSelect(e: EmblaCarouselType) {
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

<style lang="postcss">
	.active {
		@apply before:bg-[#06074d]/70;
	}
</style>
