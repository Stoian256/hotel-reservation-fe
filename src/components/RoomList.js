import React from 'react';
import ReservationForm from './ReservationForm';

const RoomList = ({rooms}) => {
    return (
        <ul>
            {rooms.map(room => (
                <li key={room.id}>
                    Room {room.roomNumber} - {room.type} - ${room.price}
                    <ReservationForm roomId={room.id} available={room.isAvailable}/>
                </li>
            ))}
        </ul>
    );
};

export default RoomList;
