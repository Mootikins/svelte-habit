<script lang="ts">
	import './main.css';
	import type { Habit as THabit } from './types/habit';
	import Habit from './Habit.svelte';
	import HabitGraph from './HabitGraph.svelte';
	import HabitAddForm from './HabitAddForm.svelte';

	let vh: number;
	function resize() {
		vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}
	resize();

	let habits: THabit[] = [];
	let addingHabit: boolean = false;

	function addHabit(event: CustomEvent<{ habit: THabit }>) {
		let newId = habits
			.map((h) => h.id)
			.reduce(
				(prev: number, curr: number) => {
					let newId = prev <= curr ? curr + 1 : prev;
					return newId;
				},
				habits.length > 0 ? habits[0].id : 0
			);

		habits = [
			...habits,
			{
				name: event.detail.habit.name,
				id: newId,
			},
		];
		addingHabit = false;
	}

	function loadHabits() {
		if (window.localStorage) {
			let habitsStr = window.localStorage.getItem('habits');
			try {
				let parsed = JSON.parse(habitsStr || '');
				if (
					'length' in parsed &&
					parsed.length > 0 &&
					'name' in parsed[0] &&
					'id' in parsed[0]
				) {
					habits = parsed;
				}
			} catch (e) {
				console.log(
					'Ooops, something went wrong when trying to load your habits!'
				);
			}
		}
	}

	function saveHabits() {
		window.localStorage.setItem('habits', JSON.stringify(habits));
	}
</script>

<svelte:window on:resize={resize} on:load={loadHabits} on:unload={saveHabits} />
<div class="flex flex-col items-center root space-y-4">
	<div class="flex flex-col items-center space-y-4">
		<HabitGraph />
		<div
			class="w-full p-2 bg-gray-100 border border-gray-400 rounded-md space-y-2"
		>
			<button
				class="content-center w-full p-4 text-xl font-bold text-white bg-green-500 border border-green-700 rounded-md disabled:bg-green-200 disabled:text-green-300"
				on:click={() => {
					addingHabit = true;
				}}
				disabled={addingHabit}
			>
				Add a new Habit
			</button>
			{#if addingHabit}
				<HabitAddForm
					on:addHabit={addHabit}
					on:cancelAdd={() => {
						addingHabit = false;
					}}
				/>
			{/if}
			{#if habits.length > 0}
				{#each habits as habit, i}
					<Habit {habit} />
				{/each}
			{/if}
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
</style>
