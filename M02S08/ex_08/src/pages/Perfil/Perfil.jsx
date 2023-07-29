import './styles.css'
import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.jsx'
import { criarUsuario } from '../../services/User'

function Perfil() {

    const { user } = useContext(AuthContext)

    const [name, setName] = useState()

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = {            
            email,
            password,
            name,
        }

        await criarUsuario(formData)

    }

    return (
        <>
            <h1>Perfil</h1>
            <form style={{ 'maxWidth': '320px' }} onSubmit={handleSubmit}>

                <input required type="email" value={user.email}
                    placeholder="Digite seu e-mail"
                    onChange={handleEmailChange} />

                <input required type="password" minLength="6"
                    value={user.password} placeholder="Digite sua senha"
                    onChange={handlePasswordChange} />

                <input required type="text" value={name}
                    placeholder="Digite seu nome"
                    onChange={handleNameChange} />

                <button type="submit">Salvar</button>
            </form>
        </>
    )
}

export default Perfil