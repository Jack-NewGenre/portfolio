"use client"

import { fetchWeatherApi } from "openmeteo";

const params = {
	latitude: 51.5085,
	longitude: -0.1257,
	hourly: ["temperature_2m", "weather_code"],
	models: "ukmo_seamless",
	timezone: "GMT",
	forecast_days: 1,
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const latitude = response.latitude();
const longitude = response.longitude();
const elevation = response.elevation();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const utcOffsetSeconds = response.utcOffsetSeconds();

console.log(
	`\nCoordinates: ${latitude}°N ${longitude}°E`,
	`\nElevation: ${elevation}m asl`,
	`\nTimezone: ${timezone} ${timezoneAbbreviation}`,
	`\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
);

const hourly = response.hourly()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	hourly: {
		time: Array.from(
			{ length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() }, 
			(_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
		),
		temperature_2m: hourly.variables(0)!.valuesArray(),
		weather_code: hourly.variables(1)!.valuesArray(),
	},
};

// The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
console.log("\nHourly data:\n", weatherData.hourly)

const WeatherComponent = () => {
    const weatherEmoji: { [key: number]: string } = {
        0: "☀️",           // Clear sky
        1: "🌤️",          // Mainly clear
        2: "⛅",           // Partly cloudy
        3: "☁️",           // Overcast
        45: "🌫️",          // Fog
        48: "🌫️❄️",        // Depositing rime fog
        51: "🌦️",          // Drizzle: Light
        53: "🌧️",          // Drizzle: Moderate
        55: "🌧️💧",        // Drizzle: Dense
        56: "🌧️❄️",        // Freezing Drizzle: Light
        57: "🌧️❄️💧",      // Freezing Drizzle: Dense
        61: "🌦️",          // Rain: Slight
        63: "🌧️",          // Rain: Moderate
        65: "🌧️🌊",        // Rain: Heavy
        66: "🌧️❄️",        // Freezing Rain: Light
        67: "🌧️❄️🌊",      // Freezing Rain: Heavy
        71: "🌨️",          // Snow fall: Slight
        73: "🌨️⛄",        // Snow fall: Moderate
        75: "❄️🌨️",        // Snow fall: Heavy
        77: "🌨️❄️",        // Snow grains
        80: "🌦️",          // Rain showers: Slight
        81: "🌧️",          // Rain showers: Moderate
        82: "⛈️",          // Rain showers: Violent
        85: "🌨️",          // Snow showers: Slight
        86: "❄️🌨️",        // Snow showers: Heavy
        95: "⛈️",          // Thunderstorm: Slight or moderate
        96: "⛈️🌨️",        // Thunderstorm with slight hail
        99: "⛈️❄️",        // Thunderstorm with heavy hail
    };

    const currentWeatherCode = weatherData.hourly.weather_code?.[0];

    const weatherCodeEmoji = currentWeatherCode !== undefined ? weatherEmoji[currentWeatherCode] || "?" : "N/A";
    return ( 
        <div>
			<p>{weatherCodeEmoji}</p>
        </div>
     );
}

export default WeatherComponent;