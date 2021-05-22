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
  let booksById = books.find((book) => book.id === bookId);
  return booksById;
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
  let authorByNam = authors.find(
    (author) => author.name.toLowerCase() === authorName.toLowerCase()
  );
  return authorByNam;
}
// console.log(getAuthorByName('J.K. Rowling', authors));

/**************************************************************
 * bookCountsByAuthor(authors):
 * - receives an array of authors
 * - returns an array of objects with the format:
 *    [{ author: <NAME>, bookCount: <NUMBER_OF_BOOKS> }]
 ****************************************************************/
function bookCountsByAuthor(authors) {
  let bookCount = [];
  authors.forEach((author) => {
    bookCount.push({ author: author.name, bookCount: author.books.length });
  });
  return bookCount;
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
  // extracting a list of available colors
  let listOfColors = [];
  books.forEach((book) => {
    if (!listOfColors.includes(book.color)) {
      listOfColors.push(book.color);
    }
  });
  // iterating over the listOfColors and storing the books that matches the color
  listOfColors.forEach((color) => {
    let booksWithTheSameColor = [];
    books.forEach((book) => {
      if (book.color === color) {
        booksWithTheSameColor.push(book.title);
      }
    });
    colors[color] = booksWithTheSameColor;
  });

  // Your code goes here
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
  let titlesByAuthor = [];
  books.forEach((book) => {
    if (book.authors[0].name.toLowerCase() === authorName.toLowerCase()) {
      titlesByAuthor.push(book.title);
    }
  });
  return titlesByAuthor;
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
  let authorName = '';
  authors.forEach((author) => {
    if (author.books.length > x) {
      x = author.books.length;
      authorName = author.name;
    }
  });
  return authorName;
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
  let authorsOfTheBook = [];
  let authorsNames = [];
  let bookTitles = [];
  // iterating over the books and getting the authors object of the book by bookId
  books.forEach((book) => {
    if (book.id === bookId) {
      authorsOfTheBook.push(book.authors);
    }
  });
  // iterating over the authorsOfTheBook objects and extracting the names only
  authorsOfTheBook.forEach((author) => {
    author.forEach((auth) => {
      authorsNames.push(auth.name);
    });
  });
  // iterating over authorsNames and getting thier books by their name
  authorsNames.forEach((author) => {
    books.forEach((book) => {
      book.authors.forEach((b) => {
        if (b.name === author) {
          bookTitles.push(book.title);
        }
      });
    });
  });
  return bookTitles;
  // removes dupli [...new Set(bookTitles)]
  // Your code goes here
}
// console.log(relatedBooks(46, authors, books));

/**************************************************************
 * friendliestAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author that has
 *   co-authored the greatest number of books
 ****************************************************************/
function friendliestAuthor(authors) {
  let AuthorsOfTheCommonBooks = [];
  let i = 0;
  let authorName = '';
  // comparing each 2 authors and storing the authors of the common book
  while (i < authors.length) {
    let y = 1;
    while (y < authors.length) {
      if (
        CommonBookId(authors[i].books, authors[y].books).length > 0 &&
        i != y
      ) {
        // commonBooks.push(CommonBookId(authors[i].books, authors[y].books));
        AuthorsOfTheCommonBooks.push(authors[i].name, authors[y].name);
      }
      y++;
    }
    i++;
  }
  //commonBooks = commonBooks.flat();
  // commonBooks = ['a', 'a', 'b', 'a', 'b', 'b', 'b', 'a', 'a'];
  // commonBooks = [...new Set(commonBooks)];
  // getting the most occurrence of an author
  authorName = AuthorsOfTheCommonBooks.reduce((a, b, i, arr) => {
    if (
      arr.filter((v) => v === a).length >= arr.filter((v) => v === b).length
    ) {
      return a;
    } else {
      return b;
    }
  });

  return authorName;
  // Your code goes here
}
function CommonBookId(firstAuth, secondAuth) {
  let s = new Set(secondAuth);
  return firstAuth.filter((item) => s.has(item));
}

console.log(friendliestAuthor(authors));

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
