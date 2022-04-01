import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/common/data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Output() cols= new EventEmitter<any[]>()
  @Output() dispCols= new EventEmitter<string[]>()
  constructor(
    private dataService: DataService
  ){ }

  menu: any;
  selected: Array<string>= []
  columns: Array<any>= []

  ngOnInit(): void {
    this.dataService.getSchema()
      .subscribe(res=>{
        this.menu= res
        this.checkSelected()
      })
  }

  clickElem(elem:any){
    document.getElementById(elem)?.click()
  }

  checkSelected(){
    this.selected= []
    this.columns= []
    this.menu.forEach((menuItem: any) => {
      menuItem.fields.forEach((item: any) => {
          if(item.checked){
            this.selected.push(item.column)
            this.columns.push(item)
          }
      });
    });
    this.dispCols.emit(this.selected)
    this.cols.emit(this.columns)
  }

}
