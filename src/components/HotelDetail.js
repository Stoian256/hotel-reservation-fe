import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RoomList from './RoomList';
import FeedbackForm from './FeedbackForm';

const HotelDetail = ({hotelId}) => {
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await axios.get(`/hotels/${hotelId}`);
                setHotel(response.data);
            } catch (error) {
                alert(error.response.data);
            }
        };
        fetchHotel();
    }, [hotelId]);

    if (!hotel) return <div>Loading...</div>;

    return (
        <div>
            <h2>{hotel.name}</h2>
            <RoomList rooms={hotel.rooms}/>
            <FeedbackForm hotelId={hotel.id}/>
        </div>
    );
};

export default HotelDetail;
