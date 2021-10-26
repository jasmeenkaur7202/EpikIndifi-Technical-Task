import React from 'react'

const checkin = () => {
    return (
        <div id="checkinform">
            <form action="/details" name="checkinform" method="POST">
                <h2>Vechicle Check-In</h2>
                <div class="flexingrow">
                    <div class="flexingcolumn">
                        <label style="margin-bottom: 10px;" for="vehiclenumber"><strong>Vehicle Number</strong></label>
                        <input style="margin-bottom: 10px;" type="text" pattern="[A-Za-z][A-Za-z]\s[0-9][0-9]\s[A-Za-z ][A-Za-z]\s[0-9][0-9][0-9][0-9]" id="vehiclenumber"
                            placeholder="Your Vehicle Number" name="vehiclenumber" required>
                    </div>
                    <div class="flexingcolumn">
                        <label style="margin-bottom: 10px;" for="vehicletype"><strong>Vehicle Type</strong></label>
                        <input style="margin-bottom: 10px;" type="text" id="vehicletype" placeholder="Your Vehicle Type"
                            name="vehicletype" required>
                    </div>
                </div>
                <div class="flexingrow">
                    <div class="flexingcolumn">
                        <label style="margin-bottom: 10px;" for="vehiclemodel"><strong>Vehicle Model</strong></label>
                        <input style="margin-bottom: 10px;" type="text" id="vehiclemodel"
                            placeholder="Your Vehicle Model" name="vehiclemodel" required>
                    </div>
                    <div class="flexingcolumn">
                        <label style="margin-bottom: 10px;" for="phonenumber"><strong>Phone Number</strong></label>
                        <input style="margin-bottom: 10px;" type="tel" pattern="[6-9][0-9]{9}" id="phonenumber"
                            placeholder="Your Phone Number" name="phonenumber" required>
                    </div>
                </div>
                <div class="flexingrow">
                    <div class="flexingcolumn">
                        <label style="margin-bottom: 10px;" for="customername"><strong>Customer Name</strong></label>
                        <input type="text" id="customername" placeholder="Your Name" name="customername" required>
                    </div>
                </div>
                <div class="center">
                    <button type="submit">Check in</button>
                </div>
            </form>
        </div>
    )
}

export default checkin
