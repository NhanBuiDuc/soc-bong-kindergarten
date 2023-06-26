<script lang="ts">
	import { Reason } from '$lib'

	type ReasonProps = { src: string; alt?: string; title: string; content: string }
	const reasons: ReasonProps[] = [
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/why01.webp',
			alt: '',
			title: 'Môi trường trong lành và thân thiện:',
			content:
				'Nước sạch, không khí sạch, trường được thiết kế theo lối tối giản chi tiết, tối đa ánh sáng để kích thích sự sáng tạo và tình yêu thiên nhiên của học sinh. Khuôn viên trường được thiết kế theo tiêu chuẩn quốc tế, đảm bảo đầy đủ hoạt động trong nhà và ngoài trời cho trẻ.'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/why02.webp',
			alt: '',
			title: 'Đội ngũ giáo viên tận tâm, chuyên nghiệp:',
			content:
				'Toàn bộ giáo viên được tuyển chọn gắt gao và sau đó được đào tạo bài bản và chuyên nghiệp với Đại học Hamk tại Phần Lan để đảm bảo hiểu và truyền tải trọn vẹn tinh hoa của nền giáo dục nhân văn này. Giáo viên cũng là những người yêu trẻ như con mình.'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/why03.webp',
			alt: '',
			title: 'Phương pháp giáo dục hiện đại và nhân văn:',
			content:
				'ILO áp dụng phương pháp Play-based learning (Chơi qua học, học mà chơi) giúp khơi gợi niềm đam mê khám phá cùng khả năng quan sát, tư duy logic, nhận thức bản thân trong mối quan hệ xã hội, các nền văn hoá và phát triển tính cách cho từng em. '
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/why04.webp',
			alt: '',
			title: 'Chế độ dinh dưỡng và sự chăm sóc toàn diện:',
			content:
				'Sử dụng nguồn thực phẩm từ nhà cung cấp uy tín tại TP. HCM, ILO thiết kế thực đơn dựa trên thông tin sức khỏe của học sinh, sẵn sàng điều chỉnh để hỗ trợ nhu cầu dinh dưỡng của bé. '
		}
	]
</script>

<section class="bg-[#efefef] py-12" id="why">
	<div class="mx-auto flex max-w-screen-2xl flex-col gap-5 px-4">
		<h2 class="text-center text-base font-extrabold text-indigo-950 lg:text-[42px]/10">
			VÌ SAO CHỌN ILO
		</h2>
		<div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
			{#each reasons as { content, title, alt, src }}
				<Reason {content} {title} {alt} {src} />
			{/each}
		</div>
	</div>
</section>
