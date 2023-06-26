<script>
	export let variant = 'filled'
	export let fullWidth = false
</script>

<button
	class="px-5 py-2 {variant === 'filled' ? 'bg-indigo-950' : ''} {fullWidth
		? 'w-full'
		: ''} rounded-sm active:translate-y-1 {$$props.class}"
>
	<div class="flex items-center justify-center gap-2.5">
		<slot name="leftIcon" />
		<slot />
		<slot name="rightIcon" />
	</div>
</button>
