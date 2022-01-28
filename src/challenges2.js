// Desafio 10
function techList(list, names) {

  if (list.length === 0) {
    return 'Vazio!';
  }

  let array = [];
  list = list.sort();
  for (let cont = 0; cont < list.length; cont += 1) {
    let object = {
    };

    object["tech"] = list[cont];
    object["name"] = names;

    array[cont] = object;
  }

  return array;
}


// Desafio 11 
function generatePhoneNumber(array) {
  // Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11.
  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  }

  //  Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números do array seja menor que 0 ou maior do que 9.
  for (let cont = 0; cont < array.length; cont += 1) {
    if (array[cont] < 0 || array[cont] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  // Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array se repetir 3 vezes ou mais.
  for (let cont = 0; cont < array.length; cont += 1) {
    let number = array[cont];
    let repetition = 0;
    for (let index = 0; index < array.length; index += 1) {
      if (number === array[index]) {
        repetition += 1;
      }

      if (repetition >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }

  for (let cont = 0; cont < array.length; cont += 1) {
    let telephoneNumber = "(";

    for (cont = 0; cont < 2; cont += 1) {
      telephoneNumber = telephoneNumber + array[cont];
    }

    telephoneNumber = telephoneNumber + ")" + " ";

    for (cont = 2; cont <= 6; cont += 1) {
      telephoneNumber = telephoneNumber + array[cont];
    }

    telephoneNumber = telephoneNumber + "-";

    for (cont = 7; cont < array.length; cont += 1) {
      telephoneNumber = telephoneNumber + array[cont];
    }

    return telephoneNumber;
  }



}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // É necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  };

  // E maior que o valor absoluto da diferença entre essas medidas.
  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    return false;
  };

  return true;
}

// Desafio 13
function hydrate(string) {
  // https://stackoverflow.com/questions/30607419/return-only-numbers-from-string/30607466
  const getNumbers = string.replace(/\D/g, '');
  let sum = 0;
  for (let index = 0; index < getNumbers.length; index += 1) {
    let stringToNumber = parseInt(getNumbers[index]);
    sum += stringToNumber;
  };
  
  if (sum === 1) {
    return "1 copo de água";
  } else {
    return `${sum} copos de água`;
  }
};

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
