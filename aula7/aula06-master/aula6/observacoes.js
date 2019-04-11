//função fabrica

function estudante(nome, idade){
    return{
        nome: nome,
        idade: idade,
        fala:function(){
            return 'Olá, meu nome é '+ this.nome
        +' e tenho ' + this.idade + ' anos';
        }
    }
}


const a={
    nome:'Marina',
    idade:16,
    fala:function(){
        return 'Olá, meu nome é '+ this.nome
        +' e tenho ' + this.idade + ' anos';
    }
}


console.log(estudante('Marina',16).fala()); //Olá, meu nome é Marina e tenho 16 anos

const b=estudante('Silvio', 16).nome
console.log(b) //Silvio