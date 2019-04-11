console.log('eventos.js');

// seletores

// vamos pegar todos os tds

/*
const seletor = 'table:nth-of-type(2) td';
const tds = document.querySelectorAll(seletor);
// querySelectorAll: para pegar todos
// só o querySelector pega apenas o primeiro
// query é pedir com educação

console.log(tds);

for (const td of tds) { // para cada td
    td.addEventListener('click', destacar);
   // quando clicar, é para destacar, ele vai fazer o que estiver na função invocar
}


function destacar() { // as funções são atreladas a um objeto
    // this -> contexto onde a função é invocada
    console.log(this);
    // ou seja, o que tu clicar
}

*/
const seletor = 'table:nth-of-type(2)';
const table = document.querySelector(seletor);
table.addEventListener('click', destacar);
// vamos adcionar a table inteira, já  que ela abrange os td
function destacar(e) { // "e" ou "evt" de evento, não é uma palavra reservada
    console.log(this);
    console.log(e.target); // em quem você clicou na table
    console.log(e.target.tagName); // se clicarmos num TD aparece TD
    // se clicarmos num TH aparece TH

    if (e.target.tagName === 'TD') {
        e.target.classList.toggle('destaque');
    }
}
// toggle significa alternar, se não o tivessemos teriamos que fazer:
/*
if(e.target.classList.contais('destaque')){
    e.target.classList.remove('destaque')
} else{
    e.target.classList.add('destaque')
}

e o resto

*/
