CompararNombres(["Ricardo", "Emmanuel", "Sergio", "Cosme", "Yeray"], ["Javier", "Alvaro", "Victor", "Lucia", "Maria"])
CompararNombres(["Ricardo", "Emmanuel", "Sergio", "Cosme", "Yeray"], ["Ricardo", "Emmanuel", "Sergio", "Cosme", "Yeray"])
CompararNombres(["Ricardo", "Emmanuel", "Sergio", "Cosme", "Yeray"], ["Ricardo", "Emmanuel", "Paco", "Cosme", "Yeray"])


function CompararNombres(array1, array2)
{
    let repetido = 0;
    array1.forEach(nombre => {
        if(array2.includes(nombre)) {
            repetido++;
            }
        });
        //console.log(repetido)
    if(repetido == array1.length) {
        console.log("Todos los nombres están repetidos"); 
    }
    else if (repetido > 0) {
        console.log("Hay algunos nombres repetidos");
    }
    else {
        console.log("No hay nombres repetidos");
    }

    //console.log(array1.filter(nombre => array2.includes(nombre)))
}
    