type CustomImageprops = {
    imgSrc: string;
    pt: string;
}

export default function CustomImage({imgSrc, pt}:CustomImageprops){
    return (
        <div className="custom-image" style={{paddingTop: pt}}>
            <img src={imgSrc} alt="" />
        </div>
    )
}