import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { Browser } from '@capacitor/browser';

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
  }

  ngOnInit(): void {
    this._crud.class_id.subscribe(
      (res:any)=>{
        console.log(res);
          this.num =  res
      }
    )
    
    this._crud.get_books(this.num,'Hindi').subscribe(
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
    console.log(pdf_url);
    
    // console.log(pdf_url);
      this._router.navigate(['hindi/hindiBook/openBook'] , pdf_url)
       this._crud.book_file_name.next(pdf_url)

      //  Browser.open({ url: `https://www.scert-up.in/${pdf_url}` });

  }
}
