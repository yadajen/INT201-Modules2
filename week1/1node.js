const rootNode = document //document object คือroot node //nodetype เบอร์9

console.log(rootNode)
console.log(rootNode.nodeName)//#document
console.log(rootNode.nodeType)//9
console.log(rootNode.nodeValue)//null

console.log(document.documentElement) //root element =html
console.log(document.documentElement.nodeType) //1

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
console.log(headElement.firstElementChild)//ลูกตัวแรกของheadที่เป็นelement// <meta charset="UTF-8" />
console.log(headElement.firstChild)//#text

//lastchild
console.log(headElement.lastElementChild)//<title>introduction</title>
console.log(headElement.lastChild)//#text

//parent
console.log(headElement.parentElement)//<html> <html>
console.log(headElement.parentNode)//<html><html

//previous sibling
console.log(headElement.previousElementSibling)//null
console.log(headElement.previousSibling)//nodeก่อนหน้าheadที่เป็นอะไรก็ได้// <!--before head comment-->

//nexi sibling
console.log(headElement.nextElementSibling)
console.log(headElement.nextSibling)

//get ชุด attibute ของtagที่เราสนใจ
const headFirstElementChild = headElement.firstElementChild
const headFirstElementChildAttrs = headFirstElementChild.attributes
console.log(headFirstElementChildAttrs)//{0: charset, 1: id,charset: charset,id: id,length:2}
Array.from(headFirstElementChildAttrs).forEach((attr) => console.log(attr))//chaset="UTF-8". //id="meta-1"
