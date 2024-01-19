import React from 'react';
import sun from '../Images/sun.png'
import clouds from '../Images/cloudy.png'
import rain from '../Images/rain.png'


function DayWiseWeather({day,index,getselectedDay,highest,lowest,weather}) {

    const elementCounts = {};

// Count occurrences
weather.forEach(element => {
    elementCounts[element] = (elementCounts[element] || 0) + 1;
});

// Find the element with the highest count
let mostRepeatedElement;
let highestCount = 0;

for (const element in elementCounts) {
    if (elementCounts[element] > highestCount) {
        mostRepeatedElement = element;
        highestCount = elementCounts[element];
    }
}




   let High= Math.max(...highest)
   

   High=High-273.15
   High=High.toString().slice(0,5)


   let Low= Math.min(...lowest)
   Low=Low-273.15
   Low=Low.toString().slice(0,5)
  
    function WeatherOftheDay(e)
    {
        getselectedDay(index);
    }
    return (
        <>
          <div onClick={WeatherOftheDay}>
            <h4>{day}</h4>
            <p><span style={{fontWeight:"bold", fontSize:"10px"}}>{High}  </span><span style={{fontSize:"10px"}}> {Low}</span></p>
            <div>
{mostRepeatedElement==="Clouds" &&<img height="40px" src={clouds} alt="" />}
{mostRepeatedElement==="Clear" &&<img height="40px" src={sun} alt="" />}

            </div>
            <h4>{mostRepeatedElement}</h4>
            </div>
        </>
    );
}

export default DayWiseWeather;