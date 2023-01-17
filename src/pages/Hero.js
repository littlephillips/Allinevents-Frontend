import React from "react";
import "../css/Hero.css"
// import classes from './BackgroundVideo.module.css'


const Hero = () =>{
    return <div className="hero">
        <video src="https://assets.mixkit.co/videos/preview/mixkit-sequence-of-a-decorated-wedding-table-5224-large.mp4" autoPlay loop muted 
        alt="wedding reception" className="hero_image"/>
        
        <h1 className="hero_title"> Creating Unforgettable Memories!</h1>
    </div>
}
export default Hero;

// const Hero = () =>{
//     const videoSource = "https://assets.mixkit.co/videos/preview/mixkit-sequence-of-a-decorated-wedding-table-5224-large.mp4"

//     return(
//         <>
//         <div className={classes.Container}>
//             <video autoPlay loop muted className={classes.Video}>
//                 <source src={videoSource} type="video/mp4" />
//             </video>
//         </div>
//         <div className={classes.Content}>
//             <div className={classes.Subcontent}>
//                 <h1>Hello World</h1>
//                 <p>Thus is a para</p>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Hero;