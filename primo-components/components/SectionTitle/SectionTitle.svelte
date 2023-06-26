<script context="module">
	'use strict'
</script>

<script>
	export let title
	export let subTitles
</script>

<div class="sectionTitle">
	<h2 class="title">
		{title}
	</h2>
	{#each subTitles as { content, props }, i (i)}
		<p {...props} class="text-xs lg:text-base {$$props.class}">
			{content}
		</p>
	{/each}
</div>

<style>
	.sectionTitle {
		color: rgb(64, 64, 64);
		display: flex;
		font-size: 0.75rem;
		line-height: 1rem;
		text-align: center;
		flex-direction: column;
		gap: 0.625rem;
	}
	.title {
		color: rgb(30, 27, 75);
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 800;
	}
	.subTitle {
		font-size: 0.75rem;
		line-height: 1rem;
	}
	@media (min-width: 1024px) {
		.sectionTitle {
			margin-left: auto;
			margin-right: auto;
			max-width: 64rem;
		}
		.title {
			font-size: 42px;
			line-height: 76px;
		}
		.subTitle {
			font-size: 1rem;
			line-height: 1.5rem;
		}
	}
</style>
