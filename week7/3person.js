class Person {
    constructor(firstname,lastname,dateBirth){
        this.firstname = firstname
        this.lastname = lastname
        this.dateBirth = dateBirth
    }
    getFullname(){
        return this.lastname+', '+this.firstname
    }
    getAge(){
        const milliToday = Date.now() //number of millisecond of today
        //the getTime() method of Date intstances returns the number 
        const milliBirthdate = this.dateBirth.getTime()
        const diffMilli = milliToday-milliBirthdate
        const dateofDiffMilli = new Date(diffMilli)
        return dateofDiffMilli.getFullYear() - 1970
    }
    isEqual(anotherPerson){
        return (this.firstname.toLowerCase() == anotherPerson.firstname.toLowerCase() 
        && this.lastname.toLowerCase() == this.anotherPerson.lastname.toLowerCase())
    }
    toString(){
        return this.getFullname()+', '+this.getAge()
    }
}

const me = new Person('Yada','Jen',new Date(2004, 4,23))
console.log(me.getFullname())

console.log(me.getAge())
console.log(me.toString())