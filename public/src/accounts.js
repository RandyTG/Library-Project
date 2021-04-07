function findAccountById(accounts, id) {
  let account = accounts.find((account) => account.id === id);
  return account;
}

function sortAccountsByLastName(accounts) {
  let sortedAccounts = accounts;
  sortedAccounts.sort((account1, account2) => account1.name.last.toLowerCase() > account2.name.last.toLowerCase() ? 1 : -1);
  return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  const totalBorrowed = books.reduce((acc, book,) => {
    const {borrows} = book;
    borrows.forEach(borrow => {
      if(borrow.id === account.id){
        acc += 1;
      }
    });
    return acc;
  },0);
  return totalBorrowed;
}

function isPossessed(account, books){
  const borrowed = books.reduce((acc, book,) => {
    const {borrows} = book;
    borrows.forEach(borrow => {
      if(borrow.id === account.id && borrow.returned === false){
        acc = book;
      }
    });
    return acc;
  },0);
  return borrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
  possessedBooks = [isPossessed(account, books)]
  possessedBooks.forEach(book => {
    const bookAuthor = authors.find(auth => auth.id === book.authorId);
    book.author = bookAuthor;
    book.borrows = book.borrows.filter(borrow => borrow.id === account.id);
  });
  return possessedBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
