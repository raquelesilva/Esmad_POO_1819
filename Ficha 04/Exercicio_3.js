// a
const grade = [
    {
        name = 'Rui',
        grade = 8
    },
    {
        name = 'Ana',
        grade = 12
    },
    {
        name = 'Carla',
        grade = 14
    }
]

// b
function addNewObject() {
    const name = prompt("Nome:");
    const grade = +prompt("Nota:");

    const newObject = {
        name: name,
        grade: grade    // OU const newObject = {name, grade}
    }

    grades[grades.length] = newObject; // OU grades.push(newObject)
    console.table(grades);
}

addNewObject();

// c
function averageGrades() {
    let sum = "";
    for (const object of grades) {
        sum += object.grade
    }
    console.log(sum / grades.length);
}

averageGrades();

// d
function positiveGrades() {
    let name = "";
    for (const positive in grades) {
        if (positive.grade >= 10) {
            console.log(name);
        }
    }
}
positiveGrades();