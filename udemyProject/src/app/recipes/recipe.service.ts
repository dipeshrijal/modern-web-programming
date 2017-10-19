import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Burger',
      'Tasty',
      'https://assets.fastcompany.com/image/upload/w_596,c_limit,q_auto:best,f_auto,fl_lossy/wp-cms/uploads/2017/06/i-1-sonic-burger.jpg',
      [
        new Ingredient('Meat', 10),
        new Ingredient('Flour', 5),
        new Ingredient('Buns', 2),
      ],
    ),
    new Recipe(
      2,
      'MOMO',
      'Simply The Best',
      'https://s4.scoopwhoop.com/anj/sdgsd/210515488.jpeg',
      [
        new Ingredient('Meat', 10),
        new Ingredient('Flour', 10),
      ],
    ),
    new Recipe(
      3,
      'Choila',
      'Awesome',
      'http://www.thegundruk.com/wp-content/uploads/2014/01/haku-choila-@-Honacha.jpg',
      [
        new Ingredient('Meat', 10),
        new Ingredient('Pepper', 2),
        new Ingredient('Onion', 2),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  findRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
