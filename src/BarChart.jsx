
import React, {useEffect,createRef} from 'react';
import * as d3 from "d3";

const BarChart = (props) => {
const ref = createRef();

useEffect(()=>{
    drawChart();
})

const w = 500;
const h = 400;
const drawChart = () => {
    const svgRef = d3.select(ref.current);
    svgRef.attr('width',w).attr('height',h).style('background-color','#cccccc');
    svgRef.selectAll('rect')
	.data(props.data).enter()
	.append('rect')
	.attr('x',(d,i) => i * 70)
	.attr('y',(d,i)=> h-10*d)
	.attr("width",65)
	.attr('height',(d,i) => d * 10)
	.attr('fill','blue');

}

return <svg width='800' height='800' ref={ref}></svg>
	
}

export default BarChart;