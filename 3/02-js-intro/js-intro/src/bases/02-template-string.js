// template string in js
const name = 'John';
const lastName = 'Doe';
const fullName = `${name} ${lastName}`;

console.log(fullName);

// some function

function getGreeting(name) {
  return 'Hello ' + name;
}

console.log(`This is a text: ${getGreeting(name)}`);