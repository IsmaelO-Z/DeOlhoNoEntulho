const formulario = document.querySelector("#denunciaForm")
formulario.addEventListener('submit', cadastrar)

function cadastrar(event){
    event.preventDefault();

    const form = new FormData(event.target);

    relato = {
        local: form.get('local'),
        descricao: form.get('descricao')
    }

    fetch( 'http://localhost:8080/relato', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(relato)
    })
    .then( resposta => {
    console.log('Resposta do servidor: ', resposta);
        if(resposta.ok)
            mostrar()
        })
    .catch( erro => 
        console.error('Deu ruim: ', erro)
    )
}

    function mostrar(){
    fetch('http://localhost:8080/relato')
    .then( resposta => resposta.json())
    .then( relato => {
        console.log(relato)    
    })
    .catch( erro => 
        console.error('Deu ruim: ', erro)
    )
}


mostrar()