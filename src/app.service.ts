import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class AppService {
  //data will be coming here
  public books: Book[] = [
    { name: 'Design Patterns', author: 'Eve', published: 2017 },
    { name: 'C++', author: 'author1', published: 2018 },
    { name: 'NestJS', author: 'nestjs', published: 2019 },
    { name: 'NodeJS', author: 'node', published: 2020 },
    { name: 'TypeScript', author: 'typescript', published: 2021 },
  ];

  getAllBooks(): Book[] {
    return this.books;
  }
  getHello(): string {
   return 'Hello World!';
  } 
}
