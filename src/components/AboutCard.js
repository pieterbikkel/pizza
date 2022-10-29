import PlayIcon from "../assets/play.svg"
import CardTopShape from "../assets/card-top.svg"
// import CardShape from "../assets/card.svg"
import "./aboutcard.css"

const AboutCard = ({title, paragraph, height, refe}) => {
    return (
        <div className="about-card" ref={refe} style={{height: height}}>
            <img src={PlayIcon} alt="play icon" className="play-icon" />
            <h3>{title}</h3>
            <p>{paragraph}</p>
            <img className="card-top-shape" src={CardTopShape} alt="card top" />
        </div>
    )
}

export default AboutCard;