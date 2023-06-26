import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
	props: Record<string, never>
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
}
export type DayAtOurSchoolProps = typeof __propDef.props
export type DayAtOurSchoolEvents = typeof __propDef.events
export type DayAtOurSchoolSlots = typeof __propDef.slots
export default class DayAtOurSchool extends SvelteComponentTyped<
	DayAtOurSchoolProps,
	DayAtOurSchoolEvents,
	DayAtOurSchoolSlots
> {}
export {}
