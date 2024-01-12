import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-eng-book-lisx',
  templateUrl: './eng-book-lisx.component.html',
  styleUrls: ['./eng-book-lisx.component.css']
})
export class EngBookLisxComponent implements  OnInit {
  num : any = 1
  books :any
  constructor(
    private _crud :CrudService,
    private _router : Router
  ){ 
    this.num =  this._router.getCurrentNavigation()?.extras
  }
  ngOnInit(): void {
     this._crud.class_id.subscribe(
      (res:any)=>{
        console.log(res);
        this.num =  res
        
      }
     )
    this._crud.get_books(this.num,'English').subscribe(
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
      this._router.navigate(['eng/engBook/openBook'] , pdf_url)
  }

  onDownlode(){

  }
}
