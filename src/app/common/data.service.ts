import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private apiService: ApiService
  ) { }

  getSchema(){
    return this.apiService.get('/assets/data/schema.json')
  }

  getDataSource(){
    return this.apiService.get('/assets/data/datasource.json')  
  }

}
