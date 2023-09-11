import React, { useEffect, useState } from "react";
import axios from "../../axios/Axios";

const UserDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings();
  }, []);
  const getBookings = async () => {
    try {
      const response = await axios.get("/booking");
      setBookings(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container mt-5">
    <div className="shifa border m-auto mb-4 p-3">
            <h2 className="text-center fw-bold text-uppercase">Appointments</h2>
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="text-center">Patient Name</th>
                        <th className="text-center">Doctor Name</th>
                        <th className="text-center">Phone No</th>
                        <th className="text-center">Date & Time</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings?.map((booking, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-center">{booking.name}</td>
                                <td className="text-center">{booking.doctorName}</td>
                                <td className="text-center">{booking.phone}</td>
                                <td className="text-center">
                                    {booking.date} {booking.time}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
</div>

  );
};

export default UserDashboard;
