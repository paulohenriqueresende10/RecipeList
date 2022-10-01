export default function ImproveSkills(){
    const list = [
        "Aprenda novas receitas",
        "Experimente com comida",
        "Escreva suas próprias receitas",
        "Conheça os fatos nutricionais",
        "Receba dicas de culinária",
        "Qualifique-se"
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Melhore Suas Habilidades Culinárias</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button className="btn">Inscreva-se agora</button>
            </div>
        </div>
    )
}