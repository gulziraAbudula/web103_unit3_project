import express from 'express'
import { getAllLocations, getLocationById } from '../controllers/locationsController.js'

const router = express.Router()

// GET all locations
router.get('/', async (req, res) => {
  try {
    const locations = await getAllLocations()
    res.json(locations)
  } catch (error) {
    console.error('❌ Error fetching locations:', error)
    res.status(500).json({ error: 'Failed to fetch locations' })
  }
})

// GET single location by ID
router.get('/:id', async (req, res) => {
  try {
    const location = await getLocationById(req.params.id)
    res.json(location)
  } catch (error) {
    console.error('❌ Error fetching location by ID:', error)
    res.status(500).json({ error: 'Failed to fetch location' })
  }
})

export default router
