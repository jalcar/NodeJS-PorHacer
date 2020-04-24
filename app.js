const { argv } = require('./config/yargs');
const tareas = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        console.log('Mostrar todas las tareas por hacer');
        break;
    case "actualizar":
        console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('Comando ingresado no es válido.');
}