interface Ingredient {
  id: number;
  name: string;
  picture: string;
  calories: number;
  carbs: number;
  fat: number;
  protein: number;
  created_ar: number;
}

interface Author {
  firstname: string;
  lastname: string;
  role: Role;
}

interface RecipeIngredient {
  ingredient: Ingredient;
  serving: number;
  servingSize: string; // TODO : Maybe change this type
}

interface RecipeStep {
  title: name;
  position: number;
  description: string;
}

interface Recipe {
  name: string;
  picture: string;
  star: number;
  duration: number;
  author?: Author;
  categories: string;
  ingredients: RecipeIngredient[];
  procedure: RecipeStep[];
}
