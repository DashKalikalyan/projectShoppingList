import {NgModule} from '@angular/core';
import {ShoppingListEditComponent} from '../shopping-list-edit/shopping-list-edit.component';
import {ShoppingListComponent} from './shopping-list.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShoppingListModule {

}
