const nums = [10,3,75,1,30,100]

//1.splice to remove 75, 1, 30 
//return array of deleted element
//splice(startindex,the number of delete element)
const removeEles =nums.splice(2,3)
console.log(removeEles)//[ 75, 1, 30 ] //returnตัวที่ลบ
console.log(nums)//[ 10, 3, 100 ]

//2.splice to add new elements
const addElement = nums.splice(2,0,111,555,888)
console.log(addElement)//[]
console.log(nums)//[ 10, 3, 111, 555, 888, 100 ]

//3.splice to replace at index 1 with [200,400]
const replaceEles = nums.splice(1, 2, 200, 400)
console.log(replaceEles) //[ 3, 111 ]
console.log(nums) //[ 10, 200, 400, 555, 888, 100 ]