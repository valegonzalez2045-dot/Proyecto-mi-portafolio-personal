import './App.css'
import Presentacion from './components/Presentacion'
import ListaTecnologias from './components/ListaTecnologias'
import ListaProyectos from './components/ListaProyectos'

const proyectos = [
  {
    nombre: 'Taller de fundamentos',
    descripcion:
      'Mi primera experiencia usando TypeScript y VS Code.',
    enlace:
      'https://github.com/valegonzalez2045-dot/Taller-de-fundamentos-',
  },
  {
    nombre: 'Fila creativa: Modo Arcade',
    descripcion:
      'App React con una cola de prioridad (urgentes primero, FIFO dentro de cada grupo), historial con pila LIFO y persistencia en localStorage.',
    enlace: 'https://taller-de-modelado-y-react-fila-cre.vercel.app/',
  },
  {
    nombre: 'Sistema de turnos (módulo 03)',
    descripcion:
      'Proyecto del módulo 03 hecho con React, TypeScript y Vite para gestionar turnos de atención.',
    enlace: 'https://github.com/valegonzalez2045-dot/Taller-de-modelado-y-React-Fila-creativa',
  },
  {
    nombre: 'Mi primera página',
    descripcion: 'Fue mi inicio sencillo, utilizando solo HTML.',
    enlace: 'https://github.com/valegonzalez2045-dot/Mi-primera-pagina-',
  },
]

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vite']

function App() {
  return (
    <main className="portafolio">
      <Presentacion
        nombre="Valeria Gonzalez Pardo"
        descripcion="Estudiante de programación creativa interesada en crear experiencias interactivas con la web."
      />

      <section aria-labelledby="titulo-contacto">
        <h2 id="titulo-contacto">Contacto</h2>
        <p>
          Puedes escribirme a:{' '}
          <a href="mailto:tu-correo@ejemplo.com">vgp1021@gmail.com</a>
        </p>
      </section>

      <ListaTecnologias tecnologias={tecnologias} />

      <ListaProyectos proyectos={proyectos} />

      <footer>
        <p>Creado por Valeria Gonzalez Pardo</p>
      </footer>
    </main>
  )
}

export default App
