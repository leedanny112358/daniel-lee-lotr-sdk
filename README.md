# The Lord Of The Rings SDK
# Installation
```
npm install daniel-lee-lotr-sdk
```
# Initialization
```
import LotrSdk from 'daniel-lee-lotr-sdk';

const sdk = new LotrSdk(<YOUR_ACCESS_TOKEN_STRING>);
```
# Usage
The following data outlined within the [LOTR API](https://the-one-api.dev/documentation) can be fetched directly from the sdk client:
- books
- movies
- characters
- quotes
- chapters

To fetch all items of a particular item type:
```
sdk.<ITEM_TYPE>.getAll()

/* EXAMPLE */
const books = await sdk.books.getAll()
```
To fetch a single item by id:
```
sdk.<ITEM_TYPE>.getOneById(<ID>)

/* EXAMPLE */
const character = await sdk.characters.getOneById('5cd99d4bde30eff6ebccfc15')
```

The following item types also have additional methods:
## Books
- Fetch all chapters of a specific book by ID
> `sdk.books.getAllChapters(<BOOK_ID>)`
## Quotes
- Fetch all quotes from a specific movie by ID
> `sdk.quotes.getAllQuotesFromMovie(<MOVIE_ID>)`
- Fetch all quotes from a specific character by ID
> `sdk.quotes.getAllQuotesFromCharacter(<CHARACTER_ID>)`

# Query Parameters
As outlined in the [LOTR API](https://the-one-api.dev/documentation), there are also options for
sorting, pagination, and filtering. For each endpoint, you may also pass in a `params` object to denote
any special query parameters you desire.
### Example
```
sdk.quotes.getAll({
    limit: 30,
    page: 2,
    offset: 4
  })
```
The interface of the `params` object is as follows
```
{
  /* PAGINATION */
  limit: number
  page: number
  offset: number
  /* SORTING */
  sort: string 
  /* FILTERING */
  filters: string
}
```
# Sorting
For the `sort` parameter, the string should be formatted like the following
```
{
  ...
  sort: <VALUE>:<'asc' or 'dsc'>
}
```
Where `asc` and `dsc` denotes either ascending or descending order respectively.
Example:
```
const charactersInAlphabeticalOrder = await sdk.characters.getAll({
    sort: "name:asc"
  })
```
# Filtering
For the `filters` parameter, you may utilize the `FiltersBuilder` builder class that will generate a query string denoting your filters.
The `FiltersBuilder` class contains the following methods:
```
includes(key,value)
excludes(key,value)
exists(key)
doesNotExist(key)
lessThan(key,value,equalTo) // equalTo should be a boolean value denoting if the comparison should be inclusive
greaterThan(key,value,equalTo)
```
> NOTE: The `includes(key,value)` and `excludes(key,value)` methods can take either a single string, CSV, or regex.
These methods roll the match, include, and regex filters into one method.

Example:
```
const allNonMaiarMaleCharacters = await sdk.charcters.getAll({
    filters: new FiltersBuilder()
      .includes("gender","Male")
      .excludes("race","Maiar)
      .build()
  })
```
# Rate Limit
There is currently a rate limit of 100 request per 10 minutes. Please keep that in mind as you play around :)