import React from 'react'

const checkout = () => {
    return (
        <div id="checkoutform">
            <form name="checkoutform" action="/success">
                <h2>Vehicle Check-out</h2>
                <div class="flexingrow">
                    <div class="flexingcolumn">
                        <label style="margin-bottom: 10px;" for="customername"><strong>Customer Name</strong></label>
                        <label style="margin-bottom: 10px;" for="customername">${vehicle.CustomerName}</label>
                    </div>
                    <div class="flexingcolumn">
                        <label style="margin-bottom: 10px;" for="phonenumber"><strong>Phone Number</strong></label>
                        <label style="margin-bottom: 10px;" for="phonenumber">${vehicle.CustomerNumber}</label>
                    </div>
                    <div class="flexingcolumn">
                        <label style="margin-bottom: 10px;" for="vehiclenumber"><strong>Vehicle Number</strong></label>
                        <label style="margin-bottom: 10px;" for="vehiclenumber">${vehicle.VehicleNumber}</label>
                    </div>
                    <div class="flexingcolumn">
                        <label style="margin-bottom: 10px;" for="vehicletype"><strong>Vehicle Type</strong></label>
                        <label class="typedec" style="margin-bottom: 10px;" for="vehicletype">${vehicle.VehicleType}</label>
                    </div>
                </div>
                <div class="flexingrow">
                    <div class="flexingcolumn">
                        <label style="margin-bottom: 10px;" for="vehiclemodel"><strong>Vehicle Model</strong></label>
                        <label style="margin-bottom: 10px;" for="vehiclemodel">${vehicle.VehicleModel}</label>
                    </div>
                    <div class="flexingcolumn">
                        <label style="margin-bottom: 10px;" for="checkintime"><strong>Checkin Time</strong></label>
                        <label style="margin-bottom: 10px;" for="checkintime">${vehicle.CheckinTime}</label>
                    </div>
                    <div class="flexingcolumn">
                        <label style="margin-bottom: 10px;" for="checkouttime"><strong>Checkout Time</strong></label>
                        <label style="margin-bottom: 10px;" for="checkouttime">${checkouttime}</label>
                    </div>
                    <div class="flexingcolumn">
                        <label style="margin-bottom: 10px;" for="duration"><strong>Duration</strong></label>
                        <label style="margin-bottom: 10px;" for="duration">${timedifference} min</label>
                    </div>
                </div>
                <div class="topay">
                    <h3>To pay</h3>
                    <h1><strong>RS.${= cost}</strong></h1>
                </div>
                <div class="center">
                    {/* <a href="/success?id="${vehicle._id}>Proceed to pay</a> */}
                </div>
            </form>
        </div>
    )
}

export default checkout
