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

let inputText = 'Am fost la mare';
let invText = inputText.split(' ');
let res = [];
for (let i = 0; i < invText.length; i++) {
  res.push(invText[i].split('').reverse().join(''));
}
console.log(res.join(' '));


console.log(
  inputText.split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ')
);

let nText = (a, n) => a.repeat(n);

console.log(nText('text', 7));

let fizzBuzz = function() {
  for(let i = 1; i <= 100; i++) {
    if((i % 3 === 0) && (i % 5 === 0)) {
      console.log('FizzBuzz');
    }
    else if(i % 3 === 0) {
      console.log('Fizz');
    }
    else if(i % 5 === 0) {
      console.log('Buzz');
    }
    else
      console.log(i);
  }
};

console.log(fizzBuzz());
