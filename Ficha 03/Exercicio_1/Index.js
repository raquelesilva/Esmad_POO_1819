console.log(document.getElementById("p2"));

console.log(document.getElementsByTagName("p"));

console.log(document.getElementsByTagName("p").innerHTML);

console.log(document.getElementsByClassName("red"));

console.log(document.querySelectorAll("p#p3"));

let elements = document.querySelectorAll("p,div");
for(let myElement of elements){
    console.log(myElement.innerHTML);
}

console.log(document.getElementsByTagName("span"));