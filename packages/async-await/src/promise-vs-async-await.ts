const books = [
  { id: 1, name: "Practical React Programming 3rd editions" },
  { id: 2, name: "React Hooks Deep Dive" },
  { id: 3, name: "Test Driven Development with React" }
]

const fetchBook = (id: number) => {
  const book = books.find(book => book.id === id)
  if (book) {
    return Promise.resolve(book)
  }
  return Promise.reject(`cannot find book for given id: ${id}`)
}

const updateBook = async (id: number, name: string) => {
  const book = books.find(book => book.id === id)
  if (book) {
    book.name = name
    return Promise.resolve(book)
  }
  return Promise.reject(`cannot find book for given id: ${id}`)
}



const getDataPromise = () => {
  fetchBook(1)
    .then(book => {
      console.log(book)
      return updateBook(book.id, "Javascript in actions")
    })
    .then(book => {
      console.log(book)
    })
}

getDataPromise()

const getDataAsyncAwait = async () => {
  const book1 = await fetchBook(1)
  console.log(book1)
  const book2 = await updateBook(book1.id, "")
  console.log(book2)
}

getDataAsyncAwait()
