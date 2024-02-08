import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { UnCommonPageComponent } from './pages/un-common-page/un-common-page.component';
import { HitwebComponent } from './pages/hitweb/hitweb.component';

const routes: Routes = [
  { path: '', component: BasicsPageComponent },
  { path: 'numbers', component: NumbersPageComponent },
  { path: 'uncommon', component: UnCommonPageComponent },
  { path: 'hitweb', component: HitwebComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
