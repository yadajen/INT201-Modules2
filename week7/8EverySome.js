//return boolean that check all student who has ids whether have id value more than zero
const students = [
  { id: 1, firstname: "earn", lastname: "Jaidee" },
  { id: 888, firstname: "poy", lastname: "kondee" },
  { id: 3, firstname: "arm", lastname: "JaiJai" }
]
console.log(students.every((student) => student.id > 0))

//return boolean that check at least one student firstname ends with 'sak'
console.log(
  students.some((student) => student.firstname.toLowerCase().endsWith("sak"))
)
