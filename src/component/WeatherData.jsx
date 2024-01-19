import  axios  from 'axios';
import React, { useEffect, useState } from 'react';
import DayWiseWeather from './DayWiseWeather';
import Graph from './Graph';
import style from '../css/Searchbar.module.css'
import WeatherDetails from './WeatherDetails';


function WeatherData() {
   
    let [list,setlist]=useState([])
    let [selectedDay,getselectedDay]=useState(0)
    let [cityName,setCityName]=useState("bangalore")
    
   
    async function getWeatherData(){
        let {data}=await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e2ec6a6db67799e9a5137cf16f067f06`)
       
        setlist(data.list)
       
    }
    let aaa=list.map((item) =>{
        return item.dt_txt.slice(0,11)
    });
   
   
  aaa=new Set(aaa)
  aaa=Array.from(aaa)
  let day=aaa.map((item) =>{
    let d=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
    let date=new Date(item)
    return d[date.getDay()]
   })

  function getData(e)
  {
    setCityName(e.target.value)
  }
  let High_temp={}
 aaa.forEach((item) =>{

   let   HighArray=[]
  
    for(let i in list){
    let d=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
    let date=new Date(item)

     
       if(list[i].dt_txt.slice(0,11) == item)
       {
        let key=d[date.getDay()]
        HighArray.push(list[i].main.temp_max)
        High_temp={...High_temp ,[key]:HighArray}
       }
    }
  })

  let Low_temp={}
  aaa.forEach((item) =>{
 
    let   LowArray=[]
   
     for(let i in list){
     let d=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
     let date=new Date(item)
 
      
        if(list[i].dt_txt.slice(0,11) == item)
        {
         let key=d[date.getDay()]
         LowArray.push(list[i].main.temp_min)
         Low_temp={...Low_temp ,[key]:LowArray}
        }
     }
   })

   
  let weather={}
  aaa.forEach((item) =>{
 
    let   weatherArray=[]
   
     for(let i in list){
     let d=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
     let date=new Date(item)
 
      
        if(list[i].dt_txt.slice(0,11) == item)
        {
         let key=d[date.getDay()]
         weatherArray.push(list[i].weather[0].main)
         weather={...weather ,[key]:weatherArray}
        }
     }
   })
    
  let pressure={}
  aaa.forEach((item) =>{
 
    let   pressureArray=[]
   
     for(let i in list){
     let d=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
     let date=new Date(item)
 
      
        if(list[i].dt_txt.slice(0,11) == item)
        {
         let key=d[date.getDay()]
         pressureArray.push(list[i].main.pressure)
         pressure={...pressure ,[key]:pressureArray}
        }
     }
   })
  

   let Humidity={}
   aaa.forEach((item) =>{
  
     let   HumidityArray=[]
    
      for(let i in list){
      let d=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
      let date=new Date(item)
  
       
         if(list[i].dt_txt.slice(0,11) == item)
         {
          let key=d[date.getDay()]
          HumidityArray.push(list[i].main.humidity)
          Humidity={...Humidity ,[key]:HumidityArray}
         }
      }
    })

    
   let feels_like={}
   aaa.forEach((item) =>{
  
     let   feels_likeArray=[]
    
      for(let i in list){
      let d=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
      let date=new Date(item)
  
       
         if(list[i].dt_txt.slice(0,11) == item)
         {
          let key=d[date.getDay()]
          feels_likeArray.push(list[i].main.feels_like)
          feels_like={...feels_like ,[key]:feels_likeArray}
         }
      }
    })
    console.log(feels_like);


  function SubmitData(e)
  {
    e.preventDefault()
    getWeatherData()
  }

   let ChartData=list.filter((item) =>{
    if(item.dt_txt.slice(0,11)===aaa[selectedDay]){
        return item
   }})
  

  


    useEffect(()=>{
        getWeatherData()
       
    },[])

    return (
        <div>
             <form className={style.example} onSubmit={SubmitData}>
      
      <input type="text" placeholder="Search.." name="search" onChange={getData}/>
      <button type="submit">Search</button>
    </form>
             <div style={{display:"flex",justifyContent:"space-around" }}>
            {
                day.map((day,index)=>{
                    let highest=High_temp[day]
                    let lowest=Low_temp[day]
                  
                    return(
                        <div key={day}>
                            <DayWiseWeather day={day} index={index} getselectedDay={getselectedDay} highest={highest} lowest={lowest} weather={weather[day]}/>
                        </div>
                    )
                })
            }
            </div>
            <WeatherDetails pressure={pressure[Object.keys(pressure)[0]]} Humidity={Humidity[Object.keys(Humidity)[0]]} feelslike={feels_like[Object.keys(feels_like)[0]]}/>
            <Graph graphdata={ChartData} />
            
        </div>
    );
}

export default WeatherData;