import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
	props: Record<string, never>
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
}
export type FoundationProps = typeof __propDef.props
export type FoundationEvents = typeof __propDef.events
export type FoundationSlots = typeof __propDef.slots
export default class Foundation extends SvelteComponentTyped<
	FoundationProps,
	FoundationEvents,
	FoundationSlots
> {}
export {}
