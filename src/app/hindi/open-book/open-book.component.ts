import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-open-book',
  templateUrl: './open-book.component.html',
  styleUrls: ['./open-book.component.css']
})
export class OpenBookComponent implements OnInit {
  baseUrl : string = 'https://www.scert-up.in/'
  // pdfSrc: any = 'https://www.scert-up.in/EBook/गिनतारा-4.pdf'
  pdfSrc: any = 'https://pdfobject.com/pdf/sample.pdf'
  pdfFile :any
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
    Browser.open({ url: 'https://www.scert-up.in/EBook/गिनतारा-4.pdf' });
     this._crud.book_file_name.subscribe(
      (res:any)=>{
        console.log(res);
        this.pdfFile = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+res);
      }
     )


//      const openCapacitorSite = async () => {
//   await Browser.open({ url: 'https://www.scert-up.in/EBook/गिनतारा-4.pdf' });
// };
    // this.pdfSrc = this._crud.getSafeResourceUrl();
    // console.log(this.pdfSrc);
  }

}
