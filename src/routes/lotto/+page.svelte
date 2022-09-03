<script lang="ts">
	import Swal from 'sweetalert2';
	import 'sweetalert2/dist/sweetalert2.min.css';
	import { onMount } from 'svelte';
	import { data_api_lot } from '$lib/data';
	import Footer from '$lib/components/Footer.svelte';
	let prizeFirst:string, prizeFirstNear:string, num2:string, num3end:string, num3front:string, date:string;
	onMount(async () => {
		let result = $data_api_lot;
		num3front = result.runningNumbers[0].number;
		num3end = result.runningNumbers[1].number;
		num2 = result.runningNumbers[2].number;
		prizeFirst = result.prizes[0].number[0];
		prizeFirstNear = result.prizes[1].number;
		date = result.date;
	});
	function check_num_lo() {
		Swal.fire('System', '⚠️ ยังไม่สามารถใช้งานฟิวเจอร์นี้ได้ ⚠️', 'error');
	}
</script>

<div
	class="from-primary h-main-screen to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20"
>
	<div class="hero-content mx-auto max-w-md text-center">
		<div>
			<div class="bg-secondary rounded-md shadow-sm">
				<h2 class="mb-5 text-11xl font-extrabold md:text-xl">ผลประกาศรางวัลทั้งหมดล่าสุด</h2>
			</div>
			<div class="stats shadow">
				<div class="text-primary  rounded-box flex items-center p-4">
					<div class="flex-1 px-2">
						<h2 class="text-6xl font-extrabold">
							{#if prizeFirst === undefined}Loading...{:else}{prizeFirst}{/if}
						</h2>
						<p class="text-xl text-opacity-80">รางวัลที่ 1 <br />รางวัลละ 6,000,000 บาท</p>
					</div>
				</div>
			</div>
			<!-- รางวัลข้างเคียงรางวัลที่ 1 เเละ รางวัลที่ 2 -->
			<div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div class="stats shadow">
					<div class="text-primary  rounded-box flex items-center p-4">
						<div class="flex-1 px-2">
							<h2 class="text-3xl md:text-xl font-extrabold ">
								{#if prizeFirstNear === undefined}Loading...{:else}{prizeFirstNear}{/if}
							</h2>
							<p class="text-sm text-opacity-80">
								ข้างเคียงรางวัลที่ 1 <br />2 รางวัล <br />รางวัลละ 4,000 บาท
							</p>
						</div>
					</div>
				</div>
				<div class="stats shadow">
					<div class="text-primary  rounded-box flex items-center p-4">
						<div class="flex-1 px-2">
							<h2 class="text-3xl md:text-xl font-extrabold ">
								{#if num3front === undefined}Loading...{:else}{num3front}{/if}
							</h2>
							<p class="text-sm text-opacity-80">
								เลขหน้า 3ตัว <br />2 รางวัล <br />รางวัลละ 4,000 บาท
							</p>
						</div>
					</div>
				</div>
				<div class="stats shadow">
					<div class="text-primary  rounded-box flex items-center p-4">
						<div class="flex-1 px-2">
							<h2 class="text-3xl md:text-xl font-extrabold ">
								{#if num3end === undefined}Loading...{:else}{num3end}{/if}
							</h2>
							<p class="text-sm text-opacity-80">
								เลขท้าย 3 ตัว <br />2 รางวัล <br />รางวัลละ 4,000 บาท
							</p>
						</div>
					</div>
				</div>
				<div class="stats shadow">
					<div class="text-primary  rounded-box flex items-center p-4">
						<div class="flex-1 px-2">
							<h2 class="text-3xl md:text-xl font-extrabold ">
								{#if num3end === undefined}Loading...{:else}{num2}{/if}
							</h2>
							<p class="text-sm  text-opacity-80">
								เลขท้าย 2 ตัว<br /> 1 รางวัล รางวัลละ 2,000 บาท
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="flex justify-center min-h-full mt-5">
				<div class="badge text-center">
					ข้อมูลเมื่อวันที่ {#if num3end === undefined}ไม่ทราบ{:else}{date}{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<div class="hero bg-black text-primary-content min-h-1/2 bg-gradient-to-br">
	<div class="hero-content mx-auto max-w-sm text-center md:max-w-full">
		<div>
			<h2 class="mt-3 mb-2 text-2xl font-extrabold md:text-5xl">ตรวจสอบสลากอัตโนมัติ</h2>
			<h3 class="mb-1 text-sm sm:text-3xl font-bold">
				เพียงระบุตัวเลขของคุณในช่องด้านล่างก็สามารถรู้ผลได้ทันที
			</h3>
			<div class="my-10 flex w-full flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
				<div
					class="card shadow-xl blur-sm bg-primary text-base-content mx-auto w-full max-w-xs flex-1 p-8"
				>
					<input
						type="text"
						placeholder="XXXXXX"
						maxlength="6"
						class="input text-center input-bordered rounded-lg w-full max-w-xs"
						disabled
					/>
					<button class="btn shadow-xl mt-4 btn-wide rounded-lg" on:click={check_num_lo} disabled
						>ตรวจสอบรางวัล</button
					>
				</div>
			</div>
			<div />
		</div>
	</div>
</div>
<Footer/>
