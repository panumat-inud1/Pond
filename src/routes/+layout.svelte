<script type="ts">
	export const prerender = true;
	export const csr = false;
	import axios from 'axios';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import { theme_num } from '$lib/data';
	import { loading } from '$lib/data';
	import { data_api_lot } from '$lib/data';
	import Loading from '$lib/Loading.svelte';
	import { page } from '$app/stores';
	import './app.css';
	$: $loading = !!$navigating;
	let url_base = $page.url.origin;
	let yes = false;
	let theme, status_btn;
	let themes: any;
	let name = 'lofi';
	let isTrueSet: any;
	let page_load = false;
	let msg = '';
	let values =0;

	function open_model() {
		yes = true;
	}
	function sleep(ms: any) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	function clue_model() {
		yes = false;
	}
	
	function switch_theme() {
		if (localStorage.getItem('theme') == 'fantasy') {
			theme = false;
			name = 'lofi';
			themes = 'lofi';
			theme_num.set(0);
			localStorage.setItem('status', theme);
			localStorage.setItem('theme', name);
		} else if (localStorage.getItem('theme') == 'lofi') {
			theme = true;
			name = 'fantasy';
			themes = 'fantasy';
			theme_num.set(1);
			isTrueSet = true;
			localStorage.setItem('status', theme);
			localStorage.setItem('theme', name);
		}
	}
	onMount(async () => {
		if (localStorage.getItem('theme') === null) {
			localStorage.setItem('theme', 'lofi');
			localStorage.setItem('status', 'false');
			isTrueSet = false;
			themes = 'lofi';
			theme_num.set(0);
		} else {
			status_btn = localStorage.getItem('status');
			themes = localStorage.getItem('theme');
			if (localStorage.getItem('status') == 'true') {
				isTrueSet = true;
				theme_num.set(1);
			} else {
				isTrueSet = false;
				theme_num.set(0);
			}
		}
		values = 0;
		msg = 'เริ่มต้น';
		await sleep(1000);
		msg = 'ตรวจสอบการอัปเดตข้อมูล..';
		await sleep(1000);
		values = 10;
		msg = 'ตรวจสอบการอัปเดตข้อมูล..';
		await sleep(1500);
		msg = 'ตรวจสอบข้อมูล';
		values = 50;
		await sleep(100);
		msg = 'โหลดข้อมูลทั้งหมด';
		values = 80;
		let response = await axios.get(url_base+'/api/random',{timeout: 1000});
		$data_api_lot = await response.data;
		if($data_api_lot.date != ""){
			values = 100;
			page_load = true;
		}else{
			values = 0;
			msg = "โหลดข้อมูลไม่สำเร็จ โปรดรีหน้าใหม่อีกครั้ง";
		}
		
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet" />
</svelte:head>

{#if page_load == false}
	<Loading {msg} {values} />
{:else}
	<div id="drawer" class="drawer" data-theme={themes}>
		<input id="my-drawer" type="checkbox" bind:checked={yes} class="drawer-toggle" />
		<div id="drawer-content" class="drawer-content scrollbar-hide">
			<div class="navbar">
				<div class="flex-none">
					<button on:click={open_model} class="btn btn-ghost text-neutral-content">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-5 h-5 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
				<div class="flex-1">
					<span class="normal-case text-neutral-content text-xl">ME2YOU</span>
				</div>
			</div>
			<slot />

		</div>
		<div class="drawer-side">
			<label for="my-drawer" class="drawer-overlay" />
			<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
				<!-- Sidebar content here -->
				<li><a on:click={clue_model} href="/">หน้าเเรก</a></li>
				<li><a on:click={clue_model} href="lotto">ตรวจหวย</a></li>
				<li><a on:click={clue_model} href="qr">สเเกน Qr Code</a></li>
			</ul>
		</div>
	</div>
{/if}
