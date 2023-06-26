import { SvelteComponentTyped } from 'svelte'
declare const __propDef: {
	props: {
		logoSrc?: string | undefined
		logoDescription?: string | undefined
		buttonText?: string | undefined
		headerNavs?:
			| {
					label: string
					href: string
			  }[]
			| undefined
	}
	events: {
		[evt: string]: CustomEvent<any>
	}
	slots: {}
}
export type HeaderProps = typeof __propDef.props
export type HeaderEvents = typeof __propDef.events
export type HeaderSlots = typeof __propDef.slots
export default class Header extends SvelteComponentTyped<HeaderProps, HeaderEvents, HeaderSlots> {}
export {}