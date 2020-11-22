import { Component, OnInit, ViewChild } from '@angular/core';
import { IngredientPickerComponent } from 'src/app/components/ingredient-picker/ingredient-picker.component';
import { IngredientTagPickerComponent } from 'src/app/components/ingredient-tag-picker/ingredient-tag-picker.component';
import { RecipeTagPickerComponent } from 'src/app/components/recipe-tag-picker/recipe-tag-picker.component';
import { IIngredientTag } from 'src/app/entities/ingredient-tag.model';
import { IRecipeTag } from 'src/app/entities/recipe-tag.model';

@Component({
  selector: 'app-pickers',
  templateUrl: './pickers.component.html',
  styleUrls: ['./pickers.component.scss'],
})
export class PickersComponent implements OnInit {
  @ViewChild('recipeTagPk') recipeTagPicker!: RecipeTagPickerComponent;
  @ViewChild('ingredientTagPk')
  ingredientTagPicker!: IngredientTagPickerComponent;
  @ViewChild('ingredientPk') ingredientPicker!: IngredientPickerComponent;
  recipeTags: IRecipeTag[] = [];
  ingredientTags: IIngredientTag[] = [];
  ingredients: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.ingredients = this.ingredientPicker.getIngredients();
    this.recipeTags = this.recipeTagPicker.getRecipeTags();
    this.ingredientTags = this.ingredientTagPicker.getIngredientTags();
  }
}
