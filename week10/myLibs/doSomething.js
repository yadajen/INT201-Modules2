function doSomething(msg) {
    return msg
  }
  // module.exports = doSomething
  // module.exports = { doSomething: doSomething }
  export { doSomething as default } //default export