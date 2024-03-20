import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import CarruselBebidasFavoritas from './components/CarruselBebidasFavoritas'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'

function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de bebidas</h1>
        </header>

        {/* <Container>
          <section className='carrusel'>
            <CarruselBebidasFavoritas />
          </section>
        </Container> */}

        <Container className="mt-5">
          <Formulario />

          <ListadoBebidas />

          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
