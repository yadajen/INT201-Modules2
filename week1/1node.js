const rootNode = document

console.log(rootNode)
console.log(rootNode.nodeName)
console.log(rootNode.nodeType)
console.log(rootNode.nodeValue)

console.log(document.documentElement) //root element =html
console.log(document.documentElement.nodeType) //root element

//มีแค่propotiesที่ใช้บ่อย //ถ้าtagที่เราสร้างเองเรียกแบบนี้ไม่ได้
console.log(document.body) //เรียกhtml>body
console.log(document.body.nodeType) //1
console.log(document.head) //เรียกhtml>head
console.log(document.head.nodeType) //1
console.log(document.title) //เรียกhtml>head>title
console.log(document.title.nodeType) //1

//headElement is a head element node
const headElement = document.head
console.log(headElement)

console.log(headElement.childNodes) //ลูกทุกตัว ทุกtype //return the childeren, Nodelist(data type)//text node นับwhite spaceด้วยมันเลยเป็น9
console.log(headElement.children) //เฉพาะลูกที่เป็นnode type element เท่านั้น (meta, meta, title) //return child element, HTMLCollection

//loopดูของแต่ละตัวในhead
const headsChildNodes = headElement.childNodes
headsChildNodes.forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})
console.log(".......")
//HTML collection is array-like(not real array)//จะใช้foreachต้องแปลงเป็นarrayก่อน
const headsChildren = headElement.children
Array.from(headsChildren).forEach((hc) => {
  console.log(hc.nodeName)
  console.log(hc.nodeType)
  console.log(hc.nodeValue)
})

//จะให้หาทุกtype หรือเอาแค่element type
//fristchild
console.log(headElement.firstElementChild)
console.log(headElement.firstChild)

//lastchild
console.log(headElement.lastElementChild)
console.log(headElement.lastChild)

//parent
console.log(headElement.parentElement)
console.log(headElement.parentNode)

//previous sibling
console.log(headElement.previousElementSibling)
console.log(headElement.previousSibling)

//nexi sibling
console.log(headElement.nextElementSibling)
console.log(headElement.nextSibling)

//get ชุด attibute ของtagที่เราสนใจ
const headFirstElementChild = headElement.firstElementChild
const headFirstElementChildAttrs = headFirstElementChild.attributes
console.log(headFirstElementChildAttrs)
Array.from(headFirstElementChildAttrs).forEach((attr) => console.log(attr))
