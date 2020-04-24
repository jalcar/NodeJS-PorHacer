const optCrear = {
    descripcion: {
        alias: 'd',
        demand: true
    }
};

const optActualizar = {
    descripcion: {
        alias: 'd',
        demand: true
    },
    completado: {
        alias: 'c',
        default: true
    }
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', optCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optActualizar)
    .help()
    .argv;

module.exports = {
    argv
};