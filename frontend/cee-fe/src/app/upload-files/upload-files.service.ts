import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';
import xml2js from 'xml2js'; 

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {
  // API url
  baseApiUrl = "http://localhost:8080/upload-file";
    
  constructor(private http:HttpClient) { }
  
  processXMLFiles(files: File[]):Observable<any> {  
    const _self = this;
    return new Observable(observer => {  
      const arr: any[] = [];
      var total = files.length;
      var callback = () => {
        total--;
        if (total === 0){
          observer.complete();
        }
      };
      for (const file of files) {
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = (evt) => { 
          this.onReadXML(evt, arr);
          this.onUploadData(arr, file.name, observer, callback);
        }
      }
    });
  }

  onReadXML(evt: any, arr: File[]) {
    var k: string | number;
    const parser = new xml2js.Parser({
        trim: true,
        explicitArray: true,
        mergeAttrs: true
    });
    parser.parseString(evt.target.result, function (err, result) {
      for (const agente of result.agentes.agente) {
        for (const regiao of agente.regiao) {
          delete regiao.precoMedio;
        }
        arr.push(agente);
      }
      console.log("Safe data ", arr);
    });
  }

  onUploadData(arr: any[], fileName: String, observer: Subscriber<any>, callback) {
    this.http.post(this.baseApiUrl, arr).subscribe({ 
      next: (resp) => {
        observer.next("Success processing " + fileName);
        callback();
      },
      error: (err) => { 
        observer.next("Error processing " + fileName);
        callback();
      }

    });
  }
}
