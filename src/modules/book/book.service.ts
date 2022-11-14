import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Book } from './dto/book.dto';

@Injectable()
export class BookService {
  public books: Book[] = [];

  //add book
  addBookService(book: Book): string {
    book.id = uuidv4(); //generates new id on each request
    this.books.push(book);
    return 'Book added successfully';
  }
  //update book
  updateBookService(book: Book): string {
    const index = this.books.findIndex((currentBook) => {
      return currentBook.id == book.id;
    });
    this.books[index] = book;
    return 'Book has been updated successfully';
  }
  //delete book
  deleteBookService(bookid: number): string {
    this.books = this.books.filter((book) => {
      return book.id !== bookid;
    });
    return 'Book has been deleted successfully';
  }
  //get all books
  getAllBooksService(): Book[] {
    return this.books;
  }
}
