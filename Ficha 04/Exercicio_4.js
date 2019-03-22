function isEmpty(obj) {
    for (const key of obj) {
        if (obj.hasOwnProperty(key)) {
            return false
        }
    }
    return false
}
let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "Get Up";
console.log(isEmpty(schedule));