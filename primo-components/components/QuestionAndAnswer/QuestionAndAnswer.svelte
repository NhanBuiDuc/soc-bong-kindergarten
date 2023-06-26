<script>
	import Collapse from '../Collapse/Collapse.svelte'
	$: if (!$$slots.default) {
		throw Error('Default slot (children) is required')
	} else if (!$$slots.answer) {
		throw Error('Answer slot is required')
	}
	let opened = false
	function click() {
		opened = !opened
	}
</script>

<div class="border-b border-[#afb2b4] pb-5">
	<slot {click} />

	<Collapse {opened}>
		<slot name="answer" />
	</Collapse>
</div>
