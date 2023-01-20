import React from "react";
import Navbar from "../components/Navbar";
import "../css/Hero.css"


const Hero = () =>{
    return(
    <div className="hero font-primary">
        
        <video src="https://assets.mixkit.co/videos/preview/mixkit-sequence-of-a-decorated-wedding-table-5224-large.mp4" autoPlay loop muted 
        alt="wedding reception" className="hero_image"/>
        <h1 className="p-3 hero brand font-brand font-bold ">AllIn Events</h1>
        
        <h2 className="hero_title font-primary">Creating Unforgettable Memories</h2>
           
    </div>
    )
}
export default Hero;
