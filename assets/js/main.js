//Primera captación de datos

const inputNombre = document.getElementById ("nombre");
const inputApellido = document.getElementById ("apellido");
const inputContrasena = document.getElementById ("contrasena");
const cargaDatos = document.getElementById ("btn-ingreso");

let nombre;
let apellido;
let contrasena;

inputNombre.addEventListener ("input", ()=>{

    nombre = inputNombre.value;

});
inputApellido.addEventListener ("input", ()=>{
    
    apellido = inputApellido.value;

});
//agregué parseint para después tirar falsy con NaN
parseInt(inputContrasena.addEventListener ("input", ()=>{

    contrasena = inputContrasena.value;

}));



//Guardar datos del nuevo alumno en Local Storage
function validarDatos () {

    const alumno = new Alumno (nombre,apellido,contrasena);

    //Setear en LS
    localStorage.setItem("alumno",JSON.stringify(alumno));
};
cargaDatos.addEventListener("click", validarDatos);


//Simulando carga de datos del alumno a base de datos
fetch ('https://jsonplaceholder.typicode.com/posts',{

    method: 'POST',
    body: JSON.stringify ({
        title: 'Nuevo alumno',
        body: alumno.nombre,
        userId: 1
    }),
    headers: {'Content-type': 'application.json; charset=UTF-8'},
});

    .then ((response) => response.json ())
    .then ((data) => console.log (data))










