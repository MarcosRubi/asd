import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'hitweb',
  templateUrl: './hitweb.component.html',
  styleUrls: ['./hitweb.component.scss'],
  providers: [MessageService],
})
export class HitwebComponent {
  public image!: string;
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

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64String = e.target.result;
        console.log(base64String);
        this.image = base64String;
      };
      reader.readAsDataURL(file);
    }
  }
}
