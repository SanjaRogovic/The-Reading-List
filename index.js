class BookList {
    constructor(booksRead, booksNotRead, nextBook, currentBook, previousBook){
        this._books = []
        this._booksRead = booksRead
        this._booksNotRead = booksNotRead
        this._nextBook = nextBook
        this._currentBook = currentBook
        this._previousBook = previousBook
    }
}


class Book {
    constructor(title, genre, author, reading, readDate){
        this._title = title
        this._genre = genre
        this._author = author
        this._reading = false
        this._readDate = newDate()
    }

}