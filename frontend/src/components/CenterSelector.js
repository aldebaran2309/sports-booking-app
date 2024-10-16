import React, { useState, useEffect } from 'react';

const CenterSelector = () => {
    const [centers, setCenters] = useState([]);
    const [selectedCenter, setSelectedCenter] = useState('');
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchCenters = async () => {
            try {
                const response = await fetch('/api/centers');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCenters(data);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error(error);
                setError('Failed to load centers. Please try again.'); // Set error message
                setLoading(false); // Set loading to false even on error
            }
        };
        fetchCenters();
    }, []);

    const handleCenterChange = (event) => {
        setSelectedCenter(event.target.value);
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading message
    }

    if (error) {
        return <div>{error}</div>; // Show error message
    }

    return (
        <select value={selectedCenter} onChange={handleCenterChange}>
            <option value="">Select Center</option>
            {centers.map((center) => (
                <option key={center._id} value={center._id}>
                    {center.name}
                </option>
            ))}
        </select>
    );
};

export default CenterSelector;
