import React, { useState } from 'react';

const BookingForm = () => {
    const [centerId, setCenterId] = useState('');
    const [sportId, setSportId] = useState('');
    const [courtId, setCourtId] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    center_id: centerId,
                    sport_id: sportId,
                    court_id: courtId,
                    start_time: startTime,
                    end_time: endTime
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        label >
        Center:
        <
        select value = { centerId }
        onChange = {
            (event) => setCenterId(event.target.value)
        } > { /* Centers will be populated from API */ } <
        option value = "" > Select Center < /option> < /
        select > <
        /label> <
        label >
        Sport:
        <
        select value = { sportId }
        onChange = {
            (event) => setSportId(event.target.value)
        } > { /* Sports will be populated from API */ } <
        option value = "" > Select Sport < /option> < /
        select > <
        /label> <
        label >
        Court:
        <
        select value = { courtId }
        onChange = {
            (event) => setCourtId(event.target.value)
        } > { /* Courts will be populated from API */ } <
        option value = "" > Select Court < /option> < /
        select > <
        /label> <
        label >
        Start Time:
        <
        input type = "datetime-local"
        value = { startTime }
        onChange = {
            (event) => setStartTime(event.target.value)
        }
        /> < /
        label > <
        label >
        End Time:
        <
        input type = "datetime-local"
        value = { endTime }
        onChange = {
            (event) => setEndTime(event.target.value)
        }
        /> < /
        label > <
        button type = "submit" > Book Court < /button> < /
        form >
    );
};

export default BookingForm;