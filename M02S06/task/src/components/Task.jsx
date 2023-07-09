import ToDo from "../components/ToDo"

function Task() {
    
    const tarefas = [
        'Tarefa 1',
        'Tarefa 2'
    ]
    
    return (
        <>
            <h2>Tarefas</h2>
            <ToDo tarefas={tarefas} />
        </>
    )
}

export default Task