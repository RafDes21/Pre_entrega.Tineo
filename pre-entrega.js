alert("         ****Ministerio de Salud****\n\n\n---> Prueba de covid <---")
let cupos = prompt("Ingrese la cantidad de pacientes.")
const datos = []
const sintomas = ["fiebre", "tos", "cansancio", "perdiDelOlfato"]
const positivos = []
const negativos = []
const direccion = ["Regimiento Patricios 1941", "Humberto 1º 470", "Almirante Brown 240", "	Montes de Oca 40", "Prefectura Naval Argentina 80"]
const hoteles = ["Hotel 13 de junio", "Hotel 13 de junio", "Recoleta Luxury Boutique Hotel ", "Exe Hotel ColónSe", "Palacio Paz Hotel"]

while (cupos == 0 || cupos == "") {
    alert("Sólo se acepta números mayor que 1")
    cupos = prompt("Ingrese una nueva cantidad de Pacientes")
}

do {

    let nombre = prompt("Ingrese los Nombres y Apellidos");
    while (nombre == "") {
        alert("debe ingresar un nombre")
        nombre = prompt("Ingrese los Nombres y Apellidos");
    }

    datos.push(nombre.toUpperCase());
    let principalesSintomas = prompt("    -----SINTOMAS-----\n fiebre.\n Tos.\n cansancio.\n Perdida de Olfato.\n¿Cuántos de estos síntomas tiene?.")

    function cantidadSintomas(n1) {
        return sintomas.length - n1
    }


    if (cantidadSintomas(principalesSintomas) < 2) {
        positivos.push(nombre.toUpperCase())
        // alert(`Lo siento ${nombre} salió positivo`)
    } else {
        negativos.push(nombre.toUpperCase())
        // alert(`Felicidades ${nombre} salió negativo`)
    }



} while (datos.length != cupos)

alert("Datos guardados...")
// console.log(datos.join("\n"))
// console.log(sintomas.length)
// console.log(positivos)
// console.log(negativos)

const opcionCasos = parseInt(prompt("elija una opción \n1° Resultado y derivaciones.\n2°Reportar un error y empezar de nuevo..."))

switch (opcionCasos) {
    case 1:
    alert("     Resultados y Derivaciones")
        negativos.forEach(element => {
            const numeroRandom = Math.round(Math.random() * 4)

            alert(` Sr. ${element}\n resultado: Negativo.\n Acerque a ${direccion[numeroRandom]}  para vacunarse entre las 08:00 hrs a 13:00 hrs\n`)

        });
        positivos.forEach(element => {
            const numeroRandom = Math.round(Math.random() * 4)
            alert(` Sr. ${element}\n resultado: Positivo.\n Debe dirigirse a ${hoteles[numeroRandom]}  donde estará aislado por 14 días\n`)

        });

        break;
    case 2:

        alert("¡ERROR REPORTADO! \n\n Usted empezará de nuevo a cargar los datos...")
        location.reload()

        break;

    default:
        break;
}