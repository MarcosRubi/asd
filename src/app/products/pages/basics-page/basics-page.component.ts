import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss'],
})
export class BasicsPageComponent {
  public nameLower: string = 'marcos';
  public nameUpper: string = 'MARCOS';
  public fullName: string = 'MaRcoS rUBí';
  public customDate: Date = new Date();
}
