var cuentas = [
    {nombre: 'Mali', saldo: 200},
    {nombre: 'Gera', saldo: 290},
    {nombre: 'Maui', saldo: 67}
  ];


const formulario = document.getElementById('formulario')
const botonIngresar = document.getElementById('btn')
const dbUser = 'Mali'
const dbPassword = '12345'


function errores(tipo){
    let error = document.getElementById(`error${tipo}`)
    error.classList.remove('hide')
    error.classList.add('error')
    setTimeout(function(){
        error.classList.remove('error')
        error.classList.add('hide')
    },5000)
}
function validar(u,p){
    if(u === '' || p === ''){
        console.log('Por favor ingresa un dato');
        errores('Datos')
    }
    else{
        if(u === dbUser && p === dbPassword){
            console.log('Bienvenido a tu cuenta');
            window.location.href = './operaciones.html'

        }
        else if(u != dbUser){
            errores('Usuario')
        }
        else if(p != dbPassword){
            errores('Password')
        }
    }
}

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    let usuario = document.getElementById('usuario').value
    let password = document.getElementById('password').value
    validar(usuario, password)
  
})
