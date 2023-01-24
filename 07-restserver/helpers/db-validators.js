const Role = require("../models/role");
const {Usuario, categoria} = require('../models');

const esRoleValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no  esta registrado en la base de datos`);
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

const existeUsuarioPorId = async ( id ) => {
  const existeUsuario = await Usuario.findById( id );
  if (!existeUsuario) {
    throw new Error(`El id no existe ${id}`);
  }
}

const existeCategoriaPorId = async ( id ) => {
  const existeCategoria = await Usuario.findById( id );
  if (!existeCategoria) {
    throw new Error(`El id no existe ${id}`);
  }
}



module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId
};