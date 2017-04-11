
class ForecastDisplay {
    constructor(iSubjectweatherdata) {
        this.currentPressure = 29.92;
        this.lastPressure;
        this.weatherData = iSubjectweatherdata;
        this.weatherData.registerObserver(this)
    }

    update(obj) {
        this.lastPressure = this.currentPressure;
        this.currentPressure = obj.pressure;
        this.display();
    }

    display() {
        console.log("Forecast: ");
        if (this.currentPressure > this.lastPressure) {
            console.log("Improving weather on the way!");
        } else if (this.currentPressure === this.lastPressure) {
            console.log("More of the same");
        } else if (this.currentPressure < this.lastPressure) {
            console.log("Watch out for cooler, rainy weather");
        }
    }

}

module.exports = ForecastDisplay;