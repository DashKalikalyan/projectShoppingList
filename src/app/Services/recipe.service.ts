import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient} from '../recipe/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

	// recipeSelected= new EventEmitter<Recipe>();
	private recipes: Recipe[]=[
		new Recipe(
			'Tasty Schnitzel',
			'A tasty Schnitzel-just awesome',
			'http://static.essen-und-trinken.de/bilder/7b/41/9150/galleryimage/420651527d7a78c4befed182dd4f500a.jpg',
			[
				new Ingredient('Meat',1),
				new Ingredient('French Fries',20)

			]),

		new Recipe(
			'Big fat Burger',
			'What else you need to say?????',
			'https://s3-media4.fl.yelpcdn.com/bphoto/6A9ZMFs9LLDxF5jbqxxM_g/o.jpg',
			[
				new Ingredient('Buns',2),
				new Ingredient('Meat',1)

			])


		];
	constructor(private slService:ShoppingListService){}

	getRecipes(){
		return this.recipes.slice();
	}

	getRecipe(index: number) {
    return this.recipes[index];
  }

	addIngredientsToShoppingList(ingredients:Ingredient[]){
		this.slService.addIngredients(ingredients);
	}
	addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
	  this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
  setRecipes(recipes: Recipe[]) {
	  this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

}
