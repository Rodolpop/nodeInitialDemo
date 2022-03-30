const Serie = require('./serie');

class Series {

    constructor() {
        this._listaSeries = [];
    }

    get listaSeries() {
        return this._listaSeries
    }

    loadSeriesFromDB( series ) {
        
        series.forEach( serie => {
            this._listaSeries.push(serie);
        });
    }

    