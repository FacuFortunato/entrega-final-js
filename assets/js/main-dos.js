//Agregar datos al div del alumno
const alumnoLs = JSON.parse(localStorage.getItem("alumno"));
const alumno = new Alumno (alumnoLs.nombre,alumnoLs.apellido,alumnoLs.contrasena,alumnoLs.inscripciones);

let mostrarDatos = document.getElementById ("info-alumno");
let contenido = document.createElement ("h3");
contenido.innerHTML = `<h3> Alumno: ${alumno.nombre} ${alumno.apellido}</h3>`;

mostrarDatos.appendChild(contenido);

//Setear inscripciones
let setearInscripcion = document.getElementsById("btn-inscripcion");
let setearInscripcion2 = document.getElementById("btn-inscripcion-2");
let setearInscripcion3 = document.getElementById("btn-inscripcion-3");
let setearInscripcion4 = document.getElementById("btn-inscripcion-4");





function inscribir (inscripciones){

    const nuevaInscripcion = inscripciones.value;
    alumno.setInscripcion(nuevaInscripcion);

    localStorage.setItem("alumno",JSON.stringify(alumno));

    //Mensaje de confirmación de la inscripción
    Toastify ({
        text: "Inscripción exitosa !",
        duration: 2000
    }).showToast ();

};

setearInscripcion.addEventListener("click", inscribir());
setearInscripcion2.addEventListener("click", inscribir());
setearInscripcion3.addEventListener("click", inscribir());
setearInscripcion4.addEventListener("click", inscribir());


//Agregando la información a la sección alumno
let listaInscripciones = document.getElementById ("lista-inscripciones");
let inscripcion = document.createElement ("div");

const arrayInscripciones =  [  {
    "id": 1,
    "contenidos": 'Taller reparación de radiadores',
    "precio mensual": 3000,
    "fecha inicio": "23/02/2023",
},
{
    "id": 2,
    "contenidos": 'Carrera mecánica',
    "precio mensual": 5000,
    "fecha inicio": "23/02/2023",
},
{
    "id": 3,
    "contenidos": 'Curso de mecánica automotriz',
    "precio mensual": 3000,
    "fecha inicio": "23/02/2023",
},
{
    "id": 4,
    "contenidos": 'Curso de inyección electrónica',
    "precio mensual": 2000,
    "fecha inicio": "23/02/2023",
}].map(({contenidos})=> `<div>
                            <li>${contenidos}</li>
                            <button href="" class="btn btn-dark btn-inscripcion" type="submit" id="btn-desinscripcion"> Desinscribirme </button>
                        </div>`)

const inscripciones =  arrayInscripciones.reduce((elemento, acumulador)=>{return acumulador + elemento});

inscripcion.innerHTML = inscripciones
//También se agregó un botón para registrar una desinscripción
listaInscripciones.append(inscripcion);


//Desincripcion
let desinscripcion = document.getElementById ("btn-desinscripcion");
desinscripcion.addEventListener ("click", ()=>{

    Swal.fire({

        //Alert para desinscribir
        title:"Estás seguro de desinscribirte ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, seguro",
        cancelButtonText:"Cancelar"
    }).then((result)=>{

        if (result.isConfirmed){

            //Eliminar la inscripción
            const desinscribir = ()=> {

                inscripciones.innerHTML = "";
            }

            desinscribir ();

            //Alert confirmando
            Swal.fire ({

                title: "Hecho",
                icon: "success",
                text: "Te desinscribiste de este curso con éxito"
            })
        }
    })
});



