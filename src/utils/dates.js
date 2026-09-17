// Utilidades de formato de fecha/hora en español, sin dependencias externas.
const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

function parseISODate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export function formatDateShort(iso) {
  const date = parseISODate(iso)
  return `${date.getDate()} ${MONTHS[date.getMonth()]}`
}

// Rango de fechas de una función de teatro: si dura un solo día, muestra solo esa fecha.
export function formatDateRange(startISO, endISO) {
  if (!startISO || !endISO) return ''
  if (startISO === endISO) return formatDateShort(startISO)
  return `${formatDateShort(startISO)} – ${formatDateShort(endISO)}`
}

// El backend serializa LocalTime como "HH:mm:ss"
export function formatTime(time) {
  return typeof time === 'string' ? time.slice(0, 5) : ''
}

export const EVENT_TYPE_LABELS = {
  MUSICA: 'Música',
  ARTES: 'Artes escénicas',
  LIBRE: 'Libre',
}

export function eventTypeLabel(type) {
  return EVENT_TYPE_LABELS[type] || type
}
