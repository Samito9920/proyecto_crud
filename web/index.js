let table = document.getElementById("target");
const btnSave = document.getElementById('guardar');
const btnSaveNuevo = document.getElementById('guardarNuevo');
var datos = []


function init(){
  if (window.localStorage != "") {
    listar()
  } else {
    taskList = [];
  }
  btnSave.disabled= false;
  btnSaveNuevo.disabled = true;
  btnSave.addEventListener('click', saveTask);
  btnSaveNuevo.addEventListener('click', nuevo);
  //showList();

  console.log("si funciono")
}


//Agregar
function saveTask(){
  const estudiante =
  ({
    "NOMBRE": document.getElementById("nombreEstudiante").value,
    "CEDULA": document.getElementById("cedulaEstudiante").value, 
    "TELEFONO": document.getElementById("tlfEstudiante").value,
    "APELLIDOS": document.getElementById("apellidosEstudiante").value,
    "FECHA": document.getElementById("fcNaEstudiante").value,
    "EMAIL": document.getElementById("emailEstudiante").value,
    "NIVEL": document.getElementById("nivelEstudiante").value,
    "NOTA": document.getElementById("notaEstudiante").value,
  });

  
  datos = JSON.parse(localStorage.getItem('estudianteregistrado')) ? JSON.parse(localStorage.getItem('estudianteregistrado')) : []
  console.log(estudiante)
  datos.push(estudiante)
  console.log(datos)

 localStorage.setItem('estudianteregistrado', JSON.stringify(datos))
 console.log(estudiante)
  listar();
  limpiar();
}

//Listar y mostrar tabla
function listar(){
  table.innerHTML ="";
  datos = JSON.parse(localStorage.getItem("estudianteregistrado"));
  if(datos === null){
    datos =[];
  }else{
    table.innerHTML+= ` <theat><tr> <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Cedula</th>
                            <th class="hidden-phone">Teléfono</th>
                            <th>Fecha D. Nacimiento</th>
                            <th>Email</th>
                            <th>Nota último año</th>
                            <th>Nivel</th>
                            <th></th>
                            <th></th></tr></theat>`

    datos.forEach((element, index) => {
      table.innerHTML += 
    `<td> ${element.NOMBRE} </td> 
     <td >${element.APELLIDOS}</td>
     <td id='txtcedula'>${element.CEDULA}</td>
     <td>${element.TELEFONO}</td> 
     <td>${element.FECHA}</td>
    <td>${element.EMAIL}</td>
    <td>${element.NOTA}</td>
    <td>${element.NIVEL}</td>
      <td><button onclick='editar(${index})' class='btn btn-warning'>Editar</button></td>
     <td><button onclick="eliminar(${index})" class='btn btn-danger'>Eliminar </button></td>`
    });
  }
}

//Eliminar

function eliminar(posicion){
  let indexArray;
  for(i =0 ; i<= datos.length; i++){
    if(i == posicion){
      indexArray = posicion;
      break;
    }
  }
  datos.splice(indexArray, 1);
  localStorage.setItem('estudianteregistrado', JSON.stringify(datos));
  console.log(datos)
  listar();

}

function editar(posicion){
  btnSaveNuevo.disabled = false;
  btnSave.disabled = true;
  for(i =0 ; i<= datos.length; i++){
    if(i == posicion){
      estudianteNUEVO =
      ({
        "NOMBRE": document.getElementById("nombreEstudiante").value =datos[i].NOMBRE,
        "CEDULA": document.getElementById("cedulaEstudiante").value =datos[i].CEDULA, 
        "TELEFONO": document.getElementById("tlfEstudiante").value =datos[i].TELEFONO,
        "APELLIDOS": document.getElementById("apellidosEstudiante").value = datos[i].APELLIDOS,
        "FECHA": document.getElementById("fcNaEstudiante").value =datos[i].FECHA,
        "EMAIL": document.getElementById("emailEstudiante").value =datos[i].EMAIL,
        "NIVEL": document.getElementById("nivelEstudiante").value =datos[i].NIVEL,
        "NOTA": document.getElementById("notaEstudiante").value =datos[i].NOTA
      })
      break;
    };
  }
}

function nuevo(){
  datos = JSON.parse(localStorage.getItem("estudianteregistrado"));
  const estudianteNuevo =
  ({
    "NOMBRE": document.getElementById("nombreEstudiante").value,
    "CEDULA": document.getElementById("cedulaEstudiante").value, 
    "TELEFONO": document.getElementById("tlfEstudiante").value,
    "APELLIDOS": document.getElementById("apellidosEstudiante").value,
    "FECHA": document.getElementById("fcNaEstudiante").value,
    "EMAIL": document.getElementById("emailEstudiante").value,
    "NIVEL": document.getElementById("nivelEstudiante").value,
    "NOTA": document.getElementById("notaEstudiante").value,
  }); 
  //console.log(estudianteNuevo)
  datos[i] = estudianteNuevo;
  console.log(datos[i]);
  localStorage.setItem('estudianteregistrado', JSON.stringify(datos));
  limpiar();
  listar();
  btnSaveNuevo.disabled = true;
  btnSave.disabled = false;

 
}

function limpiar(){
 //Borrar inputs
 document.getElementById("nombreEstudiante").value = '',
 document.getElementById("cedulaEstudiante").value = '', 
 document.getElementById("tlfEstudiante").value = '',
 document.getElementById("apellidosEstudiante").value = '',
 document.getElementById("fcNaEstudiante").value = '',
 document.getElementById("emailEstudiante").value = '',
 document.getElementById("nivelEstudiante").value = "0",
 document.getElementById("notaEstudiante").value = '';
}

init();