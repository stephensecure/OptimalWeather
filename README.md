Project test done by Oladapo Stephen Ayoola.

// Run this Project
1. yarn install
2. yarn start

// HOT TO USE APPLICATION
Click on Current weather for todays weather forecast or 16 days forecast for the next 16 days data, 
Click on the city you want the data for 
Click on “Todays forecast” for current weather report or “16 days forecast”  for the 16 days weather report and the data will append below.

// WHAT I HAVE DONE
I used the weather data from rapidApi to create Todays and 16 days weather report with a set list of cities.
Using rapidAPI host and key to fetch the weather object, getWeatherForecast calls fetchData, fetchData makes the request to the API using the selected forecastType and city, saves the data in jsonRes and sets it as the WeatherObj.
CurrentForecast and SixteenDaysForecast use the data received from the getWeatherForecast response, sets it into the weatherObj using getWeather and populates the current weather report into the Weather and Details component.
The Details component appends the data below. 


//  FEATURES
I used React and typescript