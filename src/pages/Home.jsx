import React,{useState} from 'react'
import './Home.css'
import rainy from '../assets/images/rainy.png'

const Home = () => {
  const [inputData, setInputData] = useState('')
  const [weatherData, setWeatherData] = useState([])

  const fetchWeatherData = async () => { 
    const apidata = await fetch('https://freetestapi.com/api/v1/weathers')
    const data = await apidata.json()
    return data
    
  }
  
  const provideWeatherData = async (cityName) => {
    const weatherData = await fetchWeatherData()
    const cityData = weatherData.find((item)=> item.city.toLowerCase() === cityName.toLowerCase())
    setWeatherData(cityData)  
  }

  
  function handleChange(e){
    setInputData(e.target.value)
  }
  return (
   <>
   <div className="container">
    <div className="top-box">
        <div className="left">
            <img src={rainy} alt="" />
        </div>
        <div className="right">
          <h1>Weather Forecast</h1>
        </div>
      </div>
      <div className="forecast">
        <h2>Temperature: {weatherData.temperature} °C</h2>
        <h2>Humidity: {weatherData.humidity}</h2>
        <h2>Wind Speed: {weatherData.wind_speed}</h2>
        <h2>Weather: {weatherData.weather_description}</h2>
      </div>
      <div className="search-box">
        <input type="text" name="" value={inputData} id="" onChange={handleChange} placeholder='Enter City'/>
        <button onClick={()=>provideWeatherData(inputData)}>Forecast</button>
      </div>
   </div>
   </>
  )
}

export default Home
