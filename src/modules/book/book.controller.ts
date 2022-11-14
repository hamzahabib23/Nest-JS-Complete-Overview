import {
  Controller,
  Get,
  Put,
  Delete,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post('/add')
  addBook(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }
  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }
  @Delete('/delete/:id')
  deleteBook(@Param('id') bookId: number): string {
    return this.bookService.deleteBookService(bookId);
  }
  @Get('/findAll')
  getAllBooks(): Book[] {
    return this.bookService.getAllBooksService();
  }
  @Get('/test')
  getTest(): string {
    return 'Book Controller is fine';
  }
}
