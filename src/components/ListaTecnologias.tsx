type ListaTecnologiasProps = {
  tecnologias: string[]
}

function ListaTecnologias({ tecnologias }: ListaTecnologiasProps) {
  return (
    <section aria-labelledby="titulo-tecnologias">
      <h2 id="titulo-tecnologias">Tecnologías</h2>
      <ul className="chips">
        {tecnologias.map((tec) => (
          <li key={tec}>{tec}</li>
        ))}
      </ul>
    </section>
  )
}

export default ListaTecnologias
