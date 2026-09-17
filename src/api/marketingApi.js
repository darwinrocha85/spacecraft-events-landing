import axios from 'axios'

// Base URL configurable por variable de entorno (ver .env.example). En `npm run dev`
// usa el backend local; en `npm run build` (producción) usa Render, salvo que
// VITE_API_URL diga lo contrario.
const DEFAULT_API_URL = import.meta.env.DEV
  ? 'http://localhost:8080/api'
  : 'https://spacecraftsystem.onrender.com/api'
const API_URL = import.meta.env.VITE_API_URL || DEFAULT_API_URL

const client = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
})

function toFriendlyError(error) {
  if (error.response) {
    const backendMessage = error.response.data?.message
    return new Error(backendMessage || `Error ${error.response.status} del servidor`)
  }
  if (error.request) {
    return new Error(
      'No se pudo contactar al backend. ¿Está corriendo en ' + API_URL + '?'
    )
  }
  return error
}

export const marketingApi = {
  // Museos operativos + funciones de teatro vigentes, listos para mostrar hoy
  async getExperiences() {
    try {
      const { data } = await client.get('/marketing/experiences')
      return data
    } catch (error) {
      throw toFriendlyError(error)
    }
  },
}

export default marketingApi
