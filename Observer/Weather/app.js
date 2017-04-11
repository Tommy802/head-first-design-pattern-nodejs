var WeatherData = require('./WeatherData')
var CurrentConditionsDisplay = require('./CurrentConditionDisplay')

var weatherData = new WeatherData();

var currentDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurement(80, 65, "30.4f");
weatherData.setMeasurement(82, 70, "29.2f");
weatherData.setMeasurement(78, 90, "29.2f");


