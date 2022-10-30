//Solución 1
function sumar(){
  document.getElementById("resultado").innerHTML = 
    datosIngresados()[0] + datosIngresados()[1];
}
function restar(){
  document.getElementById("resultado").innerHTML = 
    datosIngresados()[0] - datosIngresados()[1];
}
function multiplicar(){
  document.getElementById("resultado").innerHTML = 
    datosIngresados()[0] * datosIngresados()[1];
}
function dividir(){
  document.getElementById("resultado").innerHTML = 
     (datosIngresados()[1]==0? 'err = div.by 0': 
     datosIngresados()[0] / datosIngresados()[1]);
}
//retorna un array con los valores de los input
function datosIngresados(){
  return [Number(document.getElementById("n1").value),
    Number(document.getElementById("n2").value)];
}
//Solución 2
var nombre, eCivil, conHijos, nHijos, nombreEsposa, fechaDef, fechaDiv;
function validarNombre(textbox) {
  if (textbox.value == '') {
      textbox.setCustomValidity('es un dato requerido');
  }
  else if (textbox.validity.typeMismatch){
      textbox.setCustomValidity('es un dato requerido');
  }
  else {
     textbox.setCustomValidity('');
  }
  nombre = textbox.value;
  return true;
}

function estadoCivil(sel) {
  eCivil = sel.value;
  //Array con label ocultos de estado civil
  let elements = document.getElementsByClassName('addDatos');
  Array.from(elements).forEach((element) => {
    element.setAttribute("hidden", "hidden");
  });
  //cuando cambia el 'estado civil' onchange del select muestra un label asociado
  switch(eCivil) {
    case 'casado':
      elements[0].removeAttribute("hidden");
      break;
    case 'viudo':
      elements[1].removeAttribute("hidden");
      break;
    case 'divorciado':
      elements[2].removeAttribute("hidden");
      break;
  }
}
function tieneHijos(sel){
  conHijos = sel.value == 'si';
  conHijos? document.getElementById('cantHijos').removeAttribute("hidden"):
    document.getElementById('cantHijos').setAttribute("hidden", "hidden");
}
function aceptar(){
  if(nombre === undefined || nombre.length < 3){
    alert('Ingresar Nombre y Apellido'); 
    return;
  }
  fechaDef = document.getElementById('fechaDef').value;
  fechaDiv = document.getElementById('fechaDiv').value;
  nHijos = document.getElementById('nHijos').value;  
  nombreEsposa = document.getElementById('nombreEsposa').value;
  document.write("Solución 2 -> Solicitud de datos personales<br><br>");
  document.write("Datos ingresados :<br><br>");
  document.write('Nombre y Apellido: '+ nombre + "<br/>");
  eCivil === undefined?
    document.write('Estado Civil: No seleccionado <br/>'):
    document.write('Estado Civil: '+ eCivil + "<br/>");

  nHijos === undefined || nHijos ==''? conHijos=false: nHijos;
  conHijos?
    document.write('Hijos: '+ nHijos +'<br/>'):
    document.write('Hijos: no <br/>');
  switch(eCivil){
    case 'casado':
      nombreEsposa.length < 3? 
        nombreEsposa = 'Dato no ingresado': nombreEsposa;
      document.write('Nombre del Cónyuge: '+ nombreEsposa +'<br/>');
      break;
    case 'viudo':
      fechaDef==''? fechaDef='No informado':
        fechaDef = fechaDef.split(" ")[0].split("-").reverse().join("-");
      document.write('Fecha de defunción del cónyuge: '+ fechaDef +'<br/>');
      break;
    case 'divorciado':
      fechaDiv==''? fechaDiv='No informado':
        fechaDiv = fechaDiv.split(" ")[0].split("-").reverse().join("-");
      document.write('Fecha de divorcio: '+ fechaDiv +'<br/>');
      break;
  }
}

function cancelar(){
  confirm("¿Está seguro que desea cancelar?")?
    window.location.reload(): '';
}

//Solución 3
class Alumno {
  constructor(nombre, apellido, dni, curso, division) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.curso = curso;
    this.division = division;
  }
}
const cursos = ['PRIMER GRADO','SEGUNDO GRADO','TERCER GRADO',
    'CUARTO GRADO','QUINTO GRADO','SEXTO GRADO'];
const divisiones = ['A','B','C'];
var alumnos = [];
/*
function nuevoAlumno(){
  let alumno = new Alumno('Hector','Perez','38989989',curso[1],division[1]);
  alumnos.push(alumno);
  console.log('alumno: ', alumnos);
}
*/
//Codigo a Ejecutar al Cargar la Pagina
function myOnLoad() {
  cargar_cursos();
  cargar_divisiones();
 }
  // funcion para Cargar Cursos al campo <select>
