const book = {
    isbn: "123456789" ,
    title: 'Introduction to ',
    author: {firstname:'Adam' , lastname: 'levin'} ,
    publisher: {name:'poy', location:'USA'}
}

const{title} = book //equally to const title-book.title
console.log(title)
//store property value to new variable name

const{publisher: publisherName, isbn: isbn_book =book} = book
console.log(publisherName)
console.log(isbn_book)

const {
    publisher: {
      location: { country }
    }
  } = book
  console.log(country)