//filtr คืนค่าตามelement ที่ผ่านเงื่อนไข
const students = [
  { id: 1, firstname: "earn", lastname: "Jaidee" },
  { id: 888, firstname: "poy", lastname: "kondee" },
  { id: 3, firstname: "arm", lastname: "JaiJai" }
]

const jaiStudent = students.filter((student) =>
  student.lastname.toLowerCase().startsWith("jai")
)
console.log(jaiStudent)

const deeStudent = students.filter(
  (student) =>
    student.lastname.toLowerCase().includes("de") ||
    student.firstname.toLowerCase().includes("de")
)
console.log(deeStudent)

//map method
const ids = students.map((student) => student.id)
console.log(ids)

//return all students fullname, fullname format is "lastname, fristname"
const fullname = students.map(
  (student) => student.lastname + ", " + student.firstname
)
console.log(fullname)

//return all student ids in the format current year follows with student id
//ex   ,{ id: 888, firstname: 'poy', lastname: 'kondee' } =>2023 888
const newIds = students.map((student) => {
  const currentYear = new Date(Date.now()).getFullYear()
  return currentYear + " " + student.id
})
console.log(newIds)
