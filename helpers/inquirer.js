//funciones inquirer aquí
//https://www.npmjs.com/package/inquirer


require('colors');

const inquirer = require('inquirer');


const consoleMenu = async() => {

    const questions = [
        {
            type: 'list',
            name: 'selectedOption',
            message: 'Selecione una opción',
            choices: [
                {
                    value: '1',
                    name: `${ '1.'.green } agregar serie a la lista de tareas`
                },
                {
                    value: '2',
                    name: `${ '2.'.green } Lista de todas las series`
                },
                {
                    value: '3',
                    name: `${ '3.'.green } Lista de series         pendientes o Wishlist`
                },
                {
                    value: '4',
                    name: `${ '4.'.green } Lista de series    comenzadas`
                },
                {
                    value: '5',
                    name: `${ '5.'.green } Lista de series   ya vistas`
                },
                {
                    value: '6',
                    name: `${ '6.'.green } Marcar como serie comenzada serie`
                },
                {
                    value: '7',
                    name: `${ '7.'.green } marcar como serie terminada serie`
                },
                {
                    value: '8',
                    name: `${ '8.'.green } borrar serie de la lista de Comenzadas`
                },
                {
                    value: '0',
                    name: `${ '0.'.green } Salir` 
                },
                
            ]


            
        }
    ];
    
    console.clear();
    console.log(`    
    +-+-+-+-+-+-+-+
    |N|E|T|F|L|I|X|
    +-+-+-+-+-+-+-+`.red)
    const { selectedOption } = await inquirer.prompt(questions);
    return selectedOption;
}

const readInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'serieName',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Please enter a name for the serie';
                }
                return true;
            }
        }
    ];

    const { serieName } = await inquirer.prompt(question);
    return serieName;
}

module.exports = {
    consoleMenu,
    readInput
}