<script lang="ts">
	import type { Habit as THabit } from './types/habit';
	import Habit from './Habit.svelte';
	export let habits: THabit[] = [];
</script>

<div class="space-y-2">
	{#each habits as habit}
		<Habit bind:habit />
	{/each}
</div>

<style>
</style>
