function getTotalBooksCount(books) {
  let totalBooks = 0;
  books.forEach(book => {
    totalBooks += 1
  });
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  const totalAccounts = getTotalBooksCount(accounts);
  return totalAccounts
}

function getBooksBorrowedCount(books) {
  let totalBorrowed = 0;
  books.forEach(book => book.borrows[0].returned ? totalBorrowed += 0 
    : totalBorrowed += 1 );
  return totalBorrowed
}

function getMostCommonGenres(books) {
  let genres = books.map(book => book.genre);
  genres.sort((genre1, genre2) => genre1.toLowerCase() > genre2.toLowerCase() ? 1 : -1);
  let commonGenres = [];
  genres.forEach(genre => {
    if(commonGenres.some(topic => topic.name === genre)){
      return;
    }else{
      const totalgenre = genres.filter(topic => topic === genre);
      commonGenres.push({name: genre, count: totalgenre.length});
      commonGenres.sort((genre1, genre2) => genre2.count - genre1.count);
    }
  })
  const topGenres = commonGenres.slice(0, 5);
  return topGenres
}

function getMostPopularBooks(books) {
  let bookByPopularity = [];
  books.forEach(book => {
    bookByPopularity.push({name: book.title, count: book.borrows.length});
    bookByPopularity.sort((book1, book2) => book2.count - book1.count);
  })
  const topBooks = bookByPopularity.slice(0, 5);
  return topBooks
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  authors.forEach(author => {
    let count = books.filter(book => book.authorId === author.id);
    count = count.map(book => book.borrows);
    let totalCount = 0;
    count.forEach(book => (totalCount += book.length));
    popularAuthors.push({name: `${author.name.first} ${author.name.last}`, count: totalCount})
    popularAuthors.sort((author1, author2) => author2.count - author1.count);
  })
  const topAuthors = popularAuthors.slice(0, 5);
  return topAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
