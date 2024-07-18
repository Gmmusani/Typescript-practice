"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class Library {
    books = [];
    listOfAllBooks() {
        return this.books;
    }
}
;
class PublicLibrary extends Library {
    addBook(book) {
        this.books.push(book);
    }
    ;
    removeBook(id) {
        this.books = this.books.filter(idNum => idNum.bookId !== id);
    }
    ;
    getBook(id) {
        return this.books.find(idNum => idNum.bookId === id);
    }
    ;
}
;
let saddarLibrary = new PublicLibrary();
console.log(saddarLibrary.listOfAllBooks());
saddarLibrary.addBook({
    bookId: "1",
    name: "Essential Typescript",
    publishYear: "2019",
    author: "Adam Freeman"
});
saddarLibrary.addBook({
    name: "Essential JavaScript",
    bookId: "2",
    publishYear: "2022",
    author: "Jack Doe"
});
console.log(saddarLibrary.listOfAllBooks());
saddarLibrary.removeBook("1");
console.log(saddarLibrary.listOfAllBooks());
console.log(saddarLibrary.getBook("2"));
let korangiLibrary = new PublicLibrary();
console.log(korangiLibrary.listOfAllBooks());
