import HeroSection from './sections/HeroSection/HeroSection'
import './App.css'
import HeaderSection from './sections/HeaderSection/HeaderSection'
import ChoicesSection from './sections/ChoiceSection/ChoiceSection'
import LibraryItem from './components/LibraryItem/LibraryItem'

function App() {

  return (
    <>
    <HeaderSection/>
    <main>
      <HeroSection/>
      <ChoicesSection/>
    </main>
    <LibraryItem/>
    </>
  )
}

export default App
