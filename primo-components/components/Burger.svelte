<script>
	export let opened
	export let onClick
</script>

<button class="py-0.5" on:click={onClick}>
	<div class="flex flex-col gap-1.5">
		<div
			class="relative h-0.5 w-6 bg-black transition duration-300 {opened
				? 'translate-y-2 rotate-45'
				: ''}"
		/>
		<div class="relative h-0.5 w-6 bg-black transition duration-300 {opened ? 'opacity-0' : ''}" />
		<div
			class="relative h-0.5 w-6 bg-black transition duration-300 {opened
				? '-translate-y-2 -rotate-45'
				: ''}"
		/>
	</div>
</button>
