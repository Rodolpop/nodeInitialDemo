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

    serieList() { 
        this._listaSeries.forEach( (tarea, i) => {
            const num = `Serie nº${i + 1}:`.green;
            const { name, startTime, endTime } = tarea;
            const state = ( endTime ) && ( startTime )
                            ? 'Watched'.green
                            : ( endTime == null ) && ( startTime ) 
                            ? 'Watching'.yellow
                            : 'Wishlist'.red
            console.log(`${ num } ${ name } => ${ state }`);
        });        
    }
    serieListByType(type) { 
        this._listaSeries.forEach( (tarea, i) => {
            const num = `Serie nº${i + 1}:`.green;
            const { name, startTime, endTime } = tarea;
            const state = ( endTime ) && ( startTime )
                            ? 'Watched'
                            : ( endTime == null ) && ( startTime ) 
                            ? 'Watching'
                            : 'Wishlist';
            (state === type)
            ? console.log(`${ num } ${ name }`)
            :""
        });        
    }

    startSerie( ids = [] ) { //recibe un array con 
        for (let i = 0; i < ids.length; i++) {
            for (let j = 0; j < this._listaSeries.length; j++) {
                const time = (ids[i] === this._listaSeries[j].id)
                ? new Date().toISOString() : null;
                (this._listaSeries[j].startTime == null)
                ? this._listaSeries[j].startTime = time
                : ""
            }
        }
    }


    endSerie( ids = [] ) { //recibe un array con 
        for (let i = 0; i < ids.length; i++) {
                for (let j = 0; j < this._listaSeries.length; j++) {
                const time = (ids[i] === this._listaSeries[j].id)
                ? new Date().toISOString() : null;
                (this._listaSeries[j].endTime == null && this._listaSeries[j].startTime)
                ? this._listaSeries[j].endTime = time
                : (this._listaSeries[j].startTime == null && ids[i] === this._listaSeries[j].id)
                ? console.log(`You cannot finish ${this._listaSeries[j].name} if you have not first started it`)
                : ""
                }
        }
    }
}
module.exports = Series;