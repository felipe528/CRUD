var DatosTabla = localStorage.getItem ("tablanexo")
DatosTabla = JSON.parse(DatosTabla)
if (DatosTabla == null){
   var DatosTabla = []
}

var idform = localStorage.getItem("idform")
 idform = JSON.parse(idform)
 if (idform == null){
   var idform = 0
 }

 cargarPagina ()
// crear arreglo y enavirlo desde localstorage
 function guardar(){
   console.log ("presiono guardar")
   var ObjRsporte = JSON.stringify({
    codpalnilla: (idform > 0) ? idform : (DatosTabla.length + 1),
    nombApellido: document.getElementById ("txtnyp").value,
    email: document.getElementById ("txtmail").value,
    fono: document.getElementById ("txtfono").value,
    direccion: document.getElementById ("txtdireccion").value
   })
   console.log(ObjRsporte)
// editar data   
if (idform > 0) {
  for (const i in DatosTabla) {
    var varTabla = JSON.parse(DatosTabla[i])
    if (varTabla.codpalnilla == idform) {
    DatosTabla[i] = ObjRsporte
    break

  }
}

} else {
  // new data
  DatosTabla.push(ObjRsporte)
  
}
localStorage.setItem("tablanexo", JSON.stringify(DatosTabla))
  window.location.replace("rendimientos.html")


 }

 function cargarPagina (){
   if (idform > 0) {
    //sacar datos de la tabla

    for (const i in DatosTabla) {
      var varTabla = JSON.parse(DatosTabla[i])
      if (varTabla.codpalnilla == idform) {
          document.getElementById("txtcodigo").value = varTabla.codpalnilla
          document.getElementById("txtnyp").value = varTabla.nombApellido
          document.getElementById("txtmail").value = varTabla.email
          document.getElementById("txtfono").value = varTabla.fono
          document.getElementById("txtdireccion").value = varTabla.direccion
          break

    }
  }
 }
}