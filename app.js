const datos = [{
    nombre: 'carlos',
    correo: 'carlos@localhost.cl',
    telefono: 123
}, {
    nombre: 'Camila',
    correo: 'camila@localhost.cl',
    telefono: null
}];

let cant = 1;
function cargarDatosTabla(){
    let tabla = document.getElementById('usuarios');
    let cuerpoTabla = document.createElement('tbody');
    
    datos.forEach(item => {
        let fila = document.createElement('tr');
        
        let td = document.createElement('td');
        td.innerText = cant++;
        fila.appendChild(td);

        td = document.createElement('td');
        td.innerText = item.nombre;
        fila.appendChild(td);
        
        td = document.createElement('td');
        td.innerText = item.correo;
        fila.appendChild(td);
    
        td = document.createElement('td');
        td.innerText = item.telefono;
        fila.appendChild(td);
    
        cuerpoTabla.appendChild(fila);
    });
    tabla.appendChild(cuerpoTabla);
}

window.onload = cargarDatosTabla();

let botonAdd = document.getElementById('enviar');

botonAdd.addEventListener('click',recuperarDatos);

function recuperarDatos(){
    document.querySelector('submit', e => {
        e.preventDefault();
        let data = JSON.stringify(Object.fromEntries(new FormData(e.target)));
        console.log(data);
    })
    // formularioData.addEventListener('submit', e => {
    //     e.preventDefault();
    //     const data = JSON.stringify(Object.fromEntries(new FormData(e.target)));
    //     datos.push(data);
    // });
};

// document.querySelector('form').addEventListener('submit', e => {
//     e.preventDefault();
//     const data = JSON.stringify(Object.fromEntries(new FormData(e.target)));
//     //alert(data);
//     datos.push(data)
// });

// function recuperarDatos(){
//     document.querySelector('form').addEventListener('submit', e => {
//         e.preventDefault();
//         let data = JSON.stringify(Object.fromEntries(new FormData(e.target)));
//         alert(data)
//         return data;
//     });
// }
// function addObj(obj){
//     console.log(obj);
// }

// let obj = recuperarDatos();
// console.log(obj)