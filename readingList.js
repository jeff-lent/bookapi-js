module.exports = class readingList {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getBooksByRating(rating){
        return this.books.filter( book => {
            if(book.rating === 4) return book;
        })
    }

}