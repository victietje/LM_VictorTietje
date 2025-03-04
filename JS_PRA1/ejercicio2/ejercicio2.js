'use strict'

verAsignaturas(["Sara", "DAMA", "Programación", "ED"],["Martín", "DAMB", "Programación", "LM", "ED", "BBDD", "FOL", "SI"])
verAsignaturas(["Álvaro","Semi","BBDD"])
verAsignaturas()

function verAsignaturas(...array)
{
    if(array.length == 0)
        console.log("No hay datos para mostrar")
    else
    {
        array.forEach(alumno => 
        {
            let [nombre, curso, ...asignaturas] = alumno;
            console.log(nombre + " - " + curso + " - Asignaturas: " + asignaturas.join("/"))
        })
    }
}

    