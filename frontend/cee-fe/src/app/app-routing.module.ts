import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFilesComponent } from './upload-files/upload-files.component';

const routes: Routes = [
  { path: 'upload-files', component: UploadFilesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
