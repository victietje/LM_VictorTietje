let alumnos = [
    {nombre: "Ricardo", edad: 18},
    {nombre: "Emmanuel", edad: 19},
    {nombre: "Cosme", edad: 18},
]

let alumnosadd = alumnos.map(alumno => {
    let curso = prompt(`¿En qué curso está ${alumno.nombre}?`);
    let asignaturas = prompt(`¿Cuántas asignaturas tiene ${alumno.nombre}?`);
    return {
        ...alumno,
        curso: curso,
        asignaturas: asignaturas.split("-")
    };
});

console.log(alumnosadd);