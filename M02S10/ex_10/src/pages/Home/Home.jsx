import { Link } from "react-router-dom";
import CardNoticia from "../../components/HomeComponents/CardNoticia/CardNoticia"
import { useState, useEffect } from "react";
import { getAll, getOne } from "../../services/web";
import { AuthContext } from '../../context/AuthContext.jsx'

function Home() {

    const [noticias, setNoticias] = useState([])
    const { user } = useContext(AuthContext)

    const { id } = useParams()
    const [noticia, setNoticia] = useState([])

    useEffect(() => {
        async function getData() {
                const response = await getOne(id)
                console.log('response: ', response)

            setNoticia(response)
        }

        if (id) {
            
            getData()

        }
    }, [])
    
    useEffect(() => {
        async function fetchAll() {
            const data = await getAll()
            setNoticias(data)
        }
        
        fetchAll()

    }, [])

    const temNoticia = true;
      
    const renderizarQtdNoticias = () => {
        if (temNoticia) {
            return <span>Tem {noticias.length} notícias não lidas</span>
        } 
        return <span>Não existe notícia.</span>
    }
    
    return (
        <>
            <h1>Home</h1>
            <div className="row mt-3">
                <div className="col">
                    <h6 className="text-start">Bem-vindo, {user.email}</h6>
                </div>
            </div>
            
            <div className="col">
                <h4>Noticia: {noticia?.id}</h4>
                <Link to="/noticias/:noticia">{noticia?.id}</Link>
            </div>

            {renderizarQtdNoticias()}

            {noticias.map(noticia => {
                return <CardNoticia key={noticia.id} 
                            titulo={noticia.titulo} srcImage={noticia.imagem.src} />
            })}        

        </>
    )
}

export default Home