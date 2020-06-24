<template>
   
    <svg class="smooth" :viewBox="viewbox" >
        <path xmlns="http://www.w3.org/2000/svg" :d="svg"  :fill="computedColor"/>
    </svg>

</template>

<script>
import {map,easeInQuad,easeInCubic,easeOutQuart} from '@/js/math'
import {hexToRgbA} from '@/js/color.js'
import Color from 'color'

class Point{
    constructor({x,y}){
        this.x = x
        this.y = y
    }
    get toSvg(){
        let {x,y} = this
        return `${x},${y}`
    }
}


export default {
    props : ['roundness','color','active'],
    computed : {
        computedColor(){
            try{
                return Color(this.color).rgb()
            }catch(e){
                return 'rgb(0,0,0)'
            }
        },
        viewbox(){
            let x =  100
            let s = x/2
            let p = 0
            return `${-(s+p)} ${-(s+p)} ${2*(s+p)} ${2*(s+p)}`
        },
        svg(){
            const x =  100

            let l  = map(this.roundness,0,0.2,0.6,0,true)
            let r = (x/2 - (x/2*l))*map(this.roundness,0,1,1,0.6);
            let s = x/2
           
            let a = new Point({ x: -s*l, y: -s})
            let b = new Point({ x: -s, y: -s*l})
            let c = new Point({ x: -s, y: s*l})
            let d = new Point({ x: -s*l, y: s})
            let e = new Point({ x: +s*l, y: s})
            let f = new Point({ x: +s, y: s*l})
            let g = new Point({ x: +s, y: -s*l})
            let h = new Point({ x: +s*l, y:-s})

            let arc1 = `M${a.toSvg} C${a.x-r},${a.y} ${b.x},${b.y-r} ${b.toSvg}` 
            let arc2 = `L${c.toSvg} C${c.x},${c.y+r} ${d.x-r},${d.y} ${d.toSvg}` 
            let arc3 = `L${e.toSvg} C${e.x+r},${e.y} ${f.x},${f.y+r} ${f.toSvg}` 
            let arc4 = `L${g.toSvg} C${g.x},${g.y-r} ${h.x+r},${h.y} ${h.toSvg}` 

            let path = `${arc1}  ${arc2}  ${arc3}  ${arc4}Z` 


            let css = `background-image : url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='${this.viewbox}'><path d='${path}' fill='${this.computedColor}'/></svg>");`

            let svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='${this.viewbox}'><path d='${path}' fill='${this.computedColor}'/></svg>`

            let svgUrl = `data:image/svg+xml,${encodeURIComponent(svg)}`

            if(this.active)this.$emit('svgUpdated',{ css,svg,svgUrl })
          

            return path
        }
    }
}





</script>
