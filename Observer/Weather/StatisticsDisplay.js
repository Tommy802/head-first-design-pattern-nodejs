
class StatisticsDisplay {
    constructor(iSubjectweatherdata) {
        this.maxTemp = 0.0;
        this.minTemp = 200;
        this.tempSum = 0.0;
        this.numReadings = 0;
        this.weatherData = iSubjectweatherdata;
        this.weatherData.registerObserver(this)
    }

    update(obj) {
        this.tempSum += obj.temperature;
        this.numReadings++;

        if (obj.temperature > this.maxTemp) {
            this.maxTemp = obj.temperature;
        }

        if (obj.temperature < this.minTemp) {
            this.minTemp = obj.temperature;
        }
        this.display();
    }

    display() {
        console.log("Avg/Max/Min temperature = " + (this.tempSum / this.numReadings)
            + "/" + this.maxTemp + "/" + this.minTemp);
    }

}

module.exports = StatisticsDisplay;