import { pool } from "./database.js"
import dotenv from "dotenv"
dotenv.config({ path: "../.env" })

import locationData from "../data/locations.js"
import eventData from "../data/events.js"

const createTablesQuery = `
  DROP TABLE IF EXISTS events;
  DROP TABLE IF EXISTS locations;

  CREATE TABLE IF NOT EXISTS locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    createdAt TIMESTAMP DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME,
    description TEXT,
    image VARCHAR(255),
    location_id INTEGER REFERENCES locations(id) ON DELETE CASCADE,
    createdAt TIMESTAMP DEFAULT NOW()
  );
`

// Create both tables
const createTables = async () => {
  try {
    await pool.query(createTablesQuery)
    console.log("🎉 Tables created successfully (events + locations)")
  } catch (err) {
    console.error("⚠️ Error creating tables:", err)
  }
}

// Seed sample data
const seedTables = async () => {
  await createTables()

  // Seed locations
  for (const location of locationData) {
    const insertLocationQuery = `
      INSERT INTO locations (name, address, city, state, country)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id
    `
    const locationValues = [
      location.name,
      location.address,
      location.city,
      location.state,
      location.country,
    ]

    try {
      const result = await pool.query(insertLocationQuery, locationValues)
      const locationId = result.rows[0].id
      console.log(`Location added: ${location.name} (id: ${locationId})`)
    } catch (err) {
      console.error(`⚠️ Error inserting location: ${location.name}`, err)
    }
  }

  // Seed events
  for (const event of eventData) {
    const insertEventQuery = `
      INSERT INTO events (title, date, time, description, image, location_id)
      VALUES ($1, $2, $3, $4, $5, $6)
    `
    const eventValues = [
      event.title,
      event.date,
      event.time,
      event.description,
      event.image,
      event.location_id, // make sure this matches existing location IDs
    ]

    try {
      await pool.query(insertEventQuery, eventValues)
      console.log(`✅ Event added: ${event.title}`)
    } catch (err) {
      console.error(`⚠️ Error inserting event: ${event.title}`, err)
    }
  }
}

seedTables()
