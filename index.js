class Book {
    #title;
    #genre;
    #author;
    #reading;
    #readDate;

    constructor(title, genre, author){
        this.#title = title;
        this.#genre = genre;
        this.#author = author;
        this.#reading = false;
        this.#readDate = null;
    }

    get reading(){
        return this.#reading
    }

    get readDate(){
        return this.#readDate
    }


    markAsRead(){
        this.#reading = true;
        this.#readDate = new Date(Date.now());
    }

}



class BookList {
    #books
    #booksReadCount
    #booksUnreadCount
    #nextBook
    #currentBook
    #previousBook

    constructor(){
        this.#books = [];
        this.#booksReadCount = 0;
        this.#booksUnreadCount = 0;
        this.#nextBook = null;
        this.#currentBook = null;
        this.#previousBook = null;
    }


    get books(){
        return this.#books;
    }

    get booksReadCount(){
        return this.#booksReadCount;
    }

    get booksUnreadCount(){
        return this.#booksUnreadCount;
    }

    get nextBook(){
        return this.#nextBook
    }

    set nextBook(book){
        this.#nextBook = book;
    }

    get currentBook(){
        return this.#currentBook
    }

    set currentBook(book){
        this.#currentBook = book;
    }


    

    addBook(book){
        this.#books.push(book);
        this.#nextBook = book;
        this.#booksUnreadCount++;
    }

    finishCurrentBook(){
        if (this.#currentBook === null){
            console.log('no book is currently read')
        }

        // mark the current book as read
        this.#currentBook.markAsRead();

        // change the last book read to be the book that just got finished
        this.#previousBook = this.#currentBook;

        // change the current book to be the next book to be read
        this.#currentBook = this.#nextBook;

        // change the next book to be read property to be the first unread book you find in the list of books
        for (let book of this.#books){
            if (!book.read){
                this.#nextBook = book;
                break;
            }
        }

        //Increment count of books read because we finished reading a new one and we can count it as read
        this.#booksReadCount++;

        //Decrement count of books unread because we finished reading a new one
        this.#booksUnreadCount--;
    }

}


    const myBookList = new BookList();
    const book1 = new Book ("Book 1", "Fiction 1", "Author 1")
    const book2 = new Book ("Book 2", "Fiction 2", "Author 2")

    myBookList.addBook(book1);
    myBookList.addBook(book2);

    myBookList.currentBook = myBookList.nextBook;
    myBookList.finishCurrentBook();
    console.log(myBookList);



document.getElementById("book-form").addEventListener("submit", (event) => {
    const title = document.getElementById("book-title")
    const genre = document.getElementById("book-genre")
    const author = document.getElementById("book-author")

    

