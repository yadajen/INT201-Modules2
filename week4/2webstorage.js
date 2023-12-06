// let count = localStorage.getItem('counter') //getมาว่ามันเคยมีอยู่ในlocal storageเครื่องเรามั้ย
// if(count===null) localStorage.setItem('counter',1) //ถ้าไม่มีเป็นnull ก็set ไปว่าเป็น1
// else localStorage.setItem('counter',++count) //ถ้ามีอยู่ก็setให้มันบวกไปจากเดิม

// alert(localStorage.getItem('counter'))

//session storage//refesh sessionไม่หาย //new tab//ปิดbrowser หาย
let count = sessionStorage.getItem('counter')
if(count===null) sessionStorage.setItem('counter',1)
 else sessionStorage.setItem('counter',++count)

alert(sessionStorage.getItem('counter'))

sessionStorage.setItem('color', 'green')
sessionStorage.removeItem('counter')
sessionStorage.clear() //remove all sessionStorage
