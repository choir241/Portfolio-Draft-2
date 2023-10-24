interface Picture{
    src: string,
    alt: string
}

export default function Image(props: Picture){
    return(
        <div className = "imageContainer">
            <img src={props.src} alt={props.alt} />
        </div>
    )
}