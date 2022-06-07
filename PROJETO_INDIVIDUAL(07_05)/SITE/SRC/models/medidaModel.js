var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function BuscarQuadro1() {
    const query = `select count(idUsuario) AS 'qtdQuadro' from usuario where fkQuadro = 1;`

    return database.executar(query)
}
function BuscarQuadro2() {
    const query = `select count(idUsuario) AS 'qtdQuadro' from usuario where fkQuadro = 2;`

    return database.executar(query)
}
function BuscarQuadro3() {
    const query = `select count(idUsuario) AS 'qtdQuadro' from usuario where fkQuadro = 3;`

    return database.executar(query)
}


module.exports = {
    buscarUltimasMedidas,
    BuscarQuadro1,
    BuscarQuadro2,
    BuscarQuadro3,
}
