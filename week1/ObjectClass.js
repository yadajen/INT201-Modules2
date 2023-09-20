//3.create object eith class
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
const st1 = new Student(1,'Mary','Jo')
const st2 = new Student(2,'Adan','Smith')
console.log(st1)
console.log(st2)
console.log(st1.getFullname())
console.log(st2.getFullname())
console.log(Object.prototype.isPrototypeOf(st1))//true
console.log(Object.prototype.isPrototypeOf(st2))//true