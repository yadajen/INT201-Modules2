//Background color
const color = document.querySelector("#bgcl")
color.addEventListener('input', (event) => {
  //ดักจับตอนที่กดเลือกสีหลังจากคลิก เลยเป็นinput
  let codeColor = event.target.value //#a33333
  localStorage.setItem('colorStorage', codeColor) //เก็บค่าไว้ในlocalStorage //refreshไม่หาย
  document.body.style.backgroundColor = codeColor //set style
})
window.addEventListener('load', () => {
    let oldcolor = localStorage.getItem('colorStorage')
    document.body.style.backgroundColor = oldcolor //เมื่อตอนเราloadหน้าเว็บใหม่ ค่าสีเก่ายังอยู่
})
console.log(color)


//Font color
const font = document.querySelector('#fontbg')
font.addEventListener('input', (earn) => {
    const see = earn.target.value
    document.body.style.color = see
    localStorage.setItem('seecode', see)

})
window.addEventListener('load', () => {
    const oldsee = localStorage.getItem('seecode')
    document.body.style.color= oldsee
})


//Font size
const size = document.querySelector('#size')
size.addEventListener('input', (inputsize) => {
    const fsize = inputsize.target.value //12
    const fullsize = fsize+'px'//input เป็นตัวเลข เลยต้องมี px
    document.body.style.fontSize = fullsize
    localStorage.setItem('fsize', fullsize)
})
window.addEventListener('load', () => {
    const oldsize =localStorage.getItem("fsize")
    document.body.style.fontSize = oldsize
})

//Add <div> ก่อน <button>
const btn = document.querySelector("button")
btn.addEventListener('click',() =>  {
  const newdiv = document.createElement('div') //ได้ <div></div>
  newdiv.setAttribute('id', '017') //ได้ <div id=017></div>
  newdiv.textContent = 'Earn' //ได้ <div id=017>earn</div>
  const parent = document.body //บอกparent//บอกว่าที่เราจะเอาไปใส่อยู่ในไหน
  parent.insertBefore(newdiv, btn)//ให้ใส่แทรกไปก่อน <button></button>
})