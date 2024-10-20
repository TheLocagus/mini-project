export class Paint {
	startX: number | undefined = $state();
	startY: number | undefined = $state();
	clicked = $state(false);
	canvas: HTMLCanvasElement | undefined = $state();
	color: string = '#0000ff';
	size: number = 3;

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
	}

	draw(newX: number, newY: number) {
		if (!this.startX || !this.startY || !this.canvas) return;

		const ctx = this.canvas.getContext('2d');
		if (!ctx) return;

		ctx.moveTo(this.startX, this.startY);
		ctx.lineTo(newX, newY);
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.size;
		ctx.stroke();

		this.startX = newX;
		this.startY = newY;
	}

	initDraw(x: number, y: number) {
		this.clicked = true;
		this.startX = x;
		this.startY = y;
	}

	reset = () => {
		this.clicked = false;
		this.startX = undefined;
		this.startY = undefined;
	};
}
