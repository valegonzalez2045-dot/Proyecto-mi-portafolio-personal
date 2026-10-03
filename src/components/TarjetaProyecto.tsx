type Proyecto = {
  nombre: string
  descripcion: string
  enlace: string
}

type TarjetaProyectoProps = {
  proyecto: Proyecto
}

function TarjetaProyecto({ proyecto }: TarjetaProyectoProps) {
  return (
    <article className="tarjeta">
      <h3>
        {proyecto.enlace ? (
          <a href={proyecto.enlace} target="_blank" rel="noreferrer">
            {proyecto.nombre}
          </a>
        ) : (
          proyecto.nombre
        )}
      </h3>
      <p>{proyecto.descripcion}</p>
      {proyecto.enlace && (
        <a href={proyecto.enlace} target="_blank" rel="noreferrer">
          Ver proyecto
        </a>
      )}
    </article>
  )
}

export default TarjetaProyecto
