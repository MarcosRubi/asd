import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'hitweb',
  templateUrl: './hitweb.component.html',
  styleUrls: ['./hitweb.component.scss'],
  providers: [MessageService],
})
export class HitwebComponent {
  uploadedFiles: any[] = [];
  loading: boolean = false;
  visible: boolean = false;

  constructor(private messageService: MessageService) {}

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  showDialog() {
    this.visible = true;
  }

  //Aquí sería la interface de UploadEvent, pero me da error.
  //URL del componente, es el último https://primeng.org/fileupload
  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }
}
