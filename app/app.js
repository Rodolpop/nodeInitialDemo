require('colors');

const { readDB, saveDB } = require('./helpers/fs');

const { 
    consoleMenu,
    pause,
    readInput,
    serieToDelete,
    confirm,
    showCheckList
} = require('./helpers/inquirer');

const Series = require('./models/series');


const main = async () => {

    let opt = '';
    const series = new Series();

    const dbSeries = readDB();

    if (dbSeries) { // cargar tareas
        series.loadSeriesFromDB(dbSeries);
    }

    do {
        // Print concole main Menu
        opt = await consoleMenu();

        switch (opt) {
            case '1':
                // crear opcion
                const serieName = await readInput('Serie Name:');
                series.addSerie(serieName);
                break;

            case '2':
                series.serieList();
                break;

            case '3': // listas sin empezar
                series.serieListByType("Wishlist");
                break;

            case '4': // listar viéndose
                series.serieListByType("Watching");
                break;

            case '5': // listar completadas
                series.serieListByType("Watched");
                break;

            case '6': // Empezar tarea
                const ids1 = await showCheckList(series._listaSeries, "startTime");
                series.startSerie(ids1)
                break;

            case '7': // Finalizar tarea
                    const ids2 = await showCheckList(series._listaSeries, "endTime");
                    series.endSerie(ids2)
                    break;

            case '8': // Borrar
                const id = await serieToDelete(series._listaSeries); 
                if (id !== '0') {
                    const ok = await confirm('¿Sure?');
                    if (ok) {
                        series.deleteSerie(id);
                        console.log('Serie deleted');
                    }
                }
                break;
        }

        saveDB(series._listaSeries);

        await pause();

    } while (opt !== '0');

}

main();

