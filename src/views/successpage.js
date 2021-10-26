import React from 'react'

const successpage = () => {
    return (
        <div>
            <main class="successbody">
                <div style="margin:10px">
                    <img src="success.png">
                </div>
                <h2 style="margin:10px">Payment Successful</h2>
                <p style="margin:10px">Your car will reach your doorstep within few minutes</p>
                <form class="successbutton" style="margin: 10px;" action="/">
                    <button>Return to Dashboard</button>
                </form>
            </main>
        </div>  
    )
}

export default successpage
