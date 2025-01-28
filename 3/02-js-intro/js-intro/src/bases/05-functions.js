
const hello = function (name) {
    return 'Hello, ' + name + '!';
}
// hello = 30
const hello2 = (name) => {
    return 'Hello, ' + name + '!';
}
console.log(hello2);

const getActiveUser = (name) => ({
    uid: 'ABC123',
    username: name
});

console.log(getActiveUser('Fernando'));