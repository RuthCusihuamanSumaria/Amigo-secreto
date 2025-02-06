let amigos = [];

// Funçion para adicionar um amigo
function adicionarAmigo() {

    let input = document.getElementById('amigo');
    let nome = input.value.trim(); // Remover espacios en blanco

    // Validar  entrada
    if (nome === '') {
        alert('Por favor, inserte un nombre');
        return;
    }

    // Atualizar el array de amigos
    amigos.push(nome);

    // Atualizar a lista exibida en la página
    let listaAmigos = document.getElementById('listaAmigos');
    let item = document.createElement('li');
    item.textContent = nome;
    listaAmigos.appendChild(item);

    // Limpar el campo de entrada
    input.value = '';
}
// Funçion para atualizar a lista de amigos exibida en la página
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa la lista, antes de adicionar nuevos elementos

    for (let amigo of amigos) {
        let item = document.createElement('li'); 
        item.textContent = amigo; // Define un texto o elemento como el nombre del amigo
        listaAmigos.appendChild(item); // Adiciona  <li> a una lista
    }
}
// Funçion para sortear un amigo 
function sortearAmigo() {
    // Verificar si hay amigos en un array
    if (amigos.length === 0) {
        alert('Adicione por lo menos un amigo antes de realizar el sorteo.');
        return;
    }

    // Gerar un índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener un nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibir un resultado , elemento de resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
