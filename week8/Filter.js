const orders = [
    {id:1 , orderName:"pen",price:10},
    {id:2 , orderName:"book",price:40},
    {id:3 , orderName:"ruler",price:15},
    {id:4 , orderName:"pencilcase",price:150}
]

const longNameOrder = orders.filter((order)=>
    order.orderName.length>3)
console.log(longNameOrder)

const expensiveOrder = orders.filter((order)=>
    order.price > 100)
console.log(expensiveOrder)