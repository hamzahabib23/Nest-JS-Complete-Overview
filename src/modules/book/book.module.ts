import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [],
  providers: [BookService],
  controllers: [BookController],
  exports: [],
})
export class BookModule {}
