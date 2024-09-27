<script lang="ts">
    let clicked = $state(false);
    let incrementIdPart = 0;
    let svgElement: SVGElement;
    const svgNS = "http://www.w3.org/2000/svg";


    const draw = (e: MouseEvent) => {
        const x = e.offsetX.toString();
        const y = e.offsetY.toString();

        if(clicked){
            const g = document.querySelector(`#id-${incrementIdPart}`);
            const rect = document.createElementNS(svgNS, 'rect');
            rect.setAttribute('width', '3')
            rect.setAttribute('height', '3')
            rect.setAttribute('x', x)
            rect.setAttribute('y', y)
            rect.setAttribute('fill', 'deeppink')
            g?.appendChild(rect)

        }
    }

    $effect(() => {
        if(clicked){
            incrementIdPart += incrementIdPart + 1;

            const g = document.createElementNS(svgNS, 'g');
            g.setAttribute('id', `id-${incrementIdPart}`)
            svgElement.appendChild(g);

        }
        if(!clicked){
            console.log(svgElement)
        }
    })
    
</script>

<h1>Mini paint by Burtek</h1>
<!-- svelte-ignore a11y_no_static_element_interactions -->
<svg height="500" width="1000" xmlns="http://www.w3.org/2000/svg" 
    onmousemove={(e) => draw(e)} 
    onmousedown={() => clicked = true} 
    onmouseup={() => clicked = false} 
    onmouseleave={() => clicked = false}
    bind:this={svgElement}
>
    <rect x="0" y="0" width="100%" height="100%" stroke="violet" stroke-width="8px" fill="white" />
   
</svg>
  



<style>
    /* .wrapper {
        border: 2px double violet;
    } */
</style>