import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipeListComponent} from '../recipe-list/recipe-list.component';
import {RecipeItemComponent} from '../recipe-item/recipe-item.component';
import {RecipeDetailsComponent} from '../recipe-details/recipe-details.component';
import {RecipeComponent} from './recipe.component';
import {RecipeStartComponent} from '../recipe-start/recipe-start.component';
import {RecipeEditComponent} from '../recipe-edit/recipe-edit.component';
import {RecipeRoutingModule} from './recipe.routing.module';
import {SharedModule} from '../directive/shared.module';


@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule
  ]
})


export class RecipeModule {

}
