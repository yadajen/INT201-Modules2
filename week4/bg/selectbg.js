import { CookieUtil } from './myLib/cookieUtil.js'
const inputBtn = document.querySelector('#bgcl')
const body = document.body
let bgValue
inputBtn.addEventListener('input', (ev) => {
  bgValue = ev.target.value
  CookieUtil.set('bgColor', bgValue, new Date(100000))
  console.log(bgValue)
  body.setAttribute('style', `background-color: ${CookieUtil.get('bgColor')}`)
})

window.addEventListener('load', () => {
  body.setAttribute('style', `background-color: ${CookieUtil.get('bgColor')}`)
})
