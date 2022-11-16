import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { BookPipe } from 'src/pipes/book.pipe';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  //Custom validation Pipe for Post Request
  @Post()
  create(@Body(new BookPipe()) createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }
 
  //@Query is used to get params from query string e.g example.com/book?id=1
  @Get()
  findAll(@Query('id',ParseIntPipe) id:number) {
    console.log(id, typeof (id));
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number):string {
    console.log(id,typeof (id)); // id is number but it will log string here, we will use pipes to ensure we receive only number
    return this.bookService.findOne(+id);
  }

  // Used Pipe here to parse URL id into number
  @Get('/pipe/:id')
  findOneWithPipe(@Param('id',ParseIntPipe) id:number):string{
       console.log(id,typeof (id)); // we used ParseIntPipe which will accept only number
       return this.bookService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
