const URL_API = 'http://localhost:3000'

export async function getAll() {
    const response = await fetch(`${URL_API}/noticias`)
    const formatado = await response.json()
    return formatado
}

export async function getOne(id) {
    const res = await fetch(`${URL_API}/noticias/${id}`)
    const response = await res.json()
    return response
}

export async function LoginApi(email, password) {
    const response = await fetch(`${URL_API}/usuarios`)
    const usuarios = await response.json()
    const usuario = usuarios.find(usuario => 
                                    usuario.email === email 
                                    && usuario.password === password)
    
    return usuario
}