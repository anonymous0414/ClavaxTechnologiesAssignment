import { Component } from '@angular/core';
import { DataService } from './common/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClavaxTechnologiesAssignment';
  constructor(private ds: DataService){
    // ds.getSchema()
    // ds.getDataSource()
  }
}
