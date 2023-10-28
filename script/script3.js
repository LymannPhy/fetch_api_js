let teachers = new Array("Chhaya", "Reaksmey", "Dara")
let students = ["John", "Hocky", "Hana", "Poly"]

//Put the element at the back
teachers.push("Sokea")
//Put the element at the front of another element
students.unshift("Tola")
console.log(teachers)
//Insert, replace, delete data
teachers.splice(2, 2, "Vechika")

let newArr = teachers.concat(students)

console.log(newArr)
console.log(students)

//Remove element
// console.log(teachers[teachers.length-1])
// console.log(students.at(-3))