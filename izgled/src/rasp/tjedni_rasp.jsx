import { Button } from 'antd'
import '../App.jsx'
import './ikonice/dijeli.png'
import './ikonice/kriz.png'
import './ikonice/minus.png'
import './ikonice/plus.png'
import './ikonice/venn.png'
import './tjedni_rasp.css'
function Tjedni(){

    return (
        <>
        
        {/*<button onClick={App } >Vrati se natrag</button>*/}
        <div className='botuni'>
        <Button icon='plus.png'>Dodaj dogadaj</Button>
        <Button icon='minus.png'>Izbrisi dogadaj</Button>
        <Button icon='kriz.png'>Izbrisi raspored</Button>
        <Button icon='dijeli.png'>Podijeli raspored</Button>
        <Button icon='venn.png'>Spoji rasporede</Button>
        </div>
        
        <div className='tablica'>
        <p className='p11'>PON</p>
        <p className='p12'>UTO</p>
        <p className='p13'>SRI</p>
        <p className='p14'>CET</p>
        <p className='p15'>PET</p>
        <p className='p16'>SUB</p>
        <p className='p17'>NED</p>
        <p className='p21'>00</p>
        <p className='p31'>01</p>
        <p className='p41'>02</p>
        <p className='p51'>03</p>
        <p className='p61'>04</p>
        <p className='p71'>05</p>
        <p className='p81'>06</p>
        <p className='p91'>07</p>
        <p className='p101'>08</p>
        <p className='p111'>09</p>
        <p className='p121'>10</p>
        <p className='p131'>11</p>
        <p className='p141'>12</p>
        <p className='p151'>13</p>
        <p className='p161'>14</p>
        <p className='p171'>15</p>
        <p className='p181'>16</p>
        <p className='p191'>17</p>
        <p className='p201'>18</p>
        <p className='p211'>19</p>
        <p className='p221'>20</p>
        <p className='p231'>21</p>
        <p className='p241'>22</p>
        <p className='p251'>23</p>
        </div>
        </>
    )
        
    
}
export default Tjedni