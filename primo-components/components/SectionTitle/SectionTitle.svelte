<script context="module">
	'use strict'
</script>

<script>
	export let title
	export let subTitles
</script>

<div class="flex flex-col gap-2.5 text-center text-xs text-neutral-700 lg:mx-auto lg:max-w-5xl">
	<h2 class="text-lg font-extrabold text-indigo-950 lg:text-[42px] lg:leading-[76px]">
		{title}
	</h2>
	{#each subTitles as { content, props }, i (i)}
		<p {...props} class="text-xs lg:text-base {props?.class}">
			{content}
		</p>
	{/each}
</div>
