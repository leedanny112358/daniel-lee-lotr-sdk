import { LotrSdk, FiltersBuilder } from "../index.js";

const sdk = new LotrSdk("8XI-PB9FDDv5ZJS3KiRa")

test('Get all quotes, but with pagination query parameters', async () => {
  const quotes = await sdk.quotes.getAll({
    limit: 30,
    page: 2,
    offset: 4
  })
  expect(quotes).toHaveProperty('docs')
  expect(quotes.docs).toHaveLength(30)
});

test('Get all quotes, but with sorting query parameters', async () => {
  const characters = await sdk.characters.getAll({
    limit: 5,
    sort: "name:asc"
  })
  expect(characters).toHaveProperty('docs')
  expect(JSON.stringify(characters.docs)).toBe(JSON.stringify([...characters.docs].sort((character) => character.name)))
});

test('Get all quotes, but with filtering query parameters', async () => {
  const characters = await sdk.characters.getAll({
    filters: new FiltersBuilder()
      .includes("name","Gandalf")
      .build()
  })
  expect(characters).toHaveProperty('docs')
  const allGandalf = characters.docs.every(character => character.name === "Gandalf")
  expect(allGandalf).toBe(true)
});