function cargar_cursos() {
  addOptions("curso", cursos);
}
 // Rutina para agregar opciones a un <select>
function addOptions(domElement, cursos) {
  let select = document.getElementsByName(domElement)[0];
  for (value in cursos) {
    let option = document.createElement("option");
    option.text = cursos[value];
    select.add(option);
  }
 }
// funcion para Cargar Divisiones al campo <select>
function cargar_divisiones() {
  addOptionsDiv("division", divisiones);
}
// Rutina para agregar opciones a un <select>
function addOptionsDiv(domElement, divisiones) {
  let selectDiv = document.getElementsByName(domElement)[0];
  for (value in divisiones) {
    let option = document.createElement("option");
    option.text = divisiones[value];
    selectDiv.add(option);
  }
}
//Crea una tabla vacía con titulos
function crearTabla(){
  let body = document.getElementsByTagName('body')[0];
  let tabla = document.createElement('table');
  let tbody = document.createElement('tbody');
  /*
  let iFil, iCol, fil, col;

  for(iFil = 0; iFil < cantFilas; iFil++){
      fil = document.createElement('tr');
      for(iCol = 0; iCol < 5; iCol++){
          col = document.createElement('td');
          fil.appendChild(col);
      }
      tbody.appendChild(fil);
  }
  */
  tabla.appendChild(tbody);
  body.appendChild(tabla);
  tabla.setAttribute('border','10');
  tabla.setAttribute('id',3);
  tabla.insertRow(0).innerHTML='<th>DNI</th><th>NOMBRE</th><th>APELLIDO'
          +'</th><th>CURSO</th><th>DIVISIÓN</th>';
}
//agrega una persona a la tabla
function agregarAlumno(){
  let tabla3 = document.getElementById('3');
  let dni = document.getElementById('dni').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let curso = document.getElementsByName('curso')[0].value;
  let division = document.getElementsByName('division')[0].value;
  let alumno;
  let existeAlumno = false;
  //La tabla para agregar datos debe estar creada
  if(tabla3 === null){
      alert('La Tabla para agregar datos NO existe.');
      return;
  }
  //valida que la entrada de datos tenga contenido
  if(dni.length <8 || nombre.length < 3 || apellido.length < 3 || apellido.length < 3){
      alert('Error al ingresar datos');
      return;
  }
  existeAlumno = alumnos.find(alumno => alumno.dni === dni);
  //no permite el ingreso de dos DNI iguales
  if(existeAlumno){
      alert('El alumno con DNI: '+dni+' Ya Existe.');
      return;
  }
 //Chequea que se ha seleccionado curso y división
  if(document.getElementsByName('curso')[0].selectedIndex == 0
    || document.getElementsByName('division')[0].selectedIndex == 0){
      alert('Debe seleccionar curso/division.');
      return;
    }
 //crea una nueva instancia del tipo Alumno(...)  
  alumno = new Alumno(nombre, apellido, dni, curso, division);
  //agrega el objeto alumno instanciado al array alumnos
  alumnos.push(alumno);
  //inserta una nueva fila en la tabla3 personas
  tabla3.insertRow(-1).innerHTML = 
      '<td>'+alumno.dni+'</td><td>'+alumno.nombre+'</td><td>'
        +alumno.apellido+'</td><td>'+alumno.curso+'</td><td>'
        +alumno.division+'</td>';
  limpiarDatosEnInput();        
}
//vacía de contenido los Inputs
function limpiarDatosEnInput(){
  document.getElementById('dni').value='';
  document.getElementById('nombre').value='';
  document.getElementById('apellido').value='';
  document.getElementsByName('curso')[0].selectedIndex=0;
  document.getElementsByName('division')[0].selectedIndex=0;
}
//valida que al menos del DNI contenga 8 dígitos
function validarDni(){
  let dni = document.getElementById('dniBuscar').value;
  if(dni.length < 8){
      alert('Error al ingresar DNI');
      document.getElementById('dniBuscar').value='';
      return;
  }
  buscarAlumno(dni);
}
//busca un objeto del tipo Persona(...) en el array personas
function buscarAlumno(unDni){
  let alumnoX = alumnos.find(alumno => alumno.dni === unDni);
  document.getElementById('dniBuscar').value='';
  if(alumnos.find(alumno => alumno.dni === unDni)){
      alert('ALUMNO -> '+alumnoX.nombre+' | '+alumnoX.apellido
        +' | '+ alumnoX.dni +' | '+ alumnoX.curso +' | '+ alumnoX.division);
      return;
  }
  alert('El alumno con DNI: '+unDni+' NO fué encontrado.')
}
