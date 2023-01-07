//window.onload = loadTasks;
var taskList;
var btnSave = document.getElementById('guardar');


function init(){
  if (window.localStorage != "") {
    //taskList = JSON.parse(window.localStorage.getItem('taskList'));
    listar()
  } else {
    taskList = [];
  }
  btnSave.addEventListener('click', saveTask);
  //showList();

  console.log("si funciono")

}

//Agregar
function saveTask(event){
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

  for(i = 0; i<= estudiante.length; i++){
    if(estudiante.i == ""){
      alert("Por favor ingresa toda la información")
      return false;
    }
  }

  //Intentas hacer un for para ver si ya esta registrado
 /* if(document.querySelector(`input.cedulaEstudiante[value="${estudiante.value}"]`)){
  alert("El estudiante ya se encuentra registrado");
  return false;
  //Para guardar
  }*/
  let datos = JSON.parse(localStorage.getItem('estudianteregistrado')) ? JSON.parse(localStorage.getItem('estudianteregistrado')) : []
  console.log(estudiante)
  datos.push(estudiante)
  console.log(datos)

 localStorage.setItem('estudianteregistrado', JSON.stringify(datos))
 console.log(estudiante)

listar(estudiante);
  
}

//Listar y mostrar tabla
function listar(estudiante){
 let table = document.getElementById("target");
let arr = JSON.parse(localStorage.getItem("estudianteregistrado")) ? JSON.parse(localStorage.getItem("estudianteregistrado")) : []
console.log(arr)

arr.forEach(element => {
  table.innerHTML += "<td>" + element.NOMBRE + "</td> " 
  +"<td>" + element.APELLIDOS + "</td>"
  + "<td id='txtcedula'>" + element.CEDULA + "</td>" +
  "<td>" + element.TELEFONO + "</td>" 
  + "<td>" + element.FECHA + "</td>" 
  + "<td>" + element.EMAIL + "</td>" 
  + "<td>" + element.NOTA + "</td>" 
  + "<td>" + element.NIVEL + "</td>"
  +"<td><button onclick='#poner funcion de editar' class='btn btn-warning'>Editar</button></td>"
  +"<td><button onclick='eliminar()' class='btn btn-danger'>Eliminar </button></td>"
});
 
}

//Eliminar

function eliminar(){
  let tasks = Array.from(JSON.parse(localStorage.getItem("estudianteregistrado")));
    tasks.forEach(task => {
    if (task.task === event.parentNode.children[1].value) {
        // delete task
        tasks.splice(tasks.indexOf(task), 1);
    }
    });
    localStorage.setItem("estudianteregistrado", JSON.stringify(tasks));
   


}

init();