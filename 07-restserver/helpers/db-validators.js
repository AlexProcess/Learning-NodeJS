const Role = require("../models/role");
const Usuario = require('../models/usuario');

const esRoleValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol no ${rol} esta registrado en la base de datos`);
  }
};

const emailExiste = async (correo = "") => {
    console.log(correo);
  // Verificar si el correo existe
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error(`El correo: ${correo}, ya está registrado`);

  }
};

module.exports = {
    esRoleValido,
    emailExiste
};
