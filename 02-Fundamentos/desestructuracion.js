


const deadpool = {
    nombre: 'Wade',
    apellidos: 'Winston',
    poder: 'Regeneración',
    edad: 50,
    getNombre(){
        return `${this.nombre} ${this.apellidos} ${this.poder}`
    }
}

//const nombre = deadpool.nombre;
//const apellidos = deadpool.apellidos;
//const poder = deadpool.poder;

function imprimeHeroe({ nombre, apellidos, poder, edad = 0}) {
    const nombree = 'Alex';
    console.log(nombre, apellidos, poder, edad = 0);
}

imprimeHeroe(deadpool);

const heroes =  ['Deadpool', 'Poder', 'Regeneración']

//const h1 = heroes [0]
//const h2 = heroes [1]
//const h3 = heroes [2]

const [, , h3] = heroes;



console.log(h3);