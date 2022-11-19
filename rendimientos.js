var DatosTabla = localStorage.getItem ("tablanexo")
DatosTabla = JSON.parse(DatosTabla)
if (DatosTabla == null){
   var DatosTabla = []
}

function lista (){
console.log("ingresando a listar");
var dataFila = ''

if (DatosTabla.length > 0){
   for(const i in DatosTabla) {
      var varTabla = JSON.parse (DatosTabla[i])
      dataFila += "<tr>"
      dataFila += "<td>"+varTabla.codpalnilla+"</td>"
      dataFila += "<td>"+varTabla.nombApellido+"</td>"
      dataFila += "<td>"+varTabla.email+"</td>"
      dataFila += "<td>"+varTabla.fono+"</td>"
      dataFila += "<td>"+varTabla.direccion+"</td>"
      dataFila += "<td>"+
                  "<button type='button' class='btn btn-warning' onclick='nexoboton("+varTabla.codpalnilla+")'>EDITAR</button>"+
                  "</td>";
      

      dataFila += "</tr>"
   }
   document.getElementById("datos").innerHTML = dataFila
}
// funcion para derivar al formulario para insertar los datos
}
 function nexoboton (idform){
    localStorage.setItem("idform", JSON.stringify(idform))
    window.location.replace ("rendimientos-form.html")

 }

 