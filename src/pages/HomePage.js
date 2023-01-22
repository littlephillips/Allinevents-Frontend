
const { default: Navbar } = require("../components/Navbar")
const { default: Hero } = require("./Hero")

const HomePage = () => {

    return(
        <>
            <Navbar />
            <Hero />
        </>
    )
}

export default HomePage;