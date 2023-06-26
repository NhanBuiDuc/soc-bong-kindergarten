import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
	props: Record<string, never>
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
}
export type FacilitiesProps = typeof __propDef.props
export type FacilitiesEvents = typeof __propDef.events
export type FacilitiesSlots = typeof __propDef.slots
export default class Facilities extends SvelteComponentTyped<
	FacilitiesProps,
	FacilitiesEvents,
	FacilitiesSlots
> {}
export {}
