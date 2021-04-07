function findItemId(array, id){
  let result = array.find((item) => item.id === id);
  return result;
}

function findAuthorById(authors, id) {
  return findItemId(authors, id);
}

function findBookById(books, id) {
 return findItemId(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = [];
  let returned = [];
  books.forEach(book => book.borrows[0].returned ? returned.push(book) : checkedOut.push(book));
  const bookByStatus = [checkedOut, returned];
  return bookByStatus;
}

function getBorrowersForBook(book, accounts) {
  const {borrows} = book;
  let borrowerInfo = [];
  for (let i = 0; i < borrows.length; i++) {
    if (i > 9){
      break;
    }
    const borrow = borrows[i];
    borrowerInfo.push(findItemId(accounts, borrow.id));
    borrowerInfo[i] = ({...borrowerInfo[i], returned: borrow.returned});
  }
  return borrowerInfo;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
