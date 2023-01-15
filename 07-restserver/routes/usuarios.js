const { check } = require("express-validator");
const { Router } = require("express");


const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
} = require("../controllers/usuarios");

const { validarCampos } = require("../middlewares/validar-campos");
const role = require("../models/role");
const { esRoleValido, emailExiste, existeUsuarioPorId } = require("../helpers/db-validators");

const router = Router();

router.get("/", usuariosGet);

router.put("/:id", [
  check('id', 'No es un ID valido').isMongoId(),
  validarCampos,
  check('id').custom( existeUsuarioPorId ),
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

router.delete("/", usuariosDelete);

router.patch("/", usuariosPatch);

module.exports = router;
