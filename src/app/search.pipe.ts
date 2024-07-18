import { Pipe, PipeTransform } from '@angular/core';
import { ItemsInterface } from './items-interface';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(items: ItemsInterface[], term:string): ItemsInterface[] {
    return items.filter((item)=>{
      if(item.name !=""){
        
      item.name.toLocaleLowerCase().includes(term.toLowerCase())

      }
    })
  }

}
