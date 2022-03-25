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
                const input = await readInput('Serie Name:');
                console.log(input)
                break;
        }


    } while (opt !== '0');

}

main();

