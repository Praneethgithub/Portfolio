import styles from './App.module.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero />
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App