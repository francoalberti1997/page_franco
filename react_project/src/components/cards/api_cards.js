async function api_card() {
    const response = await fetch("http://127.0.0.1:8000/api/proyecto/");
    const movies = await response.json();
    console.log(movies);
    return(movies)
}

export default{
    api_card,
}
