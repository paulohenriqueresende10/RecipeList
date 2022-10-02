import CustomImage from "./CustomImage"

type RecipeCardProps = {
    recipe: {
        Author: string,
        Description: string,
        Ingredients: string[],
        Method: string[],
        Name: string,
        url: string,
    };
};

export default function RecipeCard({recipe}: RecipeCardProps){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={`/img/gallery/recipe-card.jpg`} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={`/img/top-chiefs/img_1.jpg`} alt=""/>
                <p className="recipe-title">{recipe.Name}</p>
                <p className="recipe-desc">{recipe.Description}</p>
                <a className="view-btn" href={recipe.url}>VER RECEITA</a>
            </div>
        </div>
    )
}