const { request, response } = require("express");
const { populate } = require("../models/producto");
const Categoria = require('../models/producto')

const obtenerProductos = async (req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = {estado: true}

  //const total = await Usuario.countDocuments(query);

  const [total, productos] = await Promise.all([
    Producto.countDocuments(query),
    Producto.find(query)
        .populate('usuario', 'nombre' )
        .skip(Number( desde ))
        .limit(Number( limite ))
  ]);

  res.json({
    total,
    productos
  });

}

const obtenerProducto = async (req = request, res = response) => {
    const { id } = req.params;
    const producto = await Producto.findById( id ).populate('usuario', 'nombre');

    return res.json( producto );


}

const actualizarProducto = async (req = request, res = response) => {
    const { id } = req.params;
    const { estado, usuario, ...data } = req.body;

    data.nombre = data.nombre.toUpperCase();
    data.usuario = req.usuario._id;

    const producto = await Producto.findByIdAndUpdate( id, data, {new: true} );

    res.json( producto );
}

const borrarProducto = async (req = request, res = response) =>{

    const { id } = req.params;
    const productoBorrado = await Producto.findByIdAndUpdate( id, {estado: false}, {new: true} );

    return res.json(productoBorrado); 
    
}

const crearProducto = async(req = request, res = response) => {

    const nombre = req.body.nombre.toUpperCase();
    
    const productoDB = await Producto.findOne({ nombre });
    
    if (productoDB) {
    return res.status(404).json({
        msg: `El producto ${productoDB.nombre}, ya existe`
    })
}

//generar la data a guardar
const data = {
    nombre,
    usuario: req.usuario._id
}

const producto = new Producto( data );

//guardarDB
await producto.save();

res.status(201).json(producto);
}

module.exports = {
        crearProducto,
        obtenerProductos,
        obtenerProducto,
        actualizarProducto,
        borrarProducto

}