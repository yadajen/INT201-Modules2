const names = ['alice','John','Bob','Ann']
//Every ทุกคนต้องขึ้นต้นด้วย a Aถึงจะเป็นtrue
const isStartWithALetter = names.every((name)=>
    name.toUpperCase().startsWith('A') //false
)
console.log(isStartWithALetter)

//at least one name start with 'A' or 'a'//some บางตังตรงเงื่อนไขก็เป็นtrue
const isSomeStartWithALetter = names.some(
    (name) => name.toLowerCase().startsWith('a') //true
  )
  console.log(isSomeStartWithALetter)
