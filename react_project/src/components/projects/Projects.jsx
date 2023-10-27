import React, { useState, useEffect } from 'react'
import img from "../nav/goku_kid.jpg"
import bye from "../projects/goku_bye.jpg"
import {logMovies} from "../projects/projects_post"

const Projects = () => {


  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [motivo, setMotivo] = useState("");
  const [telefono, settelefono] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://codealberti1997.pythonanywhere.com//api/get-csrf-token/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);
        // console.log(data); // Log the response to the console
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
 
  const token = movies.csrfToken;
  console.log(token);

const handleSubmit = async (e) => {  

};

  
  return (
    <div className='my-20 flex items-center justify-center'>
      {formSubmitted ? ( <div className='h-screen flex items-center justify-center'>
          <div className='bg-[#333] flex rounded-lg w-1/2 font-latoRegular flex'>
          <div className='flex-1 text-gray-100 p-20'>
                <h1 className='text-3xl pb-2 font-latoBold'>
                  ¡Listo! 🗽
                </h1>
                <h2 className='text-lg text-gray-200'>
                  Me contactaré contigo. Gracias por escribir. 
                </h2>
            </div>

            <div className='relative flex-1'>
              <img src={bye} alt="" className='object-cover rounded-lg w-full h-full' />
            </div>        
          </div>
        </div>
      ) :

        <form action="" className='bg-[#333] flex rounded-lg w-1/2 font-latoRegular flex'  onSubmit={handleSubmit} method='POST'>
          <input type="hidden" name="csrfmiddlewaretoken" value={token}/>
            <div className='flex-1 text-gray-100 p-20'>
                <h1 className='text-3xl pb-2 font-latoBold'>
                  Let´s get started 👋
                </h1>
                <p className='text-lg text-gray-200'>
                  Join Our Team to start working
                  You gonna love it
                </p>
                <div className='mt-6'>

                {/* Name Input */}
                <div className='pb-4'>
                <label className="block text-sm pb-2" htmlFor="name"  >Name</label>
                <input className='border-2 border-gray-200 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 text-black' 
                value={name} type="text" name='nombre' required placeholder='Enter your name'
                onChange={(e) => setName(e.target.value)}
                />
                </div>
                {/* Surname */}
                <div className='pb-4'>
                <label className="block text-sm pb-2 text-gray-200" htmlFor="surname" >surname</label>
                <input value={surname} type="text" name='surname' onChange={(e) => setSurname(e.target.value)}
                className='border-2 border-gray-200 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 text-black' required placeholder='Enter your surname'/>
                </div>
                
                {/* Email */}
                <div className='pb-4'>
                <label className="block text-sm pb-2 "  htmlFor="email">Email</label>
                <input value={email} required onChange={(e) => setEmail(e.target.value)} className='border-2 border-gray-200 p-2 rounded-md w-1/2 focus:border-teal-500 text-black' type="email" name='email' placeholder='Enter your email'/>
                </div>
                
                {/* motivo */}
                <div className='pb-4'>
                <label className="block text-sm pb-2 text-gray-100" htmlFor="motivo">motivo</label>
                <select value={motivo} required  name="motivo" id="motivo" onChange={(e) => setMotivo(e.target.value)} className='border-2 border-gray-200 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 text-black'>
                  <option value="1">Quiero aplicar para un puesto de trabajo</option>
                  <option value="2">Quiero iniciar un nuevo negocio contigo</option>
                  <option value="3">Quiero contratar tus servicios</option>
                </select>
                </div>

                <div className='pb-4'>
                <label className="block text-sm pb-2 " htmlFor="telefono">Teléfono</label>
                <input value={telefono} onChange={(e) => settelefono(e.target.value)} required pattern="[0-9]*" className='border-2 border-gray-200 p-2 rounded-md w-1/2 focus:border-teal-500 text-black' type="tel" name='telefono' placeholder='Ingrese su nro de teléfono'/>
                </div>

                
                <div className='flex items-center gap-2'>
                  <input type="checkbox" name="terms" id="" value="checked" 
                  className='h-5 w-5 text-teal-500 border-2 focus:border-teal-500' required/>
                  <p className='text-sm font-latobold text-gray-200' >Acepto que se contacten conmigo</p>
                </div>
                </div>

                <div>
                  <button type='submit' className='bg-[#64A43A] font-latobold text-sm text-white py-3 mt-6 w-full rounded-lg' >
                    Start Now
                  </button>
                </div>
            </div>

            <div className='relative flex-1'>
              <img src={img} alt="" fill className='object-cover rounded-lg'/>
            </div>
        </form>}
    </div>
  )
}

export default Projects
