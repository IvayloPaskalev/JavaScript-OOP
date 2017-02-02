/* Task Description */
/* 
 *	Create a module for working with books
 *	The module must provide the following functionalities:
 *	Add a new book to category
 *	Each book has unique title, author and ISBN
 *	It must return the newly created book with assigned ID
 *	If the category is missing, it must be automatically created
 *	List all books
 *	Books are sorted by ID
 *	This can be done by author, by category or all
 *	List all categories
 *	Categories are sorted by ID
 *	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
 *	When adding a book/category, the ID is generated automatically
 *	Add validation everywhere, where possible
 *	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
 *	Author is any non-empty string
 *	Unique params are Book title and Book ISBN
 *	Book ISBN is an unique code that contains either 10 or 13 digits
 *	If something is not valid - throw Error
 */
function solve() {
    var library = (function() {
        let books = [],
            categories = [],
            filtred = [];

        function listBooks() {
            var args = arguments[0];
            if (books.length === 0) {
                return [];
            }
            if (books.length === 1) {
                if (!args || books[0].category === args.category) {
                    return books;
                } else {
                    return [];
                }
            }
            if (args) {
                filtred = books.filter((b) => { return b.category === args.category });
            } else {
                filtred = books;
            }
            return filtred.sort((a, b) => { return a.ID - b.ID; })
        }

        function addBook(book) {
            if (book.title.length < 2 || book.title.length > 100) {
                throw Error('Book title must be between 2 and 100 symbols !');
            }
            if (book.isbn.length !== 10 && book.isbn.length !== 13) {
                throw Error('Book ISBN must be 10 or 13 digits!');
            }
            if (book.author === '') {
                throw Error('Author cannot be empty');
            }
            if (books.filter((b) => { return b.title === book.title }).length > 0) {
                throw Error('Already exist book with the same title!');
            }
            if (books.filter((b) => { return b.isbn === book.isbn }).length > 0) {
                throw Error('Already exist book with the same ISBN!');
            }
            if (!(categories.filter((c) => { return c === book.category }).length > 0)) {
                categories.push(book.category);
            }

            book.ID = books.length + 1;
            books.push(book);
            return book;
        }

        function listCategories() {
            return categories.sort((a, b) => { return a.ID - b.ID });
        }

        return {
            books: {
                list: listBooks,
                add: addBook
            },
            categories: {
                list: listCategories
            }
        };
    }());
    return library;
}

module.exports = solve;