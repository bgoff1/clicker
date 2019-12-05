import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonClickComponent } from '@components/button-click/button-click.component';

const routes: Routes = [{ path: '', component: ButtonClickComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
