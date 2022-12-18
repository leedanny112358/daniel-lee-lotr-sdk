import { LotrSdk } from "../index.js";

const sdk = new LotrSdk("8XI-PB9FDDv5ZJS3KiRa")

test('Get all books', async () => {
  const books = await sdk.books.getAll()
  expect(books).toHaveProperty('docs')
  expect(books).toHaveProperty('total')
  expect(books).toHaveProperty('limit')
  expect(books).toHaveProperty('offset')
  expect(books).toHaveProperty('page')
  expect(books).toHaveProperty('pages')
});

test('Get single book by id', async () => {
  const book = await sdk.books.getOneById("5cf5805fb53e011a64671582")
  expect(book.docs).toHaveLength(1)
  expect(book.docs[0].name).toBe('The Fellowship Of The Ring')
})

test('Get all chapters in a book', async () => {
  const chapters = await sdk.books.getAllChapters("5cf5805fb53e011a64671582")
  expect(chapters.docs).toHaveLength(22)
  expect(chapters.docs[0].chapterName).toBe('A Long-expected Party')
})

