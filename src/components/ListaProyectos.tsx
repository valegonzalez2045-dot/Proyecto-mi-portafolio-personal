import TarjetaProyecto from './TarjetaProyecto'

type Proyecto = {
  nombre: string
  descripcion: string
  enlace: string
}

type ListaProyectosProps = {
  proyectos: Proyecto[]
}

function ListaProyectos({ proyectos }: ListaProyectosProps) {
  return (
    <section aria-labelledby="titulo-proyectos">
      <h2 id="titulo-proyectos">Proyectos</h2>
      <div className="tarjetas">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto key={proyecto.nombre} proyecto={proyecto} />
        ))}
      </div>
    </section>
  )
}

export default ListaProyectos
