import { useState, useEffect, createContext } from "react"
import axios from "axios"

const BebidasContext = createContext()

const BebidasProvider = ({children}) => {

    const [ bebidas, setBebidas ] = useState([])
    const [ modal, setModal ] = useState(false)
    const [ bebidaId, setBebidaId ] = useState(null)
    const [ receta, setReceta ] = useState({})
    const [ cargando, setCargando ] = useState(false)

    // =================
    const [ favoritos, setFavoritos ] = useState(JSON.parse(localStorage.getItem('favoritos')) ?? [])
    const [ carruselFavoritos, setCarruselFavoritos ] = useState([])

    useEffect(() => {
        setCargando(true)
        const obtenerReceta = async () => {
            if(!bebidaId) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
                const { data } = await axios(url)

                setReceta(data.drinks[0])
            } catch (error) {
                console.info(error)
            } finally {
                setCargando(false)
            }
        }
        obtenerReceta()
    }, [bebidaId])


    const consultarBebida = async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

            const { data } = await axios(url)
            setBebidas(data.drinks)

        } catch (error) {
            console.info(error)
        }
    }

    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleBebidaIdClick = id => {
        setBebidaId(id)
    }

    // ==================================

    const handleFavoritoSupreme = id => {
        console.info('Click en botón favorito...')
        if (favoritos.includes(id)) {
            const favoritosActualizado = favoritos.filter(favorito => favorito !== id)
            setFavoritos(favoritosActualizado)
        } else {
            setFavoritos([...favoritos, id])
        }
    }

    const buscarFavorito = id => {
        return favoritos.includes(id)
    }

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }, [favoritos])

    // ==================================
    useEffect(() => {

        const obtenerFavoritos = async () => {
            try {
                const listado = await Promise.all(
                    favoritos.map(async (fav) => {
                        try {
                            let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${fav}`
                            let { data } = await axios(url)
                            return data.drinks[0]
                        } catch (error) {
                            console.info(error)
                            return null
                        }
                    })
                )
                setCarruselFavoritos(listado)
            } catch (error) {
                console.info(error)
            }
        }
        obtenerFavoritos()

    }, [])


    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                handleModalClick,
                modal,
                handleBebidaIdClick,
                receta,
                cargando,
                buscarFavorito,
                handleFavoritoSupreme,
                carruselFavoritos
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext