const name = 'John Doe';
let age = 25;

// scope
if (true) {
  const name = 'Jane Doe';
  let age = 30;
  console.log(name, age);
}

console.log(name, age);