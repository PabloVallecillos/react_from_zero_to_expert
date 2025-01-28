const object = {
    name: 'John',
    surname: 'Doe',
    age: 45,
    country: 'USA'
}

const { name, surname, age, country } = object;

console.log(name, surname, age, country);

const retornaPersona = ({ name, edad, range = 'Avg' } = {}) => {
    return {
        edad2: edad,
        range,
        name,
        latlng: {
            lat: 12,
            long: 14
        }
    }
}

const {latlng: {lat, long}} = retornaPersona()

console.log(lat, long)