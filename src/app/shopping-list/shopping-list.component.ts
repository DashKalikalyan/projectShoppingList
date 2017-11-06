import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../recipe/ingredient.model';
import { ShoppingListService} from '../Services/shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private slService: ShoppingListService) {
  }
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
      );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    }
  onEditItem(index: number) {
    this.slService.startedEditting.next(index);
  }

//  Removed as we are using service now
//	onIngredientAdded(ingredient:Ingredient){
//		this.ingredients.push(ingredient);
//	}

}
