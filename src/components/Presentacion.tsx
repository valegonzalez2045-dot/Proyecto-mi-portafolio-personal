type PresentacionProps = {
  nombre: string
  descripcion: string
}

function Presentacion({ nombre, descripcion }: PresentacionProps) {
  return (
    <header className="encabezado">
      <h1>{nombre}</h1>
      <p className="presentacion">{descripcion}</p>
    </header>
  )
}

export default Presentacion
