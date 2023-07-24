export default function validation(input) {
    const errors = {}
    
    if(input.nombre && !/^[a-zA-Z\s]+$/.test(input.nombre) ) errors.nombre  = "El nombre no puede contener simbolos."

    if(input.fecha_lanzamiento && !/^(0[1-9]|[1-2]\d|3[0-1])\/(0[1-9]|1[0-2])\/\d{2}$/.test(input.fecha_lanzamiento) ) errors.fecha_lanzamiento = "El formato de la fecha debe ser: 01/01/23"

    if(!/^[0-5](\.\d{1,2})?$/.test(input.rating )) errors.rating = "El rating debe ser entre 0 a 5 puntos"

    if(input.imagen && !/^(ftp|http|https):\/\/[^ "]+$/.test(input.imagen) ) errors.imagen = "Ingersa una URL valida"

    if(input.descripcion.length > 255 ) errors.descripcion = "Maximo 255 caracteres."

    if(input.plataformas ) errors.plataformas = ""
    //TODO plataformas y generos
    return errors
} 