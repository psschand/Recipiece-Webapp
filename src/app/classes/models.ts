export interface IModel {
  id?: string;
  owner?: string;
}

export interface IUser extends IModel {
  id?: string;
  name: string;
  email: string;
  password?: string;
}

export interface IRecipe extends IModel {
  name: string;
  ingredients: Ingredient[];
  steps: string[];
  description: string;
  isPrivate: boolean;
}

export interface Ingredient {
  name: string;
  amount: string;
  measure: string;
}
