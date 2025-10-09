// src/pages/Events.jsx
import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import { getAllEvents } from '../services/EventsAPI'
import '../css/Events.css'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllEvents()
        setEvents(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className='all-events'>
      <h2>All Events</h2>
      <main>
        {events && events.length > 0 ? (
          events.map(event => (
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
          <h3>No events available!</h3>
        )}
      </main>
    </div>
  )
}

export default Events
