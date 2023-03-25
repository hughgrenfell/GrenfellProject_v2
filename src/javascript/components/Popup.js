import React, { useState } from 'react';
import './css/Popup.css';

function Popup(props) {
    
    const [ animationDone, setAnimationDone ] = useState(false);

    const animationTrigger = () =>
    {
        if(animationDone) {
            console.log("Animation is complete!");
        } else {
            console.log("Animation is not complete!");
        }
    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-container">
                <div className="popup-header">
                    <button 
                        className="close-btn"
                        onAnimationEnd={(e) => {setAnimationDone(true); e.preventDefault();}} 
                        onClick={() => {
                            animationTrigger();
                            props.setTrigger(false);
                            }}>
                        <a href=" ">&times;</a>
                    </button>
                </div>
                <div className="popup-inner">
                    { props.children }
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup;