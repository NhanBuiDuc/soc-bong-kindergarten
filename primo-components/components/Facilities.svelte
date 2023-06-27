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

<section class="sectionContainer">
	<div class="container">
		<SectionTitle title="CƠ SỞ VẬT CHẤT ILO" {subTitles} />
		<div class="sliderWrapper" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
			<div class="slider">
				{#each images as { src, alt, caption }}
					<figure class="imageContainer">
						<img {src} {alt} />
						<figcaption class="captionWrapper">
							<p class="caption">
								{caption}
							</p>
						</figcaption>
					</figure>
				{/each}
			</div>
			<ul class="scrollSnapContainer">
				{#each scrollSnaps as _, i}
					{@const active = i === selectedIndex}
					<li class="scrollSnap">
						<button class="scrollSnapButton" class:active on:click={() => scrollTo(i)} />
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.sectionContainer {
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
	.container {
		display: flex;
		padding-left: 1rem;
		padding-right: 1rem;
		margin-left: auto;
		margin-right: auto;
		flex-direction: column;
		max-width: 1536px;
		gap: 1.25rem;
	}
	.sliderWrapper {
		overflow: hidden;
	}
	.slider {
		display: flex;
		align-items: center;
	}
	.imageContainer {
		position: relative;
		min-width: 0;
		flex: 0 0 100%;
	}
	.captionWrapper {
		position: absolute;
		right: 0;
		bottom: 1.25rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 2.25rem;
		padding-right: 2.25rem;
		border-top-left-radius: 1.5rem;
		border-bottom-left-radius: 1.5rem;
		background: rgba(6, 7, 77, 0.7);
	}
	.caption {
		color: #ffffff;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	.scrollSnapContainer {
		display: flex;
		margin-top: 0.5rem;
		justify-content: center;
		align-items: center;
		gap: 0.625rem;
	}
	.scrollSnap {
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
	}
	.scrollSnapButton::before {
		content: '';
		display: block;
		height: 0.625rem;
		width: 0.625rem;
		border-radius: 100%;
		background-color: rgb(209, 213, 219);
		padding: 0.25rem;
	}
	.active::before {
		background-color: rgba(6, 7, 77, 0.7);
	}
</style>
