//Arreglo de cursos
cursos = [
    {
        id: 1,
        contenidos: "Taller reparación de radiadores",
        precioMensual: 3000,
        fecha_inicio: "23/02/2023",
        categoría: "taller"
    },
    {
        id: 2,
        contenidos: "Taller de scaneo Ford",
        precioMensual: 2000,
        fecha_inicio: "23/02/2023",
        categoría: "taller"
    },        {
        id: 3,
        contenidos: "Carrera mecánica de autos",
        precioMensual: 5000,
        fecha_inicio: "23/02/2023",
        categoría: "carrera"
    },
    {
        id: 4,
        contenidos:"Carrera mecánica de motos",
        precioMensual: 2000,
        fecha_inicio: "23/02/2023",
        categoría: "carrera"
    },
    {
        id: 5,
        contenidos:"Maestría en ingeniería mecánica",
        precioMensual: 7500,
        fecha_inicio: "23/02/2023",
        categoría: "carrera"
    },        
    {
        id: 6,
        contenidos: "Curso de mecánica automotriz",
        precioMensual: 3000,
        fecha_inicio: "23/02/2023",
        categoría: "curso"
    },
    {
        id: 7,
        contenidos: "Curso de inyección electrónica",
        precioMensual: 2000,
        fecha_inicio: "23/02/2023",
        categoría: "curso"
    },        
    {
        id: 8,
        contenidos: "Curso de perito mecánico",
        precioMensual: 2000,
        fecha_inicio: "23/02/2023",
        categoría: "curso"
    }
]

//Carga dinámica de la información a mostrar en el HTML, maquetada en bootstrap
const listaOpciones = document.getElementById ("listaOpciones");


//Iterando las opciones
for (let i = 0; i< cursos.length; i++){
    const divOpciones = document.createElement ("div")
    divOpciones.innerHTML = `
                                
                                    <div class="card text-center">
                                    <form class="card-body">
                                        <h5 class="card-title">${cursos[i].contenidos} - comisión ${cursos[i].id} </h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a quia sunt nobis quas sequi architecto vitae saepe, omnis dignissimos quasi rerum maxime praesentium, quae neque eveniet provident distinctio esse!</p>
                                        <button href="" class="btn btn-dark btn-inscripcion" type="submit">Quiero inscribirme</button>
                                    </form>
                                    <div class="card-footer">
                                        Inicia: ${cursos[i].fecha_inicio} - Precio Mensual: ${cursos[i].precioMensual}
                                    </div>
                                    <p class="placeholder-wave"><span class="placeholder col-12"></span></p>
                                </div>
                            `;

                            listaOpciones.append(divOpciones);
}


