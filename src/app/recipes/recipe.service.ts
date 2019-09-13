import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {Ingredient
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Corn Chat', 'Some Description', 'https://recipes.timesofindia.com/thumb/59215318.cms?imgsize=331377&width=800&height=800'),
    new Recipe('Corn Chat 1', 'Some Description', 'https://recipes.timesofindia.com/thumb/59215318.cms?imgsize=331377&width=800&height=800'),
    new Recipe('Corn Chat 2', 'Some Description', 'https://recipes.timesofindia.com/thumb/59215318.cms?imgsize=331377&width=800&height=800')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
