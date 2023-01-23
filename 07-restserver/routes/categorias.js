const { check } = require("express-validator");
const { Router, response } = require("express");
const { validarJWT, validarCampos } = require("../middlewares");
const { crearCategoria } = require("../controllers/categoria");

const router = Router();

/*
{{url}}/api/categorias
*/

//Obtener todas las categorias


router.get("/", (req = request, res = response) => {
  return res.json({ msg: "Get" });
});
//Obtener una categorias por id - publico


router.get("/:id", (req = request, res = response) => {
  return res.json({ msg: "Get - id" });
});
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
