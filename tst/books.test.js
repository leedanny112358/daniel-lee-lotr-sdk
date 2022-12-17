import LotrSdk from "../index.js";

const sdk = new LotrSdk("8XI-PB9FDDv5ZJS3KiRa")

test('Get all Books', async () => {
  const books = await sdk.books.getAll()
  expect(books)
});

test('Get single book by id', async () => {
  const book = await sdk.books.getOneById("5cf5805fb53e011a64671582")
  expect(book.docs.length).toBe(1)
  expect(book.docs[0].name).toBe('The Fellowship Of The Ring')
})

test('Get all chapters in a book', async () => {
  const chapters = await sdk.books.getAllChapters("5cf5805fb53e011a64671582")
  expect(chapters.docs.length).toBe(22)
})