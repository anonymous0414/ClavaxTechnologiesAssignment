import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  @ViewChild(MatPaginator) paginator2: any ;

  displayedColumns: string[] = [];
  wholeData: any;
  afterSearchData: any;
  dataSource: any;
  columns: Array<any>= []
  totalRecords: number =0
  page: any= {
    page: 0,
    limit: 8
  }

  searchString: string='' 

  ngOnInit(): void {
    this.dataService.getDataSource()
      .subscribe(res=>{
        if(res){
          this.wholeData= res
          this.afterSearchData= res
          this.setData()
          this.totalRecords= res?.length
        }
      })
  }


  setCols(event: any){
    this.columns= event
  }
  setDisplayedCols(event: any){
    this.displayedColumns= event
  }

  getValue(obj: any, col: string){
    col = col.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    col = col.replace(/^\./, '');           // strip a leading dot
    var a = col.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in obj) {
            obj = obj[k];
        } else {
            return;
        }
    }
    return obj;
  }

  
  paginator(event: PageEvent){
    this.page.page= event.pageIndex
    this.page.limit= event.pageSize
    this.setData()
  }

  setData(){
    this.dataSource= new MatTableDataSource(this.afterSearchData.slice(this.page.page*this.page.limit,(this.page.page*this.page.limit)+this.page.limit))
    this.totalRecords= this.afterSearchData.length  
  }

  search(){
    this.afterSearchData= []

    if(this.searchString!=''){
      for(let element of this.wholeData){
        var dat1= Object.keys(element.content)
        for(let element2 of dat1) {
            if(typeof(element?.content[element2])=='object'){
              // continue
              var dat2= Object.keys(element?.content[element2])
              var findflag= false
              for(let element3 of dat2) {
                    if(element?.content[element2][element3]?.toString().toLowerCase().includes(this.searchString.toLocaleLowerCase())){
                      this.afterSearchData.push(element)
                      findflag= true
                      break
                    }
              };
              if(findflag){
                break
              }
            }else{
              if(element?.content[element2]?.toLowerCase().includes(this.searchString.toLocaleLowerCase())){
                this.afterSearchData.push(element)
                break
              }
            }
        };
      };
    }
    else{
      this.afterSearchData= this.wholeData
    }

    this.paginator2.pageIndex= 0
    this.page.page= 0;
    this.setData()
  }


}
