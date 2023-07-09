
//Exemplo de operador Rest:

var myFn = (p1, ...resto) => {
    console.log(p1) 
    console.log(resto) 
}

myFn('test', 'p2', 'p3')