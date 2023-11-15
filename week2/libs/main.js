const body = document.body
const bodyChilsNodes = body.childNodes // NodeList:array-like (implement for-each, cannot array methods) //ใช้ได้แค่for each //ถ้าจะไปใช้array methods อื่น ให้แปลงก่อน

const bodyChildren = body.children //HTMl collection //คืนค่าเฉพาะelement type only//ใช้array methodไม่ได้เลย ต้องแปลงเป็นarrayก่อน

console.log(body)
console.log(bodyChildren)
console.log(bodyChilsNodes)

bodyChilsNodes.forEach((bc) =>{
    console.log(bc)
})
Array.from(bodyChildren).forEach((bcn) => {
    console.log(bcn)
});


console.log(body.firstChild)//text //whitespace
console.log("------------")
console.log(body.firstElementChild)//อันแรกที่เป็น element type //<div>   
console.log("------------")
console.log(document.documentElement)//html
console.log(document)


//return แค่nodeแรกที่เจอ เพียงnodeเดียว
const course201Ele =document.getElementById('int201')//queryผ่านId
console.log(course201Ele)

const course101Ele =document.querySelector('#int201') //ถ้าquerySelector ต้องมี#(id) ต้องมี.(class)//ต้องใส่#แทนid 
console.log(course101Ele)

const bscirCourse =document.querySelector('#int201,#int101') //ใส่หลายเงื่อนไขได้ //แต่ยังไงมันก็จะreturn node บนสุดในtreeที่มันเจอ
console.log(bscirCourse)

const progCourses =document.querySelector('.programming') //ใส่. แทนclass
console.log(progCourses)
console.log("------------")

//select/query a collection of elements
//เอาทั้งหมดเลยที่ตรงตามcondition
//queryจากทั้งเอกสาร ใช้document //ขอบเขตการค้นหา(search space)
//find with css selector
const proEle = document.querySelectorAll('.programming')
console.log(proEle) //Nodelist
const liEle1 = document.querySelectorAll('li')//เป็นtagเลยไม่ต้องมี . หรือ#
console.log(liEle1) //Nodelist

//find with tag name
const liEle2 = document.getElementsByTagName('li')
console.log(liEle2) //HTMLCollection//return ทั้งcollection เลย//query by tagname

//fide with class name
const courseEle = document.getElementsByClassName('courses') //HTMLCollection
console.log(courseEle)

const  divLectElement = document.querySelector('.lecturers')
//get <li> under div.lecturers//
const liDivLect = divLectElement.querySelector('.programming')
