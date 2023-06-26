import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
	props: {
		src: string
		alt?: string | undefined
		title: string
		content: string
	}
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
}
export type ReasonProps = typeof __propDef.props
export type ReasonEvents = typeof __propDef.events
export type ReasonSlots = typeof __propDef.slots
export default class Reason extends SvelteComponentTyped<ReasonProps, ReasonEvents, ReasonSlots> {}
export {}
