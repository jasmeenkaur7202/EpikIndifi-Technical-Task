import React from 'react'

const ValetParkingDashBoard = () => {
    return (
        <div>
            <header id="header">
                <h1> Valet Parking</h1>
            </header>

            <main id="main">
                <div class="box">
                    <div>
                        <h2 style="paddingLeft: 20px;">Dashboard</h2>
                    </div>
                    <div class="checkinbutton">
                        <form action="/checkin">
                            <button>+ Check in</button>
                        </form>
                    </div>
                </div>

                <div>
                    <table class="entries">
                        <th>Vehicle No</th>
                        <th>Vehicle Model</th>
                        <th>Vehicle Type</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>Check-in</th>
                        <th>Actions</th>
                        for(int vehicle = 0; vehicle < vehiclelist.length(); vehicle++){
                            <tr>
                            <td>${vehicle.VehicleNumber}</td>
                            <td>${vehicle.VehicleModel}</td>
                            <td>
                                <div class="typedec">
                                ${vehicle.VehicleType}
                                </div>
                            </td>
                            <td>${vehicle.CustomerName}</td>
                            <td>${vehicle.CustomerNumber}</td>
                            <td>${vehicle.CheckinTime}</td>
                            {/* <td><a href = "/checkout ? id = ${vehicle._id}">Check Out</td> */}
                            </tr>
                        }
                    </table>
                </div>
            </main>
        </div>
    )
}

export default ValetParkingDashBoard
