class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log(`${this.nome} faz um som.`);
    }
}


class Cachorro extends Animal {
    fazerSom() {
        console.log(`${this.nome} faz o som: Au Au!`);
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log(`${this.nome} faz o som: Miau Miau!`);
    }
}


const animalGenerico = new Animal("Animal Genérico");
const meuCachorro = new Cachorro("Buddy");
const meuGato = new Gato("Whiskers");


animalGenerico.fazerSom();  
meuCachorro.fazerSom();     
meuGato.fazerSom();         
