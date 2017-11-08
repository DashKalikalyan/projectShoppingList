import { Injectable} from '@angular/core';
import { Http} from '@angular/http';
import {RecipeService} from './recipe.service';
import {Recipe} from '../recipe/recipe.model';
import {Response} from '@angular/http';
import 'rxjs/Rx';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor (private http: Http,
               private recipeService: RecipeService,
               private aurhService: AuthService) {}
  storeRecipes() {
    const token = this.aurhService.getToken();
    return this.http.put('https://ng-recipe-book-1750b.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
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
    const token = this.aurhService.getToken();
    this.http.get('https://ng-recipe-book-1750b.firebaseio.com/recipes.json?auth=' + token)
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
