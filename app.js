// const botonn = document.getElementById('btn-enviar');

// function llamar(){
//     console.log('click');
// };

// botonn.addEventListener("click", llamar, false);
let datos = [];

// document.querySelector('form').addEventListener('submit', e => {
//     e.preventDefault();
//     const data = JSON.stringify(Object.fromEntries(new FormData(e.target)));
//     //alert(data);
//     datos.push(data)
// });

function recuperarDatos(){
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        let data = JSON.stringify(Object.fromEntries(new FormData(e.target)));
        return data;
    });
}
// function addObj(obj){
//     console.log(obj);
// }

let obj = recuperarDatos();
console.log(obj)