



const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'selectedOption',
        message: 'Please select an option',
        choices: [
            {
                value: '1',
                name: `${ '1.'.green } Add new Serie to WatchList`
            },
            {
                value: '2',
                name: `${ '2.'.green } List => All Series`
            },
            {
                value: '3',
                name: `${ '3.'.green } List => Wishlist`
            },
            {
                value: '4',
                name: `${ '4.'.green } List => Watching List`
            },
            {
                value: '5',
                name: `${ '5.'.green } List => Already Watched`
            },
            {
                value: '6',
                name: `${ '6.'.green } Start Watching`
            },
            {
                value: '7',
                name: `${ '7.'.green } Finish Watching`
            },
            {
                value: '8',
                name: `${ '8.'.green } Delete Serie from Watching List`
            },
            {
                value: '0',
                name: `${ '0.'.green } Exit` 
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
                    return 'Please enter a name for the serie';
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
        name: '0.'.green + ' Cancel serie deletion'
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Delete this serie',
            choices
        }
    ]

    const { id } = await inquirer.prompt(questions);
    return id;
}

const confirm = async(message) => {

    const question = [
        {
            type: 'confirm',
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
            type: 'checkbox', 
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
    confirm,
    showCheckList
}
