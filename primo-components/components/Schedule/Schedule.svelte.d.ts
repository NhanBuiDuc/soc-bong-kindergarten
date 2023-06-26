import { SvelteComponentTyped } from 'svelte'
export type ScheduleData = {
	timeRange: string
	activities: string[]
}
declare const __propDef: {
	props: {
		title: string
		data: ScheduleData[]
	}
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {
		headerIcon: {}
	}
}
export type ScheduleProps = typeof __propDef.props
export type ScheduleEvents = typeof __propDef.events
export type ScheduleSlots = typeof __propDef.slots
export default class Schedule extends SvelteComponentTyped<
	ScheduleProps,
	ScheduleEvents,
	ScheduleSlots
> {}
export {}
