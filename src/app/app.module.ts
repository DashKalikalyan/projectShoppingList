import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ShoppingListService } from './Services/shopping-list.service';
import { AppRoutingModule} from './app-routing.module';
import { RecipeService } from './Services/recipe.service';
import {HttpModule} from '@angular/http';
import {DataStorageService} from './Services/data.storage.service';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {SharedModule} from './directive/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
