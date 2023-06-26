import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
	props: Record<string, never>
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
}
export type FaqProps = typeof __propDef.props
export type FaqEvents = typeof __propDef.events
export type FaqSlots = typeof __propDef.slots
export default class Faq extends SvelteComponentTyped<FaqProps, FaqEvents, FaqSlots> {}
export {}
