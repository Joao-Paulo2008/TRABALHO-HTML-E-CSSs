let pesquisarbox = document.querySelector('.barra-pesquisa');
let lupapesquisa = document.querySelector('.lupa');
let btnfechar = document.querySelector('.fechar')

lupapesquisa.addEventListener('click', ()=> {
    pesquisarbox.classList.add('ativar')
})

btnfechar.addEventListener('click', ()=> {
    pesquisarbox.classList.remove('ativar')
})


let passador = 1;

document.getElementById('#btn1') .checkead = true;

setInterval( function()
{
proximaimg();
}, 2000)




function proximaimg(){
    passador++;
    if(passador > 3){
        passador == 1;
    }
    document.getElementById("radio"+passador) .checkead = true;
}