var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idQuadro", function (req, res) {
    medidaController.BuscarQuadro(req, res);
});

router.get("/tempo-real/:idQuadro", function (req, res) {
    medidaController.dasEmTempoReal(req, res);
})

router.get("/ultimas", medidaController.BuscarQuadro);

module.exports = router;