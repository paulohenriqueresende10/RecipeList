import CustomImage from "./CustomImage"

type RecipeCardProps = {
    recipe: {
        Author: string,
        Description: string,
        Ingredients: string[],
        Method: string[],
        Name: string,
        url: string,
        urlImage : string
    };
};

export default function RecipeCard({recipe}: RecipeCardProps){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.urlImage} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={`/img/top-chiefs/img_5.jpg`} alt={recipe.Author}/>
                <p className="recipe-title">{recipe.Name}</p>
                <p className="recipe-desc">{recipe.Description}</p>
                <div className="recipe-ingredients">
                    { recipe.Ingredients.map((ingredient, index) => (<p className="ingredient-list" key={index}>
                        {ingredient}
                    </p>)) }
                </div>
                <a className="view-btn" href={recipe.url}>VER RECEITA</a>
            </div>
        </div>
    )
}