import { useEffect, useState } from "react";

const Video = ({thumbnail, title, dateAdded, channel, description, rate}) => {
    const [stars, setStars] = useState(rate);   //HOOK
    const [active, setActive] = useState(false);   //HOOK


    const rateVideo = () => {
        setStars(stars + 1)
    }
    
    //componentDidUpdate
    useEffect(() => {
        console.log('El componente se actualizó...')
    }, [active])

    return (
        <div className="video-container">
            <div className="video-image">
            <img src={thumbnail} alt="Same alt value" />
            </div>
            <div className="video-info">
            <h3>{title}</h3>
            <span>{stars} stars</span> | <button onClick={rateVideo}>Rate this video</button>
            <p>Upload date: {dateAdded}</p>
            <h4>Channel's Title: {channel}</h4>
            <p>{description}</p>
            </div>
        </div>
    );
}

export default Video;