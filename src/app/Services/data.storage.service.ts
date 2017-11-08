import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import {RecipeService} from './recipe.service';
import {Recipe} from '../recipe/recipe.model';
import {Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor (private http: Http, private recipeService: RecipeService) {}
  storeRecipes() {
    return this.http.put('https://ng-recipe-book-1750b.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }
  getRecipes() {
    // METHOD 1 (NO USE OF MAP)
    // this.http.get('https://ng-recipe-book-1750b.firebaseio.com/recipes.json')
    //   .subscribe(
    //     (response: Response) => {
    //       const recipes: Recipe[] = response.json();
    //       this.recipeService.setRecipes(recipes);
    //     }
    //   );
    // method 2 (USE OF MAP)
    this.http.get('https://ng-recipe-book-1750b.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];

            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
