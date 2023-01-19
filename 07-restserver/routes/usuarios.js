const { check } = require("express-validator");
const { Router } = require("express");


const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
} = require("../controllers/usuarios");

const validarJWT = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
const { esAdminRole, tieneRole } = require("../middlewares/validar-roles");

const role = require("../models/role");
const { esRoleValido, emailExiste, existeUsuarioPorId } = require("../helpers/db-validators");

const router = Router();

router.get("/", usuariosGet);

router.put("/:id", [
  check('id', 'No es un ID valido').isMongoId(),
  check('id').custom( existeUsuarioPorId ),
  check('rol').custom( esRoleValido ),
  validarCampos,
], usuariosPut);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio y mas de 6 letras").isLength({
      min: 6,
    }),
    check("correo", "El correo no es valido").isEmail(),
    check("correo", "este correo ya existe").custom( emailExiste ),
    //check('rol', 'No es un rol valido').isIn(["ADMIN_ROLE", "USER_ROLE" ]),
    check("rol").custom( esRoleValido ),
    validarCampos,
  ],
  usuariosPost
);

router.delete("/:id",[
  validarJWT,
  //esAdminRole,
  tieneRole('ADMIN_ROLE', 'VENTAS_ROLE'),
  check('id', 'No es un ID valido').isMongoId(),
  check('id').custom( existeUsuarioPorId ),
  validarCampos
],usuariosDelete);

router.patch("/", usuariosPatch);

module.exports = router;
