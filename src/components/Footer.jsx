const DEFAULT_TICKETS_URL = import.meta.env.DEV
  ? 'http://localhost:5174'
  : 'https://spacecraft-tickets.web.app'
const TICKETS_URL = import.meta.env.VITE_TICKETS_URL || DEFAULT_TICKETS_URL

export default function Footer() {
  return (
    <footer className="landing-footer">
      <p>
        ¿Ya compraste? <a href={`${TICKETS_URL}/?tab=my-tickets`}>Buscá tu entrada acá →</a>
      </p>
      <p className="landing-footer-muted">Spacecraft Events · parte del ecosistema NaveSpace</p>
    </footer>
  )
}
