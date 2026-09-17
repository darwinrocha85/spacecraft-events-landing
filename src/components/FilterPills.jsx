// Fila de pills para filtrar el catálogo por franquicia (Star Wars, Star Trek, etc.).
// "Todas" (active === null) muestra el catálogo completo.
export default function FilterPills({ franchises, active, onSelect }) {
  if (franchises.length <= 1) return null

  return (
    <div className="filter-pills" role="tablist" aria-label="Filtrar por franquicia">
      <button
        className={`pill${active === null ? ' pill-active' : ''}`}
        onClick={() => onSelect(null)}
      >
        Todas
      </button>
      {franchises.map((f) => (
        <button
          key={f}
          className={`pill${active === f ? ' pill-active' : ''}`}
          onClick={() => onSelect(f)}
        >
          {f}
        </button>
      ))}
    </div>
  )
}
