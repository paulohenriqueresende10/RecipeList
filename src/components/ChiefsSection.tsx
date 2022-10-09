import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexicana",
        },
        {
            name: "Sujiro",
            img: "/img/top-chiefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japonesa",
        },
        {
            name: "Super Mario",
            img: "/img/top-chiefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italiana",
        },
        {
            name: "Ellon Musk",
            img: "/img/top-chiefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "Americana"
        },
        {
            name: "Érick Jacquin",
            img: "/img/top-chiefs/img_5.jpg",
            recipesCount: "09",
            cuisine: "Francesa"
        },
        {
            name: "Raj",
            img: "/img/top-chiefs/img_6.jpg",
            recipesCount: "04",
            cuisine: "Indiana"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Nossos Chefes</h1>
            <div className="top-chiefs-container">
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}