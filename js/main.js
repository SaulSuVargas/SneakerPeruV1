$(function () {
    let fondoOscuro = true
    $("#botonCambiarFondo").on("click", function() {
        if(fondoOscuro === true){// if(fondoOscuro){
            $("#nosotros").css("background-color","#FFFFFF")
                            .css("color","#333333")
            fondoOscuro = false
        }
        else{
            $("#nosotros").css("background-color","#000")
                            .css("color","#FFFFFF")
            fondoOscuro = true
        }
        
    });

    $("#valores article").on("click", function() {
        if($(this).css("background-color") === "rgba(0, 0, 0, 0)"){
            $(this).css("background-color","rgba(255,255,255,0.1)")
        }
        else{
            $(this).css("background-color","rgba(0, 0, 0, 0)")
        }
        //$(this) hace referencia al objeto que recibió el evento
    })
    $("valores h2 span").on("click",function(){
        $("#valores article").css("background-color","rgba(0,0,0,0)")
    });

    $("section").each(function(){
        let titulo = $(this).find("h2").text();
        // Hace referencia al objeto que en este bucle se esta examinando
        console.log(titulo)
        let identificador = $(this).attr("id");
        let itemMenu ='<li class="nav-item">'+
                            '<a class="nav-link" href="#'+identificador+'">'+titulo+'</a>'+
                      '</li>'
        $("#menu-home").append(itemMenu)
        
    });
    //$("#menu-main").append($("#menu-home li:first-child"))
});

let itemsLocales = document.querySelectorAll("#locales-lista li")
//Todos los objetos seleccionados estan contenidos en el arreglo (itemsLocales)
itemsLocales.forEach(itemLista =>{
    // Con forEach se examina cada elemento del arreglo
    // La variable ItemLista representa a cada elemento del arreglo
    let rutaArchivo = itemLista.getAttribute("locales-ruta")
    itemLista.addEventListener("click",() => {
        console.log("prueba")
        itemsLocales.forEach(itemL => {
            itemL.classList.remove("active")
        })
        itemLista.classList.add("active")
        fetch(rutaArchivo) //Se indica el archivo leer
        .then(response => response.text()) // Aca indicamos el formato del archivo
        .then(data => { // Esta variable contiene los datos, la variable puede ser cualquier nombre
            console.log(data)
            document.getElementById("locales-contenido").innerHTML = data
        })
    });
});

// Selecciona el primer elemento a referenciar, en este caso el li
document.querySelector("#locales-lista li").click()


document.getElementById("menu-item-inversiones").addEventListener("click", () =>{
    fetch("pages/inversiones.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
        })
})

document.querySelector("#locales-lista li").click()


document.getElementById("menu-item-proveedores").addEventListener("click", () =>{
    fetch("pages/proveedores.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data
        })
})
/*

*/