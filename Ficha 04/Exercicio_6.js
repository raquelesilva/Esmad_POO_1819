function multiplyNumeric() {

    let multi = 0;
    for (const key in menu) {
        if (typeof(menu[key]) == "number"){
            multi = menu[key] * 2;
        }
        console.log(multi);
    }
    
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

multiplyNumeric(menu);

 menu = {
        width: 400,
        height: 600,
        title: "My menu"
}