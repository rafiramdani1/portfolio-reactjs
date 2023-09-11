import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <div className='container font-url'>
        <Header />
        <Home />
        <About />
        <Skills />
        <Portfolio />
      </div>
      <Footer />
    </>
  )
}

export default App
