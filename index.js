// Write your solution here!

let cats = [];
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function destructivelyAppendCat(name) {
  //.push
  cats.push(name);
}

function destructivelyPrependCat(name) {
  //.unshift
  cats.unshift(name);
}
function destructivelyRemoveLastCat() {
  //pop
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  //shift
  cats.shift();
}
function appendCat(name) {
  return [...cats.slice(0), name];
}
function prependCat(name) {
  return [name, ...cats.slice(0)];
}
function removeLastCat() {
  return [...cats.slice(0, cats.length - 1)];
}
function removeFirstCat() {
  return [...cats.slice(1)];
}
