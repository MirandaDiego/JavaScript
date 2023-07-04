async function InserirPosts(){
    document.getElementById("posts").innerHTML = "carregando...";

    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo de teste',
            userID: 1
        }),
        headers: {
            'Content-type': 'application/json'
        }



    });

    let json = await req.json();

    console.log(json)

}