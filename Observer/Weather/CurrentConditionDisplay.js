
class CurrentConditionsDisplay {
    constructor(iSubjectweatherdata) {
        this.temperature;
        this.humidity;
        this.weatherData = iSubjectweatherdata;
        this.weatherData.registerObserver(this)
    }

    update(obj) {
        this.temperature = obj.temperature;
        this.humidity = obj.humidity;
        this.display();
    }

    display() {
        console.log("Current conditions: " + this.temperature
            + "F degrees and " + this.humidity + "% humidity");
    }

}

module.exports = CurrentConditionsDisplay;