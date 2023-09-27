const fruits = ["apple", "mango", "orange", "pineapple"]
//พาเราเข้าไปแต่ละตัวในarray แล้วเราจะสั่งให้ทำอะไรในcall back function
fruits.forEach((fruit))
fruits.forEach((fruit) => console.log(fruit))
let allFruits = ""
fruits.forEach((fruit) => (allFruits = allFruits + fruit + " "))
console.log(allFruits)
