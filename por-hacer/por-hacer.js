const fs = require('fs');

let TareasPorHacer = [];

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
    crear
};