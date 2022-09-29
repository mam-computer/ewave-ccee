import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from './upload-files.service';

import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.sass']
})
export class UploadFilesComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File[] = []; // Variable to store file
  fileName = [];

  // Inject service 
  constructor(private fileUploadService: UploadFilesService) { }

  ngOnInit(): void {
  }

  // OnClick of button Upload
  onUpload(event: any) {
      const tasks: Observable<any>[] = [];
      this.loading = !this.loading;
      Array.from<File>(event.target.files).forEach(element => {
        this.file.push(element);
        this.fileName.push(element.name);
        console.log(element);
        tasks.push(this.fileUploadService.upload(element));
          
      }); 
    forkJoin(tasks).subscribe(results => { console.log(results); this.loading = false; });
  }
}
