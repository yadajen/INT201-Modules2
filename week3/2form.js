const submitButton = document.getElementById("summit-btn-01")

submitButton.addEventListener("click", (e) => {
  e.preventDefault() //ไม่ไปเรียกserver//ไม่error
  const allInput = document.querySelectorAll("input")
  const validInput = Array.from(allInput).every(
    (input) => input.value.length !== 0
  )
  const text = document.querySelector("p")
  if (validInput) {
    text.textContent = "your account have created!!"
    const textalert = alert("your account have created!!")
    console.log(textalert)
  } else {
    text.textContent = "you missing username or password"
  }
  console.log("submit clicked")
})
