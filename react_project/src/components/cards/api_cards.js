async function api_card() {
    const response = await fetch("https://codealberti1997.pythonanywhere.com/api/proyecto/");
    const movies = await response.json();
    console.log(movies);
    return(movies)
}

export default{
    api_card,
}
