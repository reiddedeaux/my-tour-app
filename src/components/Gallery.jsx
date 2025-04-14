import React, { useState, useEffect } from 'react';
import TourCard from './TourCard';
const url = 'https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'; // API URL
const Gallery = ({ tours, setTours, onRemove }) => {
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(false); // Error state
    
    useEffect(() => {
        const fetchTours = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTours(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
        };
    
        fetchTours();
    }, [setTours]);
    
    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error.message}</div>;
    
    return (
        <section>
        <div className="gallery">
            {tours.map((tour) => (
            <TourCard key={tour.id} {...tour} onRemove={onRemove} />
            ))}
        </div>
        </section>
    );
    }
    export default Gallery;
// Gallery component to display the list of tours