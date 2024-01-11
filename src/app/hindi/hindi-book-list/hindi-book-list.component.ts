import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-hindi-book-list',
  templateUrl: './hindi-book-list.component.html',
  styleUrls: ['./hindi-book-list.component.css']
})
export class HindiBookListComponent implements OnInit{
  num : any = 1
  books :any
  constructor(
    private _crud :CrudService,
    private _router : Router
  ){ 
    this.num =  this._router.getCurrentNavigation()?.extras
  }
  ngOnInit(): void {
    this._crud.get_book().subscribe(
      (res:any)=>{
        console.log(res);
        this.books =  res
      },
      (error)=>{
        console.log(error);
      }
    )
  }



  onView(pdf_url:any){
    // console.log(pdf_url);
      this._router.navigate(['hindi/hindiBook/openBook'] , pdf_url)
  }

  onDownlode(){

  }
}
