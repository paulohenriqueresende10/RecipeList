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
    urlImage : string;
}[];

export default function Recipes(){
    const[recipes, SetRecipes] = useState<Recipes>();
    const[numberRecipes, setNumberRecipes] = useState(9)
    const ConsultaApi = async ():Promise<Recipes> => {
        const response = await fetch("https://receitas-server.vercel.app/api");
        const data = await response.json();
        return data;
    }

    const renderRecipes = async (final: number) => {
        const renderData = await ConsultaApi();
        SetRecipes(renderData.slice(0,final));
        
    } 
    renderRecipes(numberRecipes);
    
    window.onscroll = function() {
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {      
            setNumberRecipes(numberRecipes + 9);
        }
      }

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