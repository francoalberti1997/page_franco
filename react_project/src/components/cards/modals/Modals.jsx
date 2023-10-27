import React, { useEffect, useState } from "react";
import "../modals/modals.css";
import img1 from '../../nav/engineer.jpg'
import img2 from '../../nav/goku_kid.jpg'


export default function Modal(props) {
  const [modal, setModal] = useState(false);


  const [habilidad, sethabilidad] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
  // Fetch data when the component mounts
  fetch(`http://127.0.0.1:8000/api/habilidad/${props.titulo}/`)
      .then((response) => {
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
      })
      .then((data) => {
        sethabilidad(data);
      // console.log(data); // Log the response to the console
      })
      .catch((err) => {
      setError(err.message);
      });
  }, []);



  const toggleModal = () => {
    setModal(!modal);
  };

  const html = document.documentElement;

  // Agregar o eliminar la clase 'active-modal' en el elemento raíz
  if (modal) {
    html.style.overflowY = 'hidden';
  } else {
    html.style.overflowY = 'auto';
  }

  return (
    <>
        <div className='text-center shadow-lg p-10 rounded-xl mx-100 w-1/3 my-25 flex justify-center flex-col items-center cursor-pointer hover:bg-blue-100 transition-color-transition-duration-900' style={{ width: '20%', height: '20%' }} onClick={toggleModal}>
            <div className='h-50 w-50'>
                <img src={props.imagen} alt="no cargo" className='py-6' style={{ width: '300px', height: '300px' }} />
                {/* <img src={img1} alt="no cargo" className='py-6' style={{ width: '300px', height: '300px' }} /> */}
            </div>
            <h3 className=''>
            {props.titulo}
            {/* Metalurgia */}
            </h3>
        </div>

      {modal && (
        <div className="modal z-50 relative">
          <div onClick={toggleModal} className="overlay"></div>

          <div className="modal-content">
          
           {habilidad.map((item) => (
                <div className="modal-content-div">
                <h2>{item.campo}</h2>
                <p>
                    {/* aca ingresar el titulo de la imagen */}
                {item.nombre}
                </p>
                    {/* aca ingresar la imagen */}
                <img src={item.imagen} alt="no cargo" className='py-6' style={{ width: '300px', height: '300px' }} />
                </div>
          ))}
            
      
            <button className="close-modal bg-blue-100 rounded-lg p-5" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}