/*

Gerar uma sequência Fibonacci: Crie uma função fibonacci que receba um número n e retorne um array com os n primeiros termos da sequência de Fibonacci.

*/

/*Contar vogais em uma string: Crie uma função contarVogais que receba uma string e retorne o número de vogais.
let isprimo = (num) =>{

    if (num < 2) return true;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        return false;
      }
    }

    return true;
}    

console.log(isprimo(56));

*/

/*Encontrar o segundo maior número em um array: Crie uma função segundoMaior que receba um array de números e retorne o segundo maior valor.

    function segundoMaior(){
    let segundo = [9, -2, 3, 5, 9, 23, 22, 90, 10];
    segundo.sort((a,b)=> b-a);
    return segundo[1];
}
console.log(segundoMaior());

*/


/*
Contar elementos duplicados em um array: Crie uma função contarDuplicados que receba um array e retorne quantos elementos estão duplicados.
const contarDuplicados = (arr) => {
    const contagem = {}; 
    let duplicados = 0;  
  
    arr.forEach((item) => {
      contagem[item] = (contagem[item] || 0) + 1;
    });
  
    for (let Verificar in contagem) 
      if (contagem[Verificar] > 1) 
        duplicados++;
    
  
    return duplicados;
  };
  
  console.log(contarDuplicados([1, 2, 3, 4, 4, 4,5, 5,1, 2, 3,6,6,7,8,9,19]));  

*/


  