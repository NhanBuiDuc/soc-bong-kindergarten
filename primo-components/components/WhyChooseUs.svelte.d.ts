import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
	props: Record<string, never>
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
}
export type WhyChooseUsProps = typeof __propDef.props
export type WhyChooseUsEvents = typeof __propDef.events
export type WhyChooseUsSlots = typeof __propDef.slots
export default class WhyChooseUs extends SvelteComponentTyped<
	WhyChooseUsProps,
	WhyChooseUsEvents,
	WhyChooseUsSlots
> {}
export {}
