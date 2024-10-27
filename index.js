let array = []; 

class Heroi {
    
    constructor() {
        
            this.nome = prompt("Digite o nome do herói:");
            this.idade = prompt("Digite a idade do herói:");
            this.tipo =  prompt("Digite o tipo do herói:");
            this.ataque = this.atacar();

    }

    atacar()  {

        let ataque;

        switch(this.tipo) {
            case  "guerreiro": ataque = "espada"; break;
            case  "mago": ataque = "magia"; break;
            case  "monge": ataque = "artes maciais"; break;
            case  "ninja": ataque = "shuriken"; break;
            default: console.log("tipo de heróis inválido") 
        }

      return ataque;

    }


}


for( let i = 0; i < 4; i ++) {
    const heroi = new Heroi();
    array.push(heroi);
}

for (let i = 0; i < array.length; i ++) {
    let h = array[i];
    console.log(`O ${h.tipo} atacou usando ${h.ataque}`);
}

