// URL base de la tienda de entradas (spacecraft-tickets-frontend), a la que este
// landing redirige al hacer click en "Comprar entrada". Local por defecto apunta
// al puerto de dev de esa app; en producción, a su sitio de Firebase.
const DEFAULT_TICKETS_URL = import.meta.env.DEV
  ? 'http://localhost:5174'
  : 'https://spacecraft-tickets.web.app'
const TICKETS_URL = import.meta.env.VITE_TICKETS_URL || DEFAULT_TICKETS_URL

// Museo: experiencia abierta, no tiene fecha puntual — solo se identifica la nave.
export function museumBuyLink(venueId) {
  return `${TICKETS_URL}/?type=museum&venue=${venueId}`
}

// Teatro: evento puntual — se identifica la nave y la función exacta.
export function theaterBuyLink(spacecraftId, eventId) {
  return `${TICKETS_URL}/?type=theater&venue=${spacecraftId}&event=${eventId}`
}
