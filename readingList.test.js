const ReadingList = require('./readingList.js');
const Book = require('./book.js');

test('Given that I visit the site, when I first start, I expect my list to be empty.', ()=>{
    const myList = new ReadingList();
    expect(myList.books.length).toBe(0);
})

test('Given that I have an empty list, when I add the first book to my list then I expect numberRead to return 1.', ()=>{
    const myList = new ReadingList();
    const title = "The Hobbit";
    const author = "J.R.R. Tolkein";
    const length = "320";
    const year = 1937;
    const myBook = new Book(title,author,length,year);
    myList.addBook(myBook);
    expect(myList.books.length).toBe(1);
})

test('Given that I have an empty list, when I add additional books to the list I expect the numberRead to return the total number of books in my list.', ()=>{
    const myList = new ReadingList();
    const book1 = new Book("The Hobbit", "J.R.R. Tolkein", 320, 1937);
    const book2 = new Book("Alices Adventures in Wonderland", "Lewis Carroll", 544, 1865);
    myList.addBook(book1);
    myList.addBook(book2);
    expect(myList.books.length).toBe(2);
})

test('Given that I have an empty list, when I add a new book I expect getBooks() to return a list of books that includes the book I added.', ()=>{
    const myList = new ReadingList();
    const title = "The Hobbit";
    const author = "J.R.R. Tolkein";
    const length = "320";
    const year = 1937;
    const myBook = new Book(title,author,length,year);
    myList.addBook(myBook);
    expect(myList.books[0].title).toBe(title);
    expect(myList.books[0].author).toBe(author);
    expect(myList.books[0].length).toBe(length);
    expect(myList.books[0].year).toBe(year);
})