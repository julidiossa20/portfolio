import './App.css'

function App() {

  return (
    <>
      <header className='header'>
        <h1 className='logo'>Juliana</h1>

        <nav className='navegation'>
          <a href='#about'>Sobre mi</a>
          <a href='#projects'>Proyectos</a>
          <a href='#contact'>Contacto</a>
        </nav>
      </header>

      <main>
        <section>
          <h2>Sobre mi</h2>
          <p>
            Soy desarrolladora web en formación especializada en React,
            enfocada en crear aplicaciones SPA con componentes reutilizables y
            código limpio.
          </p>
        </section>

        <section id='projects'>
          <h2>Proyectos</h2>
          <p>
            <ul>
              <li>Perros</li>
              <li>portafolio</li>
            </ul>
          </p>
        </section>

        <section id='contact'>
          <h2>Contacto</h2>
          <ul>
            <li>correo:</li>
            <li>telefono:</li>
          </ul>

        </section>
      </main>
    </>
  )
}

export default App
