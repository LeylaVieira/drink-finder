import Carousel from 'react-bootstrap/Carousel'
import useBebidas from '../hooks/useBebidas'

const CarruselBebidasFavoritas = () => {

    const { carruselFavoritos } = useBebidas()

    return (
        <>
            <h2 className="py-3">Mis bebidas favoritas</h2>
            <Carousel>
                {
                    carruselFavoritos.map(favorito => (
                        <Carousel.Item key={favorito.idDrink}>
                            <img src={favorito.strDrinkThumb} alt={`Imagen de ${favorito.strDrink}`} />
                            <Carousel.Caption>
                                <h3>{favorito.strDrink}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </>
    )
}

export default CarruselBebidasFavoritas