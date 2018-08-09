import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  
  //filtername is the value that user search for the bank branch
  transform(banks: any, filtername: any): any {
    if(filtername === undefined) {
      //if the search value is empty, load all the banks of the particular city
      return banks;
    } else {
      return banks.filter(
        (bank) => {
          //If matched bank branch is in the array it will return bank branch
          return bank.branch.toLowerCase().includes(filtername.toLowerCase());
        }
      );
    }
  }
}


