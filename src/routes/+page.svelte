<script lang="ts">
	import { untrack } from 'svelte';
	import { Paint } from '../classes/Paint/Paint.svelte';

	let canvasElement: HTMLCanvasElement;
	let paint: Paint;

	$effect(() => {
		if (canvasElement) {
			paint = new Paint(canvasElement);
		}
	});
</script>

<h1>Mini paint by Burtek</h1>
<canvas
	bind:this={canvasElement}
	id="paint"
	width="1200"
	height="800"
	style="border:1px solid deeppink"
	onmousedown={(e) => paint.initDraw(e.offsetX, e.offsetY)}
	onmouseup={() => paint.reset()}
	onmousemove={(e) => {
		if (paint.clicked) paint.draw(e.offsetX, e.offsetY);
	}}
	onmouseleave={() => paint.reset()}
	ontouchstart={(e) => {
		const { clientX, clientY } = e.touches[0];
		paint.initDraw(clientX - canvasElement.offsetLeft, clientY - canvasElement.offsetTop);
	}}
	ontouchmove={(e) => {
		e.preventDefault();

		const { clientX, clientY } = e.touches[0];
		if (paint.clicked)
			paint.draw(clientX - canvasElement.offsetLeft, clientY - canvasElement.offsetTop);
	}}
	ontouchend={() => paint.reset()}
	ontouchcancelcapture={() => paint.reset()}
></canvas>

<!-- @TODO: mobile actions to improve -->
