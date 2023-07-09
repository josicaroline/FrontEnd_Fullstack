
// ForEach:
const frutas = ['uva', 'melancia', 'morango', 'banana'];

frutas.forEach(element => console.log(element));


// Map:
const numeros = [1, 4, 9, 16];

const map1 = numeros.map(element => element * 2);
console.log(map1);


// Filter:
const esmaltes = ['impala', 'colorama', 'risque', 'hits', 'avon'];

const resultado = esmaltes.filter(words => words.length > 6);
console.log("resultado:", resultado);

// Find:
const numeros1 = [5, 12, 6, 123, 33];

const encontrarNumeros = numeros1.find(element => element > 20);
console.log("numeros maiores que 20: ", encontrarNumeros);

// Reduce:
const foguetes = [
    {pais: 'Russia', lanc: 30},
    {pais: 'EUA', lanc: 27},
    {pais: 'Alemanha', lanc: 29},
    {pais: 'Brasil', lanc: 8},
    {pais: 'Japao', lanc: 16}
];

const totalLancamento = foguetes.reduce((prevValor, elem) => prevValor + elem.lanc, 0);
console.log("O total de lançamentos é: ", totalLancamento);