//kada se korisnik ulogira/napravi račun -> prikaz svih rasporeda

import NavLeft from "../components/navLeft"
import NavUpper from "../components/navUpper"

function Pocetna() {

    //useEffect koji će napraviti novi element za svaki raspored, ako ne onda neka nešto napiše
    
    return (
        <div id="pocetna">
            <NavUpper id="navigacijaGornja" />
            <NavLeft id="navigacijaLijeva" />
            <div id="pocetnaTijelo">
                {/* prikaz rasporeda korisnika */}

            </div>
        </div>
    )
}

export default Pocetna