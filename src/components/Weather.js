import React from "react";

const Weather = props => {
  const {
    temperature,
    country,
    city,
    humidity,
    pressure,
    description,
    error
  } = props;

  return (
    <div className="weather-info">
      {city && country && (
        <p className="weather-key">
          Location:{" "}
          <span className="weather-value">
            {city}, {country}
          </span>
        </p>
      )}
      {temperature && (
        <p className="weather-key">
          Temperature: <span className="weather-value">{temperature} </span>{" "}
        </p>
      )}
      {humidity && (
        <p className="weather-key">
          Humidity: <span className="weather-value">{humidity} </span>{" "}
        </p>
      )}
      {pressure && (
        <p className="weather-key">
          Pressure: <span className="weather-value">{pressure} </span>{" "}
        </p>
      )}
      {description && (
        <p className="weather-key">
          Conditions: <span className="weather-value">{description} </span>{" "}
        </p>
      )}
      {error && <p className="weather-error">{error}</p>}
    </div>
  );
};

export default Weather;
