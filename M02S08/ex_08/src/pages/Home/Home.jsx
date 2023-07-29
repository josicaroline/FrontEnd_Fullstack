import './styles.css'
import { AuthContext } from '../../context/AuthContext.jsx'


function Home() {

    const { user } = useContext(AuthContext)

    return (
        <>
        <h1>Home</h1>
            <div className="row mt-3">
                <div className="col">
                    <h6 className="text-start">Bem-vindo, {user.email}</h6>
                </div>
            </div>
        </>            
    )
}

export default Home