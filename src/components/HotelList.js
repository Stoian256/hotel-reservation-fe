import React, {useState, useEffect} from 'react';
import axios from 'axios';

const HotelList = ({onSelectHotel}) => {
    const [hotels, setHotels] = useState([]);
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [radius, setRadius] = useState('');

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLat(position.coords.latitude);
                    setLon(position.coords.longitude);
                },
                (error) => {
                    console.error('Error obtaining geolocation:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    const fetchHotels = async () => {
        try {
            const response = await axios.get(`/hotels/nearby`, {
                params: {lat, lon, radius}
            });
            setHotels(response.data);
        } catch (error) {
            console.error('Error fetching hotels:', error);
        }
    };

    return (
        <div>
            <h2>Find Nearby Hotels</h2>
            <input type="number" value={lat} onChange={(e) => setLat(e.target.value)} placeholder="Latitude"/>
            <input type="number" value={lon} onChange={(e) => setLon(e.target.value)} placeholder="Longitude"/>
            <input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} placeholder="Radius in km"/>
            <button onClick={fetchHotels}>Search</button>
            <ul>
                {hotels.map(hotel => (
                    <li key={hotel.id} onClick={() => onSelectHotel(hotel.id)}>
                        {hotel.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HotelList;
