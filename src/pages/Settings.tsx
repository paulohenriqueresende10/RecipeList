import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

import { useState, useEffect } from "react"

type setPropertyProps = {
    key: string;
    
}
export default function Settings(){
    const [settings, setSettings] = useState<any>({
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--primary-color": "rgb(255, 0, 86)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757",
        "--font-size": "16px",
        "--animation-speed": 1
    })
    useEffect(() => {
        const root = document.documentElement
        for(let key in settings){
            root.style.setProperty(key, settings[key])
        }
    }, [settings])

    const [theme, setTheme] = useState<any>("light")
    const themes = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757"
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea",
        }
    ]

    function changeTheme(i: number){
        const _theme:any = {...themes[i]}
        setTheme(i === 0 ? "light" : "dark")
        let _settings = {...settings}
        for(let key in _theme){
            _settings[key] = _theme[key]
        }
        setSettings(_settings)
    }

    function changeColor(i: number){
        const _color = primaryColors[i]
        let _settings = {...settings}
        _settings["--primary-color"] = _color
        setPrimaryColor(i)
        setSettings(_settings) 
    }

    function changeFontSize(i: number){
        const _size = fontSizes[i]
        let _settings = {...settings}
        _settings["--font-size"] = _size.value
        setFontSize(i)
        setSettings(_settings)
    }

    function changeAnimationSpeed(i: number){
        let _speed = animationSpeeds[i]
        let _settings = {...settings}
        _settings["--animation-speed"] = _speed.value
        setAnimationSpeed(i)
        setSettings(_settings)
    }



    const primaryColors = [
        "rgb(255, 0, 86)",
        "rgb(33, 150, 243)",
        "rgb(255, 193, 7)",
        "rgb(0, 200, 83)",
        "rgb(156, 39, 176)"
    ]
    const fontSizes = [
        {
            title: "Pequeno",
            value: "12px"
        },
        {
            title: "Médio",
            value: "16px"
        },
        {
            title: "Grande",
            value: "20px"
        }
    ]
    const animationSpeeds = [
        {
              title: "Lento",
              value: 2
        },
        {
              title: "Médio",
              value: 1
        },
        {
              title: "Rápido",
              value: .5
        }
    ]
    const [primaryColor, setPrimaryColor] = useState(0)
    const [fontSize, setFontSize] = useState(1)
    const [animationSpeed, setAnimationSpeed] = useState(1)
    return (
        <div>
            <div className="section d-block">
                <h2>Tema Primário</h2>
                <div className="options-container">
                    <div className="option light" onClick={() => changeTheme(0)}>
                        { theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        ) }
                    </div>
                    <div className="option dark" onClick={() => changeTheme(1)}>
                        { theme === "dark" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        ) }
                    </div>
                </div>
            </div>
            <div className="section d-block">
                <h2>Cor preferida</h2>
                <div className="options-container">
                    { primaryColors.map((color, index) => (
                        <div key={index} className="option light" style={{backgroundColor: color}} onClick={() => changeColor(index)}>
                            { primaryColor === index && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            ) }
                        </div>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Tamanho da fonte</h2>
                <div className="options-container">
                    { fontSizes.map((size, index) => (
                        <button key={index} className="btn" onClick={() => changeFontSize(index)}>
                            {size.title}
                            { fontSize === index && <span><FontAwesomeIcon icon={faCheck} /></span> }
                        </button>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Velocidade da animação</h2>
                <div className="options-container">
                    { animationSpeeds.map((speed, index) => (
                        <button key={index} className="btn" onClick={() => changeAnimationSpeed(index)}>
                            {speed.title}
                            { animationSpeed === index && <span><FontAwesomeIcon icon={faCheck} /></span> }
                        </button>
                    ))}
                </div>
            </div>
            
        </div>
    )
}