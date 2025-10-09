// server/server.js
import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import locationsRouter from './routes/locationsRoutes.js'
import eventsRouter from './routes/eventsRoutes.js'

dotenv.config({ path: '../.env' })

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// API routes
app.use('/api/locations', locationsRouter)
app.use('/api/events', eventsRouter)

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/dist'))
  app.get('/*', (_, res) =>
    res.sendFile(path.resolve('../client/dist/index.html'))
  )
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
