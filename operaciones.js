let saldoDisponible = 200

const formulario = document.getElementById('montoDepositar')
const botonIngresar = document.getElementById('btn-depositar')

const dbUser = 'Mali'
const dbPassword = '12345'

document.getElementById('name').innerHTML = `
     ${dbUser}
    `

document.querySelector('#consultarSaldo').addEventListener('click', ()=>{
    document.querySelector(".retira-dinero").classList.remove("show")
    document.querySelector(".ingresar-dinero").classList.remove("show")
    document.querySelector(".saldo-disponible").classList.toggle("show")
})

document.querySelector('#retirarDinero').addEventListener('click', ()=>{
    document.querySelector(".saldo-disponible").classList.remove("show")
    document.querySelector(".ingresar-dinero").classList.remove("show")
    document.querySelector(".retira-dinero").classList.toggle("show")

})
document.querySelector('#depostaDinero').addEventListener('click', ()=>{
    document.querySelector(".saldo-disponible").classList.remove("show")
    document.querySelector(".retira-dinero").classList.remove("show")
    document.querySelector(".ingresar-dinero").classList.toggle("show")

})




document.querySelector('#btn-depositar').addEventListener('click', ()=>{
    let deposito = Number(document.getElementById('montoDepositar').value)
   
    console.log(saldoDisponible = saldoDisponible + deposito)
  

    document.getElementById('render-deposito').innerHTML = `
    Tu nuevo saldo es S/ ${saldoDisponible}.00
    `
    document.getElementById('monto-saldo').innerHTML = `
    S/   ${saldoDisponible}.00
    `
})
document.querySelector('#btn-retirar').addEventListener('click', ()=>{
    let depositoRetiro = Number(document.getElementById('montoRetirar').value)
    if (saldoDisponible === 0){
        alert("No cuentas con saldo");
    }else{
        var xxx = saldoDisponible - depositoRetiro
        console.log( saldoDisponible - depositoRetiro)
        saldoDisponible = xxx
    
        document.getElementById('render').innerHTML = `
        Tu nuevo saldo es S/ ${xxx}.00
        `
        console.log(saldoDisponible)
        document.getElementById('monto-saldo').innerHTML = `
        S/   ${saldoDisponible}.00
        `
    }
    
})
document.getElementById('monto-saldo').innerHTML = `
    S/   ${saldoDisponible}.00
    `

document.querySelector('#regresar').addEventListener('click', ()=>{
        window.location.href = './index.html'
})