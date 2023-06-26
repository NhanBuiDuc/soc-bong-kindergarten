<script>
	import { Reason } from '..'
	const reasons = [
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/why01.webp',
			alt: '',
			title: 'M\xF4i tr\u01B0\u1EDDng trong l\xE0nh v\xE0 th\xE2n thi\u1EC7n:',
			content:
				'N\u01B0\u1EDBc s\u1EA1ch, kh\xF4ng kh\xED s\u1EA1ch, tr\u01B0\u1EDDng \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF theo l\u1ED1i t\u1ED1i gi\u1EA3n chi ti\u1EBFt, t\u1ED1i \u0111a \xE1nh s\xE1ng \u0111\u1EC3 k\xEDch th\xEDch s\u1EF1 s\xE1ng t\u1EA1o v\xE0 t\xECnh y\xEAu thi\xEAn nhi\xEAn c\u1EE7a h\u1ECDc sinh. Khu\xF4n vi\xEAn tr\u01B0\u1EDDng \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF theo ti\xEAu chu\u1EA9n qu\u1ED1c t\u1EBF, \u0111\u1EA3m b\u1EA3o \u0111\u1EA7y \u0111\u1EE7 ho\u1EA1t \u0111\u1ED9ng trong nh\xE0 v\xE0 ngo\xE0i tr\u1EDDi cho tr\u1EBB.'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/why02.webp',
			alt: '',
			title: '\u0110\u1ED9i ng\u0169 gi\xE1o vi\xEAn t\u1EADn t\xE2m, chuy\xEAn nghi\u1EC7p:',
			content:
				'To\xE0n b\u1ED9 gi\xE1o vi\xEAn \u0111\u01B0\u1EE3c tuy\u1EC3n ch\u1ECDn g\u1EAFt gao v\xE0 sau \u0111\xF3 \u0111\u01B0\u1EE3c \u0111\xE0o t\u1EA1o b\xE0i b\u1EA3n v\xE0 chuy\xEAn nghi\u1EC7p v\u1EDBi \u0110\u1EA1i h\u1ECDc Hamk t\u1EA1i Ph\u1EA7n Lan \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o hi\u1EC3u v\xE0 truy\u1EC1n t\u1EA3i tr\u1ECDn v\u1EB9n tinh hoa c\u1EE7a n\u1EC1n gi\xE1o d\u1EE5c nh\xE2n v\u0103n n\xE0y. Gi\xE1o vi\xEAn c\u0169ng l\xE0 nh\u1EEFng ng\u01B0\u1EDDi y\xEAu tr\u1EBB nh\u01B0 con m\xECnh.'
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/why03.webp',
			alt: '',
			title:
				'Ph\u01B0\u01A1ng ph\xE1p gi\xE1o d\u1EE5c hi\u1EC7n \u0111\u1EA1i v\xE0 nh\xE2n v\u0103n:',
			content:
				'ILO \xE1p d\u1EE5ng ph\u01B0\u01A1ng ph\xE1p Play-based learning (Ch\u01A1i qua h\u1ECDc, h\u1ECDc m\xE0 ch\u01A1i) gi\xFAp kh\u01A1i g\u1EE3i ni\u1EC1m \u0111am m\xEA kh\xE1m ph\xE1 c\xF9ng kh\u1EA3 n\u0103ng quan s\xE1t, t\u01B0 duy logic, nh\u1EADn th\u1EE9c b\u1EA3n th\xE2n trong m\u1ED1i quan h\u1EC7 x\xE3 h\u1ED9i, c\xE1c n\u1EC1n v\u0103n ho\xE1 v\xE0 ph\xE1t tri\u1EC3n t\xEDnh c\xE1ch cho t\u1EEBng em. '
		},
		{
			src: 'https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/imagecompressor/why04.webp',
			alt: '',
			title:
				'Ch\u1EBF \u0111\u1ED9 dinh d\u01B0\u1EE1ng v\xE0 s\u1EF1 ch\u0103m s\xF3c to\xE0n di\u1EC7n:',
			content:
				'S\u1EED d\u1EE5ng ngu\u1ED3n th\u1EF1c ph\u1EA9m t\u1EEB nh\xE0 cung c\u1EA5p uy t\xEDn t\u1EA1i TP. HCM, ILO thi\u1EBFt k\u1EBF th\u1EF1c \u0111\u01A1n d\u1EF1a tr\xEAn th\xF4ng tin s\u1EE9c kh\u1ECFe c\u1EE7a h\u1ECDc sinh, s\u1EB5n s\xE0ng \u0111i\u1EC1u ch\u1EC9nh \u0111\u1EC3 h\u1ED7 tr\u1EE3 nhu c\u1EA7u dinh d\u01B0\u1EE1ng c\u1EE7a b\xE9. '
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
