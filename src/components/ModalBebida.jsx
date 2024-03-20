import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import ButtonFav from './ButtonFav'

const ModalBebida = () => {

    const { modal, handleModalClick, receta, cargando, handleFavoritoSupreme, buscarFavorito } = useBebidas()

    const mostrarIngredientes = () => {
        let ingredientes = []

        for(let i = 1; i < 16; i++){
            if(receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li key={i}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

    return (
        !cargando && (
            <Modal show={modal} onHide={handleModalClick}>
                <Image
                    src={receta.strDrinkThumb}
                    alt={`Imagen receta ${receta.strDrink}`}
                />
                <Modal.Header>
                    <Modal.Title>{receta.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <h2>Instrucciones</h2>
                        <p>{receta.strInstructions}</p>
                        <h2>Ingredientes y Cantidades</h2>
                        {mostrarIngredientes()}
                    </div>
                    <div className="p-2 d-flex justify-content-end">
                        <ButtonFav
                            checked={buscarFavorito(receta.idDrink)}
                            evento={() => handleFavoritoSupreme(receta.idDrink)}
                        />
                    </div>
                </Modal.Body>
            </Modal>
        )
    )
}

export default ModalBebida