const { response, request } = require('express');
const Usuario = require('../models/Usuario');

const usuariosGet = (req = request, res = response) => {
    const {q, nombre = "noname", apikey, page = 1, limit } = req.query;
    
    res.json({
        msg: 'GET api desde el controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params.id;
    
    res.json({
        msg: 'PUT api desde el controlador',
        id: 10
    });
}

const usuariosPost = async (req, res = response) => {
    const body = req.body;
    const usuario = new Usuario( body );

    await usuario.save();
    
    res.json({
        msg: 'POST api desde el controlador',
        usuario
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