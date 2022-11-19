//Agregar datos al div del alumno
const alumnoLs = JSON.parse(localStorage.getItem("alumno"));
const alumno = new Alumno (alumnoLs.nombre,alumnoLs.apellido,alumnoLs.contrasena,alumnoLs.inscripciones);

let mostrarDatos = document.getElementById ("info-alumno");
let contenido = document.createElement ("h3");
contenido.innerHTML = `<h3> Alumno: ${alumno.nombre} ${alumno.apellido}</h3>`;

mostrarDatos.appendChild(contenido);

//Setear inscripciones
let setearInscripcion = document.getElementById("btn-inscripcion");
let setearInscripcion2 = document.getElementById("btn-inscripcion-2");
let setearInscripcion3 = document.getElementById("btn-inscripcion-3");
let setearInscripcion4 = document.getElementById("btn-inscripcion-4");
let setearInscripcion5 = document.getElementById("btn-inscripcion-5");
let setearInscripcion6 = document.getElementById("btn-inscripcion-6");
let setearInscripcion7 = document.getElementById("btn-inscripcion-7");
let setearInscripcion8 = document.getElementById("btn-inscripcion-8");





function inscribir (idCurso){

    const nuevaInscripcion = inscripciones.value;
    alumno.setInscripcion(idCurso);

    localStorage.setItem("alumno",JSON.stringify(alumno));

    //Mensaje de confirmación de la inscripción
    Toastify ({
        text: "Inscripción exitosa !",
        duration: 2000
    }).showToast ();

};


setearInscripcion.addEventListener("click", ()=> inscribir (1) );
setearInscripcion2.addEventListener("click", ()=> inscribir (2));
setearInscripcion3.addEventListener("click", ()=> inscribir (3));
setearInscripcion4.addEventListener("click", ()=> inscribir (4));
setearInscripcion5.addEventListener("click", ()=> inscribir (5));
setearInscripcion6.addEventListener("click", ()=> inscribir (6));
setearInscripcion7.addEventListener("click", ()=> inscribir (7));
setearInscripcion8.addEventListener("click", ()=> inscribir (8));


//Agregando la información a la sección alumno
let listaInscripciones = document.getElementById ("lista-inscripciones");
let inscripcion = document.createElement ("div");


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



