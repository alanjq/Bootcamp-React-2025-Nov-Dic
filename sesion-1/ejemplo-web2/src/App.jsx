import './App.css'

export default function App() {
  let titulo = "App React"
  let nombre = "Alan"
  let cssClass = "active-form componente-saludo"
  
  return (
    <section className={`form ${cssClass}`}>
      <h1>{titulo}</h1>
    </section>
  )
}
