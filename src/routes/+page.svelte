<script lang="ts">
	let canvasElement: HTMLCanvasElement;
	let clicked = false;

	interface Coordinates {
		x: number | undefined;
		y: number | undefined;
	}

	const initValues: Coordinates = {
		x: undefined,
		y: undefined
	};

	const draw = (e: MouseEvent) => {
		if (!initValues.x || !initValues.y) return;
		const newX = e.offsetX;
		const newY = e.offsetY;

		const ctx = canvasElement.getContext('2d');
		if (!ctx) return;

		ctx.moveTo(initValues.x, initValues.y);
		ctx.lineTo(newX, newY);
		ctx.stroke();

		initValues.x = newX;
		initValues.y = newY;
	};

	const reset = () => {
		clicked = false;
		initValues.x = undefined;
		initValues.y = undefined;
	};

	$effect(() => {});
</script>

<h1>Mini paint by Burtek</h1>
<canvas
	bind:this={canvasElement}
	id="paint"
	width="1200"
	height="800"
	style="border:1px solid deeppink"
	onmousedown={(e) => {
		clicked = true;
		initValues.x = e.offsetX;
		initValues.y = e.offsetY;
	}}
	onmouseup={() => reset()}
	onmousemove={(e) => {
		if (clicked) draw(e);
	}}
	onmouseleave={() => reset()}
></canvas>
