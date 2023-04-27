"use strict";
// Create an array books with the type Book[] and add a few sample books to the array.
const books = [
    {
        id: 1,
        title: 'Learn HTML in a week',
        author: 'Hector Gonzalez',
        published: new Date(2020, 7, 22),
        available: true,
    },
    {
        id: 2,
        title: 'Learn CSS in a week',
        author: 'Hector Gonzalez',
        published: new Date(2021, 8, 12),
        available: true,
    },
    {
        id: 3,
        title: 'Learn JAVASCRIPT in 2 weeks',
        author: 'Hector Gonzalez',
        published: new Date(2022, 5, 18),
        available: false,
    },
];
// Define a function that takes a Book object as a parameter and adds it to the books array.
function addBook(book) {
    books.push(book);
}
// Define a function that takes a book id as a parameter and returns the book with the given id or undefined if the book is not found.
function findBookById(id) {
    return books.find((book) => book.id === id);
}
// Define a function that takes a Book object as a parameter, finds the book with the same id in the books array, and updates its properties. The function should return true if the book was updated successfully or false if the book was not found.
function updateBook(book) {
    const index = books.findIndex((b) => b.id === book.id);
    if (index === -1) {
        return false;
    }
    books[index] = book;
    return true;
}
// Define a function that takes a book id as a parameter and removes the book with the given id from the books array. The function should return true if the book was removed successfully or false if the book was not found.
function removeBook(id) {
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) {
        return false;
    }
    books.splice(index, 1);
    return true;
}
// Test your functions by adding, updating, and removing books, and finding books by their id.
console.log(books);
// Adding a book
const newBook = {
    id: 4,
    title: 'Learn JAVA in 3 weeks',
    author: 'Hector Gonzalez',
    published: new Date(2023, 2, 28),
    available: true
};
addBook(newBook);
console.log(books);
// Finding a book by id 
const foundBook = findBookById(2);
console.log(foundBook);
// returns undefined if the book is not found
const foundSecondBook = findBookById(8);
console.log(foundSecondBook);
// Updating a book
const updatedBook = {
    id: 2,
    title: 'Learn CSS in 2 weeks',
    author: 'Hector Gonzalez',
    published: new Date(2021, 8, 12),
    available: false,
};
// When the updated book is found
const isUpdated = updateBook(updatedBook);
console.log(isUpdated);
// Removing a book
const isRemoved = removeBook(1);
console.log(isRemoved);
console.log(books);
