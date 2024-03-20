import { Modal, Image, CloseButton } from 'react-bootstrap'
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
                <div data-bs-theme="dark" className='position-absolute top-0 end-0'>
                    <CloseButton
                        className='p-3'
                        aria-label="Close modal"
                        onClick={handleModalClick}
                    />
                </div>
                <Modal.Header className='d-flex flex-wrap flex-md-nowrap justify-content-between'>
                    <Modal.Title>{receta.strDrink}</Modal.Title>
                    <div className='flex-shrink-0'>
                        <ButtonFav
                            checked={buscarFavorito(receta.idDrink)}
                            evento={() => handleFavoritoSupreme(receta.idDrink)}
                        />
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <h2>Instrucciones</h2>
                        <p>{receta.strInstructions}</p>
                        <h2>Ingredientes y Cantidades</h2>
                        {mostrarIngredientes()}
                    </div>
                </Modal.Body>
            </Modal>
        )
    )
}

export default ModalBebida