import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
	props: {
		opened: boolean
		onClick: any
	}
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
}
export type BurgerProps = typeof __propDef.props
export type BurgerEvents = typeof __propDef.events
export type BurgerSlots = typeof __propDef.slots
export default class Burger extends SvelteComponentTyped<BurgerProps, BurgerEvents, BurgerSlots> {}
export {}
