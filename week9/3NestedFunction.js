let a = 1
let b =10
function doSomething(){
    let b = 5
    let result = a+b
    console.log(result)//6
    function doIt(params) {
        let c = 100
        console.log(c)//100
        result += c//doIt is a closure function //เหมือนfreezeค่าเอาไว้ให้
        console.log(result)//106
    }
   console.log(c)//can not access outside
   return doIt()//return doIt()//เราเรียกnested funtion ได้จากoutter funtionเท่านั้น นอกจากนี้เรียกไม่ได้
}
const fn = doSomething()
console.log(typeof fn) //function
fn() //100, 106
// console.log('result', result)
// console.log('c', c)
console.log('a', a)
console.log('b', b)
    