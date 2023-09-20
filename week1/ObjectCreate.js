//3.create object with class
class Student {
    constructor(id,fn,ln){
        this.id = id
        this.fn = fn
        this.ln =ln
    }
    getFullname(){
        return this.fn+this.ln
    }
}
//st1 object->Student prototype->Object prototype (Ancestor)
const st1 = new Student(1,'Jern','Jo')
const st2 = new Student(2,'Aron','Smith')

//4.create object by using Object.create()
const undegratSt1 = Object.create(st1)
console.log(undergratSt1)
console.log(undergratSt1.id)
console.log(undergratSt1.fn)
console.log(undergratSt1.ln)
console.log(Object.prototype.isPrototypeOf(undergratSt1))//true
console.log(Student.prototype.isPrototypeOf(undergratSt1))//true
undergratSt1.project = 'Web Application'
console.log(undergratSt1)