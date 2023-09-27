const students = [
  { id: 1, firstname: "earn", lastname: "Jaidee" },
  { id: 888, firstname: "poy", lastname: "kondee" },
  { id: 3, firstname: "arm", lastname: "JaiJai" }
]
//find //ได้valueที่เป็นfrist element
const jaiFirstStudent = students.find((student) =>
  student.lastname.toLowerCase().startsWith("jai")
)
console.log(jaiFirstStudent)

//find index
const jaiFirstStudentIndex = students.findIndex((student) =>
  student.lastname.toLowerCase().startsWith("jai")
)
console.log(jaiFirstStudentIndex)
