import { useState, useRef, useEffect } from "react"

function Formulario({ handleSubmit }) {

    const inputRefs = useRef({});

    const [form, setForm] = useState()
    const [errorForm, setErrorForm] = useState(false)

    useEffect(() => {
        setErrorForm(false)
    }, [form])

    const handleChange = (event) => {
        setForm(event.target.value)
    }

    const criarTarefa = (event) => {
        event.preventDefault()
        if (!form) {
            setErrorForm(true)
            inputRefs.current.form.style.borderColor = 'red'
            return;
        }
        handleSubmit(form)
    }

    return (
        <form onSubmit={criarTarefa}>
            <input value={form} 
                ref={(el) => (inputRefs.current.form = el)}
                onChange={handleChange}
                placeholder="Digite uma nova tarefa" 
                type="text"/>

            {errorForm && <span>Não foi add uma tarefa</span>}

            <button type="submit">Criar Tarefa</button>
        </form>
    )
}

export default Formulario