import { useEffect, useState } from 'react'
import './App.css'
import TextField from './TextField'

function App() {
  // estado de un componente
  const [count, setCount] = useState(0)

  const [conteo, setConteo] = useState(0)

  const clicDelBoton = () => {
    console.log('Hiciste clic al botón')
    setConteo(conteo+1)
  }

  const inputChange = (nuevoValor) => {
    console.log("El input envia este valor nuevo:", nuevoValor)
  }

  // Mostramos si hay o no un error en el componente TextField
  const errorHandlerInput = (hayError, mensaje)=> {
    if(hayError){
      console.error(":INPUT:", mensaje)
    }else{
      console.info(":INPUT:", mensaje)
    }
  }

  // Cuando cambie la variable 'conteo'
  useEffect(()=>{
    console.log('la variable conteo cambió', conteo)
    if(conteo == 5){
      setCount(conteo+count)
    }
  }, [conteo])

  return (
    <>
      <h1>Eventos en React</h1>
      
      <TextField label="Ingresa el mes" placeholder="Octubre" onChange={inputChange} onError={errorHandlerInput} />

      <div className="card">
        <button onClick={clicDelBoton} >
          Haz hecho clic {conteo} veces
        </button>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
