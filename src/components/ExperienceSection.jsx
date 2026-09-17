import ExperienceCard from './ExperienceCard'

// Una sección del catálogo (museos o teatro), con su propio estado vacío.
export default function ExperienceSection({ title, subtitle, kind, items, emptyIcon, emptyText }) {
  return (
    <section className="exp-section">
      <div className="exp-section-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">
          <p className="empty-icon" aria-hidden="true">{emptyIcon}</p>
          <p>{emptyText}</p>
        </div>
      ) : (
        <div className="exp-grid">
          {items.map((item) => (
            <ExperienceCard key={`${kind}-${item.id}`} kind={kind} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}
