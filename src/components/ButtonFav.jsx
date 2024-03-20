import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const ButtonFav = ({checked, evento, icono}) => {

    if (icono) {
        return (
            <Button
                className={`position-absolute top-0 end-0 m-2 btn-warning ${checked ? 'btn__checked' : ''}`}
                onClick={evento}
            >
                <span className="sr-only">{ checked ?  'Quitar de favoritos' : 'Agregar a favoritos'}</span>
                <FontAwesomeIcon className='btn__icon m-0' icon={faHeart} />
            </Button>
        )
    }

    return (
        <Button
            variant='secondary'
            className={`${checked ? 'btn__checked' : ''}`}
            onClick={evento}
        >
            { checked ?  'Quitar de favoritos' : 'Agregar a favoritos'}
            <FontAwesomeIcon className='btn__icon' icon={faHeart} />
        </Button>
    )
}

export default ButtonFav