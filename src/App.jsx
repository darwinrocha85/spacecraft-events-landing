import { useEffect, useMemo, useState } from 'react'
import Hero from './components/Hero'
import FilterPills from './components/FilterPills'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import marketingApi from './api/marketingApi'

export default function App() {
  const [museums, setMuseums] = useState([])
  const [theaterEvents, setTheaterEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeFranchise, setActiveFranchise] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError('')
    marketingApi
      .getExperiences()
      .then((data) => {
        if (cancelled) return
        setMuseums(data.museums || [])
        setTheaterEvents(data.theaterEvents || [])
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const franchises = useMemo(() => {
    const all = new Set([...museums, ...theaterEvents].map((item) => item.franchise).filter(Boolean))
    return Array.from(all).sort()
  }, [museums, theaterEvents])

  const visibleMuseums = useMemo(
    () => (activeFranchise ? museums.filter((m) => m.franchise === activeFranchise) : museums),
    [museums, activeFranchise]
  )
  const visibleTheaterEvents = useMemo(
    () => (activeFranchise ? theaterEvents.filter((e) => e.franchise === activeFranchise) : theaterEvents),
    [theaterEvents, activeFranchise]
  )

  const stats = {
    museumCount: museums.length,
    eventCount: theaterEvents.length,
    franchiseCount: franchises.length,
  }

  return (
    <div className="landing-shell">
      <Hero stats={stats} />

      <main className="landing-content">
        {loading && (
          <div className="table-state">
            <div className="spinner" />
            <p>Escaneando la cartelera de la flota…</p>
          </div>
        )}

        {!loading && error && <div className="inline-error">{error}</div>}

        {!loading && !error && (
          <>
            <FilterPills franchises={franchises} active={activeFranchise} onSelect={setActiveFranchise} />

            <ExperienceSection
              title="Museos — experiencias abiertas"
              subtitle="Sin fecha de vencimiento: elegí el día y horario que quieras dentro de la semana."
              kind="museum"
              items={visibleMuseums}
              emptyIcon="🏛"
              emptyText="No hay naves museo abiertas por ahora con ese filtro."
            />

            <ExperienceSection
              title="Teatro — funciones con fecha"
              subtitle="Eventos puntuales, con fecha y hora fija y asientos limitados."
              kind="theater"
              items={visibleTheaterEvents}
              emptyIcon="🎭"
              emptyText="No hay funciones de teatro vigentes por ahora con ese filtro."
            />
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
