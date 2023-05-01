

export default function Location(props){
    const {name, dates, desc, img, maps} = props.location;
    
    return (
        <div className="card">
            <div className="imageCont">
                <div className="imageHeader">✖</div>
                <img src={`../assets/${img}`} className="image"></img>
            </div>

            <div className="cardInfo">
                <p>Location: {name}</p>
                <hr></hr>
                <p>Dates: {dates}</p>
                <p>{desc}</p>
                <a href={maps}>view on google maps</a>
            </div>
        </div>
    )
}