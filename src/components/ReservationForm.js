import React, {useState} from 'react';
import axios from 'axios';

const ReservationForm = ({roomId, available}) => {
    const [checkInTime, setCheckInTime] = useState('');
    const [reservationId, setReservationId] = useState(null);
    const [isAvailable, setIsAvailable] = useState(available);


    const bookRoom = async () => {
        try {
            const response = await axios.post(`/reservations/book/${roomId}`, null, {
                params: {checkInTime}
            });
            alert('Room booked successfully');
            setReservationId(response.data.id);
            setIsAvailable(false);
        } catch (error) {
            console.error('Error booking room:', error.response.data);
        }
    };

    const cancelReservation = async () => {
        try {
            const response = await axios.post(`/reservations/cancel/${reservationId}`);
            if (response.status === 200) {
                alert('Reservation cancelled successfully');
                setReservationId(null);
                setIsAvailable(true);
            }
        } catch (error) {
            alert('Cancellation failed: ' + error.response.data);
        }
    };


    return (
        <div>
            <input type="datetime-local" value={checkInTime} onChange={(e) => setCheckInTime(e.target.value)}
                   placeholder="Check-in Time"/>
            {isAvailable && <button onClick={bookRoom}>Book</button>}
            {!isAvailable && <span> Not Available</span>}
            {reservationId && <button onClick={cancelReservation}>Cancel Reservation</button>}
        </div>
    );
};

export default ReservationForm;
