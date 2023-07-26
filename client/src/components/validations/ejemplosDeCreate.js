import axios from "axios"
const create1 = {
    nombre: 'MyNewGame',
    fecha_lanzamiento: "01/01/01",
    plataformas: "Xbox, PlayStation",
    rating: 4.9,
    generos: "Accion, Plataforma",
    imagen: "https://ih1.redbubble.net/image.1045126361.2094/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
}

async function ta() {
    try {
        let platforms = []
        const {data} = await axios.get(`https://api.rawg.io/api/platforms?key=2ed1cbc206f94950abfb03e2e872af32`)
        
        data.results.forEach(platform => platforms.push(platform.name))
        console.log(platforms)
    } catch (error) {
        console.log(error)
    }
}
ta()
