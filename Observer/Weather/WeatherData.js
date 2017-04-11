var iSubject = require('./iSubject');

class WeatherData extends iSubject {
    constructor() {
        super();
        this.temperature;
        this.humidity;
        this.pressure;
    }

    registerObserver(observers) {
        super.registerObserver(observers);
    }

    removeObserver(observers) {
        super.removeObserver(observers);
    }

    notifyObservers() {
        super.notify(this)
    }

    measurementChanged() {
        this.notifyObservers();
    }

    setMeasurement(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementChanged();
    }      

    getTemperature() {
        return this.temperature;
    }

    getHumidity() {
        return this.humidity;
    }    

    getPressure() {
        return this.pressure;
    }

}

module.exports = WeatherData;