function ejemplo(){
    let saludo = 'Eduardo'
    let nombre2 = 'Carlos'

    return (<>
        <div>
            Hola {saludo}, {nombre2}
        </div>
        <div>{nombre2}</div>
        {MiInput(saludo)}
    </>)
}

function MiInput(etiqueta){
    return <label> {etiqueta}
        <input type="text" />
    </label>
}
