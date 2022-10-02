import { useState } from "react";
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

type Recipes = {
    Author: string;
    Description: string;
    Ingredients: string[];
    Method: string[];
    Name: string;
    url: string;
}[];

export default function Recipes(){
    const[recipes, SetRecipes] = useState<Recipes>();
    const ConsultaApi = async () => {
        const response = await fetch("https://phpdanki.000webhostapp.com");
        return await response.json();
    }
    const recipesApi = async () => {
        SetRecipes(await ConsultaApi());
    }
    recipesApi();

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {recipes?.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}