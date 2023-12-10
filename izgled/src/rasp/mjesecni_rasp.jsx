import { Button, Calendar, Card } from 'antd'
import './mjesecni_rasp.css'
function Mjesecni(){
    return(
        <div className="tablica">
        <div className='kalendar'><Calendar></Calendar></div>
        <p className='pojedinacni'><Card title='Petak'></Card></p>
        <Button className='botun1' icon='plus.png'>Dodaj dogadaj</Button><br></br>
        <Button className='botun2'icon='minus.png'>Izbrisi dogadaj</Button><br></br>
        <Button className='botun3'icon='kriz.png'>Izbrisi raspored</Button><br></br>
        <Button className='botun4'icon='dijeli.png'>Podijeli raspored</Button><br></br>
        <Button className='botun5'icon='venn.png'>Spoji rasporede</Button><br></br>
        </div>
    )
}
export default Mjesecni