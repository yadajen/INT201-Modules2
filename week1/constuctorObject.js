//2. create object with constuctor function
function Person(id, firstname, lastnmae){
    this.id = id
    this.fullname = firstname + lastnmae
}
const p1 = new Person(111,'Mary','Jo')
const p2 = new Person(222,'Adan','Smith')
const p3 = new Person(334,'Susan','Dee')
console.log(p1)
console.log(p2)
console.log(p3)
console.log(Object.prototype.isPrototypeOf(p1))//true
console.log(Object.prototype.isPrototypeOf(p2))//true
console.log(Object.prototype.isPrototypeOf(p3))//true
console.log(Person.prototype.isPrototypeOf(p3))//true

