// src/services/EventsAPI.jsx
export const getAllEvents = async () => {
  try {
    const res = await fetch('/api/events');
    if (!res.ok) throw new Error('Failed to fetch events');
    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getEventsByLocationId = async (locationId) => {
  try {
    const res = await fetch(`/api/events/location/${locationId}`);
    if (!res.ok) throw new Error(`Failed to fetch events for location ${locationId}`);
    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getEventsById = async (id) => {
  try {
    const res = await fetch(`/api/events/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch event with id ${id}`);
    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};
