const person = {
    name: "Pete",
    age: 24,
    salary: 2550,
    street: "Some street",
    houseNum: 52
}
function calculationValue (obj){
    let result = 0;
    let count = 0 ;
    for (value in obj) {
        if (typeof obj[value] === 'number') {

            result += obj[value];
            count++;
        }
    }
    result /= count
    return result
}

console.log(calculationValue(person))