import { SvelteComponentTyped } from 'svelte'
export type SubTitleProps = {
	props?: {
		class: string
	}
	content: string
}
declare const __propDef: {
	props: {
		[x: string]: any
		title: string
		subTitles: SubTitleProps[]
	}
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
}
export type SectionTitleProps = typeof __propDef.props
export type SectionTitleEvents = typeof __propDef.events
export type SectionTitleSlots = typeof __propDef.slots
export default class SectionTitle extends SvelteComponentTyped<
	SectionTitleProps,
	SectionTitleEvents,
	SectionTitleSlots
> {}
export {}
