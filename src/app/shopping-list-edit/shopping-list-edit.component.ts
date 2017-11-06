import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { Ingredient } from '../recipe/ingredient.model';
import { ShoppingListService } from '../Services/shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;

	//@Output() ingredientCreated = new EventEmitter<Ingredient>();			//as we will use shopping list service here
	// @ViewChild('nameInput') nameInputRef:ElementRef;
	// @ViewChild('amountInput') amountInputRef:ElementRef;



constructor(private slService: ShoppingListService) { }
subscription: Subscription;
editMode= false;
editedItemIndex: number;
editedItem: Ingredient;
    ngOnInit() {
    this.subscription = this.slService.startedEditting
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

	// The below function is no more needed as we will use form style now
	// onAddIngredient(){
	// 	const ingredientToBeAdded=new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
	// 	//this.ingredientCreated.emit(ingredientToBeAdded);
	// 	this.slService.addIngredient(ingredientToBeAdded);
	// }

  onSubmit(form: NgForm) {
    const value = form.value;
    const ingredientToBeAdded = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, ingredientToBeAdded);
    } else {
      this.slService.addIngredient(ingredientToBeAdded);
    }
    form.reset();
    this.editMode = false;
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }


}
