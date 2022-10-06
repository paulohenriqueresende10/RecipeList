import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

type PreviousSearchesProps = {
    onClick: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PreviousSearches({onChange,onClick}: PreviousSearchesProps){
    const searches = ['pizza', 'hambúrguer', 'cookies', 'sucos', 'açaí', 'salada', 'sorvete', 'lasanha', 'pudim', 'sopa'] 

    return (
        <div className="previous-searches section">
            <h2>Pesquisas Anteriores</h2>
            <div className="previous-searches-container">
                { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </div>)) }
            </div>
            <div className="search-box">
                <input type="text" onChange={onChange} placeholder="Procurar ..." />
                <button onClick={onClick} className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}