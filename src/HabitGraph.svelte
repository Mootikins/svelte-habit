<script lang="ts">
	let days: number[] = new Array(365).map((_e, i) => i);
</script>

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

<style>
	.habit-graph {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: repeat(53, minmax(0, 1fr));
		grid-template-rows: repeat(7, minmax(0, 1fr));
	}
</style>
