const { response, request } = require("express");
const { validationResult } = require('express-validator')
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/Usuario");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "noname", apikey, page = 1, limit } = req.query;

  res.json({
    msg: "GET api desde el controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params.id;

  res.json({
    msg: "PUT api desde el controlador",
    id: 10,
  });
};

const usuariosPost = async (req, res = response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    
    const { nombre, correo, password, rol } = req.body;
    const salt = bcryptjs.genSaltSync();
    const encryptedPassword = bcryptjs.hashSync(password.toString(), salt);

    //Verificar si el correo existe
    const existEmail = await Usuario.findOne({ correo });
    if (!existEmail) {
        return res.status(400).json({
          msg: "El correo ya ha sido registrado",
    });
  }

  //generar usuario
  const usuario = await new Usuario({
    nombre,
    correo,
    rol,
    password: encryptedPassword,
  });
  // Guardar en DB

  await usuario.save();
  res.json({
    msg: "POST api desde el controlador",
    usuario,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "Delete api desde el controlador",
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "Patch api desde el controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
