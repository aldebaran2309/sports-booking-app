import React, { useState, useEffect } from 'react';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [centerId, setCenterId] = useState('');
  const [sportId, setSportId] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/bookings', {
          method: 'GET',
          params: {
            center_id: centerId,
            sport_id: sportId,
            date
          }
        });
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookings();
  }, [centerId, sportId, date]);

  return (
    <div>
      <h2>Bookings</h2>
      <label>
        Center:
        <select value={centerId} onChange={(event) => setCenterId(event.target.value)}>
          {/* Centers will be populated from API */}
          <option value="">Select Center</option>
        </select>
      </label>
      <label>
        Sport:
        <select value={sportId} onChange={(event) => setSportId(event.target.value)}>
          {/* Sports will be populated from API */}
          <option value="">Select Sport</option>
        </select>
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </label>
      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            {booking.start_time} - {booking.end_time} ({booking.court_id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
