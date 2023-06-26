import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
	props: Record<string, never>
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {
		default: {
			click: () => void
		}
		answer: {}
	}
}
export type QuestionAndAnswerProps = typeof __propDef.props
export type QuestionAndAnswerEvents = typeof __propDef.events
export type QuestionAndAnswerSlots = typeof __propDef.slots
export default class QuestionAndAnswer extends SvelteComponentTyped<
	QuestionAndAnswerProps,
	QuestionAndAnswerEvents,
	QuestionAndAnswerSlots
> {}
export {}
