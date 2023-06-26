<script context="module">
	'use strict'
</script>

<script>
	export let title
	export let data
</script>

<div class="flex w-full flex-col">
	<header class="flex items-center gap-5 bg-[#06074d] pl-5 text-xl font-semibold text-white">
		<slot name="headerIcon" />
		<h3 class="uppercase">
			{title}
		</h3>
	</header>
	<div class="grid flex-1 grid-cols-3 bg-blue-100 text-sm font-light text-neutral-800">
		{#each data as { activities, timeRange } (timeRange)}
			<div class="col-span-1 border-r border-neutral-300 px-7 pb-2 pt-2.5">{timeRange}</div>
			<div class="col-span-2 flex flex-col px-7 pb-2 pt-2.5">
				{#each activities as activity}
					<div class="mb-[5px]">
						{activity}
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
