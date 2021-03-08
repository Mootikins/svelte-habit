<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Habit } from './types/habit';

	const dispatch = createEventDispatcher();

	let newHabit: Habit = {
		id: 0,
		name: '',
	};
</script>

<form class="flex flex-col space-y-2">
	<div class="flex flex-col space-y-2">
		<label for="habit-name" class="block ml-1 text-gray-700">
			Habit Name/Description
		</label>
		<input
			id="habit-name"
			type="text"
			name="habit-name"
			class="w-full p-2 border border-gray-400 rounded-md bg-gray-50"
			bind:value={newHabit.name}
			placeholder="Enter the name of the habit..."
		/>
	</div>
	<button
		class="content-center w-full p-2 text-xl font-bold text-white bg-green-500 border border-green-700 rounded-md disabled:bg-green-200 disabled:text-green-300"
		on:click={() => {
			dispatch('addHabit', {
				habit: newHabit,
			});
		}}
		type="button"
		disabled={newHabit.name === ''}
	>
		Add Habit
	</button>
</form>

<style>
</style>
