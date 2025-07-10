// Formas de comentar em JS
// Usamos "//" para comentar uma linha.
// Usamos "/* */" para comentar mais de uma linha.

/* Exemplo de comentários:
O pé do Padre Pedro é preto.*/

// Testando o JS
// console.log('Fala galera! Bora lançar um Hello World?');

// Tipos de Dado:
/* É a forma de classificar um dado. Todo dado vai ter um tipo. 
O tipo de dados mais comuns são:
*NUMBER;
STRING;
BOOLEAN;
EMPTY VALUES (NULL, UNDEFINED) */

    /* == TIPO NUMBER ==

    ● Number é o tipo de dado para valores numéricos;
    ● Em JS todos os números são considerados Number;
    ● Sejam eles: inteiros, "Numero quebrados" ou negativos;
    ● Alguns exemplos: 10, 52.5, -12;
    ● Note que nas linguagens de programação as casas 
        decimais são após o caractere ponto (15.8);
    ● Em JavaScript o operador typeof exibe o tipo do dado;
     Vamos ver na prática!*/

     // 1 - Number
     console.log(typeof 2);
     console.log(typeof 2.2);
     console.log(typeof -2);
     
     // 2 - Operações Aritméticas

     console.log(2 + 4); //6
     console.log(10 - 5); //5
     console.log(5 * 4); //20
     console.log(10 / 2); //5
     console.log(5 * (5 + 3) ); //40
     
     
     /* == Special Numbers == 
    ● Special Numbers são dados considerados como 
        números, mas não funcionam como eles;
    ● Eles são:
        ○ Infinity;
        ○-Infinity;
        ○ NaN (Not  a Number);
    ● Algumas operações podem resultar nestes valores;
    ● Vamos ver na prática*/

    // 3 - Special Numbers

    console.log(typeof Infinity); //number

    console.log(typeof -Infinity); //number

    console.log(12 * "asd"); //NaN

    console.log(typeof NaN); //number
    
    /* == Strings ==
    ● Strings são textos, sequência de caracteres;
    ● Em JavaScript temos três formas de criar dados de 
        texto;
    ● Aspas simples, duplas e crases;
    ● Desta maneira: console.log(“teste”);
    ● O “efeito final” é o mesmo, mas cada um destes 
        recursos tem particularidades*/

    // 4 - Strings

    console.log(typeof "Um texto qualquer."); 

    console.log(typeof 'Mais um texto');

    console.log(typeof `Agora mais um textop diferente`);
    
    
    /* == Mais sobre strings
    ● Uma string deve sempre começar e terminar com o mesmo caractere (“, ‘, `);
    ● Há algumas combinações de caracteres que tem efeitos interessantes nas strings;
    ● Por exemplo o \n (contra-barra), ele pula uma linha no texto;*/

    // 5 - Símbolos Especiais em Strings

    console.log('Testando \nquebra de linha');

    console.log("Espaçamento \tde tab");
    
    /* == Concatenação
    ● Concatenação é o recurso que une dois ou mais 
        textos;
    ● O operador da concatenação é o +;
    ● Exemplo: “Meu “ + “ texto “ + “ combinado”;
    ● Agora o recurso pode não fazer tanto sentido, mas 
        com variáveis teremos um melhor uso para ele;
    ● Vamos ver na prática!*/

    // 6 - Concatenação
    
    console.log("Oi" + ' tudo' + ` bem?`);
    console.log('Testando ' + 'concatenação.');
    
    /* == Interpolação (Template Strings)
    ● A interpolação é um recurso semelhante a 
        concatenação;
    ● Mas nos possibilita a escrever tudo na mesma 
        string;
    ● Esta deve ser escrita `entre crases`;
    ● Podemos executar código JavaScript com ${ algum 
        código };
    ● Vamos ver na prática 

    O símbolo ${} em JavaScript é usado para interpolar variáveis ​​em strings literais.
    
    Com o uso de ${}, podemos tornar essa tarefa mais simples e menos suscetível a erros.
    
    Aqui está um exemplo de como usar ${} em JavaScript:

    const nome = "Marcão";
    const idade = 40;
    console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);
    Neste exemplo, criamos duas variáveis ​​- nome e idade – e as interpolamos em uma string literal usando ${}.*/
    
    // Exemplos de Interpolação

    const nome = "Marcão";
    const idade = 40;
    console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`); // Interpolação
    console.log("Meu nome é " + nome + " e eu tenho " + idade + " anos."); //Concatenação

    // 7 - Interporlação
    
    console.log(`A soma de 2 + 2 é: ${2+2}`);
    console.log(`A multiplicação de 3 * 3 é: ${3*3}`);
    console.log("Vamos testar a Concatenação com a " + `interpolação para ver se fica ${5+5}`); // mix de concatenação e interpolação.
    
    
    

    
    
    
     
     
     
     
