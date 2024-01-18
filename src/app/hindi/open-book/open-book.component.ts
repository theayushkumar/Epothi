import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Browser } from '@capacitor/browser';

// import * as pdfjsLib from 'pdfjs-dist/build/pdf';
// import 'pdfjs-dist/build/pdf.worker.entry';


@Component({
  selector: 'app-open-book',
  templateUrl: './open-book.component.html',
  styleUrls: ['./open-book.component.css']
})
export class OpenBookComponent implements OnInit {
  // baseUrl : string = 'https://www.scert-up.in/'
  baseUrl: string = 'https://19egjcs115.pythonanywhere.com/open_pdf/'
  // pdfSrc: any = 'https://www.scert-up.in/EBook/गिनतारा-4.pdf'
  // pdfSrc: any = '../../../assets/book.pdf'
  // pdfSrc: any = 'https://api.turningbrain.in/tempimage/गिनतारा-4.pdf'
  // pdfSrc: any = 'https://pdfobject.com/pdf/sample.pdf'
  pdfSrc: any = 'https://19egjcs115.pythonanywhere.com/open_pdf/गिनतारा-4.pdf'
  pdfFile: any = ''
  file_name: any = 'https://19egjcs115.pythonanywhere.com/open_pdf/गिनतारा-4.pdf'
  // trustedHtml!: SafeResourceUrl;
  url: any
  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private sanitizer: DomSanitizer
  ) {
    this.url = this._routing.getCurrentNavigation()?.extras
    this.file_name = this.url.split('/')[2];

  }



  ngOnInit(): void {

    

  }

}
