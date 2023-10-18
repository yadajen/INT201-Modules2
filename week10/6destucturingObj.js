const student = {id:65130500017, name:'yada jen'}

const {id:studentId} = student
let {name:studentName} = student
console.log(studentId)
console.log(studentName)
studentName = 'Jame'
console.log(studentName)//Jame
console.log(student.name)//yada jen

function doSomething({ id: studentId }) { //const { id: studentId } = student
  return studentId
}
console.log(doSomething(student)) //65130500017