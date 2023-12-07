window.alert('Do you want to exit')//แจ้งข้อความอย่างเดียว//ok
const username = window.prompt('Plasee enter your name', 'Ex.,Yada jenr')//ให้user กรอกข้อมูลได้ และเราสามารถเอาค่าที่userกรอกเก็บไว้ใช้ต่อได้ //ok return name value and cancle return null
console.log(username)
const userAction = window.confirm(`Good Bye, ${username}`)//return true, false
console.log(userAction)