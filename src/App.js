import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Header from "./components/Header";

class App extends Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    pressure: null,
    error: null,
    weather: null
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_key = "ba899d98a0731f0f6a72cf5ad849d555"
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country},id=524901&APPID=${api_key}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: `${data.main.temp.toFixed()}\u00b0C`,
        city: data.name,
        country: data.sys.country,
        humidity: `${data.main.humidity}%`,
        pressure: `${data.main.pressure}hPa`,
        description: data.weather[0].description,
        error: "",
        weather: data.weather[0].description
      });
    } else {
      this.setState({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        pressure: null,
        error: "Please enter values",
        weather: null
      });
    }
  };
  render() {
    const {
      temperature,
      country,
      city,
      humidity,
      pressure,
      description,
      error,
      weather
    } = this.state;
    return (
      <div>
        <div className={`wrapper ${weather}`}>
          <Header />
          <div className="form-container">
            <Form getWeather={this.getWeather} />
            <Weather
              temperature={temperature}
              city={city}
              country={country}
              humidity={humidity}
              pressure={pressure}
              description={description}
              error={error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
