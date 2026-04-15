import './App.css'
import Funcionalidades from './components/Funcionalidades/funcionalidades'
import Hero from './components/Hero/Hero'
import Navbar from './components/NavBar/Navbar'
import Sobre from './components/Sobre/Sobre'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Funcionalidades />
    </>
  )
}

export default App