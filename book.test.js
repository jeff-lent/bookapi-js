const Book = require('./book.js');

test('makes sure book works', ()=>{
    const myBook = new Book('The Hobbit', 'J.R.R. Tolkein', 320, 1937);
    expect(myBook.author).toBe('J.R.R. Tolkein');
    expect(myBook.title).toBe('The Hobbit');
    expect(myBook.length).toBe(320);
    expect(myBook.year).toBe(1937);
})