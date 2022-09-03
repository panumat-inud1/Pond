<script lang="ts">
	import scanIcon from '../assets/scan.svg';

	export let active: boolean;
	export let decodedData: string;
	export let onNewScan: () => void;

	let data, regex;

	$: if (decodedData) {
		const urlExp =
			/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
		regex = new RegExp(urlExp);
	}
</script>

<!-- svelte-ignore empty-block -->
<slot {decodedData}>
	{#if !decodedData || decodedData === ''}

			{:else if decodedData}
			<input type="text" value="{decodedData}" class="input mt-5 mb-5 input-bordered text-primary input-secondary w-full max-w-xs" readonly/>
				
				<div class="mt-5 mb-10 results__button-container">
					<button type="button" class="btn btn-secondary rounded-md" on:click={onNewScan}>
						<img class="results__scan-icon" src={scanIcon} alt="New Scan" />
						<span>สเเกนอีกครั้ง</span>
					</button>
				</div>
			{/if}
	
</slot>

<style>
	.results {
		width: 100%;
		max-width: 500px;
	}

	.results__data {
		margin: 50px 0 80px 0;
		padding: 20px 20px 27px 20px;

		word-break: break-all;

		border: 2px dashed #3d3d3d;
		border-radius: 20px;

		font-size: 1.3rem;
	}

	.results__empty {
		color: #959595;

		font-style: italic;
	}

	.results__button-container {
		display: flex;
		justify-content: center;
	}

	.results__button {
		display: flex;

		align-items: center;

		padding: 14px 16px;

		cursor: pointer;
		transition-duration: 300ms;
		transition-property: background-color, transform;

		color: white;

		border: 0;
		border-radius: 8px;
		background-color: #23cd00;

		font-size: 1.5rem;
		font-weight: 500;
	}

	.results__button:hover {
		background-color: #39b300;
	}

	.results__scan-icon {
		width: 1.5rem;
		margin-right: 10px;
	}

	.results__link,
	.results__link:visited {
		transition: color 200ms;

		color: #7094ff;
	}

	.results__link:hover,
	.results__link:active {
		color: #486cd9;
	}
</style>
