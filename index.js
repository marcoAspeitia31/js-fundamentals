// functions
function add () {
    console.log(10)
}
add()

// Arrow functions
const addTwo = () => {
    console.log(20)
}
addTwo()

// Arrow functions parameters
const addThree = num1 => {
    console.log(num1)
}
addThree(30)

// Arrow functions with multiple parameters
const returnSomething = (num1, num2) => {
    return num1 + num2
}
const result = returnSomething(10, 50);
console.log(result)

// Arrow functions with a default parameter
const returnSomething2 = (num = 5) => {
    console.log(num + 10)
}
returnSomething2()

// Arrow functions returning a simple logic data
const returnSomething3 = (num1, num2) => (num1 + num2)
const result2 = returnSomething3(20,80)
console.log(result2)

// Template string
const number = (num1, num2) => (
    `el numero es: ${num1 + num2}`
)
const result3 = number(5, 20)
console.log(result3)

// Objects
const pet = {
    name: 'Tommy',
    age: 13,
    adopted: true
}
console.log(pet)
console.log(pet.name)

pet.id = 1

console.log(pet.id)

pet.skills = ['dormilón', 'cariñoso', 'noble', 'buen amigo', 'comelón']
console.log(pet.skills[0])

/* // destructuring objects
// past way
const petName = pet.name
// new way
const {name, age, skills} = pet

console.log(age) */

// working with objects
const web = {
    name: 'devitm',
    link: 'www.devitm.com',
    socialMedia: {
        youtube: {
            name: 'devitm yt',
            link: 'youtube.com/devitm'
        },
        facebook: {
            name: 'devitm fb',
            link: 'facebook.com/devitm'
        }
    }
}

const {name, link} = web.socialMedia.youtube
console.log(name, link)

// fetch API
fetch('https://devitm.com/wp-json/wp/v2/servicios/')
    .then((res) => { //this is an arrow function
        return res.json()
    })
    .then(data => {
        let arrayNames = []
        data.forEach(element => {
            arrayNames.push(element.title.rendered)
        })
        console.log(arrayNames)
    })
    .catch(error => console.log(error))

// async await
const obtenerCategorias = async() => {
    try {
        const res = await fetch('https://devitm.com/wp-json/wp/v2/categorias-servicios/')
        const data = await res.json()
        //map
        //let arrayNames = data.map( services => services.name )
        //filter
        let arrayNames = data.filter( services => services.name !== 'Desarrollo de Apps' )
        console.log(arrayNames)
    } catch (error) {
        console.log(error)
    }
}
obtenerCategorias()