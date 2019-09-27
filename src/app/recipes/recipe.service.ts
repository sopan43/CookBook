import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  Ingredient
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Corn Chat', 'Some Description', 'https://recipes.timesofindia.com/thumb/59215318.cms?imgsize=331377&width=800&height=800', [new Ingredient('Corn', 1), new Ingredient('Salt', 1)]),
    new Recipe('Corn Chat 1', 'Some Description', 'https://recipes.timesofindia.com/thumb/59215318.cms?imgsize=331377&width=800&height=800', [new Ingredient('Corn', 2), new Ingredient('Peper', 1)]),
    new Recipe('Corn Chat 2', 'Some Description', 'https://recipes.timesofindia.com/thumb/59215318.cms?imgsize=331377&width=800&height=800', [new Ingredient('Corn', 3), new Ingredient('Lemon', 1)])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
