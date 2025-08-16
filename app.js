let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    // verificar se escreveram alguma coisa
    if (nome == '') {
        alert('Por favor, insira um nome.');
        return;
    }
    // verificar se o nome tem na lista
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado! Veja outro nome!');
        input.value = '';
        return;
    }
    // colocar o nome na lista de amigos
    amigos.push(nome);
    // limpar a caixinha de texto
    input.value = '';
    // chamar a funcao para mostrar na pagina
    mostrarLista();
}

function mostrarLista() {

    let lista = document.getElementById('listaAmigos');
    // limpar a lista existente --> para não ter duplicados
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
       let itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        lista.appendChild(itemLista);
    }
}

function sortearAmigo() {
    // validar que se tem amigos para o sorteio
    if (amigos.length === 0) {
        alert('Não há amigos para sortear!');
        return;
    }
    // gerar um indice ramdomico
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // obter o nome sorteado usando o indice
    let nomeSorteado = amigos[indiceAleatorio];
    // mostrar o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;
    // limpar a lista de amigos
    amigos = [];
}
