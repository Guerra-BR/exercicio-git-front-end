const form = document.getElementById('form');
const num1 = document.getElementById('num-1');
const num2 = document.getElementById('num-2');


function buttonValid(numero){
    let valor2 = numero;
    let valor1 = num1.value;
    return valor2 > valor1;
}


form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();
    
    const mensagemSucesso = `O ${num2.value} é maior que ${num1.value}`
    formEValido = buttonValid(num2.value);

    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
        valor1 = '';
        valor2 = '';
    }else{
        document.querySelector('.error-message').style.display = 'block'
        num2.classList.add('error');
    }
})

num2.addEventListener('keyup', function(e){
    formEValido = buttonValid(e.target.value);
    document.querySelector('.sucess-message').style.display = 'none'

    if(!formEValido){
        document.querySelector('.error-message').style.display = 'block'
        document.getElementById('enviar').disabled = true
        num2.classList.add('error');
    } else{
        document.querySelector('.error-message').style.display = 'none'
        document.getElementById('enviar').disabled = false
        num2.classList.remove('error');
    }
})