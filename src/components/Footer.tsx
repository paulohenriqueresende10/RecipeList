import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return (
        <div className="footer container">
            <div className="footer-section">
                <p className="title">Receitasdavovo.com</p>
                <p>Receitas da Vovó é um lugar onde você pode agradar a alma e o estômago com deliciosas receitas de comida de todas as culinárias. E nosso serviço é totalmente gratuito.</p>
                <p>&copy; 2022 | Todos os direitos reservados</p>
            </div>
            <div className="footer-section">
                <p className="title">Entrar em Contato Conosco</p>
                <p>receitasdavovo@gmail.com</p>
                <p>(32) 99999-1111</p>
                <p>Leopoldina - MG</p>
            </div>
            <div className="footer-section">
                <p className="title">Redes Sociais</p>
                <p><FontAwesomeIcon icon={faFacebook} /> Facebook</p>
                <p><FontAwesomeIcon icon={faTwitter} /> Twitter</p>
                <p><FontAwesomeIcon icon={faInstagram} /> Instagram</p>
            </div>
        </div>
    )
}