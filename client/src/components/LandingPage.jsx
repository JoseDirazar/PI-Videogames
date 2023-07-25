import style from './CSS/LandingPage.module.css'

export default function LandingPage({goingHome}) {

    return(<div className={style.landingContainer}>
        <h1>Welcome to FrikiGames</h1>
        <button onClick={goingHome} className={style.landingButton} >Explore Videogames</button>
    </div>)
}