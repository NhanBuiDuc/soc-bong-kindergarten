<script>
	export let src
	export let alt = ''
	export let title
	export let content
</script>

<figure>
	<img class="h-auto max-w-full" {src} {alt} />
	<figcaption class="mt-2.5 flex flex-col gap-4">
		<h4 class="text-base font-semibold uppercase text-indigo-950">
			{title}
		</h4>
		<p class="text-sm font-medium text-neutral-700">
			{content}
		</p>
	</figcaption>
</figure>
