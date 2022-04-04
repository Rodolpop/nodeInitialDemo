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
    
   

const consoleMenu = async() => {
    console.clear();
    console.log(`    
    +-+-+-+-+-+-+-+
    |N|E|T|F|L|I|X|
    +-+-+-+-+-+-+-+`.red)
    const { selectedOption } = await inquirer.prompt(questions);
    return selectedOption;
}

const pause = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green } para continuar`
        }
    ];


    console.log('\n');
    await inquirer.prompt(question);
}

const readInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'serieName',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Ingrese el nombre de la serie';
                }
                return true;
            }
        }
    ];

    const { serieName } = await inquirer.prompt(question);
    return serieName;
}

const serieToDelete = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1}.`.green;

        return {
            value: tarea.id,
            name:  `${ idx } ${ tarea.name }`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar borrado de la serie'
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borar esta serie',
            choices
        }
    ]

    const { id } = await inquirer.prompt(questions);
    return id;
}

const Confirmar = async(message) => {

    const question = [
        {
            type: 'confirmar',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}   

const showCheckList = async( tareas = [], time ) => {
    const filteredSeries = tareas.filter(tarea => tarea[time] === null)
    const choices = filteredSeries.map( (tarea, i) => {
        //console.log(tarea[time])
        const idx = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name:  `${ idx } ${ tarea.name }`,
            checked: ( tarea[time] ) ? true : false
        }
    });
    const questions = [
        {
            type: 'checkbox', //el checkbox va a regresar un array con todos los ids selecconados
            name: 'ids',
            message: `${time} series:`,
            choices
        }
    ]
    const { ids } = await inquirer.prompt(questions);
    return ids;
}



module.exports = {
    consoleMenu,
    pause,
    readInput,
    serieToDelete,
    Confirmar,
    showCheckList
}

}
