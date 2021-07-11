const _ = require('lodash');

module.exports = {
    lastObject: (array) => {
      return _.last(array);
    },
    latestHumidity: (array) => {
        const lastObject = _.last(array);
        return lastObject.HumidityPercentage;
    },
    latestTemperature: (array) => {
        const lastObject = _.last(array);
        return lastObject.Temperature;
    },
    latestMoisture: (array) => {
        const lastObject = _.last(array);
        return lastObject.MoisturePercentage;
    },
    latestLight: (array) => {
        const lastObject = _.last(array);
        return lastObject.LightIndex;
    },
    getSpecificItem: (array, item) => {
        return _.map(array, item);
    }
}