<script lang="ts">
	let colors = ['red', 'green', 'blue'];
	let color = colors[Math.floor((Math.random() * 100) % 3)];
</script>

<div
	class={`bg-${color}-100 p-2 pl-4 rounded-md border border-${color}-500 flex flex-row space-x-2 justify-between place-items-center`}
>
	Text for habit here
	<button class="p-2 bg-white border border-gray-400 rounded-md">Did it</button>
</div>

<style>
</style>
