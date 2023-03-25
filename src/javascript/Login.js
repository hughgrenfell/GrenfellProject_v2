import React, { useState } from 'react';

function Login() {

    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    if(isLoggedIn) {
        return <a href=" " onClick={(e) => {setIsLoggedIn(false); e.preventDefault()}}>Logout</a>
    } else {
        return (
            <div>
                <a href=" " onClick={(e) => {setIsLoggedIn(true); e.preventDefault()}}>Login</a>
            </div>

        )
    }
}

export default Login;