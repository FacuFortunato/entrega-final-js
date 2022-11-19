//Clase Cursos
class CURSOS {

    constructor (id,contenidos,precioMensual,fecha_inicio,categoria){

        this.id = id ;
        this.contenidos = contenidos ;
        this.precioMensual = precioMensual ;
        this.fecha_inicio = fecha_inicio ;
        this.categoria = categoria ;

        //Filtrado para la búsqueda de opciones disponibles
        /*
        let filtrarOpciones = inscripciones.filter(elemento => elemento.categoria === "curso");
        this.cargarOpciones (filtrarOpciones)
        */
    }
        

}


//Carga dinámica de la información a mostrar en el HTML, maquetada en bootstrap

/*
let opcion = ''

for (let i = 0; i < opciones.length; i++){

    opcion = opcion + `
                                
                        <div class="card text-center">
                            <form class="card-body">
                                <h5 class="card-title">${opciones.contenidos} - comisión ${opciones.id} </h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a quia sunt nobis quas sequi architecto vitae saepe, omnis dignissimos quasi rerum maxime praesentium, quae neque eveniet provident distinctio esse!</p>
                                <button href="" class="btn btn-dark btn-inscripcion" type="submit">Quiero inscribirme</button>
                            </form>
                            <div class="card-footer">
                                Inicia: ${opciones.fecha_inicio} - Precio Mensual: ${opciones.precioMensual}
                            </div>
                            <p class="placeholder-wave"><span class="placeholder col-12"></span></p>
                        </div>
                    `
}

listaOpciones.innerHTML = opcion ;
*/




fetch ('../assets/js/json/opciones.json')
    .then ( (res) => res.json ())
    .then ( (opciones) => {

        const listaOpciones = document.getElementById ("listaOpciones");

        for (let i = 0; i< opciones.length; i++){
            const divOpciones = document.createElement ("div")
            divOpciones.innerHTML = `
                                        
                                            <div class="card text-center">
                                            <form class="card-body">
                                                <h5 class="card-title">${opciones.contenidos} - comisión ${opciones.id} </h5>
                                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a quia sunt nobis quas sequi architecto vitae saepe, omnis dignissimos quasi rerum maxime praesentium, quae neque eveniet provident distinctio esse!</p>
                                                <button href="" class="btn btn-dark btn-inscripcion" type="submit">Quiero inscribirme</button>
                                            </form>
                                            <div class="card-footer">
                                                Inicia: ${opciones.fecha_inicio} - Precio Mensual: ${opciones.precioMensual}
                                            </div>
                                            <p class="placeholder-wave"><span class="placeholder col-12"></span></p>
                                        </div>
                                    `

        }

        listaOpciones.append(divOpciones)
    }
    )


        


        /*
        opciones.forEach ( (opcion) =>{

            const divOpciones = document.createElement ("div")
            divOpciones.innerHTML = `
            
            <div class="card text-center">
            <form class="card-body">
                <h5 class="card-title">${opciones.contenidos} - comisión ${opciones.id} </h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a quia sunt nobis quas sequi architecto vitae saepe, omnis dignissimos quasi rerum maxime praesentium, quae neque eveniet provident distinctio esse!</p>
                <button href="" class="btn btn-dark btn-inscripcion" type="submit">Quiero inscribirme</button>
            </form>
            <div class="card-footer">
                Inicia: ${opciones.fecha_inicio} - Precio Mensual: ${opciones.precioMensual}
            </div>
            <p class="placeholder-wave"><span class="placeholder col-12"></span></p>
        </div>
    `
            listaOpciones.append(divOpciones)
        })
    });
    */