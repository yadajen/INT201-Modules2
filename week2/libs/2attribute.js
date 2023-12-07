const firstDiv = document.body.firstElementChild
console.log(firstDiv)
const firstDivAttributes = firstDiv.attributes //get all attribute of any element
console.log(firstDivAttributes) //length=2, id and class attributes// {0: id, 1: class, id: id, class: class, length: 2}

Array.from(firstDivAttributes).forEach((attr) => {
  console.log(attr.name)
  console.log(attr.value)
})
console.log(firstDiv.getAttribute("id")) //return value of specified attribute 'id' //bscit-courses
console.log(firstDiv.getAttribute("class"))//courses
//return value of specified attribute 'name'

const firstAttribute = firstDivAttributes[0]
console.log(firstAttribute.ownerDocument)
console.log(firstAttribute.ownerElement)

//create a new attribute named 'owner' with value 'Umaporn'
firstDiv.setAttribute('owner','umaporn') //เพิ่มชื่อ owner //owner="umaporn"



//create a new <p> under div.course
const newPEle = document.createElement('p')//ได้ <p></p>

//textContent don't know HTML tag มองทุกอย่างเป็นtextหมดเลย //<span style="color:red">Client web Programming II</span>
//newPEle.textContent = '<span style="color:red">Client web Programming II</span>' 
newPEle.innerHTML = '<span style="color:red">Client web Programming II</span>' //<p>Client web Programming II</p>
//newPEle.innerText = '<span style="color:red">Client web Programming II</span>'

newPEle.setAttribute('id','int203')//ได้ <p id="int203"></p>

newPEle.setAttribute('class','course') //ได้ <p id="int203" class="course"></p>

const divCoursesParent = document.getElementById('bscit-courses') //node parentที่เราจะเอาไปใส่

//divCoursesParent.appendChild(newPEle)//เพิ่มความสัมพันธ์เข้าไปในtree //appendคือต่อท้าย
const refNode = divCoursesParent.lastElementChild
//divCoursesParent.insertBefore(newPEle,refNode) //แทรกก่อนหน้าrefNode
divCoursesParent.replaceChild(newPEle,refNode)//replace int201 with int203

divCoursesParent.removeChild(newPEle)//ลบ int203