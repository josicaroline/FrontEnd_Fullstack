
//Exemplo manipulação de evento de click do DOM:

let elemento = document.querySelector('button');
elemento.addEventListener('click', clique);

function clique() {
    elemento.style.background = 'pink';
}