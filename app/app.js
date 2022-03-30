require('colors');

const { 
    consoleMenu,
    readInput
} = require('../helpers/inquirer');

const { readDB } = require('../helpers/fs');


const main = async () => {

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
                //
                break;

            case '7': // Finalizar tarea
                //
                    break;

            case '8': // Borrar
                //
                break;
        }


    } while (opt !== '0');

}

main();