let simbolosDispo =["&#127814;","&#128507;","&#128511;"]

let listaCasillas = []

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
            doometio.innerHTML = casilla.simbolo
        }
    }
}

function main()
{
    crearCasillas()
    ponerSimbolosCasillas()
}

main()