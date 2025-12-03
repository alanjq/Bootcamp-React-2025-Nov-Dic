import { useEffect, useState } from "react"

export default function TextField({ label, placeholder, onChange, onError }) {
    const [mensaje, setMensaje] = useState(null)
    const [error, setError] = useState(false)
    const [texto, setTexto] = useState('')

    const handleTextInput = ({ target }) => {
        let valor = target.value
        setTexto(valor)
    }

    useEffect(() => {
        if (texto == '') {
            // Si estado esta vacío
            setError(true)
            setMensaje("Es campo es requerido.")
        }else if(texto.trim() == ''){
            setError(true)
            setMensaje("No se aceptan espacios en blanco.")
        } else {
            // Si no esta vacío
            setError(false)
            setMensaje("")
        }

        // Llamamos a la función onChange y le enviamos el valor nuevo
        if(onChange){
            onChange(texto)
        }
    }, [texto])

    useEffect(()=>{
        if(onError){
            onError(error, mensaje)
        }
    }, [error, mensaje])


    return (
        <div>
            <label>{label}</label>
            <input type="text" placeholder={placeholder} defaultValue={texto} onInput={handleTextInput} />
            {error && <label>{mensaje}</label>}
        </div>
    )
}
