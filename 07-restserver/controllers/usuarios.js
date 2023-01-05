const { response } = require('express');



const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'GET api desde el controlador'
    });
}

const usuariosPut = (req, res = response) => {
    
    res.json({
        msg: 'PUT api desde el controlador'
    });
}

const usuariosPost = (req, res = response) => {
    
    const {nombre, edad} = req.body;

    res.json({
        msg: 'POST api desde el controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res = response) => {
    
    res.json({
        msg: 'Delete api desde el controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    
    res.json({
        msg: 'Patch api desde el controlador'
    });
}

module.exports = {
    usuariosGet, 
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}