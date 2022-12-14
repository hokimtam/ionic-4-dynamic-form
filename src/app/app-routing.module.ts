import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'form', loadChildren: './form/form.module#FormComponent' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'form-builder', loadChildren: './form-builder/form-builder.module#FormBuilderPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
