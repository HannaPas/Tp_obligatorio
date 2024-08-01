document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault(); //prevenir que se envíe automaticamente
    validarFormulario();
})

//hace la solicitud con AJAX para mostrar el mensaje.txt
const getMensaje = () => {
    const http = new XMLHttpRequest();

    http.onreadystatechange = () => {
        console.log('onreadystatechange:', http.readyState, http.status);
        if (http.readyState === 4 && http.status === 200) {
            document.getElementById('mensaje').innerHTML = http.responseText;
        }
    };

    http.open('GET', 'https://tp-obligatorio-6mjz.vercel.app/mensaje.txt', true);
    http.send();
};

function validarFormulario(){

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let tipoDeContacto = document.getElementById('tipoDeContacto').value;
    let asunto = document.getElementById('asunto').value;
    
    let valid = true;

    if(nombre ===''|| apellido ===''|| email ===''|| tipoDeContacto ===''|| asunto ===''){
        document.getElementById('errorCampoObligatorio').innerText = "Todos los campos son obligarios";
        valid = false;
    }

    if(valid){
        //alert('');
        getMensaje();
        }else{
        alert('error al enviar el formulario');
       }
}
