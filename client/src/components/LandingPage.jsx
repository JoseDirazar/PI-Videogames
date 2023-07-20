export default function LandingPage({goingHome}) {

    return(<div className="WelcomePage">
        <h1>Welcome to FrikiGames</h1>
        <button onClick={goingHome} >Explore Videogames</button>
    </div>)
}