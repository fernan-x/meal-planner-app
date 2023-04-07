import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

interface UseIngredientsResut {
  ingredients: Ingredient[];
}

export const useIngredients = (): UseIngredientsResut => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchIngredients = async () => {
      const { data, error } = await supabase.from("ingredients").select();
      console.log(data, error);
    };

    fetchIngredients();
  }, [refresh]);

  return {
    ingredients,
  };
};
