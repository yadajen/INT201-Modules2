//65130500017 yada jenrungrodsakul
//browser
import { createGuestList } from './data/guestdata.js'

//run test
//const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()

function guestForm() {
  //provide initial guests data list created from GuestManagement class
  const guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const searchinput = document.querySelector('#search-input')
    searchinput.addEventListener('keyup', (event) => {
      searchGuest(event.target.value)
    })
    const btnadd = document.querySelector('#add-guest-btn')
    btnadd.addEventListener('click', addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const parentdiv = document.querySelector('#display-area')
    const newdiv = document.createElement('div')

    const span1 = document.createElement('span')
    span1.textContent = guestItem.firstname + ' ' + guestItem.lastname

    const span2 = document.createElement('span')
    span2.setAttribute('class', 'remove-icon')
    span2.setAttribute('id', guestItem.firstname + '-' + guestItem.lastname)
    span2.setAttribute('style', 'cursor:pointer;color:red')
    span2.textContent = '[X]'

    // add event ไปremove
    span2.addEventListener('click',removeGuest)

    //ประกอบร่าง
    parentdiv.appendChild(newdiv) //<div></div>
    newdiv.appendChild(span1) //<div><span1></span1></div>
    newdiv.appendChild(span2) //<div><span1></span1><span2></span2></div>
  
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const previousdiv = document.querySelector('#display-area')
    previousdiv.textContent = ''
    for (let i = 0; i < guestResult.length; i++) {
      //ตอนนี้ให้เราจินตนาการว่า guestResult เก็บarrayที่มีguestทุกคนไว้
      const guestItem = guestResult[i] //เราเลยlooopเพื่อที่ จะให้แต่ละตัวในguest item ไปเรียก displayGuest
      displayGuest(guestItem)
    }
    // or Array.from(guestResult).forEach((name) => {
    //   displayGuest(name)
    // })
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const keyword = event
    const guestResult =guests.searchGuests(keyword)
    displayGuests(guestResult)
    
  }

  // 5. Function to add a new guest
  function addGuest() {
    const firstname = document.querySelector('#firstname-input')
    const lastname = document.querySelector('#lastname-input')
    const GuestObject = guests.addNewGuest(firstname.value, lastname.value)
    const newGuestObject = GuestObject[GuestObject.length - 1] //ตัวสุดท้ายที่addเข้าไป
    displayGuest(newGuestObject)
    firstname.value = '' // clear input textbox
    lastname.value = ''
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    //even.target => <span class="remove-icon" id="John-Doe" style="cursor:pointer;color:red">[X]</span>
    const delid = event.target.id //John-Doe
    const name = delid.split('-')
    const deleteGuest = { firstname: name[0], lastname: name[1] }
    guests.removeGuest(deleteGuest)
    displayGuests(guests.getAllGuests()) //โชว์guestทั้งหมด หลังจากremoveไป
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest,
  }
}

//run test
//module.exports = guestForm

//browser
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())
