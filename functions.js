const authors = require('./authors.json');
const books = require('./books.json');

/**************************************************************
 * getBookById(bookId, books):
 * - receives a bookId
 * - recieves an array of book objects
 * - returns the book object that matches that id
 * - returns undefined if no matching book is found
 ****************************************************************/
function getBookById(bookId, books) {
  let i = books.find((e) => e.id === bookId);
  return i;
  // Your code goes here
}
// console.log(getBookById(12, books));

/**************************************************************
 * getAuthorByName(authorName, authors):
 * - receives an authorName
 * - recieves an array of author objects
 * - returns the author that matches that name (CASE INSENSITIVE)
 * - returns undefined if no matching author is found
 ****************************************************************/
function getAuthorByName(authorName, authors) {
  // Your code goes here
  let i = authors.find(
    (e) => e.name.toLowerCase() === authorName.toLowerCase()
  );
  return i;
}
// console.log(getAuthorByName('J.K. Rowling', authors));

/**************************************************************
 * bookCountsByAuthor(authors):
 * - receives an array of authors
 * - returns an array of objects with the format:
 *    [{ author: <NAME>, bookCount: <NUMBER_OF_BOOKS> }]
 ****************************************************************/
function bookCountsByAuthor(authors) {
  let i = [];
  authors.forEach((e) => {
    i.push({ author: e.name, bookCount: e.books.length });
  });
  // Your code goes here
  return i;
}
// console.log(bookCountsByAuthor(authors));

/**************************************************************
 * booksByColor(books):
 * - receives an array of books
 * - returns an object where the keys are colors
 *   and the values are arrays of book titles:
 *    { <COLOR>: [<BOOK_TITLES>] }
 ****************************************************************/
function booksByColor(books) {
  const colors = {};
  let colorss = [];
  books.forEach((book) => {
    if (!colorss.includes(book.color)) {
      colorss.push(book.color);
    }
  });
  colorss.forEach((color) => {
    let a = [];
    books.forEach((book) => {
      if (book.color === color) {
        a.push(book.title);
      }
    });
    colors[color] = a;
  });

  // Your code goes here
  console.log(colorss);
  return colors;
}
// console.log(booksByColor(books));

/**************************************************************
 * titlesByAuthorName(authorName, authors, books):
 * - receives an authorName
 * - recieves an array of author objects
 * - recieves an array of book objects
 * - returns an array of the titles of the books written by that author:
 *    ["The Hitchhikers Guide", "The Meaning of Liff"]
 ****************************************************************/
function titlesByAuthorName(authorName, authors, books) {
  // Your code goes here
  let x = [];
  books.forEach((book) => {
    if (book.authors[0].name.toLowerCase() === authorName.toLowerCase()) {
      x.push(book.title);
    }
  });
  return x;
}
// console.log(titlesByAuthorName('George R.R. Martin', authors, books));

/**************************************************************
 * mostProlificAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author with the most books
 *
 * Note: assume there will never be a tie
 ****************************************************************/
function mostProlificAuthor(authors) {
  // Your code goes here
  let x = 0;
  let y = '';
  authors.forEach((author) => {
    if (author.books.length > x) {
      x = author.books.length;
      y = author.name;
    }
  });
  return y;
}
// console.log(mostProlificAuthor(authors));

/**************************************************************
 * relatedBooks(bookId, authors, books):
 * - receives a bookId
 * - receives a list of authors
 * - receives a list of books
 * - returns a list of the titles of all the books by
 *   the same author as the book with bookId
 *   (including the original book)
 *
 * e.g. Let's send in bookId 37 ("The Shining Girls" by Lauren Beukes):
 *      relatedBooks(37);
 * We should get back all of Lauren Beukes's books:
 *      ["The Shining Girls", "Zoo City"]
 *
 * NOTE: YOU NEED TO TAKE INTO ACCOUNT BOOKS WITH MULTIPLE AUTHORS
 *
 * e.g. Let's send in bookId 46 ("Good Omens" by Terry Pratchett and Neil Gaiman):
 *      relatedBooks(46);
 * We should get back all of Neil Gaiman's books AND all of Terry Pratchett's books:
 *      ["Good Omens", "Good Omens", "Neverwhere", "Coraline", "The Color of Magic", "The Hogfather", "Wee Free Men", "The Long Earth", "The Long War", "The Long Mars"]
 *
 * BONUS: REMOVE DUPLICATE BOOKS
 ****************************************************************/
function relatedBooks(bookId, authors, books) {
  let x = [];
  let y = [];
  let z = [];
  books.forEach((book) => {
    if (book.id === bookId) {
      x.push(book.authors);
    }
  });
  x.forEach((e) => {
    console.log(e.name);

    e.forEach((s) => {
      y.push(s.name);
    });
  });
  y.forEach((g) => {
    books.forEach((f) => {
      f.authors.forEach((e) => {
        if (e.name === g) {
          z.push(f.title);
        }
      });
    });
  });

  return z;
  // Your code goes here
}
console.log(relatedBooks(46, authors, books));

/**************************************************************
 * friendliestAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author that has
 *   co-authored the greatest number of books
 ****************************************************************/
function friendliestAuthor(authors) {
  let x = 0;
  let y = '';
  authors.forEach((author) => {
    if (author.books.length > x) {
      x = author.books.length;
      y = author.name;
    }
  });
  return y;
  // Your code goes here
}
// console.log(friendliestAuthor(authors));

module.exports = {
  getBookById,
  getAuthorByName,
  bookCountsByAuthor,
  booksByColor,
  titlesByAuthorName,
  mostProlificAuthor,
  relatedBooks,
  friendliestAuthor,
};

/**
 * Uncomment the following lines if you
 * want to manually test your code
 */
