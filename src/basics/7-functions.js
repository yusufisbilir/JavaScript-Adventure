function sayHi() {
  return "hello";
}
console.log(sayHi());

function total(x = 1, y = 2) {
  return `Total = ${x + y}`;
}
console.log(total(5, 10));

function sum(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sum(10, 50));
