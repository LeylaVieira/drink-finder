import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const ButtonFav = ({checked, evento}) => {

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