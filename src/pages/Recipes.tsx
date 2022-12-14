import { useEffect, useState } from "react";
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
    const[recipes, setRecipes] = useState<Recipes>();
    const[numberRecipes, setNumberRecipes] = useState(9);
    const[inputSearch, setInputSearch] = useState("");
    const[comboInput, setComboInput] = useState<string[]>([]);
    const[scroll,setScroll] = useState(true);

    const ConsultaApi = async ():Promise<Recipes> => {
        const response = await fetch("https://receitas-server.vercel.app/api");
        const data = await response.json();
        return data;
    }

    const renderRecipes = async (final: number) => {
        const renderData = await ConsultaApi();
        setRecipes(renderData.slice(0,final));     
    }

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const searchInputValue = event.target.value; 
        setInputSearch(searchInputValue);
    };

    const handleClickButton = (searchType: string) => {
        if(inputSearch === '') {
            setScroll(true);
            return renderRecipes(9);
        }

        let filterTypeValue: "Author" | "Description" | "Name";
        if(searchType === "Author") filterTypeValue = "Author";
        if(searchType === "Name") filterTypeValue = "Name";
        if(searchType === "Description") filterTypeValue = "Description";
        if(searchType === "Ingredients") {
            const recipesFilterByIngredients = recipes?.filter((recipe) => recipe.Ingredients.includes(inputSearch.toLowerCase()));
            setRecipes(recipesFilterByIngredients);
        } else {
            const newRecipes = recipes?.filter((recipe) => recipe[filterTypeValue].toLowerCase().includes(inputSearch.toLowerCase()));
            setRecipes(newRecipes);
        }
        setComboInput(prevNames => [...prevNames, inputSearch])
        setScroll(false);     
    };

    const handleonScroll = () => { 
        window.onscroll = function() {
            if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {      
                setNumberRecipes(numberRecipes + 9);
            }
        }      
    };

    handleonScroll()

    useEffect(()=> {          
        if(scroll) renderRecipes(numberRecipes);   
    },[numberRecipes]);

    return (
        <div>
            <PreviousSearches
                onChange={handleChangeInput} 
                onClick={handleClickButton}
                inputvalue={comboInput}
            />
            <div className="recipes-container">
                {recipes?.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}