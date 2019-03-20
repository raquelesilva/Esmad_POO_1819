/*a. Crie um botão com o texto “Clica-me”. Ao clicar no botão deve surgir uma caixa de
alerta com o texto “Olá Mundo!”. Para esta resolução use as 3 abordagens
aprendidas:*/

// a i. Através de um atributo HTML

// a ii. Através de uma propriedade DOM

// a iii. Através da adição de um ouvinte (listener)

/*b. Adicione ao ficheiro uma caixa de texto e um parágrafo. Crie um listener que vai
reproduzir o que for escrito na caixa de texto para o parágrafo. Altere o evento do
clique do botão para apresentar o nº de caracteres escrito*/
const myTextBox = document.querySelector("input[type='text']");
const myP = doncument.querySelector("p");
myTextBox.addEventListener("input", function(){
    myP.innerHTML = myTextBox.nodeValue;
})

const myButton = document.querySelector("input[type='button']")
myButton.addEventListener("click", function (){
    alert(myTextBox.value.length)
})

/*c. Adicione um novo listener ao botão que ao fim da pressão do botão deve enviar uma
mensagem para a consola com o texto “obrigado pelo clique no botão!”*/

/*d. Faça com que todo o código JavaScript seja só executado após o carregamento da
página em memória*/