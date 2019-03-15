// b.Selecionar o elemento com id "p2" e imprimi-lo na consola
console.log(document.getElementById("p2"));

// c.elecionar todos os parágrafos e imprimi-los na consola
let ps=document.getElementsByTagName("p");
for(let p of ps){
        console.log(p);
}

// d.Selecionar todos os parágrafos e imprimir os seus conteúdos
let p = document.getElementsByTagName("p");
for(let myP of p){
    console.log(myP.innerHTML);
}

// e.Selecionar todos os elementos cujo atributo class tenha o valor "red"
console.log(document.getElementsByClassName("red"));

// f.Selecionar e imprimir um elemento <p> cujo atributo id tenha o valor "p3"
console.log(document.querySelectorAll("p#p3"));

// g.Selecionar e imprimir todo os conteúdos dos elementos <p> e <div>
let elements = document.querySelectorAll("p,div");
for(let myElement of elements){
    console.log(myElement.innerHTML);
}

// h.Selecionar e imprimir os textos dos elementos <span>
console.log(document.getElementsByTagName("span"));

// i.Selecionar e imprimir o texto do elemento <span> dentro do elemento <div>
let divSpan = document.querySelectorAll("div#span");
for(let myDivSpan of divSpan){
    console.log(divSpan.innerHTML);
}

// j.Selecionar e imprimir o texto do elemento <span> fora do elemento <div>
let bodySpan = document.querySelector("body>span");
console.log(bodySpan);