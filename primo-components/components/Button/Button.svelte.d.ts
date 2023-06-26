import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
	props: {
		[x: string]: any
		variant?: 'filled' | 'subtle' | undefined
		fullWidth?: boolean | undefined
	}
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {
		leftIcon: {}
		default: {}
		rightIcon: {}
	}
}
export type ButtonProps = typeof __propDef.props
export type ButtonEvents = typeof __propDef.events
export type ButtonSlots = typeof __propDef.slots
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {}
export {}
