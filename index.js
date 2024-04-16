let input = document.getElementById('todos');
let botao = document.getElementById('botao');
let divItens = document.getElementById('divItens');
let cor = document.getElementById('cor');
let corTexto = document.getElementById('corTexto');

let itens = [];
getLocalStorage();

botao.addEventListener('click', (_) => {
     if (input.value.replace(/ /g, '')){ 
      itens.push(
       {
         descricao: input.value,
         cor: cor.value,
         corTexto: corTexto.value
       }
      )
    } 
   addCard();
   addLocalStorage();
});

function addCard(){
    divItens.innerHTML = ''
    itens.forEach((objeto, indice) => {
     let { descricao, cor, corTexto } = objeto;
    let linha = document.createElement('div');
    linha.className = 'row-3'; 
    linha.innerHTML = 
     `
    <div class="col-12">
      <div class="card" style="background-color: ${cor}">
        <div class="card-body">
         <span  style="color: ${corTexto}">
          ${indice} - ${descricao} 
         </span>
        </div>
      </div>
    </div>   
`;
   divItens.appendChild(linha);
   
})
input.value = ('');
}
function excluir(_){
     const idExclusao = prompt('informe o numero para exclusao')
     if (idExclusao.toString().replace(/\D/g, '')) {
       itens.splice(idExclusao, 1);
   }
   addCard ();
   addLocalStorage();
}
function getLocalStorage(){
     try {
        itens = JSON.parse(localStorage.getItem('itens')); 
        addCard();
     }  catch (error){
     localStorage.setItem('itens', '[]');
     }
}


function addLocalStorage(){
   localStorage.setItem('itens', JSON.stringify(itens))
}

















//let tittulo = document.getElementbyIl(`tittulo`);
//let botaoteste = document.getElementbyIl(`botaoTeste`);
//botaoTeste.add
//prompt('oi')
// console.log(titulo.innertext);
//console.log(titulo.innerHTML);
//titulo.innerText = 'oi'
//titulo.style.Color = 'red';
// console.log



