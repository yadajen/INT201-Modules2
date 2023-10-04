nums = [5,2,3,4,7]
const reducer = nums.reduce((sum,num)=>sum+num )

console.log(reducer) //26

//stringตัวแรกรวกัน //ABAC
const names=['Alice','Bob','Ann','Cath']
const stringValue = names.reduce((name,frist)=>name+frist.charAt(0),'')
console.log(stringValue)

//return the total prices
const buyProducts = [
    {price: 50, quantity: 2},
    {price: 299, quantity: 10},
    {price: 15, quantity: 5}
]
const totalPrice = buyProducts.reduce((total,buyprice)=>total+(buyprice.price*buyprice.quantity),0)
console.log(totalPrice)//3165

