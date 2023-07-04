async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();
    body.append('title', 'bla bla bla');
    body.append('arquivo', arquivo);

    let req = await fetch('www.google.com.br', {
        method: 'POST',
        body: body,
        headers:{
            'content-type': 'multipart/form-data'
        }
    });
    
    
}