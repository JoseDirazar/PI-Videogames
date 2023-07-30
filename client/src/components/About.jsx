import style from "./CSS/About.module.css"
export default function About() {

    return(<div className={style.AboutContainer}>
        <h1 className={style.saludo}>Hello World!</h1>
        <div className={style.parrafo}>My name is Joseph and this is the stack I used for this proyect:</div>
        <div className={style.tecnologiasContainer}>
            <div className={style.columnasTec}>Frontend
            <div className={style.tecnologias}>
            <img src="/nodejs.png" alt="nodejs" />
            </div>

            <div className={style.tecnologias}>
            <img src="react.png" alt="react" />
            </div>

            <div className={style.tecnologias}>
            <img src="/redux.png" alt="redux" />
            </div>

            </div>

            <div className={style.columnasTec}>Backend
            <div className={style.tecnologias}>
            <img className={style.express} src="/Expressjs.png" alt="express" />
            </div>

            <div className={style.tecnologias}>
            <img src="/sequelize.png" alt="sequelize" />
            </div>

            <div className={style.tecnologias}>
            <img src="/postgresql.png" alt="posgresql" />
            </div>

            </div>

            <div className={style.columnasTec}>Testing
            <div className={style.tecnologias}>
            <img src="/mocha.png" alt="mocha" /></div>
            </div>

        </div>
    </div>)
}