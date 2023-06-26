<script lang="ts">
	import { SectionTitle, Schedule } from '$lib'
	import type { ScheduleData } from '$lib/components/Schedule/Schedule.svelte'
	import type { SubTitleProps } from '$lib/components/SectionTitle/SectionTitle.svelte'
	import SunIcon from '~icons/ph/sun'
	import CloudSunIcon from '~icons/bi/cloud-sun'

	const subTitles: SubTitleProps[] = [
		{
			content:
				'Dựa trên nghiên cứu chuyên sâu về sự phát triển của trẻ, ILO Academy đã thiết kế thời gian biểu một ngày của con đảm bảo sự phát triển cân bằng và toàn diện cả tư duy, kiến thức - thể chất - tâm hồn. '
		},
		{ content: 'Và đây là một ngày tuyệt vời ở ngôi trường ILO!' }
	]
	const morningSchedule: ScheduleData[] = [
		{
			activities: ['Đón bé', 'Ăn sáng', 'Hoạt động tập thể: trong lớp và ngoài trời'],
			timeRange: '7:30 - 9:00'
		},
		{
			activities: ['Hoạt động đầu ngày'],
			timeRange: '9:00 - 9:30'
		},
		{
			activities: ['Giờ học sáng tạo'],
			timeRange: '9:30 - 10:00'
		},
		{
			activities: ['Giờ ăn xế, vệ sinh cá nhân, dọn dẹp'],
			timeRange: '10:00 - 10:30'
		},
		{
			activities: ['Vui chơi có hướng dẫn'],
			timeRange: '10:30 – 11:00'
		},
		{
			activities: ['Giờ ăn trưa'],
			timeRange: '11:00 – 12:00'
		}
	]
	const afternoonSchedule: ScheduleData[] = [
		{
			activities: ['Nghỉ trưa hoặc đọc sách'],
			timeRange: '12:00 - 14:00'
		},
		{
			activities: ['Vệ sinh cá nhân và ăn nhẹ'],
			timeRange: '14:00 - 14:30'
		},
		{
			activities: ['Hoạt động theo nhóm'],
			timeRange: '14:30 - 15:30'
		},
		{
			activities: ['Giờ học có hướng dẫn '],
			timeRange: '15:30 - 16:30'
		},
		{
			activities: ['Tổng kết ngày học', 'Giờ đón bé'],
			timeRange: '16:30 – 17:00'
		}
	]
</script>

<section class="bg-[#efefef] py-12" id="aDayAtOurSchool">
	<div class="mx-auto max-w-screen-2xl px-4">
		<div class="mb-7 flex flex-col gap-5">
			<SectionTitle title="MỘT NGÀY TUYỆT VỜI TẠI ILO" {subTitles} />
			<div class="w-full">
				<video controls>
					<track kind="captions" default />
					<source
						src="https://ilo.edu.vn/storage/app/media/giaoducmamnon/video/ILO-videos.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
		</div>
		<div class="flex flex-col gap-4 lg:flex-row">
			<Schedule data={morningSchedule} title="Buổi sáng">
				<SunIcon width="72" height="70" slot="headerIcon" />
			</Schedule>
			<Schedule data={afternoonSchedule} title="Buổi chiều">
				<CloudSunIcon width="88" height="70" slot="headerIcon" />
			</Schedule>
		</div>
	</div>
</section>
