import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  private Data = [{
    no: '1',
    isid:"abc"
    },
    {
      no:'2',
      isid:"bca"
    }
  ];

  public getData(){
    return this.Data;
  }

  public setData(databaru){
    this.Data=databaru;
  }
  constructor() {
  }

}