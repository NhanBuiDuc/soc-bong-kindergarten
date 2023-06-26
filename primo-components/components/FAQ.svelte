<script>
	import { TrialForm } from '..'
	import QuestionAndAnswer from './QuestionAndAnswer/QuestionAndAnswer.svelte'
	import { slide } from 'svelte/transition'
	import CaretDownIcon from '~icons/ion/caret-down-circle-outline'
	import SvelteMarkdown from 'svelte-markdown'
	const FAQs = [
		{
			answers: [
				'\u0110i\u1EC1u \u0111\u1EB7c bi\u1EC7t c\u1EE7a Gi\xE1o D\u1EE5c Ph\u1EA7n Lan l\xE0 tr\u1EBB em kh\xF4ng ph\u1EA3i ch\u1ECBu nhi\u1EC1u \xE1p l\u1EF1c h\u1ECDc t\u1EADp, thi c\u1EED v\xE0 b\xE0i t\u1EADp v\u1EC1 nh\xE0. Thay v\xE0o \u0111\xF3, c\xE1c con \u0111\u01B0\u1EE3c tho\u1EA3i m\xE1i h\u1ECDc t\u1EADp, vui ch\u01A1i v\xE0 tham gia nhi\u1EC1u ho\u1EA1t \u0111\u1ED9ng \u0111a d\u1EA1ng nh\u1EB1m ph\xE1t tri\u1EC3n to\xE0n di\u1EC7n c\xE1c k\u1EF9 n\u0103ng, ki\u1EBFn th\u1EE9c. V\xEC th\u1EBF, Gi\xE1o D\u1EE5c Ph\u1EA7n Lan c\xF2n \u0111\u01B0\u1EE3c bi\u1EBFt \u0111\u1EBFn v\u1EDBi t\xEAn g\u1ECDi \u201CGi\xE1o D\u1EE5c H\u1EA1nh Ph\xFAc\u201D.'
			],
			question:
				'Gi\xE1o d\u1EE5c Ph\u1EA7n Lan c\xF3 l\u1EE3i \xEDch g\xEC \u0111\u1ED1i v\u1EDBi b\xE9?'
		},
		{
			answers: [
				'ILO Academy l\xE0 s\u1EF1 k\u1EBFt h\u1EE3p tinh hoa c\u1EE7a gi\xE1o d\u1EE5c Ph\u1EA7n Lan v\xE0 ch\u01B0\u01A1ng tr\xECnh gi\xE1o d\u1EE5c m\u1EA7m non Vi\u1EC7t Nam c\xF9ng theo \u0111\xF3 l\xE0 t\xE0i nguy\xEAn ho\u1EA1t \u0111\u1ED9ng vui ch\u01A1i t\u1EEB ILA sau nhi\u1EC1u n\u0103m nghi\xEAn c\u1EE9u v\u1EDBi \u0111\u1ED1i t\u01B0\u1EE3ng tr\u1EBB em Vi\u1EC7t Nam. \u1EDE \u0111\xE2y, ch\xFAng t\xF4i nh\u1EA5n m\u1EA1nh v\xE0o vi\u1EC7c nu\xF4i d\u01B0\u1EE1ng t\xEDnh c\xE1ch v\xE0 t\xE2m h\u1ED3n c\u1EE7a con v\u1EDBi mong mu\u1ED1n kh\u01A1i d\u1EADy ni\u1EC1m \u0111am m\xEA h\u1ECDc t\u1EADp su\u1ED1t \u0111\u1EDDi \u1EDF tr\u1EBB.',
				'Sau qu\xE1 tr\xECnh h\u1ECDc t\u1EADp t\u1EA1i ILO Academy, cha m\u1EB9 c\xF3 th\u1EC3 quan s\xE1t th\u1EA5y s\u1EF1 ph\xE1t tri\u1EC3n c\u1EE7a con trong 6 l\u0129nh v\u1EF1c c\u0169ng nh\u01B0 kh\u1EA3 n\u0103ng v\u1EADn d\u1EE5ng c\xE1c k\u1EF9 n\u0103ng m\u1EC1m thi\u1EBFt y\u1EBFu trong th\u1EBF k\u1EF7 21 (Nguy\xEAn t\u1EAFc v\u1EC1 4 ch\u1EEF C \u0111\u01B0\u1EE3c \u0111\u1EC1 ra b\u1EDFi Di\u1EC5n \u0110\xE0n Kinh T\u1EBF Th\u1EBF Gi\u1EDBi:\n\n **Critical thinking** - T\u01B0 duy ph\u1EA3n bi\u1EC7n,\n\n **Creative** - S\xE1ng t\u1EA1o,\n\n **Communication** - Giao ti\u1EBFp v\xE0 **Collaboration** - H\u1EE3p t\xE1c)'
			],
			question:
				'Ch\u01B0\u01A1ng tr\xECnh m\u1EA7m non t\u1EA1i ILO Academy c\xF3 g\xEC \u0111\u1EB7c bi\u1EC7t?'
		},
		{
			answers: [
				'ILO nh\u1EADn c\xE1c b\xE9 t\u1EEB 18 th\xE1ng \u0111\u1EBFn 6 tu\u1ED5i, \u0111\xE2y l\xE0 \u0111\u1ED9 tu\u1ED5i v\xE0ng \u0111\u1EC3 c\xE1c b\xE9 ph\xE1t tri\u1EC3n t\u01B0 duy ng\xF4n ng\u1EEF v\xE0 ho\xE0n thi\u1EC7n c\xE1c k\u1EF9 n\u0103ng m\u1EC1m. ',
				'Ch\u01B0\u01A1ng tr\xECnh h\u1ECDc ti\xEAu chu\u1EA9n qu\u1ED1c t\u1EBF c\xF9ng c\xE1c ho\u1EA1t \u0111\u1ED9ng ngo\u1EA1i kho\xE1 \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF gi\xFAp tr\u1EBB trang b\u1ECB nh\u1EEFng k\u1EF9 n\u0103ng m\u1EC1m quan tr\u1ECDng v\xE0 ph\xE1t tri\u1EC3n c\xE1c ch\u1EC9 s\u1ED1 th\xF4ng minh m\u1ED9t c\xE1ch to\xE0n di\u1EC7n ngay t\u1EEB nh\u1EEFng n\u0103m \u0111\u1EA7u \u0111\u1EDDi, \u0111\u1EC3 tr\u1EBB t\u1EF1 tin b\u01B0\u1EDBc v\xE0o m\xF4i tr\u01B0\u1EDDng K12 qu\u1ED1c t\u1EBF v\xE0 n\u1ED5i tr\u1ED9i h\u01A1n b\u1EA1n b\xE8 c\xF9ng tu\u1ED5i khi v\xE0o l\u1EDBp 1. '
			],
			question: 'ILO Academy nh\u1EADn c\xE1c b\xE9 t\u1EEB m\u1EA5y tu\u1ED5i?'
		},
		{
			answers: [
				'Anh/ch\u1ECB c\xF3 th\u1EC3 \u0111i\u1EC1n th\xF4ng tin li\xEAn h\u1EC7 c\u1EE7a m\xECnh v\xE0o form b\xEAn d\u01B0\u1EDBi, ph\xEDa ILO Academy s\u1EBD li\xEAn h\u1EC7 v\xE0 \u0111\u1EB7t l\u1ECBch h\u1EB9n v\u1EDBi m\xECnh s\u1EDBm nh\u1EA5t'
			],
			question:
				'T\xF4i mu\u1ED1n \u0111\u0103ng k\xFD tham quan tr\u01B0\u1EDDng ILO, t\xF4i ph\u1EA3i l\xE0m nh\u01B0 th\u1EBF n\xE0o? '
		}
	]
</script>

<section class="py-12">
	<div class="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 lg:flex-row">
		<div class="flex flex-1 flex-col gap-10 bg-blue-100 p-10">
			<h2 class="text-center text-2xl font-extrabold uppercase text-indigo-950">
				Câu hỏi thường gặp
			</h2>
			<div class="flex flex-col gap-5">
				{#each FAQs as { answers, question }}
					<QuestionAndAnswer let:click={handleQuestionClick}>
						<button class="mb-2 flex gap-5" on:click={handleQuestionClick}>
							<CaretDownIcon class="flex-shrink-0 flex-grow-0" width="28" height="28" />
							<span class="text-left text-base font-semibold text-neutral-700 lg:text-xl">
								{question}
							</span>
						</button>

						<div class="flex flex-col gap-1" slot="answer" transition:slide>
							{#each answers as answer}
								<div class="pl-12 text-sm font-normal text-neutral-800">
									<SvelteMarkdown source={answer} />
								</div>
							{/each}
						</div>
					</QuestionAndAnswer>
				{/each}
			</div>
		</div>
		<div class="lg:max-w-[490px]">
			<TrialForm class="!bg-blue-100" />
		</div>
	</div>
</section>
