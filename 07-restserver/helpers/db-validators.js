const Role = require('../models/role');

const esRoleValido = ( async(rol = "") => {

    const existeRol = await role.findOne({ rol });
    if(!existeRol) {
       throw new Error(`El rol no ${ rol } esta registrado en la base de datos`);
    }
 })



 module.exports = {
    esRoleValido
};