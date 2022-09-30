import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from './upload-files.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.sass']
})
export class UploadFilesComponent implements OnInit {

  loading: boolean = false;
  msgs: String[] = [];

  // Inject service 
  constructor(private fileUploadService: UploadFilesService) { }

  ngOnInit(): void {
  }

  // OnClick of button Upload
  onUpload(event: any) {
      this.msgs = [];
      Array.from<File>(event.target.files).forEach(element => {
        this.msgs.push("Processing file " + element.name);
      }); 
      this.loading = !this.loading;
      this.fileUploadService.processXMLFiles(event.target.files).subscribe({
        next:result => { this.msgs.push(result); },
        error: err => { console.error("Error: " + err) },
        complete: () => this.loading = false
      });

      // Clear input file component to allow select same file again
      if (event.target) {
        event.target.value=null;
      }
  }
}
