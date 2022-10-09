import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

type PreviousSearchesProps = {
    onClick: (search: string) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PreviousSearches({onChange, onClick}: PreviousSearchesProps){   
    const searches = ["Author","Description","Ingredients","Method", "Name"];
    const[search, setSearch] = useState("Name");

    const handleClickValue = (typeSearch: string) => {  
        setSearch(typeSearch);    
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
                <p className="skill-item">{search}</p>
                <input type="text" onChange={onChange} placeholder="Procurar ..." />
                <button onClick={()=> {onClick(search)}} className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}