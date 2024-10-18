/**/

/*
1-Verificar se duas strings são anagramas: Crie uma função isAnagrama que receba duas strings e retorne true se forem anagramas uma da outra.
const isAnagrama = (str1, str2) => {
    if (str1.length !== str2.length) {
      return false;
    }
  

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  };
  console.log(isAnagrama("amor", "roma")); 
*/

/*
2-Verificar se uma matriz é simétrica: Crie uma função isSimetrica que receba uma matriz quadrada e retorne true se for simétrica e false caso contrário.
const isSimetrica = (matriz) => {
    const n = matriz.length;

  for (let i = 0; i < n; i++) {
    if (matriz[i].length !== n) {
      return false;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (matriz[i][j] !== matriz[j][i]) {
        return false;
      }
    }
  }

  return true;
};

const matriz = [
    [4, 7],
    [7, 2]
];

const matriz2 = [
    [4, 7],
    [8, 2]
];


console.log(isSimetrica(matriz));
console.log(isSimetrica(matriz2));


*/

/*
3-Encontrar a interseção de dois arrays: Crie uma função interseccaoArrays que receba dois arrays e retorne um novo array com os elementos que aparecem em ambos.


const interseccaoArrays = (arr1, arr2) => {
    const contador = {};
    const resultado = [];
  
    
    arr1.forEach(item => {
      contador[item] = true;  
    });
  
    
    arr2.forEach(item => {
      if (contador[item]) {
        resultado.push(item);  
        delete contador[item];  
      }
    });
  
    return resultado;
  };

  console.log(interseccaoArrays([1, 2, 3, 4,22], [3, 4, 5, 6,22]));

*/