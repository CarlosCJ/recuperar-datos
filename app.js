// const botonn = document.getElementById('btn-enviar');

// function llamar(){
//     console.log('click');
// };

// botonn.addEventListener("click", llamar, false);

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    alert(JSON.stringify(data));
});