function ops(n1, n2, n3) {
  console.log(n1, n2, n3)
}
ops(5) //5 undefined undefined //ส่งparameterขาดที่เหลือเป็นundefined หรือถ้ามีdefaultก็เป็นค่าdefault

console.log("..........................................")
//rest parameter //ใช้ได้กับparameterตัวสุดท้ายตัวเดียวเท่านั้น
function ors(n1 = 0, n2, ...n3) {
  // console.log(n1, n2, n3)
  console.log("length:", arguments.length)
  for (const ar of arguments) {
    console.log("argument:", ar)
  }
  console.log(arguments[2])//40
  console.log(n3)//[ 40, 50 ]
}
const arguments = { n1: 0, n2: undefined, n3: undefined }
ors(5, 10, 40, 50)
// ops(5, 10, 40, 50, 100, 200, true)

console.log("-------------------------------------")
//destructuring+rest on array
const [a, ...b] = ["a", "b", "c", "d"]
console.log(a) //'a'
console.log(b) //[ 'b', 'c', 'd' ]
//destructuring +rest on object
const { id: studentId, ...n } = { id: 1, title: "js", authors: "Jame Smiths" }
console.log(studentId) //1
console.log(n) //{ id: 1, title: 'js', authors: 'Jame Smiths' }
