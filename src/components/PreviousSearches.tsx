import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export interface InputPropsInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {}


export default function PreviousSearches({
  children,
  ...rest
}: InputPropsInterface){
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
                <input type="text" {...rest} placeholder="Procurar ..." />
                <button className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}