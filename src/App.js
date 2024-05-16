import React, { useState } from 'react';
import HotelList from './components/HotelList';
import HotelDetail from './components/HotelDetail';

const App = () => {
  const [selectedHotelId, setSelectedHotelId] = useState(null);

  return (
      <div>
        <h1>Hotel Reservation System</h1>
        {!selectedHotelId ? (
            <HotelList onSelectHotel={setSelectedHotelId} />
        ) : (
            <HotelDetail hotelId={selectedHotelId} />
        )}
      </div>
  );
};

export default App;
