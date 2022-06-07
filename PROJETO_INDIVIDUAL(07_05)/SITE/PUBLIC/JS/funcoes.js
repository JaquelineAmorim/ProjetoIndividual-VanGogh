// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}


//modalPainting

function buttonBack() {
    modalSunflower.style.display = 'none'
    modalCafe.style.display = 'none'
    modalAlmond.style.display = 'none'
    modalLilies.style.display = 'none'
    modalBedroom.style.display = 'none'
    modalSelf.style.display = 'none'
}
function openModalSunflower() {
    modalSunflower.style.display = 'block'
}
function openModalCafe() {
    modalCafe.style.display = 'block'
}
function openModalAlmond() {
    modalAlmond.style.display = 'block'
}
function openModalLilies() {
    modalLilies.style.display = 'block'
}
function openModalBedroom() {
    modalBedroom.style.display = 'block'
}
function openModalSelf() {
    modalSelf.style.display = 'block'
}

//cadastro
function exibirQuadro() {
    var selecionarQuadro = select_quadro.value
    if (selecionarQuadro == 1) {
        div_quadro.innerHTML = `
        <img src="../ASSETS/imgs/gifNoiteEstrelada.gif" >
        `
    } else if (selecionarQuadro == 2) {
        div_quadro.innerHTML = `
       <img src="../ASSETS/imgs/gifAutoRetrato.webp">
       `
    } else if (selecionarQuadro == 3) {
        div_quadro.innerHTML = `
       <img src="../ASSETS/imgs/gifVinha.gif">
       `
    }
}

//dashboard
lista_comentario = []
function cadastrarComentario() {
    var comentario = input_comentarios.value
    lista_comentario.push(comentario)

    div_exibirComentario.innerHTML = ""

    for (contador = 0;
        contador < lista_comentario.length;
        contador++) {
        div_exibirComentario.innerHTML += `Comentário (${contador + 1}) - ${lista_comentario[contador]} <br> <br>`
    }

}

function calcular() {
    var number = Number(input_number.value)
    var qntd = 1000
    div_exibir.innerHTML = `  <b> Você conhece ${(number / qntd) * 100}% das 1000 obras de Arte que Van Gogh nos deixou. <br> Infelizmente apenas 1 delas foi vendida durante toda sua vida. </br> Você consegue identificá-la entre as obras listadas abaixo? <br>(Escolha uma e clique para saber se acertou!:) </b>`
}

function resultadoQuadro1() {
    quadroCorreto.innerHTML = ""
    div_exibirQuadro.innerHTML = "<b>Ops! Pintura errada :/ Tente novamente</b>"
}

function resultadoQuadro2() {
    quadroCorreto.innerHTML = ""
    div_exibirQuadro.innerHTML = "<b>Ops! Pintura errada :/ Tente outra vez</b>"
}

function resultadoQuadro3() {
    quadroCorreto.innerHTML = "<h1>Correto!! &hearts;</h1>"
    div_exibirQuadro.innerHTML = "<b> A Vinha Encarnada é um quadro de Vincent Van Gogh, concluído no início de novembro de 1888. Esta foi a única peça vendida pelo artista em vida, foi exibida pela primeira vez na mostra de Les XX, em 1890, em Bruxelas e vendida por 400 Francos belgas para Anna Boch, uma pintora impressionista da Bélgica, membra do Les XX e colecionadora de arte. </b>"
}


