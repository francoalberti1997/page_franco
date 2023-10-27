import React, { useEffect, useState } from 'react'
import img from "../nav/engineer.jpg"
import img2 from "../nav/goku_kid.jpg"
import api_card from './api_cards'
import Modals from './modals/Modals'



const Cards = () => {

    const [campos, setcampos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://codealberti1997.pythonanywhere.com/api/campo/')
        .then((response) => {p
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
        })
        .then((data) => {
            setcampos(data);
        // console.log(data); // Log the response to the console
        })
        .catch((err) => {
        setError(err.message);
        });
    }, []);


    return (
        <div>
        <h2 id='skills' className='text-center bg-violet-100 h-10 py-2'>
            Skills
        </h2>
        <div className='flex justify-center flex-wrap h-full items-center gap-20 py-40'>
          {campos.map((item) => (
            <Modals titulo={item.nombre} imagen={item.imagen}/>
          ))}

        </div>
        </div>
      )
}
export default Cards
