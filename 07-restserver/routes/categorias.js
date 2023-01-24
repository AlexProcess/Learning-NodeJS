const { check } = require("express-validator");
const { Router, response } = require("express");
const { validarJWT, validarCampos } = require("../middlewares");
const { crearCategoria, obtenerCategorias, obtenerCategoria } = require("../controllers/categoria");
const { existeCategoriaPorId } = require("../helpers/db-validators");

const router = Router();

/*
{{url}}/api/categorias
*/

//Obtener todas las categorias


router.get("/", obtenerCategorias);
//Obtener una categorias por id - publico


router.get("/:id", 
[
  check('id', 'no es un id de mongo valido').isMongoId(),
  validarCampos,
  check('id').custom( existeCategoriaPorId ),
], obtenerCategoria);
//Crear categoria por id - privado - cualquier persona con un token válido

router.post(
  "/",
  [
    validarJWT,
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    validarCampos,
  ],crearCategoria );
//Actualizar - privado - cualquiera con un token valido


router.put("/:id", (req = request, res = response) => {
  return res.json({ msg: "PUT" });
});
//Borrar una categoria - admin


router.delete("/:id", (req = request, res = response) => {
  return res.json({ msg: "PUT" });
});

module.exports = router;
