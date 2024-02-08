import { Component } from '@angular/core';

import localeEsHN from '@angular/common/locales/es-HN';
import localeEsFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsHN);
registerLocaleData(localeEsFrCA);

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
