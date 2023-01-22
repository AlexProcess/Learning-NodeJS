const { check } = require("express-validator");
const { Router, response } = require("express");
const { validarCampos } = require("../middlewares/validar-campos");

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
router.post("/", (req = request, res = response) => {
  return res.json({ msg: "POST" });
});
//Actualizar - privado - cualquiera con un token valido
router.put("/:id", (req = request, res = response) => {
  return res.json({ msg: "PUT" });
});
//Borrar una categoria - admin
router.delete("/:id", (req = request, res = response) => {
  return res.json({ msg: "PUT" });
});

module.exports = router;
