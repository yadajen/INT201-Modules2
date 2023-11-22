const submitButton = document.getElementById("summit-btn-01")

submitButton.addEventListener("click", (e) => {
  e.preventDefault()
})

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is loaded")
}) //content ของDOM ใช้ doc

window.addEventListener("load", () => {
  console.log("Load")
}) //load กับ unload ใช้window //windoeใหญ่กว่าDOM(document,html)
window.addEventListener("beforeunload", () => {
  console.log("before unload")
  localStorage.setItem("myCat", "Tom")
})

const inputElements = document.querySelectorAll("input")
inputElements[0].addEventListener("focus", () => {
  console.log("input focused") //input focused//ขึ้นตอนเราเอาเมาส์ไปกดช่อง username
})
inputElements[0].addEventListener("blur", () => {
  console.log("input blured") //input blured//ขึ้นตอนเราเอาเมาส์ออกจากช่อง username
})

const pElement = document.querySelector("p")
const inputUsername = document.querySelector("input")
inputUsername.addEventListener("keyup", (event) => {
  pElement.textContent = event.target.value //พิมพ์ในช่องusername ก็พิมข้างนอกด้วย
})
