const ReadingList = require('./readingList.js');

test('Given that I visit the site, when I first start, I expect my list to be empty.', ()=>{
    const myList = new ReadingList();
    expect(myList.books.length).toBe(0);
})