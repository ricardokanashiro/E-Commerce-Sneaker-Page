// Variaveis:

var variavel = '';
let justLet = [];
const constante = {};

// Funções:

function função(){}

const arrowFunction = async () => await console.log('Arrow Function');

// Estruturas Condicionais:

if (true) {
    console.log('True');
} else {
    console.log('False');
}


const variavelCondicional = true;

variavelCondicional ? true : console.log('True') || console.log('False');


const fruit = 'uva'

switch (fruit) {
    case 'laranja':
        console.log('Laranja');
    case 'maçã':
        console.log('Maçã');
    case 'uva':
        console.log('Uva!!');
}

// Laços de Repetição:

for (var a = 0; a < 10; a++) {
    console.log('');
}


let doTest = 0;

do{
    doTest++;
    console.log('passou');
} while (doTest < 10);


let whileTest = 0;

while(whileTest < 10) {
    whileTest++;
    console.log('passou');
}


var objeto = [];

for (umaVariavel in objeto) {
    console.log(objeto[umaVariavel]);
}


var array = [];

for (umaVariavel in array) {
    console.log(array[umaVariavel]);
}

// Try Catch

try {
    console.log('fazer algo');
} catch (error){
    console.log('deu erro');
    console.log('esse é o erro: ' + error.message);
}

// Função Construtora:

function construirObjeto(propriedade, metodo) {
    this.propriedade = propriedade;
    this.metodo = metodo;
}

const novoObjeto = new construirObjeto('Uma propriedade', () => console.log('É um método!'));