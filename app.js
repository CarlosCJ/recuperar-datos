let registros = [{
    nombre: 'Carlos Valenzuela',
    correo: 'carlos@localhost.cl',
    telefono: 123,
    genero: 'hombre'
}, {
    nombre: 'Camila Barros',
    correo: 'camila@localhost.cl',
    telefono: null,
    genero: 'mujer'
}];

let cant = 1;
function cargarDatosTabla(){
    let tabla = document.getElementById('usuarios');
    let cuerpoTabla = document.createElement('tbody');
    
    registros.forEach(item => {
        let fila = document.createElement('tr');
        
        let th = document.createElement('th');
        th.innerText = cant++;
        th.setAttribute('scope', 'row');
        fila.appendChild(th);

        td = document.createElement('td');
        td.innerText = item.nombre;
        fila.appendChild(td);
        
        td = document.createElement('td');
        td.innerText = item.correo;
        fila.appendChild(td);
    
        td = document.createElement('td');
        td.innerText = item.telefono ? item.telefono : 'Sin datos';
        fila.appendChild(td);
    
        td = document.createElement('td');
        td.innerText = item.genero;
        fila.appendChild(td);
    
        // td = document.createElement('td');
        // td.innerText = item.genero;
        // let botonEdit = document.createElement('button');
        // botonEdit.type = 'button';
        // botonEdit.setAttribute('class', 'btn btn-warning');
        // botonEdit.innerText = 'Editar';
        // fila.appendChild(td);

        cuerpoTabla.appendChild(fila);
    });
    tabla.appendChild(cuerpoTabla);
}
cargarDatosTabla();
// let contenedorTabla = document.getElementById('contenedor-tabla');
// let tabla = document.createElement('table');
// tabla.setAttribute('class', 'table table-hover');
// tabla.setAttribute('id', 'usuarios');
// let cabeceraTabla = document.createElement('thead');
// let fila = document.createElement('tr');

// let th = document.createElement('th');
// th.setAttribute('scope', 'col');
// th.innerText = '#';
// fila.appendChild(th);

// th = document.createElement('th');
// th.setAttribute('scope', 'col');
// th.innerText = 'Nombre';
// fila.appendChild(th);

// th = document.createElement('th');
// th.setAttribute('scope', 'col');
// th.innerText = 'Correo';
// fila.appendChild(th);

// th = document.createElement('th');
// th.setAttribute('scope', 'col');
// th.innerText = 'Telefono';
// fila.appendChild(th);

// th = document.createElement('th');
// th.setAttribute('scope', 'col');
// th.innerText = 'Genero';
// fila.appendChild(th);

// th = document.createElement('th');
// th.setAttribute('scope', 'col');
// th.innerText = 'Acciones';
// fila.appendChild(th);

// cabeceraTabla.appendChild(fila);

// tabla.appendChild(cabeceraTabla);

// contenedorTabla.appendChild(tabla);


let botonAdd = document.getElementById('enviar');
botonAdd.addEventListener('click', function (){
    const formulario = document.forms['usuarioForm'];
    const datos = {
        'nombre': formulario.elements[0].value + ' ' + formulario.elements[1].value,
        'correo': formulario.elements[2].value,
        'telefono': formulario.elements[3].value,
        'genero': formulario.elements[4].value,
    };
    registros.push(datos);
    formulario.reset();
    formulario.elements[0].focus();
    console.log(registros);
});
