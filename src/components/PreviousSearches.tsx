import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

type PreviousSearchesProps = {
    onClick: (search: string) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputvalue: string;
};

export default function PreviousSearches({onChange, onClick, inputvalue}: PreviousSearchesProps){   
    const searches = ["Author","Description","Ingredients", "Name"];
    const [search, setSearch] = useState("Name");
    const [plusState, setplusState] = useState(false);

    const handleClickValue = (typeSearch: string) => {  
        setSearch(typeSearch);    
    };
    const handleClickAddInputSearch = () => {  
        setplusState(current => !current);  
    };

    return (
        <div className="previous-searches section">
            <h2>Opções de Pesquisas</h2>
            <div className="previous-searches-container">
                { searches.map((search, index) => (<div onClick={() =>{handleClickValue(search)}} key={index} style={{animationDelay: index * .1 + "s", cursor: "pointer"}} className="search-item">
                    {search}
                </div>)) }
            </div>
            <div className="search-box">
                <button onClick={handleClickAddInputSearch} className="btn btn-plus">
                    <FontAwesomeIcon icon={!plusState ? faPlus : faMinus} />
                </button>
                <p className="type-search">{search}</p>
                <input type="text" onChange={onChange} placeholder="Procurar ..." />
                <button onClick={()=> {onClick(search)}} className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="search-box">
                {plusState && (
                    <span>{inputvalue}</span>
                )}
            </div>
        </div>
    )
}