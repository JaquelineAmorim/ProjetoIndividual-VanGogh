var database = require("../database/config");

function listar() {
    console.log("ACESSEI O comentario  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = ` 
        SELECT 
            a.id AS idComentario,
            a.titulo, 
            a.descricao,
            a.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha,
            u.fkQuadro,
            u. id AS idQuadro
        FROM comentario a
            INNER JOIN usuario u
                ON a.fkUsuario = u.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucao = `
        SELECT 
            a.id AS idComentario,
            a.titulo,
            a.descricao,
            a.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
            u.fkQuadro,
            u. id AS idQuadro
        FROM comentario a
            INNER JOIN usuario u
                ON a.fkUsuario = u.id
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
        SELECT 
            a.id AS idComentario,
            a.titulo,
            a.descricao,
            a.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
            u.fkQuadro,
            u. id AS idQuadro
        FROM comentario a
            INNER JOIN usuario u
                ON a.fkUsuario = u.id
        WHERE u.id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicar(titulo, descricao, idUsuario) {
    console.log("ACESSEI O comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucao = `
        INSERT INTO comentario (titulo, descricao, fkUsuario) VALUES ('${titulo}', '${descricao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novaDescricao, idComentario) {
    console.log("ACESSEI O comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idComentario);
    var instrucao = `
        UPDATE comentario SET descricao = '${novaDescricao}' WHERE id = ${idComentario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idComentario) {
    console.log("ACESSEI O comentario MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idComentario);
    var instrucao = `
        DELETE FROM comentario WHERE id = ${idComentario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar
}
