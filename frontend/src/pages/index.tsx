import React, { useEffect, useState } from 'react';
import { fetchPlaces } from '../utils/api';

const IndexPage = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchPlaces();
            setPlaces(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Places</h1>
            <ul>
                {places.map((place, index) => (
                    <li key={index}>{place.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default IndexPage;


export default Page
