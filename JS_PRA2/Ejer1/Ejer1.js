function gestionarFicheroXML(xmlDoc){
	
	alert("XML")

	let librerias = xmlDoc.querySelectorAll("libreria");
	let libros = xmlDoc.querySelectorAll("libro");
	let main = document.querySelector("main");
	let cadena = "";

	for(let libreria of librerias)
	{
		cadena += "<table>";
		cadena += "<h2>";
		cadena += libreria.querySelector("nombre").textContent;
		cadena += "</h2>";

		for (let libro of libros) {
            cadena += "<tr>";
            cadena += "<td>ISBN: " + libro.querySelector("ISBN").textContent + "</td>";
            cadena += "<td>Título: " + libro.querySelector("titulo").textContent + "</td>";
            cadena += "<td>Autores: " + libro.querySelector("autores > autor").textContent + "</td>";
            cadena += "<td>Editorial: " + libro.querySelector("editorial").textContent + "</td>";
            cadena += "<td>Fecha de publicación: " + libro.querySelector("fechaPublicacion").textContent + "</td>";
            cadena += "<td>Precio: " + libro.querySelector("precio").textContent + "</td>";
            cadena += "<td>Web: <a href='" + libro.querySelector("paginaWeb").textContent + "' target='_blank'>" + libro.querySelector("paginaWeb").textContent + "</a></td>";
            cadena += "</tr>";
        }

		cadena += "</table>"
	}

	main.innerHTML = cadena;
}