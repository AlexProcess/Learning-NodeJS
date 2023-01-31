


const dbValidators  = require('./db-validators')
const googleVerify  = require('./google-verify')
const generarJWT    = require('./generar-jwt')
const subirArchivo  = require('./subir-archivo')

module.exports = {
    ...dbValidators,
    ...generarJWT,
    ...googleVerify,
    ...subirArchivo
}
