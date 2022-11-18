import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";


@Injectable()
export class AuthorPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        if(value.id === 1){
            console.log("Success")
        }
        else
        {
            throw new BadRequestException("Validation failed");
        }
    }

}