<script lang="ts">
	import { TrialForm } from '$lib'
	import QuestionAndAnswer from '$lib/components/QuestionAndAnswer/QuestionAndAnswer.svelte'
	import { slide } from 'svelte/transition'
	import CaretDownIcon from '~icons/ion/caret-down-circle-outline'
	import SvelteMarkdown from 'svelte-markdown'

	type FAQContent = { answers: string[]; question: string }

	const FAQs: FAQContent[] = [
		{
			answers: [
				'Điều đặc biệt của Giáo Dục Phần Lan là trẻ em không phải chịu nhiều áp lực học tập, thi cử và bài tập về nhà. Thay vào đó, các con được thoải mái học tập, vui chơi và tham gia nhiều hoạt động đa dạng nhằm phát triển toàn diện các kỹ năng, kiến thức. Vì thế, Giáo Dục Phần Lan còn được biết đến với tên gọi “Giáo Dục Hạnh Phúc”.'
			],
			question: 'Giáo dục Phần Lan có lợi ích gì đối với bé?'
		},
		{
			answers: [
				'ILO Academy là sự kết hợp tinh hoa của giáo dục Phần Lan và chương trình giáo dục mầm non Việt Nam cùng theo đó là tài nguyên hoạt động vui chơi từ ILA sau nhiều năm nghiên cứu với đối tượng trẻ em Việt Nam. Ở đây, chúng tôi nhấn mạnh vào việc nuôi dưỡng tính cách và tâm hồn của con với mong muốn khơi dậy niềm đam mê học tập suốt đời ở trẻ.',
				'Sau quá trình học tập tại ILO Academy, cha mẹ có thể quan sát thấy sự phát triển của con trong 6 lĩnh vực cũng như khả năng vận dụng các kỹ năng mềm thiết yếu trong thế kỷ 21 (Nguyên tắc về 4 chữ C được đề ra bởi Diễn Đàn Kinh Tế Thế Giới:\n\n **Critical thinking** - Tư duy phản biện,\n\n **Creative** - Sáng tạo,\n\n **Communication** - Giao tiếp và **Collaboration** - Hợp tác)'
			],
			question: 'Chương trình mầm non tại ILO Academy có gì đặc biệt?'
		},
		{
			answers: [
				'ILO nhận các bé từ 18 tháng đến 6 tuổi, đây là độ tuổi vàng để các bé phát triển tư duy ngôn ngữ và hoàn thiện các kỹ năng mềm. ',
				'Chương trình học tiêu chuẩn quốc tế cùng các hoạt động ngoại khoá được thiết kế giúp trẻ trang bị những kỹ năng mềm quan trọng và phát triển các chỉ số thông minh một cách toàn diện ngay từ những năm đầu đời, để trẻ tự tin bước vào môi trường K12 quốc tế và nổi trội hơn bạn bè cùng tuổi khi vào lớp 1. '
			],
			question: 'ILO Academy nhận các bé từ mấy tuổi?'
		},
		{
			answers: [
				'Anh/chị có thể điền thông tin liên hệ của mình vào form bên dưới, phía ILO Academy sẽ liên hệ và đặt lịch hẹn với mình sớm nhất'
			],
			question: 'Tôi muốn đăng ký tham quan trường ILO, tôi phải làm như thế nào? '
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
