import { useState } from 'react';
import "../App.css"

const userSetting = () => {
    const [podaci, setPodaci] = useState({
        userName: "",
        password: "",
        email: "",
        name: "",
        lastName: ""
    });
    
    return (
        <div id="userSettings">
           <form>
            
           </form>
        </div>
    )
};
export default userSetting;

