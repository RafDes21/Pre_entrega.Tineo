alert("         ****Ministerio de Salud****\n\n\n---> Prueba de covid <---")

const datos = []
const sintomas = ["fiebre", "tos", "cansancio", "perdiDelOlfato", "dolor de cabeza", "dolor de garganta"]
const positivos = []
const negativos = []
const direccion = ["Regimiento Patricios 1941", "Humberto 1º 470", "Almirante Brown 240", "	Montes de Oca 40", "Prefectura Naval Argentina 80"]
const hoteles = ["Hotel 13 de junio", "Hotel 13 de junio", "Recoleta Luxury Boutique Hotel ", "Exe Hotel ColónSe", "Palacio Paz Hotel"]
let cupos
let principalesSintomas

do {
    cupos = parseInt(prompt("Ingrese la cantidad de pacientes."))

} while (isNaN(cupos) || cupos === 0);

do {

    let nombre = prompt("Ingrese los Nombres y Apellidos");
    while (nombre == "") {

        alert("debe ingresar un nombre")
        nombre = prompt("Ingrese los Nombres y Apellidos");
    }

    datos.push(nombre);


    do {

        principalesSintomas = parseInt(prompt("    -----SINTOMAS-----\n fiebre.\n Tos.\n cansancio.\n Perdida de Olfato.\n Dolor de cabeza.\n Dolor de Garganta \n\n¿Ingrese la CANTIDAD de síntomas"))

    } while (isNaN(principalesSintomas) || principalesSintomas === 0);

    function cantidadSintomas(n1) {
        return sintomas.length - n1
    }


    if (cantidadSintomas(principalesSintomas) < 3) {
        positivos.push(nombre)

    } else {
        negativos.push(nombre)

    }

} while (datos.length != cupos)

alert("Datos guardados...")


const opcionCasos = parseInt(prompt("elija una opción \n1° Resultado y derivaciones.\n2°Reportar un error y empezar de nuevo..."))

switch (opcionCasos) {
    case 1:
        alert("     Resultados y Derivaciones")
        negativos.forEach(element => {
            const numeroRandom = Math.round(Math.random() * 4)

            alert(` Sr(a). ${element.toUpperCase()}\n resultado: Negativo.\n Acerque a ${direccion[numeroRandom]}  para vacunarse entre las 08:00 hrs a 13:00 hrs.\n`)

        });
        positivos.forEach(element => {
            const numeroRandom = Math.round(Math.random() * 4)
            alert(` Sr(a). ${element.toUpperCase()}\n resultado: Positivo.\n Debe dirigirse a ${hoteles[numeroRandom]}  donde estará aislado por 14 días...\n`)

        });

        break;
    case 2:

        alert("¡ERROR REPORTADO! \n\n Usted empezará de nuevo a cargar los datos...")
        location.reload()

        break;

    default:
        break;
}