import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const Graph = ({graphdata}) => {
  let [GraphData,setGraphData] = useState([])
   
  
useEffect(()=>{

  if(graphdata[0]?.dt_txt.slice(11)==="00:00:00")
  {
    setGraphData(graphdata)
  }
})
 
    let time=GraphData.map((data)=>{
        return data.dt_txt.slice(11,16)
    })
    let temp=GraphData.map((data)=>{
        return data.main.temp-273.15
    })
    
    
 
    const data = {
        labels: time,
        datasets: [
          {
            label: 'Temperature',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 2,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 2,
            data: temp,
          },
        ],
      };
    
      const options = {
        scales: {
          x: {
            type: 'category',
            labels: time,
          },
          y: {
            beginAtZero: true,
          },
        },
      };
  return(
    <>
    <div style={{height:'300px',width:"800px",margin:"130px 27%"}}>
    <Line data={data} options={options} />;

    </div>
    </>
  ) 
};

export default Graph;