// _____________________________Готовая часть_________________
console.log("Start!...");

const randomX = (min, max) => {
  return Math.trunc(Math.random() * (max - min + 1) + min);
};

// NODA Page title
const tit = document.querySelector("title");

// NODA navig
const nav = document.querySelector("#topnav");

// NODA conteiner
const main = document.querySelector("#maincon");
main.style.top = nav.clientHeight + "px";
window.addEventListener("resize", () => {
  main.style.top = nav.clientHeight + "px";
});

// h1 colorer
const zag1 = document.getElementById("zag1");
const zag2 = document.getElementById("zag2");
const coloros = ["white", "black", "yellow", "red", "green", "blue", "orange"];
let c1 = 0;
setInterval(() => {
  zag1.style.color = coloros[c1];
  c1 = randomX(0, 6);
}, 500);

// Timer titler
let tims = 0;
setInterval((ledzh = "", ledzm = "", ledzs = "", h = 0, m = 0, s = 0) => {
  s = Math.trunc(tims % 60);
  if (s <= 9) ledzs = "0";
  else ledzs = "";

  m = Math.trunc((tims / 60) % 60);
  if (m <= 9) ledzm = "0";
  else ledzm = "";

  h = Math.trunc((tims / 3600) % 24);
  if (h <= 9) ledzh = "0";
  else ledzh = "";

  zag2.textContent = `${ledzh}${h}:${ledzm}${m}:${ledzs}${s}`;
  tims++;
}, 1000);

// Code transfering
// доработать, возможно надо поменять местами,
// содержимое ноды надо перенести в текст, а
// кодирование отключить
const codesNodes = document.querySelectorAll(".code");
// for (code of codesNodes) {
//   code.innerText = code.innerHTML;
// }
// console.dir(codesNodes[0]);

// ____________________________Тестовая часть__________________
//_____________________________________________________________
//_____________________________________________________________


const url = 'https://jsonplaceholder.typicode.com/users'

const xhr = new XMLHttpRequest()

xhr.open('GET', url)
xhr.send()

// _________________________________Склад____________________
// __________________________________________________________
// __________________________________________________________

/*  
____________________объект
const person = {
  name: "Василий",
  age: 10,
  god: true,
  gav() {
    console.log("It said GAV");
  },
};

____________Разобрать, почему не работает контекст вместо виндов.
Стрелочники не задают контекста, принимают верхний
Фанкшны задают контекст, но тоже принимают верхний.
значит использовать тут => вообще нельзя:

Array.prototype.multBy = function (m) {
  x = this.map( i =>  i * m )
  console.log(x);
};

____________________Классы
class Animal {
  type = "Animal";
  fur = true;
  tail = true;
  pow = 4;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Animal {
  type = "Cat";
  voice = "Meooow";
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  greet() {
    console.log(`
    ${this.color} ${this.type}
    ${this.name} tell u ${this.voice}`);
  }
}


*/
