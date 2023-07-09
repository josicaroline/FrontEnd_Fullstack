
function ToDo ({ tarefas }) {
    return (
        <div>
            <ul>
                {/* <li>Tarefa 1</li>
                <li>Tarefa 2</li> */}
                {tarefas.map(item => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default ToDo