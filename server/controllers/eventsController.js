import { pool } from "../config/database.js"

// Get all events
export const getAllEvents = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT e.*, l.name AS location_name 
      FROM events e
      JOIN locations l ON e.location_id = l.id
      ORDER BY e.date ASC
    `)
    res.json(result.rows)
  } catch (err) {
    console.error("⚠️ Error getting events:", err)
    res.status(500).json({ error: "Failed to get events" })
  }
}

// Get all events for a specific location
export const getEventsByLocationId = async (req, res) => {
  const { location_id } = req.params
  try {
    const result = await pool.query(
      "SELECT * FROM events WHERE location_id = $1 ORDER BY date ASC",
      [location_id]
    )
    res.json(result.rows)
  } catch (err) {
    console.error("⚠️ Error getting events by location:", err)
    res.status(500).json({ error: "Failed to get events for location" })
  }
}

// Get one event by ID (optional)
export const getEventById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await pool.query("SELECT * FROM events WHERE id = $1", [id])
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Event not found" })
    } else {
      res.json(result.rows[0])
    }
  } catch (err) {
    console.error("⚠️ Error getting event by ID:", err)
    res.status(500).json({ error: "Failed to get event" })
  }
}
