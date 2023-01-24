const { request, response } = require("express");
const { populate } = require("../models/categoria");
const Categoria = require('../models/categoria')

//obtenerCategorias - apginado - total - populate
const obtenerCategorias = async (req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = {estado: true}

  //const total = await Usuario.countDocuments(query);

  const [total, categorias] = await Promise.all([
    Categoria.countDocuments(query),
    Categoria.find(query)
        .populate('usuario', 'nombre' )
        .skip(Number( desde ))
        .limit(Number( limite ))
  ]);

  res.json({
    total,
    categorias
  });

}

//obtenerCategoria populate{}
const obtenerCategoria = async (req = request, res = response) => {
    const { id } = req.params;
    const categoria = await Categoria.findById( id ).populate('usuario', 'nombre');

    return res.json( categoria );


}


//ActualizarCategoria

//borrar categoria - estado:false 

const crearCategoria = async(req = request, res = response) => {

    const nombre = req.body.nombre.toUpperCase();
    
    const categoriaDB = await Categoria.findOne({ nombre });
    
    if (categoriaDB) {
    return res.status(404).json({
        msg: `la categoria ${categoriaDB.nombre}, ya existe`
    })
}

//generar la data a guardar
const data = {
    nombre,
    usuario: req.usuario._id
}

const categoria = new Categoria( data );

//guardarDB
await categoria.save();

res.status(201).json(categoria);
}

module.exports = {
        crearCategoria,
        obtenerCategorias,
        obtenerCategoria,
}