

const boton = document.getElementById(`boton`)
const datosNuevos = []

boton.addEventListener(`click`, () => {
    const nombre = document.getElementById(`nombre`).value
    const apellido = document.getElementById(`apellido`).value
    const dni = document.getElementById(`dni`).value



    const datosPersonas = {
        nombre: nombre,
        apellido: apellido,
        dni: dni

    }
    
    datosNuevos.push(datosPersonas)

    localStorage.setItem(`datos`, JSON.stringify(datosNuevos))
   formatear.reset()
})



result.addEventListener(`click`, () => {

    const listaNueva = JSON.parse(localStorage.getItem(`datos`))

    for (const i of listaNueva) {
        const lista = document.getElementById(`lista`)
        const listaPersonas = document.createElement(`li`)
        listaPersonas.innerText = `NOMBRE: ${i.nombre} ----- APELLIDO: ${i.apellido} ----DNI: ${i.dni}`

        lista.appendChild(listaPersonas)
    }

})