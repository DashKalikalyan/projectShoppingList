import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {HomeComponent} from '../home/home.component';
import {SharedModule} from '../directive/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {CommonModule} from '@angular/common';
import {ShoppingListService} from '../Services/shopping-list.service';
import {RecipeService} from '../Services/recipe.service';
import {DataStorageService} from '../Services/data.storage.service';
import {AuthService} from '../auth/auth.service';
import {AuthGuard} from '../auth/auth-guard.service';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard
  ]
})
export class CoreModule {
}
