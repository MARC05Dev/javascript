function contador() {

    function adicionarcontador() {
        console.log('adicionou')
    }

    return (
        <div>
            <div>1</div>
            <button onClick>Adicionar</button>
        </div>
    )
}

function Pagina() {
    return <Contador />
}