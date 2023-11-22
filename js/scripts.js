
const datos = {

    Nombre : '',
    Email : '',
    mensaje :''

}

const formulario = document.querySelector('.form');
const Nombre = document.querySelector(' .form #Nombre');
const Email = document.querySelector('.form #Email');
const mensaje = document.querySelector('.form #mensaje');

formulario.addEventListener('submit' , function(e){

    e.preventDefault();

    const {Nombre,Email,mensaje} = datos;

    //console.log(datos);

    if(Nombre== '' || Email == ''||mensaje== ''){
       // console.log('Faltan datos');
       mostrarAlerta('Todos los campos son obligatorios','error');
    }
    else{
        mostrarAlerta('Datos enviados correctamente')
    }

})



Nombre.addEventListener('input',obtenerDatos);
Email.addEventListener('input',obtenerDatos);
mensaje.addEventListener('input',obtenerDatos);


function obtenerDatos(e){
    datos[e.target.id] = e.target.value;

    //console.log(datos);
}


function mostrarAlerta(mensaje, error=null){
    const alerta= document.createElement('P');
    alerta.textContent= mensaje;

    if(error==null){
        alerta.classList.add('exito');
    }
    else{
        alerta.classList.add('error');
    }

    formulario.appendChild(alerta);
    //console.log(alerta);

    setTimeout(()=>{

        alerta.remove();

    }, 3000);

}

/*

function mostrarError(mensaje){
    const alerta= document.createElement('P');
    alerta.textContent= mensaje;
    alerta.classList.add('error');

    formulario.appendChild(alerta);
    //console.log(alerta);

    setTimeout(()=>{

        alerta.remove();

    }, 3000);

}

function mostrarMensaje(mensaje){
    const alerta= document.createElement('P');
    alerta.textContent=mensaje;
    alerta.classList.add('exito');

    formulario.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove();
    },3000);

}

*/
