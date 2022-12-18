# Intro
This SDK acts as an abstraction for the LOTR API that can be found [here](https://the-one-api.dev/).
It provides a handful of library functions that directly allow users to interface with the LOTR API
in an intuitive way.

# HttpHandler
The HttpHandler class acts as a utility class and implements the networking fetch calls to the LOTR API endpoints.
It is instantiated in the LotrSDK and is passed down to each of the endpoint classes as only one HttpHandler is necessary.
My thought process into this decision was to reduce the amount of repeating code within the codebase. Because each endpoint
would have to make a HTTP request, it makes more sense to encapsulate that functionality to a single class and reuse the 
code to maintain cleanliness. Furthermore, this follows closely to the Singelton design pattern (although it is not exactly
Singleton, as there is nothing stopping a user from instantiating another HttpHandler)

# Endpoints
Within the LotrSDK class, we instantiate the following Endpoint Classes:
- BookEndpoints
- ChapterEndpoints
- CharacterEndpoints
- MovieEndpoints
- QuoteEndpoints

all of which extend the `Endpoint` parent class.
### High Level Overview
In a nutshell, the various endpoint classes contain methods that will generate the proper url paths for the fetch call.
I noticed that all of the endpoints have methods for getting all items or a specific item by id, so I put methods handling
for those cases within the parent `Endpoint` class to align with DRY principles (Don't Repeat Yourself).
### Design Reasoning
My main focus in coming up with the design for the SDK was mainly answering the following questions:
> How can we make an intuitive user experience in the most minimal amount of code?

By extending an `Endpoint` class, not only can we reduce the amount of code we write, but
we also reduce the amount of arbitrary methods the user has to remember:
```
sdk.books.getAll()
```
tends to be more readable than
```
sdk.getAllBooks()
```
especially when we have multiple different item types.

> How can we design our SDK so we can easily add more features in the future?

Since we have divided our endpoints into their `base` paths, any future updates to the API can be easily maintained
by adding that new endpoint in its respecitve endpoint file.

# Pagination, Sorting, Filtering
When it came to these optional parameters, I noticed that the syntax for pagination and sorting are just
straightforward query strings in the form of `key=value`. My goal with these parameters was not to over 
engineer a solution as we could easily just have the user input a `params` object that we could parse and
format into the proper query strings to add to the url. 

As for filtering, I created a `FiltersBuilder` class that loosely follows the builder design pattern. It
essentially allows the user to build a query string by defining which filters they want to apply. The main
reason as to why I decided to implement this helper class is because the query strings for filters could
contain some unique characters (i.e. '!','<','>'). Also, having the builder design pattern makes it highly readable
as to what filters are being applied.

# Further Considerations
A couple extra little things that I want to point out...

1. The current rate limit for the API is 100 request per 10 minutes. This is a rather conservative rate limit, 
and it would be a shame if some LOTR super fan could not interface with our SDK due to this limit. One extra 
feature that would be highly useful is if we could somehow cache a user's data fetches so that if there are any
highly used endpoint calls, we wouldn't have to reach out to the API as often.

2. I have written some very basic tests within the tst folder. Mainly sanity checking that the endpoint and http handler
are actually fetching data properly within the `books.test.js` file and also testing the various pagination, sorting, and 
filtering parameters within the `query.test.js` folder. These are not extensive tests and if I were to have more time, I 
would most likely invest into writing more thorough tests as TDD is always a good idea.

3. 