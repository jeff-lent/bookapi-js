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