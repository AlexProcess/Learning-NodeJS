const { check } = require('express-validator');
const { Router } = require('express');
const Role = require('../models/role');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');

const { validarCampos } = require('../middlewares/validar-campos');
const role = require('../models/role');


const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', [
   check('nombre', 'El nombre es obligatorio').not().isEmpty(),
   check('password', 'El password es obligatorio y mas de 6 letras').isLength({min: 6}), 
   check('correo', 'El correo no es valido').isEmail(),
   //check('rol', 'No es un rol valido').isIn(["ADMIN_ROLE", "USER_ROLE" ]),
   check("rol").custom( async(rol = "") => {
      const existeRol = await role.findOne({ rol });
      if(!existeRol) {
         throw new Error(`El rol no ${ rol } esta registrado en la base de datos`);
      }
   }) ,
   validarCampos
],  usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);




module.exports = router;