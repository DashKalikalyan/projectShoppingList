import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../Services/recipe.service';
import { Ingredient } from '../recipe/ingredient.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
	//@Output() onDetailsBrought=new EventEmitter<Recipe>();	//wont be using, instead we will implement crosscomponent event binding

  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe() {
    // this.recipes
    //   .push(new Recipe(
    //     'Palak Paneer',
    //     'Delicious Indian Dish..Spicy!!!!',
    //     'http://www.vegrecipesofindia.com/wp-content/uploads/2013/05/palak-paneer-recipe25.jpg',
    //     [new Ingredient('Paneer', 2),
    //       new Ingredient('Palak', 4)]
    // ));
    this.router.navigate(['new'], {relativeTo: this.route});
  }

//removed becoz of cross-component event binding
//	onDetailsShowed(recipe:Recipe){
//		this.onDetailsBrought.emit(recipe);
//	}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
