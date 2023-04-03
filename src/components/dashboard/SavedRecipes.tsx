import React from "react";
import Container from "../core/Container";
import RecipeCard from "../core/RecipeCard";

interface SavedRecipesProps {}

const SavedRecipes: React.FC<SavedRecipesProps> = ({}: SavedRecipesProps) => {
  return (
    <Container>
      <h1 className="medium-text-bold" style={{ textAlign: "center" }}>
        Vos recettes préférées
      </h1>
      <RecipeCard
        title="Traditional spare ribs baked"
        author="Fabien"
        rating={5.0}
        cookingTime={20}
        img="https://images.unsplash.com/photo-1593030668930-8130abedd2b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
    </Container>
  );
};

export default SavedRecipes;
