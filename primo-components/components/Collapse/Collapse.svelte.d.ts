import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
	props: {
		opened: boolean
	}
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {
		default: {}
	}
}
export type CollapseProps = typeof __propDef.props
export type CollapseEvents = typeof __propDef.events
export type CollapseSlots = typeof __propDef.slots
export default class Collapse extends SvelteComponentTyped<
	CollapseProps,
	CollapseEvents,
	CollapseSlots
> {}
export {}
