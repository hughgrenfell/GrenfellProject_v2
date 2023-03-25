import React, { useState } from 'react';
import Poopup from './components/Popup';

function Project4() {

    const [ buttonPopup, setButtonPopup ] = useState(false);

    return (
        <div className="Popup">
            <main>
                <h1>React Popup</h1>
                <br></br>
                <button onClick={() => setButtonPopup(true)}>Open Popup</button>
                <Poopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3>My Popup</h3>
                </Poopup>
            </main>
         </div>    
    );
}

export default Project4;