<script lang="ts">
	import {theme_num} from '$lib/data';
	import Swal from 'sweetalert2';
	import 'sweetalert2/dist/sweetalert2.min.css';
	import { writable } from 'svelte/store';
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';
	import anime2 from '$lib/assets/images/anime-2.webp';
	import anime3 from '$lib/assets/images/anime-3.webp';
	import {data_api_lot} from '$lib/data';
	import Footer from '$lib/components/Footer.svelte';
	let phone = '';
	let date_me = '';
	let status_data = '';
	let status_theme:any;
	let yes = false;
	var num3front: any, num3end: any, num2: any, date: any;
	let themeValue :any;
	theme_num.subscribe(value => {
		if(value == 1){
			themeValue = anime3
		}else{
			themeValue = anime2
		}
	});
	function open_model() {
		yes = true;
	}
	onMount(async () => {
		var result = $data_api_lot
		num3front = result.runningNumbers[0].number;
		num3end = result.runningNumbers[1].number;
		num2 = result.runningNumbers[2].number;
		date = result.date;
		console.log(date)
	});
	
</script>

<div
	class="from-primary h-main-screen to-secondary text-neutral-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20"
>
	<div
		class="hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-40 lg:flex-row lg:items-end lg:gap-0 xl:gap-20"
	>
		<div class="lg:pl-10 lg:pb-32">
			<div class="mb-2 py-4 text-center lg:py-10 lg:text-left">
				<div class=" bg-neutral text-center rounded-md">
					<h1 class="pr-2 pl-2 font-title mb-2 text-4xl font-extrabold sm:text-5xl lg:text-7xl uppercase ">
						ME 2 YOU
					</h1>
				</div>
				<h2 class="font-title text-lg font-extrabold sm:text-2xl lg:text-3xl">
					ยินดีต้อนรับสู่โลกของเรา<br />
				</h2>
			</div>
			<div
				class="flex w-full flex-col items-center space-y-10 lg:flex-row lg:items-start lg:space-x-4 lg:space-y-0"
			>
				<div class="my-2 flex max-w-sm flex-col gap-2 text-left">
					<div class="flex gap-2">
						<svg
							width="20"
							height="20"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block h-6 w-6 stroke-current"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/></svg
						> ดูผลสลากไทย
					</div>
						<div class="flex gap-2">
							<svg
								width="20"
								height="20"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block h-6 w-6 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/></svg
							> สเเกน Qr Code
						</div>
				</div>
				
			</div>
			
		</div>
		

		<div class="aspect-auto animate-wiggle w-40 md:w-80 h-auto">
			<img alt="anime_Profile " src="{themeValue}">
		</div>

		<div />
	</div>
	<svg
		class="fill-secondary col-start-1 row-start-1 h-auto w-full"
		width="1600"
		height="595"
		viewBox="0 0 1600 595"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		><path
			d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"
		/></svg
	>
</div>

<div class="hero bg-neutral text-neutral-content min-h-max">
	<div class="hero-content mx-auto max-w-md text-center md:max-w-full sm:max-w-full">
		<div>
			<h2 class="mt-5 mb-5 text-11xl font-extrabold md:text-3xl">ผลหวยล่าสุด - {date}</h2>
			<h3 class="mb-5  font-bold sm:text-lg md:text-3xl ">
				ตรวจสอบรางวัลเพิ่มเติมได้ที่ glo.or.th
			</h3>
			<div class="stats sm:stats flex flex-col md:stats flex-col">
				<div class="stat">
					<div class="stat-title">รางวัลเลขหน้า 3 ตัว</div>
					<div class="stat-value text-primary">{num3front}</div>
				</div>
				<div class="stat">
					<div class="stat-title">รางวัลเลขหน้า 3 ตัว</div>
					<div class="stat-value text-primary">{num3end}</div>
				</div>
				<div class="stat">
					<div class="stat-title">รางวัลเลขท้าย 2 ตัว</div>
					<div class="stat-value text-primary">{num2}</div>
				</div>
			</div>

			<div class="mb-10 mt-10 ">
				<a
					href="lotto"
					class="btn btn-secondary rounded-md ring ring-primary hover:ring-secondary"
					>ดูรายละเอียดเพิ่มเติม</a
				>
			</div>
		</div>
	</div>
</div>

<div class="hero bg-primary text-neutral-content min-h-max">
	<div class="hero-content mx-auto max-w-md text-center md:max-w-full sm:max-w-full">
		<div>
			<h2 class="mt-5 mb-5 text-11xl font-extrabold md:text-3xl">Change Log</h2>
		<h3 class="mb-5  font-bold text-sm md:text-2xl ">ดูว่ามีอะไรใหม่ที่อัปเดตบ้าง ??</h3>
		<label for="Changelog" class="btn btn-neutral rounded-md ring ring-primary hover:ring-secondary">ดูข้อมูลการอัปเดต</label>
		</div>
		
		
		</div>
	</div>

<!-- Put this part before </body> tag -->

<!-- Put this part before </body> tag -->
<input type="checkbox" id="Changelog" class="modal-toggle" />
<label for="Changelog" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <h3 class="text-lg font-bold">👨‍💻 Change Log</h3>
    <p class="text-sm">Version 1.3B</p>
	<div class="badge badge-error gap-2">
		
		ปรับปรุงระบบธีม
	  </div><br>
	  <div class="badge badge-info gap-2">
		เพิ่มระบบสเเกนQr Code
	  </div><br>
	  <div class="badge badge-info gap-2">
		เเก้ไขบัคทั้วไป
	  </div>
  </label>
</label>
<Footer/>
