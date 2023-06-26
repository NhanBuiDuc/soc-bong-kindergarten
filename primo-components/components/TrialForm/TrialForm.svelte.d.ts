import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
	props: {
		[x: string]: any
	}
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
}
export type TrialFormProps = typeof __propDef.props
export type TrialFormEvents = typeof __propDef.events
export type TrialFormSlots = typeof __propDef.slots
export default class TrialForm extends SvelteComponentTyped<
	TrialFormProps,
	TrialFormEvents,
	TrialFormSlots
> {}
export {}
