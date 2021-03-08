<script lang="ts">
	import './main.css';
	import Habit from './Habit.svelte';

	let vh: number;
	function resize() {
		vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}
	resize();

	let days: number[] = new Array(365).map((_e, i) => i);
	let habits: number[] = new Array(7).map((_e, i) => i);
</script>

<svelte:window on:resize={resize} />
<div class="flex flex-col items-center root space-y-4">
	<div class="flex flex-col items-center space-y-4">
		<div
			class="p-2 bg-gray-100 border border-gray-400 rounded-md gap-1 habit-graph"
		>
			{#each days as _day}
				<div
					class={`w-4 h-4 bg-green-${
						Math.floor((Math.random() * 100) % 5) + 1
					}00 border border-gray-400 rounded-sm`}
				/>
			{/each}
		</div>
		<div
			class="w-full p-2 bg-gray-100 border border-gray-400 rounded-md space-y-2"
		>
			<button
				class="content-center w-full p-4 text-xl font-bold text-white bg-green-500 border border-green-200 rounded-md"
				>Add a new Habit</button
			>
			<div class="space-y-2">
				{#each habits as _habit}
					<Habit />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.root {
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
		padding-top: calc(var(--vh, 1vh) * 3);
		padding-bottom: calc(var(--vh, 1vh) * 3);
		overflow-y: auto;
	}

	.habit-graph {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: repeat(53, minmax(0, 1fr));
		grid-template-rows: repeat(7, minmax(0, 1fr));
	}
</style>
