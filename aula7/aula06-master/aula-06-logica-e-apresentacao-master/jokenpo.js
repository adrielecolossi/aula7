/*
const maos = {
    pedra: 'pedra',
    papel: 'papel',
    tesoura: 'tesoura',
    lagarto: 'lagarto',
    spock: 'spock'
};

console.log(maos); // {pedra:'pedra'...}
*/
const jokenpo = {
    maoJogadorUm: null, // não temos definida ainda
    maoJogadorDois: null,
    maos: {
        pedra: {
            vence: {
                tesoura: 'quebra',
                lagarto: 'esmaga'
            }
        },
        papel: {
            vence: {
                pedra: 'embrulha',
                spock: 'refuta'
            }
        },
        tesoura: {
            vence: {
                papel: 'corta',
                lagarto: 'decapita'
            }
        },
        lagarto: {
            vence: {
                papel: 'come',
                spock: 'envenena'
            }
        },
        spock: {
            vence: {
                tesoura: 'quebra',
                pedra: 'vaporiza'
            }
        }
    },
    jogar: function () { // é um metodo de 'maos
        if (this.maoJogadorUm === null) {
            throw new Error('Jogador um não escolheu uma mão'); // 'jogar'
            // ela lança uma exceção, não é um erro
        }
        if (this.maosJogadorDois === null) {
            throw new Error('Jogador dois não escolheu uma mão');
            // nesse exemplo não acontece ja que é contra o computador
        }
        if (this.maoJogadorUm === this.maoJogadorDois) {
            return {
                vencedor: 0,
                texto: 'Empatou'
            };
        }
        const mao1 = this.maoJogadorUm;
        const mao2 = this.maoJogadorDois;
        if (jokenpo['maos'][mao1]['vence'][mao2]) {
            return {
                vencedor: 1, // foi o jogador um que ganhou
                texto: `${mao1} ${jokenpo['maos'][mao1]['vence'][mao2]} ${mao2}`
                // interpolou mao1( por ex spock) + a forma como matou
                // (como esta mostrado nos consoles abaixo) + (jogador dois)
            };
        } else {
            // se chegou ate aqui, nao perdeu nos return
            // anteriores, é porque um ou o outro ganhou
            return {
                vencedor: 1, // foi o jogador um que ganhou
                texto: `${mao2} ${jokenpo['maos'][mao2]['vence'][mao1]} ${mao1}`
                // interpolou mao1( por ex spock) + a forma como matou
                // (como esta mostrado nos consoles abaixo) + (jogador dois)
            };
        }
    }
};

const divHumano = document.querySelector('div#humano');
const maos = document.querySelectorAll('div#humano img.mao')

divHumano.addEventListener('click', function (e) { //mao);
    const elemento = e.target;
    /*
    if( elemento.tagName==='IMG' &&
        elemento.classList.contains('mao'))
        
    }
    */

    if (elemento.classList.contains('mao')) {
        for (const mao of maos) {  //é para tirar de todas as maos 
            if (mao !== elemento) { //exceto o elemento
                mao.classList.remove('selecionada');
            }
        }
        elemento.classList.toggle('selecionada');
    }
});

//nesse caso ele usou uma função como argumento de outra função


//FUNÇÂO ANÔNIMA
//que não tem nome



/* no console do google
jokenpo.maoJogadorUm='papel'
"papel"
jokenpo.maoJogadorDois='pedra'
"pedra"
jokenpo.jogar()
{vencedor: 1, texto: "papel embrulha pedra"}

*/

/*
const mao1 = 'papel'; //vai buscar la no objeto maos que temos no inicio
//const mao1=maos.spock   mesma coisa
const mao2 = 'spock';


// traversing(é percorrer a estrutura, 'navegar' nela)
console.log(jokenpo.maos.lagarto.vence.papel); //come

console.log(jokenpo['maos']['lagarto']['vence']['papel']); //come
// vetor é util para criarmos algo que pode ser estendido
// ou reduzido, o que não é o caso

console.log(jokenpo['maos'][mao1]['vence'][mao2]);
//refuta ja que spock ganha do papel
console.log(jokenpo['maos'][mao2]['vence'][mao1]);
 //undefined ja que papel n ganha do spock
console.log(jokenpo['maos'][mao2]['vence'][mao2]);
 //undefined ja que ele n ganha dele mesmo

console.log(Object.keys(jokenpo.maos))
// ['pedra','papel','tesoura','lagarto','spock']
for (const m of Object.keys(jokenpo.maos)) {
    // pra pegar as chaves do objeto(no caso pedra, papel, tesoura, lagarto)
    console.log(m); //pedra, papel, tesoura, lagarto, spock
    for (const v of Object.keys(jokenpo.maos[m].vence)) {
    // console.log(v); //tesoura,lagarto, pedra,
    // spock, papel, lagarto, papel, spock, tesoura, pedra
       console.log(m,jokenpo.maos[m].vence[v] ,v)
  //ta mostrando todas as coisas
  //(...tesoura decapita lagarto, lagarto come papel...)
    }

}

*/
