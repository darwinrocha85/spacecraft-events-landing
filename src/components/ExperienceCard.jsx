import { formatMoney } from '../constants/pricing'
import { formatDateRange, formatTime, eventTypeLabel } from '../utils/dates'
import { museumBuyLink, theaterBuyLink } from '../utils/links'

// Una card sirve tanto para un museo (experiencia abierta, sin fecha de fin) como
// para una función de teatro (evento puntual, con rango de fechas y hora fija).
export default function ExperienceCard({ kind, item }) {
  const isMuseum = kind === 'museum'
  const href = isMuseum ? museumBuyLink(item.id) : theaterBuyLink(item.spacecraftId, item.id)

  return (
    <article className="exp-card">
      <div className="exp-card-top">
        <span className={`pill-tag pill-tag-${kind}`}>
          {isMuseum ? '🏛 Museo · abierto' : '🎭 Teatro · función'}
        </span>
        <span className="exp-price">{formatMoney(item.ticketPrice)}</span>
      </div>

      <h3 className="exp-name">{isMuseum ? item.name : item.spacecraftName}</h3>
      <p className="exp-franchise">{item.franchise}</p>

      {isMuseum ? (
        <p className="exp-meta">Cupo por turno: {item.museumCapacity} personas</p>
      ) : (
        <>
          <p className="exp-meta">
            {formatDateRange(item.startDate, item.endDate)} · {formatTime(item.time)} hs
          </p>
          <p className="exp-meta exp-meta-muted">{eventTypeLabel(item.eventType)}</p>
        </>
      )}

      <a className="exp-cta" href={href}>
        Comprar entrada →
      </a>
    </article>
  )
}
