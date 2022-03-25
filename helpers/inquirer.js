//funciones inquirer aquí
//https://www.npmjs.com/package/inquirer


require('colors');

const inquirer = require('inquirer');


const consoleMenu = async() => {

    const questions = [
        {
            type: 'list',
            name: 'selectedOption',
            message: 'Please select an option',
            choices: [
                {
                    value: '1',
                    name: `${ '1.'.green } Nombre serie?`
                },
                
                {
                    value: '1',
                    name: '1. Crear tarea'
                },
                {
                    value: '2',
                    name: '2. Actualizar'
                },
                {
                    value: '3',
                    name: '3. Borrar'
                },
                {
                    value: '4',
                    name: '4. Listar'
                },
                {
                    value: '0',
                    name: '0. Salir'
                }
                
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