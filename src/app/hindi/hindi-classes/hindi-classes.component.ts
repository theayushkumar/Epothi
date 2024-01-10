import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hindi-classes',
  templateUrl: './hindi-classes.component.html',
  styleUrls: ['./hindi-classes.component.css']
})
export class HindiClassesComponent  implements OnInit{


  constructor(
    private router : Router
  ){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  onBook(no:any){
    this.router.navigate(['/hindi/hindiBook'] , no)
  }


}
