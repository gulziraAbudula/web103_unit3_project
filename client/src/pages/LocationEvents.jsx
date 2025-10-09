import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import LocationsAPI from '../services/LocationsAPI';
import { getEventsByLocationId } from '../services/EventsAPI'; // Named import
import '../css/LocationEvents.css';

const LocationEvents = ({ index }) => {
    const [location, setLocation] = useState({});
    const [events, setEvents] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const locData = await LocationsAPI.getLocationById(index);
                setLocation(locData);

                const eventsData = await getEventsByLocationId(index); // Use the imported function
                setEvents(eventsData);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [index]);

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    {location.image && <img src={location.image} alt={location.name} />}
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {events && events.length > 0 ? (
                    events.map((event) => (
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ))
                ) : (
                    <h2>
                        <i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}
                    </h2>
                )}
            </main>
        </div>
    );
};

export default LocationEvents;
