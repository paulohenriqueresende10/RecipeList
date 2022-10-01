import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QouteSection(){
    return (
        <div className="section quote">
            <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft} /> Comida é tudo o que somos. É uma extensão do sentimento nacionalista, sentimento étnico, sua história pessoal, sua província, sua região, sua tribo, sua avó. É inseparável daqueles desde o início</p>
            <p className="qoute-auther">- Alucard fagner</p>
        </div>
    )
}