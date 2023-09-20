//1.create object by literal
const student = {id: 65130500017, firstname: 'Yada', lastname: 'Jen'}
console.log(student)
console.log(Object.keys(student))//คืนค่าเป็นarrays- //[ 'id', 'firstname', 'lastname' ]
console.log(Object.values(student))//คืนค่าเป็นarrays
console.log(typeof student)//object
console.log(Object.prototype.isPrototypeOf(student))//เช็คบรรพบุรุษobj//literal //true
console.log(Date.prototype.isPrototypeOf(student))//false

const lecturer = {id: 65130500017, firstname: 'Yada', lastname: 'Jen'}
console.log(Object.prototype.isPrototypeOf(lecturer))//ทุกobjที่ไม่มีclass มีบรรพบุรุษคือobjจัดการอยู่


//way to get property value
const someoneId = student.id//object.key
const someomeFirstname = student['firstname']//object['key]//ถ้าเราจะวนloopต้องใช้อันนี้
console.log(student.id)
console.log(student.firstname)

//way to assign property value
student.id = 65130500105
student['firstname'] = 'James'
console.log(student.id)
console.log(student.firstname)

//dynamic property
//add new property
student['email'] = 'yada2342547@gmail.com'
student.address = 'Bangkok, Thailand'
console.log(student)

//delete exiting property
delete student.address
console.log(student)

//nested object
student.advisor = lecturer //advisor: { id: 65130500017, firstname: 'Yada', lastname: 'Jen' }
console.log(student)

//เรียกซ้อนไปเรื่อยๆ
console.log(student.advisor.firstname)
console.log(student['advisor']['firstname'])

 

// function expresstion
student.getFullname = function() {
    return `${this.firstname} ${this.lastname}` // this is "current object" ข้างนอกเป็นของอะไร
}

console.log(student.getFullname) //[Function (anonymous)] , get properties value
console.log(student.getFullname()) //john Kumpao , excute function
const student2 = {id:6744445 , firstname:'Kawinphob' , lastname:'plana'}