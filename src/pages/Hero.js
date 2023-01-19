import React from "react";
import "../css/Hero.css"

const Hero = () =>{
    return <div className="hero">
        <video src="https://assets.mixkit.co/videos/preview/mixkit-sequence-of-a-decorated-wedding-table-5224-large.mp4" autoPlay loop muted 
        alt="wedding reception" className="hero_image"/>
        
        <h1 className="hero_title"> Creating Unforgettable Memories!! </h1>
    </div>
}
export default Hero;
