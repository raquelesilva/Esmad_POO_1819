function multiplyNumeric() {
    let count = 0;
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    for (const prop in menu) {
        count++;
    }
    console.log(count);
}

multiplyNumeric();

function multiplyNumeric() {
    menu = {
        width: 400,
        height: 600,
        title: "My menu"
    };

    for (const prop in menu) {
        count++;
    }
    console.log(count);
}