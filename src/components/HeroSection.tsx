import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Sobre nós</h1>
                <p className="info">Receitas da vovó é um lugar onde você pode agradar a alma e o estômago com deliciosas receitas de comida de todas as culinárias. E nosso serviço é totalmente gratuito. Então comece a explorar agora.</p>
                <button className="btn">Explore</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}