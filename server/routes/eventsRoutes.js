// server/routes/events.js
import express from 'express'
import { getAllEvents, getEventsByLocationId, getEventById } from '../controllers/eventsController.js'

const router = express.Router()

// GET all events
router.get('/', async (req, res) => {
  try {
    const events = await getAllEvents()
    res.json(events)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch events' })
  }
})

// GET all events for a specific location
router.get('/location/:id', async (req, res) => {
  try {
    const events = await getEventsByLocationId(req.params.id)
    res.json(events)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch events for location' })
  }
})

// GET a single event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await getEventById(req.params.id)
    res.json(event)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch event' })
  }
})

export default router
