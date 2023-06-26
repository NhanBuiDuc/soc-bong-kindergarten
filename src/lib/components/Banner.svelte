<script lang="ts">
	import { TrialForm } from '$lib'
</script>

<section id="hero" class=" flex w-full flex-col bg-[#f9f9f9] lg:flex-row">
	<div class="w-full">
		<figure>
			<img
				class="max-w-full"
				src="https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/banner-mobile.webp"
				alt=""
			/>
		</figure>
	</div>
	<div class="relative w-full bg-white py-4">
		<div class="mx-auto w-full lg:absolute lg:bottom-0 lg:right-0 lg:mx-0 lg:max-w-[490px]">
			<TrialForm id="registerForm" />
		</div>
	</div>
</section>
