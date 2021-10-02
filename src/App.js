import React, { Component } from 'react'
import './App.css';
import { Form } from "./components/form/Form";
import { Info } from "./components/info/Info";
import { Weather } from "./components/weather/Weather";


const API_KEY = "74a46e98b0ddd73161fcb0f5bf2ef0bb";


export class App extends Component {

      state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        error: undefined

      }


    gettingWeather = async (e) =>{
    e.preventDefault()
    const city = e.target.elements.city.value
    if(city) {
      const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await api_url.json();

      let sunriseInSec = data.sys.sunrise
        let date = new Date(sunriseInSec * 1000)
        let timeSunrise = date.toLocaleTimeString()

      console.log(data)
  
        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          sunrise: timeSunrise,
          error: undefined
        });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        error: "Write city"
      });
    }
  }
  render () {
    return (
      <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-xs-5">
            <Info/>
            </div>
            <div className="col-xs-7">
            <Form weatherMethod={this.gettingWeather} />
          <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          error={this.state.error}
            
            />
            </div>
          </div>
          </div>
        </div>
         
         
      </div>
     );
  }
}


