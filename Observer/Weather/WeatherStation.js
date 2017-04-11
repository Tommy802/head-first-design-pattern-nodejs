var WeatherData = require('./WeatherData');
var CurrentConditionsDisplay = require('./CurrentConditionDisplay');
var HeatIndexDisplay = require('./HeatIndexDisplay');
var StatisticsDisplay = require('./StatisticsDisplay');
var ForecastDisplay = require('./ForecastDisplay');

var weatherData = new WeatherData();

var currentDisplay = new CurrentConditionsDisplay(weatherData);
var statisticsDisplay = new StatisticsDisplay(weatherData);
var forecastDisplay = new ForecastDisplay(weatherData);


weatherData.setMeasurement(80, 65, 30.4);
weatherData.setMeasurement(82, 70, 29.2);
weatherData.setMeasurement(78, 90, 29.2);


