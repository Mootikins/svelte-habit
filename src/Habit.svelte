<script lang="ts">
	import type { Habit } from './types/habit';
	export let habit: Habit;
	let colors = ['red', 'green', 'blue'];
	let color = colors[Math.floor((Math.random() * 100) % 3)];
</script>

<div
	class={`bg-${color}-100 p-2 pl-4 rounded-md border border-${color}-500 flex flex-row space-x-2 justify-between place-items-center text-${color}-700`}
>
	{habit.name}
	<button
		class={`p-2 bg-${color}-400 border border-${color}-700 text-white rounded-md font-bold`}
		>Did it!</button
	>
</div>

<style>
</style>
