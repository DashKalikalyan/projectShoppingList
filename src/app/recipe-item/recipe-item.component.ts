import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Input() index: number;


  ngOnInit() {}


}

//   constructor(private recipeService: RecipeService) { }
// onShowDetails(recipe:Recipe){
// 	//this.onDetailsTaken.emit(recipe);
// 	this.recipeService.recipeSelected.emit(recipe);
// }




// @Output() onDetailsTaken=new EventEmitter<Recipe>();
