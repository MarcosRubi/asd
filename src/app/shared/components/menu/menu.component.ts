import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
            routerLinkActiveOptions: 'd-none',
          },
          {
            label: 'Números',
            icon: 'pi pi-dolar',
            routerLink: 'numbers',
            routerLinkActiveOptions: 'd-none',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
            routerLinkActiveOptions: 'd-none',
          },
        ],
      },
      {
        label: 'Pipes personalziados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog',
            routerLink: '/',
            routerLinkActiveOptions: 'd-none',
          },
        ],
      },
      {
        label: 'HitWeb Maquetaciones',
        icon: 'pi pi-cog',
        routerLink: '/hitweb',
      },
    ];
  }
}
