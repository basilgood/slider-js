// 3. o functie care returneaza o culoare random in formatul "rgb(255,255,255)", folosind Math.random()
let randomColor = function() {
  let red = Math.round(Math.random() * 255),
    blue = Math.round(Math.random() * 255),
    green = Math.round(Math.random() * 255);
  return 'rgb('+ red + ',' + blue + ',' + green + ')';
};

console.log(randomColor());

// 4. o functie care primeste un numar `n` si scrie in consola de `n` ori "Aoleu!"

let repeatAoleu = function(n) {
  let word = 'Aoleu!';
  return word.repeat(n);
};

console.log(repeatAoleu(3));

function multiply(n) {
  let multiWord = 'Aoleu!';
  let i = 0;
  let res = '';
  while (i < n) {
    i++;
    res = res + multiWord;
  }
  return res;
}

console.log(multiply(4));

function extraAoleu(n) {
  let arrAoleu = [];
  for(let i = 0; i < n; i++) {
    arrAoleu.push('Aoleu!');
  }
  return arrAoleu.join('');
}

console.log(extraAoleu(4));
