function sum(n1,n2) {
    n1+n2
}
//arrow function with one statement
//บรรทัดเดียวมันมีreturnอัตโนมัติ
const sum1 = (n1,n2) => n1+n2
//arrow function with one statement
const sum2 = (n1,n2) =>{
    return n1+n2
}

//มีหลายคำสั่งต้องretunเอง//arrow function with multiple statement
const sum3 = (n1,n2) => {
    let result = 0
    result = n1+n2
    return result
}
const echo = function(m){return m} //equal to const echo=m=>m
console.log(echo("INT201"))