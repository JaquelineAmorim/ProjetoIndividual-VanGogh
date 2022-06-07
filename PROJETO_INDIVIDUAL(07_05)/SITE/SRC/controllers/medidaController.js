var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idQuadro = req.params.idQuadro;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idQuadro, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function BuscarQuadro(req, res) {
    let Quadro = [];

    medidaModel.BuscarQuadro1().then((response) => {
        const tamanho = response.length;
        if (tamanho > 0) {
            Quadro.push(response)
            medidaModel.BuscarQuadro2().then((response) => {
                const t1 = response.length;
                if (t1 > 0) {
                    Quadro.push(response)
                    medidaModel.BuscarQuadro3().then((response) => {
                        const t2 = response.length;
                        if (t2 > 0) {
                            Quadro.push(response)
                                    res.json({
                                        Quadro
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }

module.exports = {
    buscarUltimasMedidas,
    BuscarQuadro
}