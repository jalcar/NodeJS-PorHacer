const fs = require('fs');

let TareasPorHacer = [];

const getListado = () => {
    cargarDB();
    return TareasPorHacer;
}

const crear = (p_Descripcion) => {
    cargarDB();
    let tarea = {
        descripcion: p_Descripcion,
        completado: false
    };
    TareasPorHacer.push(tarea);
    guardarDB();
    return tarea;
};

const actualizar = (p_Descripcion, p_Completado = true) => {
    cargarDB();
    let index = TareasPorHacer.findIndex(tarea => tarea.descripcion === p_Descripcion);
    if (index >= 0) {
        TareasPorHacer[index].completado = p_Completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (p_Descripcion) => {
    cargarDB();
    let index = TareasPorHacer.findIndex(tarea => tarea.descripcion === p_Descripcion);
    if (index >= 0) {
        TareasPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const guardarDB = () => {
    let dataTareas = JSON.stringify(TareasPorHacer);
    fs.writeFile('db/data.json', dataTareas, (err) => {
        if (err) throw new Error('Error al grabar.', err);
    });
};

const cargarDB = () => {
    try {
        TareasPorHacer = require('../db/data.json');
    } catch (error) {
        TareasPorHacer = [];
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};