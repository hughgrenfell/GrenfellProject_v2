import React, { useState, useEffect } from 'react';

function useDelayUnmount(isMounted, delayTime) {
    const [ showDiv, setShowDiv ] = useState(false);
    useEffect(() => {
        let timeoutId;
        if (isMounted && !showDiv) {
            setShowDiv(true);
        } else if (!isMounted && showDiv) {
            timeoutId = setTimeout(() => setShowDiv(false), delayTime);
        }
        return () => clearTimeout(timeoutId);
    }, [isMounted, delayTime, showDiv]);
    return showDiv;
}

const mountedStyle = { animation: "inAnimation 3000ms ease-in" };
const unmountedStyle = {
    animation: "outAnimation 2000ms ease-out",
    animationFillMode: "forwards"
};

function Project6() {

    const [ isMounted, setIsMounted ] = useState(false);
    const showDiv = useDelayUnmount(isMounted,3000);

    return (
        <div>
            <div className="p-con">
                <button onClick={() => {
                    setIsMounted(!isMounted)}}>
                Show/Hide
                </button>
        
                { //Conditional Rendering
                showDiv && 
                    <div
                        className="transitionDiv"
                        style={isMounted ? mountedStyle : unmountedStyle}
                    >Some stuff goes here</div>}
            </div>
        </div>
    );

}

export default Project6;