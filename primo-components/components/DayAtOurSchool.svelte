<script>
	import { SectionTitle, Schedule } from '..'
	import SunIcon from '~icons/ph/sun'
	import CloudSunIcon from '~icons/bi/cloud-sun'
	const subTitles = [
		{
			content:
				'D\u1EF1a tr\xEAn nghi\xEAn c\u1EE9u chuy\xEAn s\xE2u v\u1EC1 s\u1EF1 ph\xE1t tri\u1EC3n c\u1EE7a tr\u1EBB, ILO Academy \u0111\xE3 thi\u1EBFt k\u1EBF th\u1EDDi gian bi\u1EC3u m\u1ED9t ng\xE0y c\u1EE7a con \u0111\u1EA3m b\u1EA3o s\u1EF1 ph\xE1t tri\u1EC3n c\xE2n b\u1EB1ng v\xE0 to\xE0n di\u1EC7n c\u1EA3 t\u01B0 duy, ki\u1EBFn th\u1EE9c - th\u1EC3 ch\u1EA5t - t\xE2m h\u1ED3n. '
		},
		{
			content:
				'V\xE0 \u0111\xE2y l\xE0 m\u1ED9t ng\xE0y tuy\u1EC7t v\u1EDDi \u1EDF ng\xF4i tr\u01B0\u1EDDng ILO!'
		}
	]
	const morningSchedule = [
		{
			activities: [
				'\u0110\xF3n b\xE9',
				'\u0102n s\xE1ng',
				'Ho\u1EA1t \u0111\u1ED9ng t\u1EADp th\u1EC3: trong l\u1EDBp v\xE0 ngo\xE0i tr\u1EDDi'
			],
			timeRange: '7:30 - 9:00'
		},
		{
			activities: ['Ho\u1EA1t \u0111\u1ED9ng \u0111\u1EA7u ng\xE0y'],
			timeRange: '9:00 - 9:30'
		},
		{
			activities: ['Gi\u1EDD h\u1ECDc s\xE1ng t\u1EA1o'],
			timeRange: '9:30 - 10:00'
		},
		{
			activities: ['Gi\u1EDD \u0103n x\u1EBF, v\u1EC7 sinh c\xE1 nh\xE2n, d\u1ECDn d\u1EB9p'],
			timeRange: '10:00 - 10:30'
		},
		{
			activities: ['Vui ch\u01A1i c\xF3 h\u01B0\u1EDBng d\u1EABn'],
			timeRange: '10:30 \u2013 11:00'
		},
		{
			activities: ['Gi\u1EDD \u0103n tr\u01B0a'],
			timeRange: '11:00 \u2013 12:00'
		}
	]
	const afternoonSchedule = [
		{
			activities: ['Ngh\u1EC9 tr\u01B0a ho\u1EB7c \u0111\u1ECDc s\xE1ch'],
			timeRange: '12:00 - 14:00'
		},
		{
			activities: ['V\u1EC7 sinh c\xE1 nh\xE2n v\xE0 \u0103n nh\u1EB9'],
			timeRange: '14:00 - 14:30'
		},
		{
			activities: ['Ho\u1EA1t \u0111\u1ED9ng theo nh\xF3m'],
			timeRange: '14:30 - 15:30'
		},
		{
			activities: ['Gi\u1EDD h\u1ECDc c\xF3 h\u01B0\u1EDBng d\u1EABn '],
			timeRange: '15:30 - 16:30'
		},
		{
			activities: ['T\u1ED5ng k\u1EBFt ng\xE0y h\u1ECDc', 'Gi\u1EDD \u0111\xF3n b\xE9'],
			timeRange: '16:30 \u2013 17:00'
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
