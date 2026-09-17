import Starfield from './Starfield'

// Banda superior oscura con estrellas: la misma identidad visual de las demas apps
// de la flota (Spacecraft Tickets, Taller), a modo de "portada" del ecosistema.
export default function Hero({ stats }) {
  return (
    <header className="hero">
      <Starfield />
      <div className="hero-content">
        <p className="hero-eyebrow">NaveSpace · Cartelera en vivo</p>
        <h1 className="hero-title">Explorá el universo, nave por nave</h1>
        <p className="hero-subtitle">
          Museos abiertos todos los días y funciones de teatro con fecha y hora fija, a bordo
          de naves reales de la flota. Elegí una experiencia y comprá tu entrada al instante.
        </p>

        <div className="stat-strip">
          <div className="stat-tile">
            <span className="stat-value">{stats.museumCount}</span>
            <span className="stat-label">Naves museo abiertas</span>
          </div>
          <div className="stat-tile stat-tile-alert">
            <span className="stat-value">{stats.eventCount}</span>
            <span className="stat-label">Funciones de teatro vigentes</span>
          </div>
          <div className="stat-tile stat-tile-dark">
            <span className="stat-value">{stats.franchiseCount}</span>
            <span className="stat-label">Franquicias representadas</span>
          </div>
        </div>
      </div>
    </header>
  )
}
