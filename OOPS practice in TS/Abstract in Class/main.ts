interface BookOperation{
    addBook(book: Book): void;
    removeBook(bookId: string): void;
    getBook(bookId: string): Book | undefined;
}

interface Book {
    bookId: string,
    name: string,
    author: string,
    publishYear: string
};

abstract class Library implements BookOperation {
    books: Book[] = [];

    abstract addBook(book: Book): void;
    abstract removeBook(id: string): void;
    abstract getBook(id: string): Book | undefined;

    listOfAllBooks(): Book[] {
        return this.books;
    }
};

class PublicLibrary extends Library {
    addBook(book: Book): void{
        this.books.push(book)
    };

    removeBook(id: string): void{
        this.books = this.books.filter(idNum => idNum.bookId !== id);
    };

    getBook(id: string): Book | undefined{
        return this.books.find(idNum => idNum.bookId === id)
    };
};

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