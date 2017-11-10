import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ShoppingListService } from './Services/shopping-list.service';
import { AppRoutingModule} from './app-routing.module';
import { RecipeService } from './Services/recipe.service';
import {HttpModule} from '@angular/http';
import {DataStorageService} from './Services/data.storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {RecipeModule} from './recipe/recipe.module';
import {SharedModule} from './directive/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngredientComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RecipeModule,
    SharedModule,
    ShoppingListModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
