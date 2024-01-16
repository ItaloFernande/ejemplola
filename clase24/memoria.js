let simbolosDispo =["&#127814;","&#128507;","&#128511;"]

let listaCasillas = []
let numeroTurno = 1
let casillaTurnoAnterior = null

function crearCasillas()
{
    for(let i =0  ; i < simbolosDispo.length ; i++)
    {
        let casilla1 = {
            simbolo : simbolosDispo[i],
            monstrandoSimbolo : false
        }
        let casilla2 = {
            simbolo : simbolosDispo[i],
            monstrandoSimbolo : false
        }
        listaCasillas.push(casilla1)
        listaCasillas.push(casilla2)
    }
}

function devolverCasilla(row, col)
{
    const pos = (row * 3) + col
    return listaCasillas[pos]
}

function ponerSimbolosCasillas(){
    for( let i = 0 ; i<2 ; i++)
    {
        for(let j = 0 ; j<3 ; j++)
        {
            const doometio = document.getElementById(i+"_"+j)
            const casilla = devolverCasilla(i,j)
            if (casilla.monstrandoSimbolo)
            {
                doometio.innerHTML = casilla.simbolo
            }
            else
            {
                doometio.innerHTML = "UL"
            }
        }
    }
}

function casillaonclick(row, col)
{
    //1. Obtener datos de casilla que se hizo click
    const casillaseleccionada = devolverCasilla(row, col)
    if (numeroTurno == 1)
    {
        casillaseleccionada.monstrandoSimbolo = true
        casillaTurnoAnterior = casillaseleccionada    
        numeroTurno = 2
        ponerSimbolosCasillas()
    }
    else
    {   
        casillaseleccionada.monstrandoSimbolo = true

        //2. Verificacion si son iguales los simbolos
        if(casillaTurnoAnterior.simbolo != casillaseleccionada.simbolo)
        {
            //NO Deben mostrarse los 2
            casillaseleccionada.monstrandoSimbolo = true
            ponerSimbolosCasillas()

            setTimeout(
                function()
                {
                    casillaseleccionada.monstrandoSimbolo = false
                    casillaTurnoAnterior.monstrandoSimbolo = false
                    ponerSimbolosCasillas()
                    casillaTurnoAnterior = null
                    numeroTurno = 1
            },2000)
        }
        else
        {
            casillaTurnoAnterior = null
            numeroTurno = 1
            ponerSimbolosCasillas()
        }
    }
}

function main()
{
    crearCasillas()
    ponerSimbolosCasillas()
}

main()