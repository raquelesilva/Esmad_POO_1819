// a
const student = {
    name: "David Silva",
    course: "POO",
    grade: 12
}

//b
listObjectNames();
removePropGrade();
listObjectName();

function listObjectNames() {
    for (const key in student) {
        if (student.listObjectNames(key)) {
            console.log(key);
        }
    }
}

// c
function removePropGrade() {
    delete student.grade
}

// d
function calcObjectSize() {
    let count = 0;
    for (const key in calcObjectSize) {
        count++;

    }
    console.log(count);
}
calcObjectSize();