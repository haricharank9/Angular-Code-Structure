import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example-pipe'
})
export class ExamplePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
