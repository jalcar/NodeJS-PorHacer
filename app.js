const { argv } = require('./config/yargs');
const tareas = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        let listado = tareas.getListado();
        for (let tarea of listado) {
            console.log('==========POR HACER=========='.green);
            console.log(`${ tarea.descripcion }`);
            console.log(`Estado: ${ tarea.completado }`);
            console.log('============================='.green);
        }
        break;
    case "actualizar":
        let rptaUPD = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(rptaUPD);
        break;
    case "borrar":
        let rptaDEL = tareas.borrar(argv.descripcion);
        console.log(rptaDEL);
        break;
    default:
        console.log('Comando ingresado no es válido.');
}