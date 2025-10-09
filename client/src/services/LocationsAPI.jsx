// src/services/LocationsAPI.jsx
const LocationsAPI = {
  getAllLocations: async () => {
    try {
      const res = await fetch('/api/locations')
      if (!res.ok) throw new Error('Failed to fetch locations')
      return res.json()
    } catch (err) {
      console.error(err)
      return []
    }
  },

  getLocationById: async (id) => {
    try {
      const res = await fetch(`/api/locations/${id}`)
      if (!res.ok) throw new Error(`Failed to fetch location with id ${id}`)
      return res.json()
    } catch (err) {
      console.error(err)
      return null
    }
  }
}

export default LocationsAPI
