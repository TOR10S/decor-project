import { Routes, Route } from "react-router-dom";
import './App.css'
import MainPage from "./pages/MainPage/MainPage";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
function App() {

  return (
    <div>
      <HeaderSection/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/gallery" element={<LibraryPage/>} />
      </Routes>
    </div>
  )
}

export default App
