// Mi primer componente
export function TodosLosComponentes(){
    return <div>
        <Saludo />
        <OtroComponente />
        <Algo />
    </div>
}

export default function Saludo({ quien, children }) {
    return <h2 className="componente-saludo">Hola {quien} desde React.js {children}</h2>
}

export function OtroComponente(){
    return <div>Este es otro componente no default</div>
}

export function Algo(){
    return <div>ok</div>
}
