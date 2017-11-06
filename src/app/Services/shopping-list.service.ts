import { Ingredient } from '../recipe/ingredient.model';
import { EventEmitter } from '@angular/core';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged= new Subject<Ingredient[]>();
  startedEditting= new Subject<number>();
  private ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 6)
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    for (let ingredient of ingredients){
      this.addIngredient(ingredient);
    }

		// this.ingredients.push(...ingredients);
		// this.ingredientsChanged.next(this.ingredients.slice());
	}
  updateIngredient(index: number, newIngedient: Ingredient) {
    this.ingredients[index] = newIngedient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
