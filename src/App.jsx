import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Events from "./Pages/Events/Events"
import EventDetail from "./Pages/EventDetail/EventDetail"
import EventCreate from "./Pages/EventCreate/EventCreate"
import Menu from "./Components/Menu"
import { GlobalStyles } from "./GlobalStyle"
import Compra from "./Pages/Compra/Compra"
import Cadastro from "./Pages/Cadastro/Cadastro"

function App() {

  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/events/:id" element={<EventDetail/>}></Route>
        <Route path="/create-event" element={<EventCreate/>}></Route>
        <Route path="/compra/:id" element={<Compra/>}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
      </Routes>
    </BrowserRouter>    

    </>
  )
}

export default App
