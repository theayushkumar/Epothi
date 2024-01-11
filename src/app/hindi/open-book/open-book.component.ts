import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-open-book',
  templateUrl: './open-book.component.html',
  styleUrls: ['./open-book.component.css']
})
export class OpenBookComponent implements OnInit {

  pdfSrc: any = 'https://www.scert-up.in/EBook/1कलरव.pdf'
  // pdfSrc: any = 'https://pdfobject.com/pdf/sample.pdf'

  file_name: any
  // trustedHtml!: SafeResourceUrl;

  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private sanitizer: DomSanitizer
  ) {
    this.file_name = this._routing.getCurrentNavigation()?.extras
}



  ngOnInit(): void {
    // this.pdfSrc = this._crud.getSafeResourceUrl();
    // console.log(this.pdfSrc);
    

    
    // this.pdfSrc = 'https://pdfobject.com/pdf/sample.pdf'
  }

}
